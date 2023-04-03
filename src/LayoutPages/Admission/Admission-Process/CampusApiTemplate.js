import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import BreadcrumbBox from "../../../components/common/Breadcrumb";
import { Styles } from "../../../components/common/styles/header";
import Footer from "../../../components/Footer";
import { Styless } from "./style/admission-process";
import { Container, Row, Col, Card } from "react-bootstrap";
import { resetMetaTags, setMetaTags } from "../../../helper/setMetaTags";
import Image from "next/legacy/image";
import Head from "next/head";

const ShooliniAdmission = ({ id, ldJson }) => {
  const [jsonLd, setJsonLd] = useState({});

  React.useEffect(() => {
    window.location.replace("https://admissions.shooliniuniversity.com/");
  }, []);
  useEffect(() => {
    setJsonLd(ldJson);
  }, [ldJson]);

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://widgets.nopaperforms.com/emwgts.js";
  document.body.appendChild(s);

  const [Data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [columns_top, setColumns_top] = useState([]);
  const [images, setImages] = useState([]);

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
        "https://shooliniuniversity.com/media/"
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      fetch(`https://shooliniuniversity.com/media/AdmissionAPI`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: JSON.stringify({ auth: "shoolini@999", id }),
      })
        .then((res) => res.json())
        .then((res) => {
          // console.log(res.success[0])
          if (res.success) {
            setData(res.success);
            setMetaTags(res.success);

            if (res.success.columns_top)
              setColumns_top(JSON.parse(res.success.columns_top));
            console.log(res.success);
            setImages(JSON.parse(res.success.content_boxes));
            document.title = `${res?.success.title} | Shoolini University`;
            document.body.setAttribute("id", `pageid-${id}`);
          }
        });

      return () => {
        resetMetaTags();
        document.title = `Shoolini University`;
        document.body.removeAttribute("id");
      };
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  return (
    <>
      <Head>
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title={Data?.title} />
          <Styless>
            <section className="admidsionProcess my-5 pt-3 ">
              <div className="about__area about__area_one p-relative pt---100 pb---120 mb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="section-title olList titleAdjust tables">
                        {/* <h4>About Us</h4> */}
                        <h3>{Data?.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: Data?.content,
                          }}
                        ></p>
                      </div>

                      <div className="row">
                        <h1 className="text-center">{Data?.columns_heading}</h1>
                        {columns_top.map((item, index) => (
                          <div className="col-md-4" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                          </div>
                        ))}
                      </div>
                      <div className="row">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: Data?.content_boxes,
                          }}
                        ></p>
                        {images.length > 0 && (
                          <Row>
                            {images.map((item, index) => {
                              return (
                                <Col md={12} sm={12} key={index}>
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
                                    </figcaption>
                                  </figure>
                                </Col>
                              );
                            })}
                          </Row>
                        )}
                      </div>
                    </div>

                    {/* <div className="col-md-4">
                      <div className="sidebar-content nnn">
                        <CourseSearch />
                      </div>

                      <div className="sideBarNew">
                        <div className="enqForm">
                          <div
                            className="npf_wgts"
                            data-height="500px"
                            data-w="7d1b402b547afa4d6a10968170a856b6"
                          ></div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <Container>
                <div
                  dangerouslySetInnerHTML={{
                    __html: Data?.youtube,
                  }}
                ></div>
              </Container> */}
            </section>
          </Styless>

          <Footer />
        </div>
      </Styles>
    </>
  );
};

export default ShooliniAdmission;
