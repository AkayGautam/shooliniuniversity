import React, { Component, useEffect, useState } from 'react'
import Datas from '../../data/about-us/about-us.json'
import { Container, Row, Col } from 'react-bootstrap'
import { Styless } from './style/history'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const HistoryPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [historydata, setHistorydata] = useState([])

  var result_historydata = []

  useEffect(() => {
    document.body.setAttribute('pageId', 78)

    window.scrollTo(0, 0)
    fetch('https://shooliniuniversity.com/media/GetHistoryAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', type: 'history', id: 78 }),
    })
      .then((response) => response.json())
      .then((res) => setHistorydata(res))

    return () => {
      document.body.removeAttribute('pageId')
    }
  }, [])

  result_historydata = historydata?.success

  console.log(result_historydata, 'about')

  const removeHTML = (str) => {
    var tmp = document.createElement('p')
    tmp.innerHTML = str
    return tmp.textContent || tmp.innerText || ''
  }

  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper about-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="History" />
          <Styless>
            <section className="about-us">
              <Container>
                <Row>
                  {result_historydata?.map((data, index) => (
                    <Col md="12">
                      <div className="cuCourse" key={index}>
                        <div data-aos="fade-right" className="section-title">
                          <h4> {data?.title} </h4>
                          <h3>A Top-Ranked University</h3>
                        </div>

                        <Row>
                          <Col md="6">
                            <div
                              data-aos="fade-right"
                              className="about-image position-relative"
                            >
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  `/assets/images/${Datas.mainImage}`
                                }
                                className="main-img"
                                alt=""
                              />

                              <div className="aboutHrng">
                                <Row>
                                  <Col>
                                    <div className="counter-box box1 text-center">
                                      <h3>3000+</h3>
                                      <p>Placements</p>
                                    </div>
                                  </Col>
                                  <Col>
                                    <div className="counter-box box2 text-center">
                                      <h3>250+</h3>
                                      <p>Global Alliances</p>
                                    </div>
                                  </Col>
                                  <Col>
                                    <div className="counter-box box3 text-center">
                                      <h3>1000+</h3>
                                      <p>Patents Filed</p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className="about-content">
                              <div
                                data-aos="fade-right"
                                dangerouslySetInnerHTML={{
                                  __html: data.content,
                                }}
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>

            <Footer />
          </Styless>
        </div>
      </Styles>
    </>
  )
}

export default HistoryPage
