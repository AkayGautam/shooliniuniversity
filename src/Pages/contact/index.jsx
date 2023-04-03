import React, { Suspense, useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Styles from './style/contact'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import Footer from '../../components/Footer'
import Head from 'next/head'
import SearchResearcher from '../../components/SearchResearcher'



const index = () => {

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
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
            <title>Contact Us | Shoolini University</title>
            <meta name="description" content="Contact Shoolini University for admission, research, academics, or international admission inquiries by simply filling up a form. Find out the details now!" />
            <meta name="keywords" content="Contact Us | Shoolini University" />
          </Head>
          <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper visionmission-page">
              {/* Header 2 */}
              <Header />
    
              {/* Breadcroumb */}
              <BreadcrumbBox title="Contact Us" />
    
            <section>
                <div className="container">
                    <div className="row">
                        <Col  md="8">
                        <div class="acddress">
                                <h1>Contact</h1>
                                <p>Thank you for your interest in contacting us at shooliniuniversity.com. This form will allow you to submit a message directly to the concerned department at the university. To use this form enter your contact information and your message. If you wish for us to answer you via e-mail, please be sure to provide us with a correct return e-mail address.</p>
                            </div>
                       
                        <Row className="mb-5">
                            <Col md="4">
                                <div className="custCard">
                                    <Card>
                                  <h3> CITY ADDRESS </h3> 
                                   <p>  SILB, The Mall, <br />
                                    Solan - 173212 HP </p> 
                                    </Card>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="custCard">
                                    <Card>
                                  <h3> ADDRESS  </h3> 
                                   <p> Solan-Oachghat-Kumarhatti Highway, <br />
Bajhol, Himachal Pradesh 173229P </p> 
                                    </Card>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="custCard">
                                    <Card>
                                  <h3> MAILING ADDRESS </h3> 
                                   <p> Post Box 9, Head Post Office, <br />
The Mall, Solan. 173212 HP </p> 
                                    </Card>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6">
                            <div className="cj-column cj-is-6-fullhd cj-is-6-widescreen cj-is-6-desktop cj-is-12-tablet cj-is-12-mobile">
                                                                                                                                    <div className="cj-mb-10">
                                                    <h4>FOR RESEARCH ENQUIRIES:</h4>
                                              
                                                    <span><i className="cj-color-primary fa fa-envelope cj-mr-5"></i> directorresearch@shooliniuniversity.com</span>
                                                </div>
                                                                                                                                                                                <div className="cj-mb-10">
                                                    <b>FOR ADMISSION ENQUIRIES:</b>
                                                    <br />
                                                    <span><i className="cj-color-primary fa fa-envelope cj-mr-5"></i> admissions@shooliniuniversity.com</span>
                                                </div>
                                                                                                                                                                                <div className="cj-mb-10">
                                                    <b>FOR ACADEMICS ENQUIRIES:</b>
                                                    <br />
                                                    <span><i className="cj-color-primary fa fa-envelope cj-mr-5"></i> deanacademics@shooliniuniversity.com</span>
                                                </div>
                                                                                                                                                                                <div className="cj-mb-10">
                                                    <b>FOR INTERNATIONAL ADMISSION ENQUIRIES:</b>
                                                    <br />
                                                    <span><i className="cj-color-primary fa fa-envelope cj-mr-5"></i> oia@shooliniuniversity.com</span>
                                                </div>
                                                                                                                                                                                <div className="cj-mb-10">
                                                    <b>FOR IT ENQUIRIES:</b>
                                                    <br />
                                                    <span><i className="cj-color-primary fa fa-envelope cj-mr-5"></i> dit@shooliniuniversity.com</span>
                                                </div>
                                                                                                                                                                                <div className="cj-mb-10">
                                                    <b>FOR JOB ENQUIRIES:</b>
                                                    <br />
                                                    <span><i className="cj-color-primary fa fa-envelope cj-mr-5"></i> hr@shooliniuniversity.com</span>
                                                </div>
                                                                                                                        </div>
                            </Col>
                            <Col md="6">
                            <div className="cj-column cj-is-6-fullhd cj-is-6-widescreen cj-is-6-desktop cj-is-12-tablet cj-is-12-mobile">
                                                                                                                                    <div className="cj-mb-10">
                                                    <h4>ADMISSIONS NO:</h4>
                                             
                                                    <span><i className="cj-color-primary fa fa-phone cj-mr-5"></i> 7018007000</span>
                                                </div>
                                                                                                                                                                                <div className="cj-mb-10">
                                                    <b>ACCOUNTS/ FEE:</b>
                                                    <br />
                                                    <span><i className="cj-color-primary fa fa-phone cj-mr-5"></i> 01792-352002, +91 9736745800</span>
                                                </div>
                                                                                                                                                                                <div className="cj-mb-10">
                                                    <b>RECEPTION NO:</b>
                                                    <br />
                                                    <span><i className="cj-color-primary fa fa-phone cj-mr-5"></i> 01792-350000/ 7807899712</span>
                                                </div>
                                                                                                                                                                                <div className="cj-mb-10">
                                                    <b>FOR RESEARCH ENQUIRIES:</b>
                                                    <br />
                                                    <span><i className="cj-color-primary fa fa-phone cj-mr-5"></i> directorresearch@shooliniuniversity.com</span>
                                                </div>
                                      
                                                <div className="cj-mb-10">
                                                    <h4>FOR PLACEMENT OFFICE ENQUIRIES</h4>
                                                   <span> Dr. Nitin Gupta : 8628810506 </span>  <br />
                                                    <span><i className="cj-color-primary fa fa-envelope cj-mr-5"></i> nitingupta@shooliniuniversity.com</span>
                                                </div>
                                                                                                                                                                                                                                                                                                          </div>
                            </Col>
                        </Row>
                        </Col> 

                        <Col md="4">
                        <div className="sidebar-content mt-5">
                    <SearchResearcher />

                    <div className="sideBarNew">
                    
 <div className="enqForm">
 <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>

                       
                        
           

                      </div>
                    </div>
                  </div>
                        </Col>
                    </div>
                </div>

                <div className="mt-5 iframes">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13699.177242997901!2d77.1183538!3d30.8644333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6d5230f107c2117a!2sShoolini+University!5e0!3m2!1sen!2sin!4v1553939344345!5m2!1sen!2sin" width="100%" height="450" frameborder="0"  allowfullscreen></iframe>

                <iframe src="https://www.google.com/maps/embed?pb=!4v1553939411219!6m8!1m7!1sCAoSLEFGMVFpcE94NEVOQlk4X1VvS3VSV3E5NHpza1lKV0l0OVFpbFBsekhRcmFS!2m2!1d30.86433053678909!2d77.1187705625249!3f226.5!4f0!5f0.7820865974627469" width="100%" height="450" frameborder="0"  allowfullscreen></iframe>

                </div>
            </section>
    
                <Footer />
       
            </div>
          </Styles>
        </Suspense>
      )
    
}

export default index