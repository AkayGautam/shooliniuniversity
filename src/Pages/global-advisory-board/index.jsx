import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Styless from './style'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import SearchResearcher from '../../components/SearchResearcher'
import SuspenseBounday from '../../helper/SuspenseBoundary'
import Head from 'next/head'
import Script from 'next/script'
import Link from "next/link"

export const getServerSideProps = async () => {
  const data = await fetch(
    'https://shooliniuniversity.com/media/GetgenericTempAPI',
    {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', type: 'graduate', id: 298 }),
    },
  ).then((response) => response.json())

  return {
    props: {
      advisoryData: data.success[0],
      gallery: JSON.parse(data.success[0].gallery),
    },
  }
}

const GlobalAdvisoryBoard = ({ advisoryData, gallery }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)


    document.body.setAttribute('pageId', 298)
    return () => {
      document.body.removeAttribute('pageId')
    }
  }, [])

  return (
    <SuspenseBounday>
      <Head>
        <title>{advisoryData?.title}</title>
        <meta name="description" content={advisoryData?.seo_description} />
        <meta name="keywords" content={advisoryData?.seo_keywords} />
      </Head>
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
                  <Col md="8">
                    <div className="cuCourse">
                      <div data-aos="fade-right" className="section-title">
                        <h3>{advisoryData?.title} </h3>
                      </div>

                      <Row>
                        {gallery &&
                          gallery.map((gallery, index) => {
                            if (gallery.title) {
                              return (
                                <Col className="frfrfrfr" md={4} key={index}>
                                  <Card>
                                   <div className="gradImage">  <Card.Img
                                      variant="top"
                                      src={gallery?.image_url}
                                    />
                                    </div>
                                    <Card.Body>
                                      <Card.Title>
                                        
                                      <Link href={`/${gallery?.link_url}`}>  {gallery?.title} </Link> </Card.Title>
                                    </Card.Body>
                                  </Card>
                                </Col>
                              )
                            }
                          })}
                      </Row>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="sideBarNew">
                      <SearchResearcher />
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
    </SuspenseBounday>
  )
}

export default GlobalAdvisoryBoard
