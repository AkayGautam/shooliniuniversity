import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ResearchStories from "./ResearchStories";
import { red } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Datas from "../data/school/school.json";
import Image from "next/legacy/image";

import {
  Container,
  Row,
  Col,
  Card as Cards,
  Card,
  Table,
} from "react-bootstrap";
import { Styles } from "./common/styles/FacultyOfAgriculture";
import Link from "next/link";
import SearchProgram from "./SearchProgram";
import Companies from "./Companies";
import Template from "./Template";
import Slider from "react-slick";
import SuspenseBoundary from "../helper/SuspenseBoundary";
import Head from "next/head";

const AcademicsSub = ({ id, data, ldJson }) => {
  const [jsonLd, setJsonLd] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    setJsonLd(ldJson);
  }, [ldJson]);

  useEffect(() => {
    document.body.setAttribute("id", `pageid-${id}`);
    return () => {
      document.body.removeAttribute("id");
    };
  }, [id]);

  const bgImg = data[0].slider
    ? JSON.parse(data[0].slider)[0]
    : `/assets/images/${Datas[0].backgroundImage}`;

  return (
    <SuspenseBoundary>
      <Head>
        <title>{data[0].seo_title}</title>
        <meta name="description" content={data[0].seo_description} />
        <meta name="keywords" content={data[0].seo_keywords} />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>
      <Styles>
        <Header />
        <>
          <Template title={data[0]?.title} img={bgImg?.image_url} />

          <section className="templateOne">
            <Container>
              <Row>
                <Col md="12">
                  {data[0]?.content && (
                    <div className="sec-para my-4">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data[0]?.content,
                        }}
                      ></p>
                    </div>
                  )}
                </Col>
              </Row>
            </Container>
          </section>

          <section className="highLights">
            <div className="container-fluid p-0">
              <div className="row m-0">
                <div className="col-md-4 p-0">
                  <Image
                    width={506}
                    height={435}
                    className="w-100"
                    src="/assets/images/baby2.jpg"
                  />
                </div>
                <div className="col-md-8 p-0">
                  <div className="hgContent">
                    <div className="hgContentinner">
                      <div className="sec-title text-left">
                        <h2>HighLights </h2>
                      </div>
                      <div className="newData">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data[0]?.heighlights,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="templateOne ">
            <Container className="py-5">
              <Row>
                <Col md="12">
                  {data[0]?.why_enroll && (
                    <div className="sec-para mt-5">
                      <div className="whyEnroll mb-4">
                        <h4>Why Enroll?</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data[0]?.why_enroll,
                          }}
                        ></p>
                      </div>
                    </div>
                  )}
                </Col>

                <Col md="12">
                  {data[0]?.faculty_intro && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data[0]?.faculty_intro,
                      }}
                    ></p>
                  )}
                </Col>

                <Col md="12">
                  {data[0]?.researchpart1 && (
                    <div className="research mb-4">
                      <h4>Research</h4>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data[0]?.researchpart1,
                        }}
                      ></p>
                    </div>
                  )}
                </Col>

                <Col md="12">
                  {data[0]?.courses && (
                    <div className="placements mb-4">
                      <div className="sec-title pt-md-0 p-md-5 pb-md-4 text-left color-red">
                        <h2>Programs </h2>
                      </div>
                      <div className="placements-list table-responsive">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>PROGRAM</th>
                              <th>DURATION</th>
                              <th>ELIGIBILITY</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data[0]?.courses &&
                              data[0]?.courses.map((i, idx) => {
                                return (
                                  <tr key={idx}>
                                    <td>
                                      <Link
                                        className="text-dark"
                                        href={`/${i?.slug}`}
                                      >
                                        {i.title}
                                      </Link>
                                    </td>
                                    <td>{i.duration}</td>
                                    <td>{i.eligibility}</td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  )}
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <ResearchStories />
          </section>
          <SearchProgram />
          <Companies />

          {data[0]?.testimonial?.length > 0 && (
            <section className="templateOne templateHeading bg-white py-5">
              <Container>
                <div className=" text-left sec-title color-red">
                  <h2 className=" py-3"> Student Voices</h2>
                </div>

                <Row>
                  <Col md="12">
                    {data[0]?.testimonial &&
                      data[0]?.testimonial.length > 0 && (
                        <Slider {...settings}>
                          {data[0]?.testimonial?.map((item, i) => (
                            <div className="userDetailCard" key={i}>
                              <div className="row">
                                <figure className="cj-media-left col-4">
                                  <p className="user-image">
                                    <Image
                                      width={111}
                                      height={111}
                                      src={item?.imageurl}
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </p>
                                </figure>
                                <div className="userContent col-8">
                                  <h5>{item.name}</h5>
                                  <p>{item.content}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      )}
                  </Col>
                </Row>
              </Container>
            </section>
          )}
        </>

        <Footer />
      </Styles>
    </SuspenseBoundary>
  );
};

export default AcademicsSub;
