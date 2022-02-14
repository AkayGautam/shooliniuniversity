import React, { Component } from 'react';
import Datas from '../data/course/slider.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./common/styles/programmeslider";

const ProgrammeSlider = () => {
    const settings = {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        spaceBetween: 30,
        watchSlidesVisibility: true,
        pagination: {
            el: '.slider-dot.text-center',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        }
    };
    return (
        <>
            <Styles>
                {/* Course Slider */}
                <section className="course-slider-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{Datas.secTitle}</h4>
                                </div>
                            </Col>
                            <Col md="12" className="course-slider">
                                <Swiper {...settings}>
                                    {
                                        Datas.dataList.map((data, i) => (

                                            <div className="course-item" key={i}>
                                                <Link to={process.env.PUBLIC_URL + data.courseLink}>
                                                    <div className="course-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${data.imgUrl})` }}>
                                                        <div className="author-img d-flex">
                                                            <div className="img">
                                                               
                                                            </div>
                                                            <div className="title">
                                                                <p>{data.eligibilityTitle}</p>
                                                                <span>{data.eligibility}</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-price">
                                                            <span> View Detail</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="course-content">
                                                    <h6 className="heading"><Link to={process.env.PUBLIC_URL + data.courseLink}>{data.courseTitle}</Link></h6>
                                                    <p className="desc">{data.courseDesc}</p>
                                                   
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Swiper>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles> 
        </>
    )
}

export default ProgrammeSlider
