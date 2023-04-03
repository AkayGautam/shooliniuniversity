/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-animated-slider/build/horizontal.css";
import { Styles } from "./common/styles/Combine";
import Datas from "../data/hero/hero-slider.json";
import Image from "next/legacy/image";

const SliderDemo = () => {
  // play video on hover
  const playVideo = (e) => {
    e.target.play();
  };

  return (
    <Styles>
      <section className="hero-slider-area mainHome">
        <div className="Apps">
          <div className="bannerVideo">
            {/* <iframe
              id="ytplayer"
              webkitallowfullscreen="true"
              src="https://www.youtube-nocookie.com/embed/gIljbQqKXk8?rel=0&controls=0&autoplay=1&showinfo=0&loop=1&autopause=0&mute=1&enablejsapi=1&playlist=gIljbQqKXk8"
              mozallowfullscreen="true"
              allowFullScreen={true}
              frameBorder="0"
            ></iframe> */}

            {/* <video
              autoPlay
              controls={false}
              loop
              muted
              poster="/assets/video/banner.webp"
            >
              <source src="/assets/video/banner.mp4" type="video/mp4" />
            </video> */}

            <img
              src="/assets/video/banner3.webp"
              alt="banner"
              style={{ width: "100%" }}
            />
            {/* <Image  width={1519}  height={820}  src="/assets/video/banner3.webp" alt="Main Banner" /> */}
            
          </div>

          <div className="mainInput inMobile">
            {Datas.map((data, i) => (
              <div key={i} className="slider-content slider-image">
                <div className="slider-table">
                  <div className="slider-tablecell">
                    <Container>
                      <Row>
                        <Col md="12">
                          <div className={data.uniqClass}>
                            <div className="slider-title text-center">
                              <p className="text-white">
                                <strong> {data.title} </strong>
                              </p>
                            </div>
                            <div className="slider-desc text-center">
                              <h1>{data.desc}</h1>

                              <p className="text-white subtitleTxt">
                                <strong> {data.research}</strong>{" "}
                              </p>
                              <h4 className="text-white text-300">
                                <span>
                                  {" "}
                                  Times Higher Education Rankings 2023{" "}
                                </span>{" "}
                              </h4>
                            </div>
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="resrchTxt mt-md-5"></div>
                        </Col>
                        <Col md="6">
                          <Row>
                            <Col md="6"></Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default SliderDemo;
