import React, { Component, useEffect, useState } from 'react'
import Datas from '../../data/about-us/about-us.json'
import { Container, Row, Col } from 'react-bootstrap'
import { Styless } from './style/vission-mission'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import TabBox from '../../components/TabBox'
import Footer from '../../components/Footer'
import LogoSlider from '../../components/LogoSlider'
import Aos from 'aos'
import 'aos/dist/aos.css'
import QuickLinks from '../../components/QuickLinks'
import SearchResearcher from '../../components/SearchResearcher'
import { resetMetaTags, setMetaTags } from '../../helper/setMetaTags'

const VisionMission = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [missiondata, setMissiondata] = useState([])

  var result_missiondata = []

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.setAttribute('pageId', 79)

    fetch('https://shooliniuniversity.com/media/GetVisionAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', type: 'vision', id: 79 }),
    })
      .then((response) => response.json())
      .then((res) => {
        setMissiondata(res)
        setMetaTags(res.success[0])
      })

    return () => {
      document.title = `Shoolini University`
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
          <BreadcrumbBox title="Vision and Mission" />

          <Styless>
            <section className="about-us">
              <Container>
                <Row>
                  <Col md="8">
                    {result_missiondata?.map((data, index) => (
                      <div className="cuCourse" key={index}>
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
                    <SearchResearcher />
                    <div className="sideBarNew">
                      <div className="enqForm">
                        <div
                          className="npf_wgts"
                          data-height="500px"
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

export default VisionMission
