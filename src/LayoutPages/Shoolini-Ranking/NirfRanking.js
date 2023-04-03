import React, { useEffect } from 'react'
import Header from '../../components/Header'
// import HeaderOne from '../../components/HeaderOne';
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from './css/suranking'
import Footer from '../../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'

const NirfRanking = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

    return () => {}
  }, [])

  return (
    <>
      <Styles>
        <Header />
        <BreadcrumbBox title="NIRF 2021" />

        <section className="ranking-page my-5">
          <Container>
            <Row>
              <Col md="12">
                <div className="">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="section-title">
                        <h3>
                          Shoolini breaks into league of Top 100 universities
                        </h3>
                        <p>
                          Himachal Pradesh-based Shoolini University,
                          established just 12 years ago, has been ranked among
                          the top 100 universities in the country by the
                          Government of India’s National Institutional Rankings
                          Framework (NIRF). The 2021 rankings were declared by
                          Union Education Minister Mr Dharmendra Pradhan at a
                          function in the national capital today.
                          <br /> <br />
                          The university’s School of Pharmaceutical Sciences has
                          been ranked at 36th place across the country while the
                          Faculty of Management has been placed in the 76-100
                          bracket. The School of Engineering has been ranked
                          103rd in the country.{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-slider-area mb-5">
                    <div className="row">
                      <div className="about-bg-img">
                        <div className="about-img">
                          <img src="assets/images/b-1.jpg" alt="img" />
                        </div>
                        <div className="offset-xl-6 col-xl-6 offset-lg-6 col-lg-6 offset-md-4 col-md-8 col-sm-12">
                          <div className="about-content-area">
                            <h3>Rank Band 101-150</h3>
                            <p>
                              This is the first time that the university, which
                              has ranked top in Himachal Pradesh, has been
                              included in the Top 100 list in the country. For
                              the last four years, it was being ranked in the
                              101-150 category. In the Overall Ranking, Shoolini
                              University is among the top five universities in
                              the region, north of Delhi, which includes Punjab,
                              Haryana, Jammu and Kashmir, Uttarakhand and
                              Chandigarh.
                              <br /> <br />
                              It is in the 101-150 band (all institutions) in
                              the country, which include IIMs, IITs and other
                              established institutions. The country has about
                              one lakh institutions of higher learning. This
                              implies that Shoolini is among the top 0.2 per
                              cent of institutions of higher education in the
                              country.
                              <br /> <br />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="section-title pt-4">
                          <p>
                            Congratulating the researchers and faculty members
                            of Shoolini University, Chancellor Prof Prem Kumar
                            Khosla said it was a matter of great pride for the
                            university to have attained such prestigious
                            rankings. He said Shoolini University would now
                            strive to get into the top 50 universities of the
                            country by next year.
                            <br /> <br />
                            Vice-Chancellor Prof Atul Khosla said the university
                            has achieved the ranking due to its exceptional
                            faculty and researchers. He said all efforts would
                            be made to achieve the target of getting in the top
                            league of global universities. The School of
                            Pharmaceutical Sciences and the Faculty of
                            Management Department did better than all other
                            universities in Himachal Pradesh. The Pharmacy
                            college has been ranked 36th out of over 300
                            universities ranked across the country. The
                            Management Department was ranked in the 76-100 out
                            of over 550 such institutions in the country.
                            <br /> <br />
                            Himachal Pradesh has five government universities
                            and 17 private universities but no other university
                            figures in the top 100 list of universities.
                            <br /> <br />
                            Founded by leading academicians and professionals,
                            Shoolini University is a young, research-focused,
                            philanthropic university with the vision to be a Top
                            200 global university by 2022. Established in 2009,
                            this dynamic and innovation-led centre of learning
                            has made giant strides towards delivering this
                            vision. It has consistently been ranked among
                            India’s top universities and is one of India’s
                            highest generators of patents and innovation and
                            matches the world’s best universities in research
                            output. A not-for-profit multi-disciplinary private
                            university, Shoolini drives cutting-edge knowledge
                            and innovation, while working for the social and
                            economic upliftment of the community at the same
                            time. It is this belief – along with an
                            internationally qualified faculty, focus on careers
                            and placements for students, continuous innovation
                            in pedagogy and highly motivated students – that
                            makes Shoolini University a progressive and dynamic
                            university in the global knowledge economy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </Styles>
    </>
  )
}

export default NirfRanking
