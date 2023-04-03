import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./common/styles/shooliniAdvantage";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import Image from "next/legacy/image";
import { FiArrowRightCircle } from "react-icons/fi";

const ShooliniAdvantage = () => {
  return (
    <>
      <Styles>
        <section className="thinkLearning pt-md-2">
          <div className="container">
            <Container>
            
            </Container>

            <Row>

            <Col md="6" lg="6">
            {/* <div className="sec-title mb-3">
                <h2>Think Learning </h2>
                <h4> at a world-class university </h4>
              </div> */}

                <div className="learningCard mt-md-5">
                  <h3 className="subHeading"> The Shoolini Advantage </h3>
                  <div className="course-details-feature">
                    <ul className="list-unstyled feature-list">
                      <li>
                        <a
                          target="_blank"
                          href="https://research.shooliniuniversity.com/"
                          rel="noreferrer"
                        >
                          <span> Engage in Real Research</span>
                          <span>
                            <IoIosArrowDropright />
                          </span>
                        </a>
                      </li>
                      <li>
                        <Link href="/placements">
                          <span> Placements with top Companies </span>
                          <span>
                            <IoIosArrowDropright />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="https://shooliniuniversity.com/srp/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Flagship BTech Biotech Program</span>
                          <span>
                            <IoIosArrowDropright />
                          </span>
                        </a>
                      </li>
                      <li>
                        <Link href="/coursera-learning-for-campus">
                          <span> Coursera Offers World-Class Learning </span>
                          <span>
                            <IoIosArrowDropright />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/opportunity-to-study-abroad">
                          <span> Study Abroad Under 2+2 Program </span>
                          <span>
                            <IoIosArrowDropright />
                          </span>
                        </Link>
                      </li>

                      
                      <li>
                        <a
                          href="https://shooliniuniversity.com/VE-coaching/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Self-Discovery Through VE-V Empower</span>
                          <span>
                            <IoIosArrowDropright />
                          </span>
                        </a>
                      </li>
                      

                      <li>
                        <Link href="/shoolini-university-key-faculty">
                          <span>Learn From the Best</span>
                          <span>
                            <IoIosArrowDropright />
                          </span>
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/shoolini-implements-nep-driven-curriculum">
                          <span>NEP-Driven Curriculum</span>
                          <span>
                            <IoIosArrowDropright />
                          </span>
                        </Link>
                      </li> */}

                    
                    </ul>
                  </div>
                </div>
              </Col>
              
              <Col className="bg-red" lg="6" md="6">
              <div className="sec-title mb-5">
                <h2 className="text-white"> Think International </h2>
                <h4 className="text-white"> Global Learning Opportunities </h4>
              </div>

                {/* <div className="su_img">
                  <Image
                    width={860}
                    height={500}
                    src="/assets/images/su-learning.jpg"
                    className="img-fluid"
                    alt="su-img"
                  />
                </div> */}

<div className="text-white pd-right sec-title z-index-9">
                <Link href="/international-students" className="text-white">

                {/* <div className="sec-title mb-5">
                <h2> </h2>
                <h4> Global Learning Opportunities </h4>
              </div> */}
             
                 
                  <p className="text-white text-lg">
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
          </div>
        </section>
      </Styles>
    </>
  );
};

export default ShooliniAdvantage;
