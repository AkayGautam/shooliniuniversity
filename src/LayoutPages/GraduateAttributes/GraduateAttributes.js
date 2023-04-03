import React, { Component, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Styless } from './graduate-attributes'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import SearchResearcher from '../../components/SearchResearcher'
import { resetMetaTags, setMetaTags } from '../../helper/setMetaTags'
const GraduateAttributes = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [missiondata, setMissiondata] = useState([])

  var result_missiondata = []

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.setAttribute('pageId', 297)
    fetch('https://shooliniuniversity.com/media/GetGraduateAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', type: 'graduate', id: 297 }),
    })
      .then((response) => response.json())
      .then((res) => {
        setMissiondata(res)
        setMetaTags(res.success[0])
      })
    return () => {
      resetMetaTags()
      document.body.removeAttribute('pageId')
    }
  }, [])

  result_missiondata = missiondata?.success


  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="Graduate Attribute" />

          <Styless>
            <section className="about-us">
              <Container>
                <Row>
                  <Col md="8">
                    {result_missiondata?.map((data, index) => (
                      <div className="cuCourse" key={index}>
                        <div data-aos="fade-right" className="section-title">
                          <h3>{data?.title} </h3>
                        </div>

                        <Row>
                          <Col md="12">
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
                    ))}
                  </Col>
                  <Col md="4">
                    <div className="sideBarNew">
                      <SearchResearcher />
                      <div className="enqForm">
                       
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

export default GraduateAttributes
