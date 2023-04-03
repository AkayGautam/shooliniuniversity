import React, { Component, useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Styless } from './GlobalAdvisory-Board'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const GlobalAdvisoryBoard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [missiondata, setMissiondata] = useState([])
  const [Gallery, setGallery] = useState([])

  var result_missiondata = []

  useEffect(() => {
    fetch('https://shooliniuniversity.com/GetgenericTempAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', type: 'graduate', id: 298 }),
    })
      .then((response) => response.json())
      .then((res) => {
        setMissiondata(res)
        setGallery(JSON.parse(res?.success[0]?.gallery))
      })
  }, [])

  result_missiondata = missiondata?.success

  console.log(result_missiondata, 'vision')

  var s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = 'https://widgets.nopaperforms.com/emwgts.js'
  document.body.appendChild(s)

  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="GLOBAL ADVISORY BOARD" />

          <Styless>
            <section className="about-us">
              <Container>
                <Row>
                  <Col md="9">
                    {result_missiondata?.map((data, index) => (
                      <div className="cuCourse" key={index}>
                        <div data-aos="fade-right" className="section-title">
                          <h3>{data?.title} </h3>
                        </div>

                        <Row>
                          {Gallery &&
                            Gallery.map((gallery, index) => {
                              if (gallery.title) {
                                return (
                                  <Col md={4} key={index}>
                                    <Card>
                                      <Card.Img
                                        variant="top"
                                        src={gallery?.image_url}
                                      />
                                      <Card.Body>
                                        <Card.Title>
                                          {gallery?.title}
                                        </Card.Title>
                                      </Card.Body>
                                    </Card>
                                  </Col>
                                )
                              }
                            })}
                        </Row>
                      </div>
                    ))}
                  </Col>
                  <Col md="3">
                    <div className="sideBarNew">
                      <div className="enqForm">
                        <div
                          className="npf_wgts"
                          data-height="550px"
                          data-w="7d1b402b547afa4d6a10968170a856b6"
                        ></div>
                      </div>
                    </div>
                  </Col>
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

export default GlobalAdvisoryBoard
