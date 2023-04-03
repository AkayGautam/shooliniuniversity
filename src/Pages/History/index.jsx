import React, { Component, Suspense, useEffect, useState } from 'react'
import Datas from '../../data/about-us/about-us.json'
import { Container, Row, Col } from 'react-bootstrap'
import Styless from './style/history'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const data = await fetch(
    'https://shooliniuniversity.com/media/GetHistoryAPI',
    {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', type: 'history', id: 78 }),
    },
  ).then((response) => response.json())

  return {
    props: {
      historydata: data?.success[0],
    },
  }
}

const HistoryPage = ({ historydata }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  useEffect(() => {
    document.body.setAttribute('pageId', 78)
    window.scrollTo(0, 0)
    return () => {
      document.body.removeAttribute('pageId')
    }
  }, [])

  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Head>
        <title>History | Shoolini University</title>
        <meta name="description" content={historydata?.seo_description} />
        <meta name="keywords" content={historydata?.seo_keywords} />
      </Head>

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
                  <Col md="12">
                    <div className="cuCourse">
                      <div data-aos="fade-right" className="section-title">
                        <h4> {historydata?.title} </h4>
                        <h3>A Top-Ranked University</h3>
                      </div>

                      <Row>
                        <Col md="6">
                          <div
                            data-aos="fade-right"
                            className="about-image position-relative"
                          >
                            <img
                              src={`/assets/images/${Datas.mainImage}`}
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
                                    <h3>1300+</h3>
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
                                __html: historydata.content,
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <Footer />
          </Styless>
        </div>
      </Styles>
    </Suspense>
  )
}

export default HistoryPage
