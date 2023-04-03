import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Container, Row, Col, Card as Cards } from "react-bootstrap";
import { BreadcrumbBox } from "../../../components/common/Breadcrumb";
import { Styless } from "../../../components/common/styles/FacultyOfAgriculture";
import SearchResearcher from "../../../components/SearchResearcher";
import AdmissionFormSidebar from "../../../components/AdmissionFormSidebar";
import SuspenseBoundary from "../../../helper/SuspenseBoundary";
import Head from "next/head";

const BASE_URI = "https://shooliniuniversity.com/media";

const fetchData = async (id) => {
  return fetch(`${BASE_URI}/GetFacultyDetailsAPI`, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      auth: "shoolini@999",
      fid: id,
    }),
  }).then((response) => response.json());
};

const fetchId = async (name) => {
  return fetch(`${BASE_URI}/GetFacultyID`, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      auth: "shoolini@999",
      slug: name,
    }),
  }).then((response) => response.json());
};

export const getServerSideProps = async (ctx) => {
  const name = ctx.query.name;

  const id = await fetchId(name);

  const data = await fetchData(id?.success[0]?.facultyid);

  return {
    props: {
      name,
      data: data.success[0][0],
    },
  };
};

const FacultyProfile = ({ id, data, Data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.setAttribute("pageId", id);
    return () => {
      document.body.removeAttribute("pageId");
    };
  }, [id]);

  return (
    <SuspenseBoundary>
      <Head>
        <title>{data.seo_title}</title>
        <meta name="description" content={data.seo_description} />
        <meta name="keywords" content={data.seo_keywords} />
      </Head>

      <div className="main-wrapper course-details-page">
        {/* Header 2 */}
        <Header />

        {/* Breadcroumb */}
        <BreadcrumbBox title={data.name} />
        <Styless>
          <section className="course-details-area our-webcoderskull">
            <Container>
              <Row>
                <Col lg="8" md="8" sm="12">
                  <>
                    <Row>
                      <Col lg="3" md="3">
                        <figure className="m-0">
                          <img
                            src={data.imageurl}
                            className="img-responsive"
                            style={{ width: "100%", borderRadius: "8px" }}
                            alt=""
                          />
                        </figure>
                      </Col>
                      <Col lg="9" md="9">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data.intro,
                          }}
                        ></p>
                      </Col>
                    </Row>

                    <div className="gallery myPub">
                      <h3>Publication</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.publications,
                        }}
                      />
                    </div>
                  </>
                </Col>

                <Col lg="4" md="4" sm="12">
                  <div className="single-details-sidbar">
                    <SearchResearcher />
                  </div>
                  <AdmissionFormSidebar />
                </Col>
              </Row>
            </Container>
          </section>
        </Styless>

        {/* Footer 2 */}
        <Footer />
      </div>
    </SuspenseBoundary>
  );
};

export default FacultyProfile;
