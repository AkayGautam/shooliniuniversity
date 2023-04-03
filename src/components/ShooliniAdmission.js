/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Header from './Header'
// import HeaderOne from '../../components/HeaderOne';
import BreadcrumbBox from './common/Breadcrumb'
import { Styles } from '../components/common/styles/shooliniadmission'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import SearchProgram from './SearchProgram'
import Modal from 'react-modal'
import Image from "next/legacy/image";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const ShooliniAdmission = () => {
  var s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = 'https://widgets.nopaperforms.com/emwgts.js'
  document.body.appendChild(s)

  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Styles>
        <Header />
        <BreadcrumbBox title="Shoolini Admission" />

        <section className="admission-page my-5">
          {/* <div className="RecognitionsHeader">
                        <Container>
                            <div className="pageTitle_secnd"> <h2> Recognitions </h2> </div>
                        </Container>
                    </div> */}

          <Container>
            <Row>
              <Col md="12">
                <div className="">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="section-title">
                        <h3>SHOOLINI ADMISSION</h3>
                        <p>
                          {' '}
                          Located in the Kasauli Hills, Shoolini University is a
                          new-age university because of its cutting-edge
                          infrastructure, student-first philosophy and
                          research-based model. We aim to provide high-impact,
                          high-quality university education to students who are
                          inclined to excel in their area of study. Shoolini
                          university is UGC Approved & ISO Certified 9001:2008.
                          <br /> <br />
                          Established in the year 2009, Shoolini University has
                          made its mark in academics and research. We also boast
                          of a successful and active alumni network. Over the
                          years, Shoolini's students have seen global successes
                          in various fields. Management, Science, Commerce &
                          Arts -- all students are given opportunities for
                          placement with top MNCs & Indian companies such as
                          Unilever, HILTI, Nestle, Genpact, TATA Hitachi,
                          Oberoi, Biocon & many others!{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="admission-page whySu">
          <Container>
            <div className="about-slider-area mb-5">
              <div className="row">
                <div className="about-bg-img">
                  <div className="about-img">
                  <Image width={880} height={500} src="assets/images/Accreditations.png" alt="img" />
                  </div>
                  <div className="offset-xl-6 col-xl-6 offset-lg-6 col-lg-6 offset-md-4 col-md-8 col-sm-12">
                    <div className="about-content-area">
                      <h3>Accreditations</h3>
                      <p>
                        Shoolini University has received accreditation from
                        National Assessment and Accreditation Council (NAAC),
                        which is an autonomous body established by the
                        University Grants Commission (UGC). This makes us the
                        top 15% in India. An excellent university for research
                        in biotechnology, we have approvals from CCI, & GTU.{' '}
                        <br /> <br /> We have 104+ labs with world-class rooms,
                        lecture halls & other facilities. The School of Law has
                        approval from Bar Council of India, curriculum for
                        School of Agriculture is prescribed by the ICAR and the
                        School of Pharmaceuticals runs the only National Board
                        of Accreditation approved courses in Himachal Pradesh.
                        <br /> <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="admission-page whySu simple-steps-area py-5 bg-white">
          <div className="container">
            <div className="section-title">
              <h3>WHY CHOOSE SHOOLINI</h3>
            </div>

            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-simple-steps">
                  <h3>250+ Global Alliances</h3>
                  <p>
                    Students visit top campuses in USA, Europe, Korea, Australia
                    & China.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-simple-steps">
                  <h3>180+ Courses</h3>
                  <p>
                    So you can take a specialisation that matches your future
                    goals
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-simple-steps">
                  <h3>500+ Student-Filed Patents </h3>
                  <p>As we focus on research right from the graduate level.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-simple-steps">
                  <h3>180+ Courses</h3>
                  <p>
                    So you can take a specialisation that matches your future
                    goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SearchProgram />

        <section className="admission-area py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="admission-img mr-15">
                <Image width={566} height={358} src="assets/images/admission.webp" alt="Imagu" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="admission-content ml-15">
                  <h2>Admission Procedure</h2>
                  <ul>
                    <li>
                      Start the application process. Complete an{' '}
                      <a
                        target="_blank"
                        href="https://admissions.shooliniuniversity.com/?utm_source=organic&utm_medium=Admprocess&utm_campaign=applynow"
                        rel="noreferrer"
                      >
                        Online Form here{' '}
                      </a>{' '}
                      and pay the application fee.
                    </li>
                    <li>
                      {' '}
                      Once we receive the application, our admission team will
                      contact you to apprise you of the eligibility criteria for
                      your course. All courses have different eligibility
                      criteria. Some courses have exams, others have interviews
                      or some have regulatory requirements.{' '}
                    </li>
                    <li>
                      Admissions for the year 2022 are currently underway. You
                      are eligible to receive a firm offer of admission, even
                      before board exams, if you submit one of the following
                      entrance exam scores:{' '}
                    </li>

                    <li>
                      {' '}
                      Once you meet the criteria, the department sends you a
                      letter of enrollment. All students who pay the
                      first-semester fee are enrolled into the course to join
                      one of India's top private universities.{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="course-odf-bg">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="course-pdf">
                    <h3>Fee Payment</h3>
                    <p>
                      Look up your course{' '}
                      <Link href="/shoolini-university-fee-structure">
                        fee here
                      </Link>
                      . For the convenience of newly enrolled students, the fee
                      is paid in two instalments per semester. Students can
                      avail some of our highly coveted scholarships provided
                      they meet the required criteria.{' '}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="download-pdf">
                    <a onClick={openModal} href="#" className="default-btn">
                      Download Prospectus/Brochure
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
          <div>
            {' '}
            <div
              className="npf_wgts"
              data-height="300px"
              data-w="d095e55a1f298e67da8279133413215f"
            ></div>
          </div>
        </Modal>

        <Footer />
      </Styles>
    </>
  )
}

export default ShooliniAdmission
