import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./common/styles/shooliniAdvantage";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';
const ShooliniAdvantage = () => {
    return (
        <>
             <Styles>
                 <section className="thinkLearning mt-5 pt-md-4">
                     <div className="container-fluid">
                         <Container>
                            <div data-aos="fade-right" className="sec-title mb-5">
                                <h2>Think Learning </h2>
                                <h4> at a World-class university </h4>
                            </div>
                         </Container>
                  

                         <Row>
                             <Col md="7">
                                <div className="su_img">
                                    <img className="img-fluid" src="assets/images/su-learning.jpg" />
                                </div>
                             </Col>
                             <Col md="5">
                                <div className="learningCard">
                                    <h3 data-aos="fade-up" className="subHeading"> The Shoolini Advantage  </h3>
                                    <div className="course-details-feature">
                                                <ul data-aos="fade-up" className="list-unstyled feature-list">
                                                    <li>  <Link to="/" > <span> Engage in Real Research</span> <span> <IoIosArrowDropright /> </span></Link></li>
                                                    <li><Link to="/" > <span> Get Real World Experience</span> <span>  <IoIosArrowDropright /></span></Link></li>
                                                    <li><Link to="/" > <span>Learn From the Best</span> <span> <IoIosArrowDropright /></span></Link></li>
                                                    <li><Link to="/" > <span>Study Abroad</span> <span> <IoIosArrowDropright /></span></Link></li>
                                                    <li><Link to="/" > <span>Get the Best Placements</span> <span> <IoIosArrowDropright /></span></Link></li>
                                                    <li><Link to="/" > <span> Get World-class Facilities</span> <span> <IoIosArrowDropright /></span></Link></li>
                                                </ul>
                                            
                                            </div>
                                </div>
                             </Col>
                         </Row>
                     </div>
                 </section>
             </Styles>
        </>
    )
}

export default ShooliniAdvantage
