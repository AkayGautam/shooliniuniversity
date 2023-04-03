import React, { Component, Suspense, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Styless from "./style/vission-mission";
import Header from "../../components/Header";
import BreadcrumbBox from "../../components/common/Breadcrumb";
import { Styles } from "../../components/common/styles/header";
import Footer from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import SearchResearcher from "../../components/SearchResearcher";
import Head from "next/head";

export const getServerSideProps = async () => {
  const data = await fetch(
    "https://shooliniuniversity.com/media/GetVisionAPI",
    {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ auth: "shoolini@999", type: "vision", id: 79 }),
    }
  ).then((response) => response.json());

  return {
    props: {
      visiondata: data?.success[0],
    },
  };
};

const VisionMission = ({ visiondata }) => {
  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.setAttribute("pageId", 79);
    return () => {
      document.body.removeAttribute("pageId");
    };
  }, []);

  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Head>
        <title>Vision & Mission | Shoolini University</title>
        <meta name="description" content={visiondata?.seo_description} />
        <meta name="keywords" content={visiondata?.seo_keywords} />
      </Head>

      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="Vision and Mission" />

          <Styless>
            <section className="about-us">
              <Container>
                <Row>
                  <Col md="8">
                    <div className="cuCourse">
                      <Row>
                        <Col md="12">
                          <div className="about-content">
                            <div
                             
                              dangerouslySetInnerHTML={{
                                __html: visiondata?.content,
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md="4">
                    <SearchResearcher />
                    <div className="sideBarNew">
                      <div className="enqForm course-search">
                          <h5 className="formName"> Admissions Open: 2023 </h5>
                      <div class="npf_wgts text-right" data-height="450px" data-w="c57c3e7d09ac9528ae58dc877386a87f"></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <Footer />
          </Styless>
        </div>
      </Styles>
    </Suspense>
  );
};

export default VisionMission;
