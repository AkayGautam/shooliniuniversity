import React, { useEffect, useState } from 'react'
import Header from './Header'
import BreadcrumbBox from './common/Breadcrumb'
import Footer from './Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Styles } from '../components/common/styles/impact'
import CourseSearch from '../LayoutPages/Programmes/CourseSearch'

const ShooliniImpactDetail = () => {
  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper news-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox />

          <section className="admidsionProcess my-5 pt-3 ">
            <div className="about__area about__area_one p-relative pt---100 pb---120 mb-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="section-title">
                      {/* <h4>About Us</h4> */}
                      <h3>eee</h3>
                      <p
                          dangerouslySetInnerHTML={{
                            __html: Data?.content,
                          }}
                        ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </Styles>
    </>
  )
}

export default ShooliniImpactDetail
