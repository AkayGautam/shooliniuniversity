/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Datas from "../../data/about-us/about-us.json";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import BreadcrumbBox from "../../components/common/Breadcrumb";
import { Styles } from "../../components/common/styles/header";
import { Styless } from "./style/about";
import Footer from "../../components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import Companies from "../../components/Companies";
import { resetMetaTags, setMetaTags } from "../../helper/setMetaTags";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  const [aboutdata, setAboutdata] = useState([]);

  var result_about = [];

  useEffect(() => {
    document.title = `About Us | Shoolini University`;
    document.body.setAttribute("pageId", 74);
    fetch("https://shooliniuniversity.com/media/GetAbouUSAPI", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: "shoolini@999", type: "aboutus", id: 74 }),
    })
      .then((response) => response.json())
      .then((res) => {
        setAboutdata(res);
        console.log(res.success[0]);
        setMetaTags(res.success[0]);
      });

    return () => {
      resetMetaTags();
      document.title = `Shoolini University`;
      document.body.removeAttribute("pageId");
    };
  }, []);

  result_about = aboutdata?.success;

  const removeHTML = (str) => {
    var tmp = document.createElement("p");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <>
      <Styles>
        <Styless>
          {/* Main Wrapper */}
          <div className="main-wrapper about-page">
            {/* Header 2 */}
            <Header />

            {/* Breadcroumb */}
            <BreadcrumbBox title="About Us" />

            <Styles>
              {/* About Us */}
              <section className="about-us">
                <Container>
                  <Row>
                    {result_about?.map((data, index) => (
                      <Col md="12" key="index">
                        <div className="cuCourse" key={index}>
                          <div data-aos="fade-right" className="section-title">
                            <h4> {data?.title} </h4>
                            <h3>A Top-Ranked University</h3>
                          </div>

                          <Row>
                            <Col md="6">
                              <div
                                data-aos="fade-right"
                                className="about-image position-relative"
                              >
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    `/assets/images/${Datas.mainImage}`
                                  }
                                  className="main-img"
                                  alt=""
                                />

                                <div className="aboutHrng">
                                  <Row>
                                    <Col>
                                      <div className="counter-box box1 text-center">
                                        <h3>3000+</h3>
                                        <p>Placements</p>
                                      </div>
                                    </Col>
                                    <Col>
                                      <div className="counter-box box2 text-center">
                                        <h3>250+</h3>
                                        <p>Global Alliances</p>
                                      </div>
                                    </Col>
                                    <Col>
                                      <div className="counter-box box3 text-center">
                                        <h3>1200+</h3>
                                        <p>Patents Filed</p>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="about-content">
                                <p data-aos="fade-right" className="about-para">
                                  {removeHTML(data?.content)
                                    .split("\n")
                                    .map((content, i) => (
                                      <span key={i}>
                                        {content}
                                        <br />
                                      </span>
                                    ))}
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>

                <div className="GalleryView mt-5">
                  <Companies />
                </div>
              </section>
            </Styles>

            <Footer />
          </div>
        </Styless>
      </Styles>
    </>
  );
};

export default About;
