import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import BreadcrumbBox from "../../components/common/Breadcrumb";
import { Styles } from "../../components/common/styles/header";
import Footer from "../../components/Footer";
import { Styless } from "./style/FacultyAll";
import { Container, Row, Col, Card } from "react-bootstrap";
import CourseSearch from "../Programmes/CourseSearch";
import Link from "next/link";
import SuspenseBoundary from "../../helper/SuspenseBoundary";
import Head from "next/head";
import Image from "next/legacy/image";

const FacultyAll = ({ id, data, ldJson }) => {
  const [jsonLd, setJsonLd] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
  }, [id]);

  useEffect(() => {
    setJsonLd(ldJson);
  }, [ldJson]);

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  
  })


  return (
    <SuspenseBoundary>
      <Head>
        <title>{data.seo_title}</title>
        <meta name="description" content={data.seo_description} />
        <meta name="keywords" content={data.seo_keywords} />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page dddddddd">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title={data?.title} />
          <Styless>
            <section className="admidsionProcess my-5 pt-3 ">
              <div className="about__area about__area_one p-relative pt---100 pb---120 mb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="section-title titleAdjust">
                        {/* <h4>About Us</h4> */}
                        <h3 className="">{data?.title}</h3>

                        <p
                          dangerouslySetInnerHTML={{
                            __html: data?.content_above,
                          }}
                        ></p>
                      </div>

                      {data?.facultyall && (
                        <div className="row">
                          {data?.facultyall?.map((item, index) => {
                            return (
                              <div className="col-md-12" key={index}>
                                <div className="facPage">
                                  <h3>{item?.stream_name}</h3>
                                </div>

                                <div className="row">
                                  {item?.faculty.map((fac, index) => {
                                    return (
                                      <div
                                        className="col-md-3 mb-3"
                                        key={index}
                                      >
                                        <div className="cnt-block mm facAll equal-hight">
                                          <figure>
                                            <Image
                                              width={196}
                                              height={245}
                                              src={`https://shooliniuniversity.com/media/${fac.image}`}
                                              className="img-responsive"
                                              alt=""
                                            />
                                          </figure>
                                          <h3 className="nameSpace">
                                            <Link
                                              href={`/faculty/profile/${fac.name
                                                .split(" ")
                                                .join("-").split(".").join("")}`}
                                            >
                                              {fac.name}
                                            </Link>
                                          </h3>

                                          <p>
                                            {fac?.designation +
                                              " " +
                                              fac?.description}
                                          </p>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div className="col-md-4">
                      <div className="sidebar-content nnn">
                        <CourseSearch />
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
            </section>
          </Styless>

          <Footer />
        </div>
      </Styles>
    </SuspenseBoundary>
  );
};

export default FacultyAll;
