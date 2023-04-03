import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Styles } from "./common/styles/stories";
import { FiArrowRightCircle } from "react-icons/fi";
import Link from "next/link";

const ResearchStories = () => {
  return (
    <>
      <Styles>
        <section className="stories-area">
          <Row className="m-0">
            <Col className="full-wrap-red pl-4s" md="6">
              <div className="sec-title z-index-9">
                <h2 className="text-white">Think Research </h2>
                <p className="whyUsSubText text-white">
                  that matches the world’s best universities
                </p>

                <ul className="whyUs text-white pl-0">
                  <li>1300+ Patents Filed </li>
                  <li> H-index {">"} 100</li>
                  <li>Field Weighted Citation Impact (FWCI) 2.22 </li>
                  <li>No.1 In India in Citations Per Paper </li>
                  <li> 104+ State-of-the-Art Laboratories </li>
                  <li> 9 Centres of Excellence </li>
                  <li> 2 Shoolini Researchers among Top 1% Scientists </li>
                </ul>
                <a
                  target="_blank"
                  className="iconArrL"
                  href="https://research.shooliniuniversity.com/"
                  rel="noreferrer"
                >
                  Learn Why We are A Top-ranked Research University
                  <FiArrowRightCircle />
                </a>
              </div>
            </Col>
            <Col className="bgImgSU" md="6">
              <div className="ml-4s StoriesData">
                <a
                  target="_blank"
                  href="https://shooliniuniversity.com/blog/drumstick-seeds-potential-replacement-for-water-purifiers/"
                  rel="noreferrer"
                >
                  <h4> Portable water Purifier </h4>
                  <p className="text-white">
                    Learn how a Shoolini researcher’s innovation to provide
                    clean drinking water is changing the world
                  </p>
                </a>
              </div>
              <a
                className="iconArr"
                target="_blank"
                href="https://shooliniuniversity.com/blog/drumstick-seeds-potential-replacement-for-water-purifiers/"
                rel="noreferrer"
              >
                <FiArrowRightCircle />
              </a>
            </Col>
          </Row>
        </section>
        {/* <section className="stories-area p-0 bg-area2">
          <Row className="m-0">
            <Col className="bgImgSU2" md="6"></Col>
            <Col className="full-wrap-red  pl-4s" md="6">
              <div className="text-white pd-right sec-title z-index-9">
                <Link href="/international-students" className="text-white">
                  <h2 className="text-white">Think International</h2>

                  <h3> Global Learning Opportunities </h3>
                  <p>
                    Over the past decade, Shoolini has built a worldwide network
                    of partner universities to foster exchange opportunities,
                    collaborative academic programs, faculty engagement and
                    research, and other activities. Shoolini offers study abroad
                    opportunities with scholarships to top universities in USA,
                    Australia, UK, South Korea, Taiwan, Japan, and Italy, among
                    others.
                  </p>
                </Link>
                <Link
                  href="/international-students"
                  className="iconArrL btnRedaas p-0"
                >
                  Apply Now <FiArrowRightCircle />
                </Link>
              </div>
            </Col>
          </Row>
        </section> */}
      </Styles>
    </>
  );
};

export default ResearchStories;
