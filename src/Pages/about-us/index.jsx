import React, { Suspense, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../components/Header'
import Datas from '../../data/about-us/about-us.json'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Styless from './style/about'
import Footer from '../../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Companies from '../../components/Companies'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const data = await fetch(
    'https://shooliniuniversity.com/media/GetAbouUSAPI',
    {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', type: 'aboutus', id: 74 }),
    },
  ).then((response) => response.json())

  return {
    props: {
      aboutdata: data?.success[0],
    },
  }
}

const About = (props) => {



  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    document.body.setAttribute('pageId', 74)
    window.scrollTo(0, 0)
    return () => {
      document.body.removeAttribute('pageId')
    }
  }, [])

  let result_about = props?.aboutdata

  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Head>
        <title>About Us | Shoolini University</title>
        <meta name="description" content={result_about?.seo_description}  />
        <meta name="keywords" content={result_about?.seo_keywords} />
      </Head>
      
      <Styles>
        <Styless>
          {/* Main Wrapper */}
          <div className="main-wrapper about-page">
            {/* Header 2 */}
            <Header />

            {/* Breadcroumb */}
            <BreadcrumbBox title="About Us" />

            <Styles>
              {/* About Us */}
              <section className="about-us">
                <Container>
                  <Row>
                    <Col md="12">
                      <div className="cuCourse">
                        <div data-aos="fade-right" className="section-title">
                          <h4> {result_about?.title} </h4>
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
                                alt="about-img"
                                loading="lazy"
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
                              <p data-aos="fade-right" className="about-para">
                                {/* {removeHTML(data?.content)
                                    .split('\n')
                                    .map((content, i) => ( */}
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: result_about?.content,
                                  }}
                                ></span>
                                {/* ))} */}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <div className="GalleryView mt-5">
                  <Companies />
                </div>
              </section>
            </Styles>

            <Footer />
          </div>
        </Styless>
      </Styles>
    </Suspense>
  )
}

export default About
