import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./style/programmes";
// import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BreadcrumbBox from '../../components/common/Breadcrumb';
import PopularPrograme from './PopularPrograme';
import ProgramSingle from './ProgramSingle';

 
const SchoolDetail = () => {


 useEffect(() => {
  window.scrollTo(0, 0)
   return () => {
 
   };
 }, []);
 



  return (
    <>
      <Styles>
       
        <Header />
        <BreadcrumbBox title="School Detail" />
     
        <section className="SchoolDetail">
          <Container>
            <Row>  
              <Col md="7" lg="8">
                <div className="su-sidebar-content my-5">
                  <div className="suContent">
                    <h3> Outstanding School Of Law </h3>
                    <p> The Academic offers include 14 majors, 15 minors, and more than 100 in major specializations so your degree will surely reflect your interests and strengths.
                      <br /><br />
                      Not only does Kingster University provide you the practical skills that is necessary to transition seamlessly into the workforce upon your graduation, but we also make sure that you will have a good sense of social justice so that you make the transition responsibly. </p>
                  </div>

                  <div class="su-core-title-item-title-wrap">
                    <h3 class="su-core-title-item-title">Programmes</h3>
                    <div class="su-core-title-item-divider"></div>
                  </div>



                  <section class="main-section">
                    <div class="courses">

                    <div class="course css" tabindex="5">
                      <div class="course-info">
                        <span>Programe</span>
                        <h5>BSc Hospitality{" &"} Hotel Administration</h5>
                      </div>
                      <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                      
                      </div>
                     <div className="sideOpen">
                         <ProgramSingle /> 
                       </div>
                    </div>

                      <div class="course html" tabindex="1">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>BA (Hons) EnglishL</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>
                      <div class="course" tabindex="5">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>BSc Hospitality{" &"} Hotel Administration</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>
                      <div class="course" tabindex="9">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>BA Journalism and Mass Communication</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>

                      <div class="course html" tabindex="1">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>BA Journalism and Mass Communication</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>
                      <div class="course" tabindex="5">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>B Com</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>
                      <div class="course" tabindex="9">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>Bachelor of Business Administration (BBA)</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>

                      <div class="course html" tabindex="1">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>BA (Hons) EnglishL</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>
                      <div class="course" tabindex="5">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>BSc Hospitality{" &"} Hotel Administration</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>
                      <div class="course" tabindex="9">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>BA Journalism and Mass Communication</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>

                      <div class="course html" tabindex="1">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>BA Journalism and Mass Communication</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>
                      <div class="course" tabindex="5">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>B Com</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>
                      <div class="course" tabindex="9">
                        <div class="course-info">
                          <span>Duration : 3 Yeras</span>
                          <h5>Bachelor of Business Administration (BBA)</h5>
                        </div>
                        <div class="course-more">
                        <span className="elfb"> Eligibility </span>
                        <div class="details">
                        <h5>Graduation in any discipline with minimum 55% marks	</h5>
                        </div>
                        
                      </div>
                      </div>
                    </div>

                  </section>







                </div>
              </Col>
              <Col md="5" lg="4">
                  <div className="sideBarpage">
                  <div className="course-search">
                    <h5>Search Course</h5>
                    <form action="#">
                        <input type="text" name="search" placeholder="Search Here" />
                        <button type="submit"><i className="las la-search"></i></button>
                    </form>
                </div>

                  <div className="gdlr-core-widget-box-shortcode">
                                                <div className="gdlr-core-widget-box-shortcode-content">
                                                    <p></p>
                                                    <h4>Department Contact Info </h4>
                                                    <p><span>School Of Law</span>
                                                        <br /> <span><br /> 1810 Campus Way NE<br /> Bothell, WA 98011-8246</span></p>
                                                    <p><span>+1-2345-5432-45<br /> bsba@kuuniver.edu <br /> </span></p>
                                                    <p><span>Mon – Fri 9:00A.M. – 5:00P.M.</span></p> <span className="gdlr-core-space-shortcode"></span>
                                                   
                                               
                                                </div>
                                            </div>

                  <PopularPrograme />

                  </div>
              </Col>
            </Row>
          </Container>
        </section>


        <Footer />
      </Styles>
    </>
  );
};

export default SchoolDetail;
