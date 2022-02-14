import React from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Styles } from "./common/styles/stories";
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi";


const ResearchStories = () => {
    return (
        <>
            <Styles>
                <section className="stories-area">
                    <Row className="m-0">
                        <Col className="full-wrap-red pl-4s" md="6">
                            <div data-aos="fade-right" className="sec-title z-index-9">
                                <h2 className="text-white">Think Research </h2>
                                <p className="whyUsSubText text-white"> that matches the world’s best universities </p>

                                <ul className="whyUs text-white">
                                    <li>800+ Patents Filed </li>
                                    <li> H-index {">"} 72</li>
                                    <li>Field Weighted Citation Impact (FWCI) 2.27 </li>
                                    <li>No.1 In India in Citations Per Paper </li>
                                    <li> 104+ State-of-the-art laboratories </li>
                                    <li> 7 centres of excellence </li>
                                    <li> 2 Shoolini researchers among top 1% scientists </li>
                              
                                </ul>
                                <Link className="iconArrL" to="/"> Learn why We are A Top-ranked Research University <FiArrowRightCircle />   </Link>
                            </div>
                        </Col>
                        <Col className="bgImgSU" md="6">
                            <div data-aos="fade-up" className="ml-4s StoriesData">
                                <h4> Portable water Purifier </h4>
                                <p> Learn how a Shoolini researcher’s innovation to provide clean drinking water is changing the world </p>
                            </div>
                            <Link className="iconArr" to="/"> <FiArrowRightCircle /> </Link>
                        </Col>

                    </Row>
                </section>
                <section className="stories-area p-0 bg-area2">
                        <Row className="m-0">

                            <Col className="bgImgSU2" md="6">
                             
                            </Col>
                            <Col className="full-wrap-red  pl-4s" md="6">
                            <div data-aos="fade-right" className="text-white pd-right sec-title z-index-9">
                                <h2 className="text-white">Think International </h2>
                                <p className="whyUsSubText text-white"> Get World-Class Higher Education abroad </p>

                                    <h3> Global Learning Opportunities </h3>
                                    <p> Over the past decade, Shoolini has built a worldwide network of partner universities to foster exchange opportunities, collaborative academic programs, faculty engagement and research, and other activities. Shoolini offers study abroad opportunities with scholarships to top universities in USA, Australia, UK, South Korea, Taiwan, Japan, and Italy among others. </p>
                                <Link className="iconArrL p-0" to="/"> Apply Now<FiArrowRightCircle />   </Link>
                            </div>
                            </Col>

                        </Row>
                </section>
            </Styles>
        </>
    );
};

export default ResearchStories;
