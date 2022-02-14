import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LogoSlider = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <>
        <Container>
            <Row>
                <Col md="12">
                <div data-aos="fade-up" className="sec-title mb-5">
                            <h2>Think Placements </h2>
                            <h4> in 250+ of india’s Top Corporates </h4>
                        </div>
                </Col>
            </Row>
           <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  infinite={true}
  autoPlay={ true}
>
  <div>
      <div data-aos="fade-up" className="logoItem">
          <img src="assets/images/logos/l1.png" />
      </div>
  </div>
  <div>
      <div data-aos="fade-up" className="logoItem">
          <img src="assets/images/logos/hind.png" />
      </div>
  </div>
  <div>
      <div data-aos="fade-up" className="logoItem">
          <img src="assets/images/logos/bio.png" />
      </div>
  </div>
  <div>
      <div data-aos="fade-up" className="logoItem">
          <img src="assets/images/logos/l1.png" />
      </div>
  </div>
  <div>
      
      <div data-aos="fade-up" className="logoItem">
          <img src="assets/images/logos/lg.png" />
      </div>
  </div>
  <div>
      <div data-aos="fade-up" className="logoItem">
          <img src="assets/images/logos/ici.png" />
      </div>
  </div>
 

</Carousel>


</Container>
        </>
    )
}

export default LogoSlider
