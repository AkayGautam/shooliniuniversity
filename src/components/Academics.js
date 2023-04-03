import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Datas from "../data/school/school.json";
import { Container, Row, Col, Card as Cards, Card } from "react-bootstrap";
import { Styles } from "./common/styles/FacultyOfAgriculture";
import Link from "next/link";
import Template from "./Template";
import SuspenseBoundary from "../helper/SuspenseBoundary";
import Head from "next/head";
import Image from "next/legacy/image";

const settings = {
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
        slidesToScroll: 1
      }
    },
  ],
};
const Academics = ({ id, data, ldJson }) => {
  const [showTable, setShowTable] = useState(false);
  const [setting, setSetting] = useState({});
  const [jsonLd, setJsonLd] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.setAttribute("id", `pageId-${id}`);
    // setSetting(settings);
  }, []);

  useEffect(() => {
    setJsonLd(ldJson);
  }, [ldJson]);


 


  const bgImg = data[0].slides
    ? JSON.parse(data[0].slides)[0]
    : `/assets/images/${Datas[0].backgroundImage}`;

  const gallery = data[0].gallery ? JSON.parse(data[0].gallery) : [];

  const Numbers = data[0].numbers ? JSON.parse(data[0]?.numbers) : [];

  return (
    <SuspenseBoundary>
      <Head>
        <title>{data[0]?.seo_title}</title>
        <meta name="description" content={data[0]?.seo_description} />
        <meta name="keywords" content={data[0]?.seo_keywords} />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>
      <Styles>
        <Header />

        <Template title={data[0]?.title} img={bgImg?.image_url} />

        <section className="templateOne templateHeading py-5 pt-0">
          <Container>
            <Row>
              <Col md="12">
                <div className="sec-para">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data[0]?.content,
                    }}
                  ></p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="templateHeading highLights">
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

        <section className="templateHeading bg-white py-5">
          <Container>
            {gallery.length > 0 && (
              <div className="gallery">
                <Row>
                  {gallery.length > 0 &&
                    gallery.map((row, idx) => (
                      <Col md={4} sm={6} key={idx}>
                        <figure className="snip1527">
                          <div className="image">
                            <Image
                              width={415}
                              height={280}
                              className="img-fluid"
                              src={row?.image_url}
                              alt={row?.title}
                            />
                          </div>
                          <figcaption>
                            <h3> {row?.title} </h3>
                          </figcaption>
                        </figure>
                      </Col>
                    ))}
                </Row>
              </div>
            )}
          </Container>
        </section>

        <section className="templateHeading templateOne py-4">
          <Container>
            <Row>
              <Col md="12">
                <div className="sec-Enroll mt-0">
                  {data[0]?.why_enroll && (
                    <div className="whyEnroll mb-4">
                      <div className=" text-left sec-title color-red">
                        <h2 className="pb-4 pt-md-3">Why Enrol? </h2>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data[0]?.why_enroll,
                        }}
                      ></p>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="templateOne templateHeading bg-white py-5">
          <Container>
            <Row>
              <Col md="12">
                <div className="mb-3">
                  {data.facultydetail?.length > 0 && (
                    <div className="row">
                      <Col md="12">
                        <div className=" text-left sec-title color-red">
                          <h2 className="text-dark pb-2"> Faculty Members</h2>
                        </div>

                        <div className="newFac">
                          {data[0]?.faculty_intro && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: data[0]?.faculty_intro,
                              }}
                            ></p>
                          )}
                        </div>
                      </Col>
                      <Col md="12">
                        <Row>
                          {data.facultydetail.map((i, idx) => {
                            return (
                              <Col className="col-6 my-2" md="3" key={idx}>
                                <Card>
                                  <Link
                                    state={{ id: i.id }}
                                    href={`/faculty/profile/${i.title
                                      .split(" ")
                                      .join("-")}`}
                                    style={{
                                      fontSize: "14px",
                                      color: "black",
                                      fontWeight: 600,
                                    }}
                                  >
                                    <Image
                                      width={304}
                                      height={380}
                                      variant="top"
                                      src={i.imageurl}
                                      className="img-responsive"
                                      alt=""
                                    />
                                    <Card.Body className="text-center">
                                      <h5 className="proTitle"> {i.title} </h5>
                                      <p className="font-300">
                                        {i.designation}
                                      </p>
                                    </Card.Body>
                                  </Link>
                                  <div className="facDetail">
                                    <p> {i.intro} </p>
                                  </div>
                                </Card>
                              </Col>
                            );
                          })}
                        </Row>
                      </Col>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="templateOne bgSearch templateHeading py-4">
          <Container>
            <Row>
              <Col md="12">
                {data[0]?.researchpart1 && (
                  <div className="research mb-4">
                    <div className=" text-left sec-title">
                      <h2 className="text-white py-3"> Research</h2>
                    </div>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: data[0]?.researchpart1,
                      }}
                    ></p>
                  </div>
                )}
              </Col>
              <Col md="12">
                {data[0]?.researchpart2 && (
                  <div className="research mb-4">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data[0]?.researchpart2,
                      }}
                    ></p>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </section>

        <section className="templateOne templateHeading py-5 bg-white">
          <Container>
            <Row>
              <Col md="12">
                {data[0]?.placement && (
                  <div className="placements mb-4">
                    <div className=" text-left sec-title color-red">
                      <h2 className=" py-3"> Placements</h2>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data[0]?.placement,
                      }}
                    ></p>
                  </div>
                )}
              </Col>
              {data.companydetail.length > 0 && (
                <div className="placements mb-4">
                  <div className="comapnies-cards">
                    <Row>
                      {data.companydetail &&
                        data.companydetail.map((com, idx) => {
                          return (
                            <Col
                              lg={2}
                              md={2}
                              sm={2}
                              className="mb-2 col-4"
                              key={idx}
                            >
                              <Card>
                                <Image
                                  width={150}
                                  height={75}
                                  variant="top"
                                  title={com?.title}
                                  alt={com?.title}
                                  src={com?.imageurl}
                                />
                              </Card>
                            </Col>
                          );
                        })}
                    </Row>
                  </div>
                </div>
              )}
            </Row>
          </Container>
        </section>

        <section className="templateHeading py-5">
          <Container>
            {Numbers.length > 0 && (
              <div className="gallery mb-4">
                <div className=" text-left sec-title color-red">
                  <h2 className=" py-3"> Gallery</h2>
                </div>
                <Row>
                  {Numbers.length > 0 &&
                    Numbers.map((row, idx) => (
                      <Col md={3} sm={6} key={idx}>
                        <figure className="snip1527">
                          <div className="image">
                            <Image
                              width={306}
                              height={204}
                              className="img-fluid"
                              src={row?.image_url}
                              alt={row?.content}
                            />
                          </div>
                          <figcaption>
                            <h3> {row?.content} </h3>
                          </figcaption>
                        </figure>
                      </Col>
                    ))}
                </Row>
              </div>
            )}
          </Container>
        </section>

        {data.testimonialdetails?.length > 0 && (
          <section className="templateOne testimonial-aca templateHeading bg-white py-5">
            <Container>
              <div className=" text-left sec-title color-red">
                <h2 className=" py-3"> Student Voices</h2>
              </div>
              <Row>
                <Col md="12">
                  {data.testimonialdetails && (
                    <Slider {...settings}>
                      {data.testimonialdetails?.map((item, i) => (
                        <div className="userDetailCard" key={i}>
                          <div className="row">
                            <figure className="cj-media-left col-4">
                              <p className="user-image">
                                <img
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

        <Footer />
      </Styles>
    </SuspenseBoundary>
  );
};

export default Academics;
