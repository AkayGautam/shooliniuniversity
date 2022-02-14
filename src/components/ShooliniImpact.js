import React, { Component, useEffect } from 'react';
import Datas from '../data/shoolini-impact/suImpact.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

import { Styles } from './common/styles/impact';

export default class ShooliniImpact extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: true,
            speed: 2000
        };

        return ( 
            <>
                <Styles>
                    <section className="impact-box-area py-5">
                        <Container>
                            <div data-aos="fade-right" className="sec-title mb-5 text-left">
                                <h2>Shoolini Impact  </h2>
                            </div>
                            <Row>
                                <Col md="12" lg="7">
                                    <div className="impactSU">
                                        <div className="imSUtext">
                                            <Slider {...settings}>
                                                {
                                                    Datas.map((data, i) => (
                                                        <div className="team-item" key={i}>
                                                            <div data-aos="fade-up" className="dflex-card">
                                                                <img src={process.env.PUBLIC_URL + `/assets/images/${data.suImg}`} alt="" className="" />
                                                            </div>

                                                            <div className="IMDetail">
                                                                <h5>{data.suTitle}</h5>
                                                                <p> {data.sudesc} </p>

                                                            </div>

                                                        </div>


                                                    ))
                                                }





                                            </Slider>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="12" lg="5">
                                    <div className="sidebarText">
                                        <ul className="p-0 m-0">
                                            <li data-aos="fade-up">
                                                <Link to="/">
                                                    <div className="listO">
                                                        <p> Chancellor urges graduating students to fight for equality and inclusion  </p>
                                                        <img src="assets/images/list1.jpg" />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li data-aos="fade-up">
                                                <Link to="/">
                                                    <div className="listO">
                                                        <p> Chancellor urges graduating students to fight for equality and inclusion  </p>
                                                        <img src="assets/images/list1.jpg" />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li data-aos="fade-up">
                                                <Link to="/">
                                                    <div className="listO">
                                                        <p> Chancellor urges graduating students to fight for equality and inclusion  </p>
                                                        <img src="assets/images/list1.jpg" />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li data-aos="fade-up">
                                                <Link to="/">
                                                    <div className="listO">
                                                        <p> Chancellor urges graduating students to fight for equality and inclusion  </p>
                                                        <img src="assets/images/list1.jpg" />
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Styles>
            </>
        )
    }
};
