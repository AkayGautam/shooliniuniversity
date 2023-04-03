import React, { Suspense, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Styless from './styles'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import SearchResearcher from '../../components/SearchResearcher'
import SuspenseBounday from '../../helper/SuspenseBoundary'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const data = await fetch(
    'https://shooliniuniversity.com/media/GetGraduateAPI',
    {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', type: 'graduate', id: 297 }),
    },
  ).then((response) => response.json())

  return {
    props: {
      gradeData: data?.success[0],
    },
  }
}

const GraduateAttributes = ({ gradeData }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.setAttribute('pageId', 297)
  

    var MXLandingPageId = '8b8c0c2f-5e98-11ed-a19b-0acc9d8b1d02';
    
   
 

  }, [])

  return (
    <SuspenseBounday>
      <Head>
        <title>{gradeData?.title}</title>
        <meta name="description" content={gradeData?.seo_description} />
        <meta name="keywords" content={gradeData?.seo_keywords} />
      </Head>

      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="Graduate Attributes" />

          <Styless>
            <section className="about-us">
              <Container>
                <Row>
                  <Col md="8">
                    <div className="cuCourse">
                      <div data-aos="fade-right" className="section-title">
                        <h3> {gradeData?.title} </h3>
                      </div>

                      <Row>
                        <Col md="12">
                          <div className="about-content">
                            <div
                              data-aos="fade-right"
                              dangerouslySetInnerHTML={{
                                __html: gradeData.content,
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="sideBarNew">
                      <SearchResearcher />
                      <div className="enqForm">
                           <iframe style={{width:'100%'}} name="leadsquared_landing_page_frame" src="https://shooliniuniversity.viewpage.co/Enquire-Now?ignoremxtracking=mxtrue" width="300" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
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
    </SuspenseBounday>
  )
}

export default GraduateAttributes
