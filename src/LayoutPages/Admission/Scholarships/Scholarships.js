import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import BreadcrumbBox from '../../../components/common/Breadcrumb'
import { Styles } from '../../../components/common/styles/header'
import { Styless } from './style/scholarships'
import Footer from '../../../components/Footer'
import { Container } from 'react-bootstrap'
import SearchResearcher from '../../../components/SearchResearcher'
import QuickLinks from '../../../components/QuickLinks'

const Scholarships = ({ id }) => {
  var s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = 'https://widgets.nopaperforms.com/emwgts.js'
  document.body.appendChild(s)

  const [Data, setData] = useState({})

  useEffect(() => {
    try {
      fetch(`https://shooliniuniversity.com/media/GetgenericTempAPI`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: JSON.stringify({ auth: 'shoolini@999', id }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success.length > 0) {
            setData(res.success[0])
          }
        })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="kkkk" />
          <Styless>
            <section className="admidsionProcess my-5 pt-3 ">
              <div className="about__area about__area_one p-relative pt---100 pb---120 mb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="section-title olList">
                        {/* <h4>About Us</h4> */}
                        <h3>{Data?.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: Data?.content,
                          }}
                        ></p>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      {/* <div className="about__image">
                        <img src="assets/images/ab.png" alt="About" />
                        <img
                          className="react__shape__ab"
                          src="assets/images/badge.png"
                          alt="Shape Image"
                        />
                      </div> */}

                      <div className="sidebar-content">
                        <SearchResearcher />

                        <div className="sideBarNew">
                          <div className="enqForm">
                            <div
                              className="npf_wgts"
                              data-height="450px"
                              data-w="7d1b402b547afa4d6a10968170a856b6"
                            ></div>
                          </div>
                        </div>

                        <QuickLinks />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <Container>
                <Row>
                  <Col md="6">
                    <div className="about-image position-relative">
                      <img
                        src="assets/images/about-2.jpg"
                        className="main-img"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="about-content">
                      <div className="section-title">
                        <h3>All the best! </h3>
                      </div>
                      <ul className="list-unstyled check-list">
                        <li>
                          <i className="fa fa-check"></i>Start the application
                          process. Complete an Online Form here and pay the
                          application fee.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Once we receive the
                          application, our admission team will contact you to
                          apprise you of the eligibility criteria for your
                          course. All courses have different eligibility
                          criteria. Some courses have exams, others have
                          interviews or some have regulatory requirements.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Admissions for the
                          year 2022 are currently underway. You are eligible to
                          receive a firm offer of admission, even before board
                          exams, if you submit one of the following entrance
                          exam scores:{' '}
                        </li>

                        <li>
                          <i className="fa fa-check"></i>Once you meet the
                          criteria, the department sends you a letter of
                          enrollment. All students who pay the first semester
                          fee are enrolled into the course to join one of
                          India's top private universities.{' '}
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container> */}

              <Container>
                <div
                  dangerouslySetInnerHTML={{
                    __html: Data?.youtube,
                  }}
                ></div>
              </Container>
            </section>
          </Styless>

          <Footer />
        </div>
      </Styles>
    </>
  )
}

export default Scholarships
