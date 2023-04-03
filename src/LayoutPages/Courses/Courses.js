import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import Footer from '../../components/Footer'
import { Styles } from '../../components/common/styles/header'
import { Container, Row, Col, Card } from 'react-bootstrap'
import SearchResearcher from '../../components/SearchResearcher'
import { Styless } from './css/courses'
import SearchProgramShort from '../../components/SearchProgramShort'
import { resetMetaTags, setMetaTags } from '../../helper/setMetaTags'
import Link from 'next/link'

const Courses = ({ id }) => {
  var MXLandingPageId = '8b8c0c2f-5e98-11ed-a19b-0acc9d8b1d02';

  const [Data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([])

  const fixImg = () => {
    let arr = []
    document.querySelectorAll('img').forEach((i) => {
      if (i.src.indexOf('storage') !== -1 || i.src.indexOf('media') !== -1) {
        arr.push(i)
      }
    })
    for (let i of arr) {
      i.src = i.src.replace(
        window.location.origin,
        'https://shooliniuniversity.com/',
      )
    }
  }

  setTimeout(() => {
    fixImg()
  }, 1000)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.setAttribute('id', `pageid-${id}`)
    try {
      fetch(`https://shooliniuniversity.com/media/GetCampusAPI`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: JSON.stringify({ auth: 'shoolini@999', id }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.success[0][0])
          if (res.success.length > 0) {
            setData(res.success[0][0])
            setMetaTags(res.success[0][0])
            if (res.success[0][0].content_boxes) {
              setImages(JSON.parse(res.success[0][0].content_boxes))
              console.log(JSON.parse(res.success[0][0].content_boxes))
            } else {
              setImages([])
            }
            document.title = `${res?.success[0][0].title} | Shoolini University`
          }
        })

      return () => {
        resetMetaTags()
        document.title = `Shoolini University`
        document.body.setAttribute('id', '')
      }
    } catch (error) {
      console.error(error)
    }
  }, [id])

  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper campus-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="Courses" />
          <Styless>
            <section className="admidsionProcess my-5 pt-3 ">
              <div className="about__area about__area_one p-relative pt---100 pb---120 mb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="section-title">
                        {/* <h4>About Us</h4> */}
                        <h3>Make Your Choice </h3>

                      

                        <p
                          dangerouslySetInnerHTML={{
                            __html: Data?.content,
                          }}
                        ></p>

                        {images.length > 0 && (
                          <Row className="mb-5">
                            {images.length === 1 ? (
                              <>
                                {images.map((i, index) => (
                                  <Col key={index} md={12}>
                                    <figure class="snip1527">
                                      <div class="image">
                                        <img
                                          className="img-fluid"
                                          src={i.image_url}
                                          alt="pr-sample23"
                                        />
                                      </div>
                                      {i?.title && (
                                        <figcaption>
                                          <h3> {i?.title} </h3>
                                          <p>{i?.content}</p>
                                        </figcaption>
                                      )}
                                    </figure>
                                  </Col>
                                ))}
                              </>
                            ) : (
                              <>
                                {images.map((item, index) => {
                                  if (!item.image_url) return null
                                  return (
                                    <>
                                      {item.url ? (
                                        <Col md={6} sm={12}>
                                          <Link to={'/' + item.url}>
                                          
                                              <figure class="snip1527">
                                                <div class="image">
                                                  <img
                                                    className="img-fluid"
                                                    src={item.image_url}
                                                    alt="pr-sample23"
                                                  />
                                                </div>
                                                <figcaption>
                                                  <h3> {item?.title} </h3>
                                                  <p>{item?.content}</p>
                                                </figcaption>
                                              </figure>
                                           
                                          </Link>
                                        </Col>
                                      ) : (
                                        <Col md={6} sm={12}>
                                          <figure class="snip1527">
                                            <div class="image">
                                              <img
                                                className="img-fluid"
                                                src={item.image_url}
                                                alt="pr-sample23"
                                              />
                                            </div>
                                            <figcaption>
                                              <h3> {item?.title} </h3>
                                              <p>{item?.content}</p>
                                            </figcaption>
                                          </figure>
                                        </Col>
                                      )}
                                    </>
                                  )
                                })}
                              </>
                            )}
                          </Row>
                        )}

                        <p
                          dangerouslySetInnerHTML={{
                            __html: Data?.content_below_boxes,
                          }}
                        ></p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      {/* <div className="sidebar-content nnn">
                          <CourseSearch />
                        </div> */}

                      <div className="sideBarNew">
                        <div className="enqForm">
                        <iframe name="leadsquared_landing_page_frame" src="https://shooliniuniversity.viewpage.co/Enquire-Now?ignoremxtracking=mxtrue" width="400" height="700" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
                   
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Container>
                <div
                  dangerouslySetInnerHTML={{
                    __html: Data?.youtube,
                  }}
                ></div>
              </Container>
            </section>
          </Styless>

          <Footer />
        </div>
      </Styles>
    </>
  )
}

export default Courses
