import React, { Component, useEffect, useState } from 'react'
import Datas from '../../data/about-us/about-us.json'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Styless } from './style/leadership'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { resetMetaTags, setMetaTags } from '../../helper/setMetaTags'

const Leadership = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [missiondata, setMissiondata] = useState([])
  const [Gallery, setGallery] = useState([])

  var result_missiondata = []

  useEffect(() => {
    document.body.setAttribute('pageId', 194)
    fetch('https://shooliniuniversity.com/media/GetLeadershipAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({
        auth: 'shoolini@999',
        type: 'leadership',
        id: '194',
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setMissiondata(res)
        setMetaTags(res.success[0])
        // console.log(JSON.parse(res?.success[0]?.gallery))
        setGallery(JSON.parse(res?.success[0]?.gallery))
      })

    return () => {
      resetMetaTags()
      document.body.removeAttribute('pageId')
    }
  }, [])

  result_missiondata = missiondata?.success

  console.log(result_missiondata, 'vision')


  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="LEADERSHIP" />

          <Styless>
            <section className="about-us">
              <Container>
                <Row>
                  <Col md="12">
                    {result_missiondata?.map((data, index) => (
                      <div className="cuCourse" key={index}>
                        <div data-aos="fade-right" className="section-title">
                          <h4> {data?.title} </h4>
                          <h3>A Top-Ranked University</h3>
                        </div>

                        <Row>
                          {Gallery &&
                            Gallery.map((gallery, index) => {
                              if (gallery.title) {
                                return (
                                  <Col
                                    md={3}
                                    className="mb-3 col-6"
                                    key={index}
                                  >
                                    <Card>
                                      <Card.Img
                                        variant="top"
                                        src={gallery?.image_url}
                                      />
                                      <Card.Body className="pb-0">
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
                  {/* <Col md="3">
                    <div className="sideBarNew">
                      <div className="enqForm">
                        <div
                          className="npf_wgts"
                          data-height="500px"
                          data-w="7d1b402b547afa4d6a10968170a856b6"
                        ></div>
                      </div>
                    </div>
                  </Col> */}
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

export default Leadership
