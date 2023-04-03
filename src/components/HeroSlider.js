import React from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { Styles } from './common/styles/heroslider'
import Slider from 'react-slick'
import Datas from '../data/hero/hero-slider.json'
import Link from 'next/link'
import Modal from 'react-modal'
import VideoModal from './VideoModal'
import { useState } from 'react'
import AdmissionFormSidebar from './AdmissionFormSidebar'
const HeroSlider = () => {
  const settings = {
    slidesPerView: 1,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    effect: 'fade',
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    renderPrevButton: () => (
      <div className="swiper-btn slider-button-prev">
        <i className="flaticon-arrow-left-th"></i>
      </div>
    ),
    renderNextButton: () => (
      <div className="swiper-btn slider-button-next">
        <i className="flaticon-arrow-right-th"></i>
      </div>
    ),
  }

  const [modal, setModal] = useState(false)
  const Toggle = () => setModal(!modal)

  return (
    <Styles>
      {/* Hero Slider */}

      <VideoModal show={modal} title="My Modal" close={Toggle} />

      <section className="hero-slider-area">
        <Slider {...settings}>
          {Datas.map((data, i) => (
            <div className="slider-item" key={i}>
              {/* <div className="image-container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/images/${data.backgroundImage}`
                  }
                  className="slider-image"
                  alt={data.backgroundImage}
                />
              </div> */}
              <div className="slider-table">
                <div className="slider-tablecell">
                  <Container>
                    <Row>
                      <Col className="textCenteres" md="8">
                        <div className="textCard">
                          <div className="slider-title text-left">
                            <p>{data.title}</p>
                          </div>
                          <div className="slider-desc text-left">
                            <h1>{data.desc}</h1>
                          </div>

                          <div className="resrchTxt mt-5">
                          <h5> Research Citations Per Paper </h5>
                          <h6> QS World University Rankings | Asia | 2022 </h6>
                        </div>
                        </div>
                        
                      </Col>
                      <Col md="4">
                        <AdmissionFormSidebar />
                      </Col>
                     
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </Styles>
  )
}

export default HeroSlider
