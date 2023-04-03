/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Styles } from "./styles/event.js";
import Image from "next/legacy/image";
import Link from "next/link";

const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 500,
  rows: 3,
  vertical: true,
  verticalSwiping: true,
  adaptiveHeight: true,
  variableHeight: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        rows: 1,
      },
    },
  ],
};

const Events = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://shooliniuniversity.com/media/eventAPI", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: "auth=shoolini@999",
    })
      .then((response) => response.json())
      .then((res) => setData(res?.success))
      .catch((error) => console.error(error));
  }, []);

  const dateFormat = (date) => {
    var options = { year: "numeric", month: "long", day: "numeric" };
    var today = new Date(date);
    return today.toLocaleDateString("en-US", options);
  };

  console.log(data);
  return (
    <Styles>
      <section className="event-page-area event-page">
        <Container>
          <Row>
            <Col lg="12" md="12">
              <Slider {...settings}>
                {data?.map((data) => (
                  <div className="post-list-item col-md-12 px-2" key={data?.id}>
                    <div className="event-item ">
                      <div className="event-item-inner">
                        <div className="event-item-thumbnail">
                          <a href={data?.weburl} title="Mobile Games Battle">
                            <div className="vfvfv placeholder-thumbnail-bg">
                              <img
                                src={data?.imgurl}
                                alt={data?.title}
                                width={150}
                                height={150}
                                loading="lazy"
                              />
                            </div>
                          </a>
                        </div>

                        <div className="event-item-content">
                          <h4 className="event-title font-2">
                            <a href={data?.weburl}>
                              {(data?.title).replace("%", "-")}
                            </a>
                          </h4>
                          <div className="event-meta small-meta">
                            <span>
                              <i className="lnr lnr-calendar-full"></i>
                              {dateFormat(data?.date)}
                            </span>
                          </div>
                          <div className="event-excerpt">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: data?.content,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="text-center-button">
                <Link href="/all-events">Past Events</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default Events;
