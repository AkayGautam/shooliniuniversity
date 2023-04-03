import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Styles } from "./common/styles/impact";
import Link from "next/link";
import Image from "next/legacy/image";
const Events = dynamic(() => import("../LayoutPages/events/Events"));

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
};

const ShooliniImpact = (props) => {
  const [newsdata, setNewsdata] = useState([]);

  useEffect(() => {
    fetch("https://shooliniuniversity.com/media/LatestewsAPI", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ auth: "shoolini@999" }),
    })
      .then((response) => response.json())
      .then((res) => setNewsdata(res?.success?.slug));
  }, []);

  return (
    <>
      <Styles>
        <section className="impact-box-area py-5">
          <Container>
            <Row>
              <Col md="7" lg="6">
                <div className="sec-title mb-5 text-left">
                  <h2>Shoolini Impact </h2>
                </div>

                <div className="impactSUs">
                  <div className="imSUtext">
                    <Slider {...settings}>
                      {newsdata?.map((data, i) => (
                        <div key={i}>
                          <div className="team-item">
                            <div className="dflex-card fixHeight">
                              <Link href={`news/${data?.slug}`}>
                                <Image
                                  width={800}
                                  height={500}
                                  src={data?.imageurl?.split(" ").join(" ")}
                                  alt=""
                                />
                              </Link>
                            </div>

                            <div className="IMDetail">
                              <h5>{data.title}</h5>
                              <p
                                className="textLimit3"
                                dangerouslySetInnerHTML={{
                                  __html: data.excerpt,
                                }}
                              ></p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>

                    <div className="moreNews">
                      <Link target="_blank" href="/news">
                        Explore More News
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="5" lg="6">
                <div className="sidebarText">
                  {/* <ul className="p-0 m-0">
                    {newsdata?.map((data, i) => (
                      <li key={i} data-aos="fade-up">
                        <Link href={`news/${data?.slug}`}>
                          <div className="listO">
                            <div> 
                            <h5> {data.title} </h5>
                            <p> {data.excerpt} </p>
                            </div>
                            <Image
                              width={100}
                              height={80}
                              src={data?.imageurl?.split(" ").join(" ")}
                              alt=""
                              className=""
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul> */}

                  <div className="sec-title mb-5 text-left">
                    {/* <h2>Past Events </h2> */}
                  </div>

                  <Events />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Styles>
    </>
  );
};

export default ShooliniImpact;
