import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Styles } from "./common/styles/heroslider";
import Swiper from 'react-id-swiper';
import Datas from '../data/hero/hero-slider.json';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import VideoModal from './VideoModal';
import { useState } from "react";

const HeroSlider = () => {

    


    const settings = {
        slidesPerView: 1,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        watchSlidesVisibility: true,
        effect: 'fade',
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev'
        },
        renderPrevButton: () => (
            <div className="swiper-btn slider-button-prev"><i className="flaticon-arrow-left-th"></i></div>
        ),
        renderNextButton: () => (
            <div className="swiper-btn slider-button-next"><i className="flaticon-arrow-right-th"></i></div>
        )
    };

    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    
    return (
        <Styles>
        {/* Hero Slider */}

        <VideoModal show={modal} title="My Modal" close={Toggle}/>


        <section className="hero-slider-area">



            
            <Swiper {...settings}>
                {
                    Datas.map((data, i) => (
                        <div className="slider-item" key={i}>
                            <div className="image-container">
                                <img src={process.env.PUBLIC_URL + `/assets/images/${data.backgroundImage}`} className="slider-image" alt={data.backgroundImage} />
                            </div>
                            <div className="slider-table">
                                <div className="slider-tablecell">
                                    <Container>
                                        <Row>
                                            <Col md="12">
                                                <div className={data.uniqClass}>
                                                    <div className="slider-title text-center">
                                                        <p>{data.title}</p> 
                                                    </div>
                                                    <div className="slider-desc text-center">
                                                        <h1>{data.desc}</h1>
                                                    </div>
                                                   
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="resrchTxt mt-5">
                                               <h5> Research Citations Per Paper  </h5> 
                                               <h6>  QS World University Rankings | Asia | 2022 </h6>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                            <Row>
                                            <Col md="6">
                                            <div className="slider-btn mt-5">
                                                        <Link className="slider-btn1" to={process.env.PUBLIC_URL + `/${data.btnOneLink}`}>Apply Now</Link>
                                                        <Link className="slider-btn2" to={process.env.PUBLIC_URL + `/${data.btnTwoLink}`}>Enquire</Link>
                                              </div> 
                                                </Col>
                                                <Col md="6">
                                                    <div className="videoMosdal">
                                                     <a href="#">
                                                     <button onClick={() => Toggle()}  className="play-button clickme"><i className="las la-play"></i></button>

                                                        view our <br /> story
                                                        </a>
                                                    </div>
                                                </Col>  

                                            </Row>
                                             
                                         </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Swiper>
        </section>
    </Styles>
    )
}

export default HeroSlider
