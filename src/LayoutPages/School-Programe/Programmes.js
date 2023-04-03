import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./style/programmes";
import FindPrograme from "../../components/FindPrograme";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";



const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
    },
    {
      breakpoint: 10000,
      settings: "unslick",

    },
  ],
};

const Programmes = ({ programs }) => {
  const router = useRouter();

  console.log('hii', programs)

  return (
    <>
      <Styles>
        <section className="programme-area">
          <Container>
            <Row>
              <Col md="12">
                <div className="sec-title mb-4 pb-md-4 pt-md-4">
                  <h2>Think Learning </h2>
                  <h4> at a world-class university </h4>
                </div>
              </Col>
              <Col lg="10" md="12">
                <Row>
                  <Slider {...settings}>
                    {programs?.map((data, index) => {
                      return (
                        <Fragment key={index}>
                          <div id={data?.slug} className="col-md-4">
                            <div className="programme_card">
                              <div className="programme_detail">
                              <h3> {data?.title} </h3>
                                <ul className="programme_list">
                                  {data.courses &&
                                    data.courses.map((i, idx) => {
                                      return (
                                        <li key={idx}>

                                          {data.title == "Computer Science Engineering" ? (
                                            <Link state={{ school: true }}
                                              href="/engineering-courses"
                                              className="nav-link dropdown-toggle"
                                            >
                                              {i.title}
                                            </Link>
                                          ) : <>

                                            {data.title == "Core Engineering"
                                              ? <Link state={{ school: true }}
                                              href="/engineering-courses"
                                                className="coreEngg nav-link dropdown-toggle"
                                              >
                                                {i.title}
                                              </Link>
                                              : <Link state={{ school: true }}
                                              href={`courses/${data?.link_url}`}
                                              className="nav-link dropdown-toggle"
                                              data-toggle="dropdown"
                                            >
                                              {i.title}
                                            </Link>
                                            }

                                          </>

                                          }

                                          {/* <Link
                                            href={`/courses/${data?.link_url}`}
                                            state={{ school: true }}
                                          >
                                            {i.title}
                                          </Link> */}
                                        </li>
                                      );
                                    })}
                                </ul>
                                <div className="featured_img">
                                {data.title == "Computer Science Engineering" ? (
                                            <Link state={{ school: true }}
                                              href="/engineering-courses"
                                              className="nav-link dropdown-toggle"
                                            >
                                               See All Programs
                                            </Link>
                                          ) : <>

                                            {data.title == "Core Engineering"
                                              ? <Link state={{ school: true }}
                                              href="/engineering-courses"
                                                className="coreEngg nav-link dropdown-toggle"
                                              >
                                                 See All Programs
                                              </Link>
                                              : <Link state={{ school: true }}
                                              href={`courses/${data?.link_url}`}
                                              className="nav-link dropdown-toggle"
                                              data-toggle="dropdown"
                                            >
                                              See All Programs
                                            </Link>
                                            }

                                          </>

                                          }
                                </div>


                                {/* <div className="featured_img">
                                  <Link href={`/courses/${data?.link_url}`}>
                                    See All Programs
                                  </Link>


                                </div> */}
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </Slider>
                </Row>
              </Col>

              <Col md="12">
                <FindPrograme />
              </Col>
            </Row>
          </Container>
        </section>
      </Styles>
    </>
  );
};

export default Programmes;
