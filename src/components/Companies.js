import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Styles } from "./common/styles/Companies";
import Image from "next/legacy/image";
import axios from "axios";

const BASE_URI = "https://shooliniuniversity.com";
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  rows: 2,
  autoplaySpeed: 1500,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        rows: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 2,
      },
    },
  ],
};

export const GetCompaniesAPI = async () => {
  const response = await axios.post(`${BASE_URI}/media/GetCompaniesAPI`, {
    auth: "shoolini@999",
    id: "all",
  });

  return response.data;
};

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const data = await GetCompaniesAPI();
      setCompanies(data?.success?.[0]?.slice(0, 40));
    };
    fetchCompanies();
  }, []);

  return (
    <Styles>
      <section className="event-page-area event-page bg-transparent py-5">
        <div className="container">
          <div className="sec-title mb-5 text-left">
            <h2 className="font-weight-bold">THINK PLACEMENTS</h2>
            <h4> Highest Package: ₹18 lakh | Average Package: ₹8 lakh </h4>
          </div>
          <Row>
            <Col lg="12" md="12">
              <Slider {...settings}>
                {companies?.map((data, idx) => (
                  <div className="team-item" key={idx}>
                    <div className="dflex-card">
                      <Image
                        alt={data.title}
                        width={174}
                        height={87}
                        src={data.imageurl}
                        title={data.title}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </section>
    </Styles>
  );
};

export default Companies;
