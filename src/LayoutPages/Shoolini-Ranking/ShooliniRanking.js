import React, { useEffect } from 'react'
import Header from '../../components/Header'
// import HeaderOne from '../../components/HeaderOne';
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from './css/suranking'
import Footer from '../../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'

const ShooliniRanking = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

    return () => {}
  }, [])

  return (
    <>
      <Styles>
        <Header />
        <BreadcrumbBox title="Recognitions" />

        <section className="ranking-page my-5">
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
                    <div className="col-lg-9 col-md-12">
                      <div className="section-title">
                        <h4>Overall Ranking: 101-150</h4>
                        <h3>QS rankings on citation index</h3>
                        <p>
                          Eleven-year-old Shoolini University of Biotechnology
                          and Management Sciences, based out of Solan district
                          of Himachal Pradesh, has topped India in the 2021 QS
                          rankings for citation index, an indicator of quality
                          research in institutions.
                          <br /> <br />
                          It has been ranked at number 14 across Asia in the
                          same field.{' '}
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
                            <h3>Recognitions</h3>
                            <p>
                              Quacquarelli Symonds (QS) is an independent and
                              highly prestigious credible global ranking
                              organisation for educational institutions and its
                              Asia rankings were declared on Wednesday night at
                              an online function.
                              <br /> <br />
                              Shoolini University, the youngest to be among top
                              ranked, has been ranked joint seventh among all
                              private universities in the country and 38th all
                              universities and educational institutions. This
                              includes better performance than most IITs, Panjab
                              University and several other established
                              institutions. It is the only institution in
                              Himachal Pradesh to be ranked in the list.
                              <br /> <br />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="section-title pt-4">
                          <p>
                            The young, Trust-run university, which has been
                            making waves in the field of research and
                            innovation, was recently placed third in the
                            Education Ministry’s list for filing patents in the
                            country which was topped by the combined output of
                            all the 23 IITs of the country. Vice Chancellor Prof
                            P K Khosla said the QS rankings the University has
                            earned reflected the sincerity and hard work of the
                            researchers at the University. He said the
                            University was poised to reach greater heights and
                            added that its mission was to be among the top
                            global universities.
                            <br /> <br />
                            The achievement is all the more significant in view
                            of the fact that the ranking is among over 1,000
                            institutions, including IITs, IIMs and central
                            research institutes and Indian Institute of Science
                            Education and Research, in India. Another highlight
                            of the report is that the University has figured
                            among the top 44 per cent of the QS World University
                            Rankings.
                            <br /> <br />
                            The QS rankings are based on key global indicators
                            such as academic reputation, employee reputation,
                            faculty-student ratio, staff with PhD, citations per
                            Paper, international research network, Papers per
                            faculty, international faculty and students, inbound
                            exchange students and outgoing exchange students.
                            The QS Asia rankings have included 634 institutions
                            from among estimated 20,000 institutions in Asia.
                            <br /> <br />
                            The University, located at Bajhol village in Solan
                            district of Himachal Pradesh, has been retaining its
                            place in the 101-150 band of the National
                            Institutional Rankings Framework (NIRF) by the
                            government of India’s education ministry for the
                            last four years in a row.
                            <br /> <br />
                            The young University has so far filed nearly 450
                            patents and at least seven of its faculty members
                            were recently placed among top two per cent of
                            scientists of the world as per a study done by the
                            Stanford University.
                            <br /> <br />
                            It was recently placed in the band from six to 25 in
                            the Atal Rankings of private Institutions on
                            Innovations and Achievements (ARIIA) at the
                            all-India level recently.
                            <br /> <br />
                            The University had also got the prestigious QS
                            international certification for excellence in
                            Academic digitalisation and was shortlisted for
                            Times Higher Education (THE) in the category of
                            “Outstanding Student Support” for the Asia Awards
                            2020. Citations per paper is measured by the average
                            number of citations obtained per publication, and is
                            a proxy of the impact and 10 per cent quality of the
                            scientific work done by the universities. Underlying
                            data of paper and citations is indexed by Scopus.
                            <br /> <br />
                            The paper and citations counts are normalised in an
                            attempt to equalise the influence of citations
                            across five broad faculty areas.
                            <br /> <br />
                            Earlier, Shoolini University was among only 35 of
                            the one lakh institutions, including over 900
                            universities, across the country to be awarded
                            certification for Excellence in Academic
                            Digitisation.
                            <br /> <br />
                            It was also shortlisted for the category of
                            “Outstanding Support for Students” for the
                            implementation of its Skill Progression Through
                            Rapid Intensive and Innovative Training (SPRINT)
                            Programme with SIQANDAR.AI, a software developed for
                            assessing and guiding students for soft skills and
                            interviews.{' '}
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

export default ShooliniRanking
