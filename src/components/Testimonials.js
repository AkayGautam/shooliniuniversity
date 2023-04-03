import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import testimonialss from "../data/Testimonials/Testimonials.json";
import { Styles } from "./common/styles/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Image from "next/legacy/image";
import { testimonialApi } from "../Api";

const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonials = ({ testimonials }) => {
  // const [testimonials, setTestimonial] = useState([]);

  // useEffect(() => {
  //   const fetchTestimonials = async () => {
  //     const testimonial = await testimonialApi();
  //     const data = await testimonial.json();
  //     setTestimonial(data);
  //   };
  //   fetchTestimonials();
  // }, []);

  return (
    <>
      <Head>
        <title>{testimonials?.seo_title}</title>
        <meta name="description" content={testimonials?.seo_description} />
        <meta name="keywords" content={testimonials?.seo_keywords} />
      </Head>
      <Styles>
        <div className="bg-image">
          <section className="testimonials-area">
            <div
              className="testimonialsSection"
              style={{
                backgroundImage: `url(/assets/images/${testimonialss.backgroundImage})`,
              }}
            >
              <Container>
                <Row>
                  <Col md="6" sm="5"></Col>
                  <Col md="6" sm="7">
                    <div className="mb-md-5 py-5 sec-title text-left">
                      <h2> Student Voices </h2>
                    </div>
                    <Slider {...settings}>
                      {testimonials &&
                        testimonials.testimonial?.map((item, i) => (
                          <div className="team-item" key={i}>
                            <div>
                              <Image
                                width={80}
                                height={80}
                                src={item?.imageurl}
                                alt="testimonials"
                              />
                            </div>

                            <div className="img-content">
                              <h5>{item.name}</h5>
                              <p>{item.content}</p>
                            </div>
                          </div>
                        ))}
                    </Slider>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
        </div>
      </Styles>
    </>
  );
};

export default Testimonials;
