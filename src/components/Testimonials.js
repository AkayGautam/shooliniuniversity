import React, { useEffect, Component } from 'react';
import Slider from "react-slick";
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Datas from '../data/Testimonials/Testimonials.json';
import { Styles } from "./common/styles/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Testimonials extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Styles>
        <div className="bg-image">
          <section className="testimonials-area">
            <div className="testimonialsSection" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
              <Container>
                <Row>
                  <Col md="6" sm="5">

                  </Col>
                  <Col md="6" sm="7">
                    <div className="mb-md-5 py-5 sec-title text-left">
                      <h2> Researchers’ block  </h2>
                    </div>
                    <Slider {...settings}>
                {
                                        Datas.dataList.map((data, i) => (
                                            <div className="team-item" key={i}>
                                                <div className="dflex-card">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/${data.personImage}`} alt="" className="" />
                                                    <h5>{data.personName}</h5>
                                                    <p>{data.personTitle}</p>
                                                </div>
                                                
                                                <div className="img-content">
                                                  
                                                    <p>{data.dec}</p>
                                                  
                                                </div>
                                            </div>
                                        ))
                                    }
                
                   
                </Slider>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
        </div>
      </Styles>
    );
  }
}