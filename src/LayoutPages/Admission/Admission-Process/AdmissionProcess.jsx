import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import BreadcrumbBox from "../../../components/common/Breadcrumb";
import { Styles } from "../../../components/common/styles/header";
import Footer from "../../../components/Footer";
import { Styless } from "./style/admission-process";
import { Container, Row, Col, Card } from "react-bootstrap";
import SearchResearcher from "../../../components/SearchResearcher";
import Link from "next/link";
import SuspenseBoundary from "../../../helper/SuspenseBoundary";
import Head from "next/head";
import Image from "next/legacy/image";

const AdmissionProcess = ({ data, ldJson }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const fixImg = () => {
      let arr = [];
      document.querySelectorAll("img").forEach((i) => {
        if (i.src.indexOf("storage") !== -1 || i.src.indexOf("media") !== -1) {
          arr.push(i);
        }
      });
      for (let i of arr) {
        console.log(i);
        i.src = i.src.replace(
          window.location.origin,
          "https://shooliniuniversity.com/media"
        );
      }
    };
    setTimeout(() => {
      fixImg();
    }, 1000);
  });

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  })

  return (
    <SuspenseBoundary>
      <Head>
        <title>{data[0][0].seo_title}</title>
        <meta name="description" content={data[0][0].seo_description} />
        <meta name="keywords" content={data[0][0].seo_keywords} />
        {ldJson && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
          />
        )}
      </Head>

      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title={data[0][0]?.title} />


          
          <Styless>
            <section className="admidsionProcess my-5 pt-3 ">
              <div className="about__area about__area_one p-relative pt---100 pb---120 mb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="section-title titleAdjust">
                        {/* <h4>About Us</h4> */}
                        {/* <h3>{data[0][0]?.title}</h3> */}
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data[0][0]?.content,
                          }}
                        ></p>
                        {data[0][0].content_boxes && (
                          <Row className="mb-5">
                            {JSON.parse(data[0][0].content_boxes).length ===
                            1 ? (
                              <>
                                {JSON.parse(data[0][0].content_boxes).map(
                                  (i, index) => (
                                    <Col key={index} md={12}>
                                      <figure class="snip1527">
                                        <div class="image">
                                          <Image
                                            width={416}
                                            height={248}
                                            className="img-fluid"
                                            src={i.image_url}
                                            alt="pr-sample23"
                                          />
                                        </div>
                                        {i?.title && (
                                          <figcaption>
                                            <h3> {i?.title} </h3>
                                            <p>{i?.content}</p>
                                          </figcaption>
                                        )}
                                      </figure>
                                    </Col>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                                {JSON.parse(data[0][0].content_boxes).map(
                                  (item, index) => {
                                    if (!item.image_url) return null;
                                    return (
                                      <React.Fragment key={index}>
                                        {item.url ? (
                                          <Col md={6} sm={12}>
                                            <Link
                                              href={
                                                "/" +
                                                item.url.replace(
                                                  "https://shooliniuniversity.com",
                                                  ""
                                                )
                                              }
                                            >
                                              <figure class="snip1527">
                                                <div class="image">
                                                  <Image
                                                    width={416}
                                                    height={248}
                                                    className="img-fluid"
                                                    src={item.image_url}
                                                    alt="pr-sample23"
                                                  />
                                                </div>
                                                <figcaption>
                                                  <h3> {item?.title} </h3>
                                                  <p>{item?.content}</p>
                                                </figcaption>
                                              </figure>
                                            </Link>
                                          </Col>
                                        ) : (
                                          <Col md={6} sm={12}>
                                            <figure class="snip1527">
                                              <div class="image">
                                                <Image
                                                  width={416}
                                                  height={248}
                                                  className="img-fluid"
                                                  src={item.image_url}
                                                  alt="pr-sample23"
                                                />
                                              </div>
                                              <figcaption>
                                                <h3> {item?.title} </h3>
                                                <p>{item?.content}</p>
                                              </figcaption>
                                            </figure>
                                          </Col>
                                        )}
                                      </React.Fragment>
                                    );
                                  }
                                )}
                              </>
                            )}
                          </Row>
                        )}
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data[0][0]?.content_below_boxes,
                          }}
                        ></p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="sidebar-content nnn">
                        <SearchResearcher />
                      </div>

                      <div className="sideBarNew">
                      <div className="enqForm course-search">
                          <h5 className="formName"> Admissions Open: 2023 </h5>
                          <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                   
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Container>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[0][0]?.youtube,
                  }}
                ></div>
              </Container>
            </section>
          </Styless>

          <Footer />
        </div>
      </Styles>
    </SuspenseBoundary>
  );
};

export default AdmissionProcess;
