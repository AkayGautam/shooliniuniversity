import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Card as Cards,
  Button,
  Table,
} from 'react-bootstrap'
import { BreadcrumbBox } from './common/Breadcrumb'
import { Styless } from './common/styles/FacultyOfAgriculture'
import Link from 'next/link'
import SearchResearcher from './SearchResearcher'
import AdmissionFormSidebar from './AdmissionFormSidebar'
import { resetMetaTags, setMetaTags } from '../helper/setMetaTags'
import Image from "next/legacy/image";


const BASE_URI = 'https://shooliniuniversity.com/media'

const Faculty = ({ id }) => {
  const [Data, setData] = useState({})
  const [Gallery, setGallery] = useState([])
  const [Numbers, setNumbers] = useState([])
  const [facId, seTfacId] = useState([])
  const [facD, setFacD] = useState([])
  const [showTable, setShowTable] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [facList, setFacList] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  useEffect(() => {
    document.body.setAttribute('pageId', id)
    fetch(`${BASE_URI}/Stream2API`, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        auth: 'shoolini@999',
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((res) => { 
        if (res) {
          setData(res?.success[0])

          setMetaTags(res?.success[0])
          if (res?.success[0]?.gallery) {
            setGallery(JSON.parse(res?.success[0]?.gallery))
          }
          if (res?.success[0]?.numbers) {
            setNumbers(JSON.parse(res?.success[0]?.numbers))
          }
          setFacList(res?.success.facultylistdetails)
          if (res?.success?.facultydetail) {
            setFacD(res?.success?.facultydetail)
            setIsLoading(false)
          }
        }
      })

    return () => {
      document.title = 'Shoolini University'
      resetMetaTags()
      document.body.removeAttribute('pageId')
    }
  }, [id])

  return (
    <div className="main-wrapper course-details-page">
      {/* Header 2 */}
      <Header />

      {/* Breadcroumb */}
      <BreadcrumbBox title={Data?.title} />
      <Styless>
        <section className="course-details-area our-webcoderskull">

          
          <Container>
            {!isLoading ? (
              <Row>
                <Col lg="8" md="8" sm="12">
                  <div className="course-details-top">
                    <div className="heading">
                      {/* <h4>{Data?.title}</h4> */}
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: Data?.content,
                      }}
                    ></div>

                    <div className="gallery p-0">
                      <ul className="row">
                        {Data?.gallery &&
                          Gallery.map((row, idx) => (
                            <li md={4} sm={12} key={idx}>
                              <div className="cnt-block equal-hight">
                                <figure>
                                <Image width={144} height={180}
                                    src={row?.image_url}
                                    className="img-responsive"
                                    alt=""
                                  />
                                </figure>
                                <h3>
                                  <a href="#">{row?.title}</a>
                                </h3>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {facD.length > 0 && (
                      <div className="row">
                        {facD.map((i, idx) => {
                          return (
                            <div className="col-md-3 mb-3 col-sm-6" key={idx}>
                              <div className="cnt-block equal-hight">
                                <figure>
                                <Image width={144} height={180}
                                    src={i.imageurl}
                                    className="img-responsive"
                                    alt=""
                                  />
                                </figure>
                                <h3>
                                  <Link
                                    href={`/faculty/profile/${i.title
                                      .split(' ')
                                      .join('-')}`}
                                    state={{ id: i.id }}
                                  >
                                    {i.title}
                                  </Link>
                                </h3>

                                <p> {i.designation} </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}

                    {Data?.why_enroll && (
                      <div className="whyEnroll mb-4">
                        <h4>Why Enroll?</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: Data?.why_enroll,
                          }}
                        ></p>
                      </div>
                    )}

                    <div className="faculty_intro mb-4">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: Data?.faculty_intro,
                        }}
                      ></p>
                    </div>

                    <div>
                      <button
                        className="btn btn-primary mb-4"
                        onClick={() => setShowTable(!showTable)}
                      >
                        Show Faculty Members
                      </button>
                      <Table
                        className="tablePro"
                        striped
                        bordered
                        hover
                        style={{ display: `${!showTable ? 'none' : 'table'}` }}
                      >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Profile</th>
                          </tr>
                        </thead>
                        <tbody>
                          {facList &&
                            facList.map((i, idx) => {
                              return (
                                <tr key={idx}>
                                  <td>{i.name}</td>
                                  <td>{i.designation}</td>
                                  <td>
                                    <Link
                                      href={`/faculty/profile/${i.name
                                        .split(' ')
                                        .join('-')}`}
                                      state={{ id: i.id }}
                                    >
                                      View Profile
                                    </Link>
                                  </td>
                                </tr>
                              )
                            })}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <div className="single-details-sidbar">
                    <SearchResearcher />

                    {Data?.videourl && (
                      <Row>
                        <Col md="12">
                          <div className="course-details-feature">
                            <h5 className="title">
                              {' '}
                              <i className="las la-globe"></i> Watch more
                            </h5>

                            <div className="sideBars">
                              <iframe
                                style={{ width: '100%' }}
                                //   style="width:100%;"
                                src={Data?.videourl}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="ss"
                              ></iframe>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    )}

                    <AdmissionFormSidebar />
                  </div>
                </Col>
              </Row>
            ) : (
              <h1>Please Wait Loading...</h1>
            )}
          </Container>
        </section>
      </Styless>

      {/* Footer 2 */}
      <Footer />
    </div>
  )
}

export default Faculty
