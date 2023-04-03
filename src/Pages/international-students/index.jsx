import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import Styles from './css/international-students'
import Modal from 'react-modal'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

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

const InternationalStudents = () => {
  useEffect(() => {
    var MXLandingPageId = '8b8c0c2f-5e98-11ed-a19b-0acc9d8b1d02';
  }, [])

  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  var settingsLogo = {
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }

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

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `International Students | Shoolini University`

    return () => {
      document.title = `International Students | Shoolini University`
    }
  }, [])

  useEffect(() => {
    var MXLandingPageId = 'a6e2106e-5e9c-11ed-a19b-0acc9d8b1d02';
  }, [])
  

  return (
    <>
      <Header />
      <BreadcrumbBox title="International Students" />
      <Styles>
        <section className="rankinglist-area">
          <Container>
            <Row>
              <Col md="12">
                <div className="sec-title text-center">
                  <h2>
                    <span> Join the Shoolini University </span> International
                    students Program{' '}
                  </h2>
                </div>
              </Col>
              <Col md="12">
                <div className="shad-card">
                  <p>
                    {' '}
                    The Office of International Affairs (OIA) at Shoolini
                    University handles cooperative activities between Shoolini
                    University and foreign universities & institutes. This
                    includes creating partnerships, facilitating student &
                    faculty exchanges, as well as organizing joint research
                    collaboration. In addition, OIA offers administrative
                    support to international students & visiting foreign faculty
                    members so they can smoothly adapt to life in India. As a
                    one-stop service center, the International Center provides
                    all kinds of assistance in the areas of visa affairs,
                    insurance, housing, and academic affairs. Members of the OIA
                    are genuinely committed to delivering top-quality services
                    to teachers and students.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section class="admission-area pb-5">
          <div class="container">
            <div class="row align-items-center mb-5 pb-md-5">
              <div class="col-lg-6">
                <div class="admission-img mr-15">
                  <img src="assets/images/admission.webp" alt="Imagu" />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="admission-content ml-15">
                  <h2>
                    Features of international collaborations & exchange programs
                  </h2>
                  <p>
                    {' '}
                    Shoolini University has an agreement for international
                    collaborations and exchange programs with universities in
                    several countries. In accordance with the growing trend
                    towards globalization, Shoolini University is setting up a
                    distinctive strategy to expand and diversify its
                    international programs and activities substantially.{' '}
                  </p>
                  <ul>
                    <li>
                      Exchange of professors for joint research & lectures
                    </li>
                    <li>
                      {' '}
                      Student exchange opportunities for academic benefits{' '}
                    </li>
                    <li>Exchange of publications, literature & information </li>
                  </ul>
                </div>
              </div>
            </div>

            <section class="admission-page whySu simple-steps-area py-5 bg-white">
              <div class="container">
                <div class="section-title">
                  <h3>WHY CHOOSE SHOOLINI</h3>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-sm-6">
                    <div class="single-simple-steps">
                      <h3>200+ SHOOLINI STUDENTS</h3>
                      <p>Visited foreign universities on exchange programs</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="single-simple-steps">
                      <h3>100+ FOREIGN STUDENTS</h3>
                      <p>Stayed at Shoolini for exchange programmes</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="single-simple-steps">
                      <h3>250+ INTERNATIONAL EXCHANGE OPPORTUNITIES </h3>
                      <p>Available for Shoolini students.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="row align-items-center mt-5">
              <div class="col-lg-6">
                <div class="admission-content ml-15">
                  <h2>Structure of Office of International Affairs</h2>
                  <p>
                    {' '}
                    Shoolini University has an agreement for international
                    collaborations and exchange programs with universities in
                    several countries. In accordance with the growing trend
                    towards globalization, Shoolini University is setting up a
                    distinctive strategy to expand and diversify its
                    international programs and activities substantially.{' '}
                  </p>
                  <ul>
                    <li>Primary Activities of the OIA</li>
                    <li>
                      {' '}
                      Creating international exchange agreements with overseas
                      universities{' '}
                    </li>
                    <li>
                      Support for the exchange of students & faculty members{' '}
                    </li>
                    <li>
                      {' '}
                      Conducting international activities within the Shoolini
                      campus{' '}
                    </li>
                    <li> Provide information on worldwide scholarships </li>
                  </ul>

                  <div class="download-pdf">
                    <a onClick={openModal} href="#" class="default-btn">
                      APPLY FOR ADMISSION
                      <i class="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="admission-img mr-15">
                  <img src="assets/images/admission.webp" alt="Imagu" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shooliniresearch-area pt-0">
          <Container>
            <Row>
              <Col md="12" className="mb-3">
                <div className="sec-title text-center">
                  <h2>International Opportunities at Shoolini University </h2>
                </div>
              </Col>

              <Col md="6">
                <div className="researchImage">
                  <img
                    src={`/assets/images/international-adv.jpg`}
                    className="img-fluid main-img"
                    alt=""
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="researchText">
                  <p className="about-para">
                    {' '}
                    Recognizing the importance of international cooperation
                    among universities across the world, Shoolini University has
                    established a number of international collaborations and
                    exchange agreements with major foreign universities. We
                    maintain friendly relationships with most of the
                    universities we work with. So far, Shoolini University has
                    developed strong academic bonds with more than 250+ higher
                    institutions of learning in 28+ countries. Through such
                    links, our professors and students are able to get better
                    academic experience and acquire a more global outlook.{' '}
                  </p>
                </div>

                <div className="applyBtn">
                  <a
                    target="_blank"
                    href="https://admissions.shooliniuniversity.com/?utm_source=organic&utm_medium=website&utm_campaign=applynow"
                  >
                    {' '}
                    Apply Now{' '}
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

       

        <section className="content2 bg-white pt-5">
          <div className="container">
            <div class="section-title">
              <h3> LIST OF COUNTRIES </h3>
            </div>
            <div className="row">
              <Slider {...settingsLogo}>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-1.jpg"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-2.jpg"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-3.jpg"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-4.jpg"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-5.jpg"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-6.jpg"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-7.jpg"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-8.jpg"
                    />
                  </div>
                </div>

                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-9.jpg"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-10.jpg"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-11.jpg"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                  <div className="picture">
                    <img
                      className="img-fluid"
                      src="assets/images/international/country-12.jpg"
                    />
                  </div>
                </div>
              </Slider>
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
            <div className="sideBarNew mt-3">
              <div className="enqForm">
              <iframe name="leadsquared_landing_page_frame" src="https://shooliniuniversity.viewpage.co/Enquire-Now?ignoremxtracking=mxtrue" width="400" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
                   
              </div>
            </div>
          </div>
        </Modal>
      </Styles>
      <Footer />
    </>
  )
}

export default InternationalStudents
