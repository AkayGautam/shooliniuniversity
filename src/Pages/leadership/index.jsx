import React, { Suspense, useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Styless from './style/leadership'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Head from 'next/head' 

export const getServerSideProps = async () => {
  const data = await fetch(
    'https://shooliniuniversity.com/media/GetLeadershipAPI',
    {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        auth: 'shoolini@999',
        type: 'leadership',
        id: '194',
      }),
    },
  ).then((response) => response.json())

  return {
    props: {
      leaderdata: data?.success[0],
      gallery: JSON.parse(data?.success[0]?.gallery),
    },
  }
}

const Leadership = ({ leaderdata, gallery }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
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
        <title>Leadership | Shoolini University</title>
        <meta name="description" content={leaderdata?.seo_description} />
        <meta name="keywords" content={leaderdata?.seo_keywords} />
      </Head>
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
                    <div className="cuCourse">
                      <div data-aos="fade-right" className="section-title">
                        <h4> {leaderdata?.title} </h4>
                        <h3>A Top-Ranked University</h3>
                      </div>

                      <Row>
                        {gallery &&
                          gallery.map((gallery, index) => {
                            if (gallery.title) {
                              return (
                                <Col md={3} className="mb-3 col-6" key={index}>
                                  <Card>
                                    <Card.Img
                                      variant="top"
                                      src={gallery?.image_url}
                                    />
                                    <Card.Body className="pb-0">
                                      <Card.Title>{gallery?.title}</Card.Title>
                                    </Card.Body>
                                  </Card>
                                </Col>
                              )
                            }
                          })}
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

export default Leadership
