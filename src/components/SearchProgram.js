import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Styles } from "./common/styles/searchFilter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";

export const SearchProgramApi = async () => {
  console.log("SearchProgramApi");
  const reqType = ["undergraduate", "postgraduate", "doctor"];
  const reqPromise = Array(3)
    .fill()
    .map((_, i) => {
      const body = JSON.stringify({
        auth: "shoolini@999",
        [reqType[i]]: i + 1,
      });
      return fetch("https://shooliniuniversity.com/media/programAPI", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
    });

  const [pgdata, gdata, ddata] = await Promise.all(reqPromise);

  const result_pg = await pgdata.json();
  const result_g = await gdata.json();
  const result_d = await ddata.json();



  const result = {
    result_pg: result_pg.success,
    result_g: result_g.success,
    result_d: result_d.success,
  };
  
  return result;
};



const SearchProgram = () => {
  const [searchProgram, setSearchProgram] = useState({
    result_pg: [],
    result_g: [],
    result_d: [],
  });
  const [prog, setProg] = useState();

  useEffect(() => {
    console.log("useEffect");
    const fetchProgram = async () => {
      const data = await SearchProgramApi();
      setSearchProgram(data);
    };
    fetchProgram();
  }, []);

  const progchanged = (e) => {
    setProg(e.target?.value);
  };

  function PgradCoursesList(props) {
    return (
      <div className="d-md-flex form-control mt-md-4">
        <select className="selectpicker" value={prog} onChange={progchanged}>
          <option value="">Select program</option>
          {searchProgram.result_pg?.map((data, index) => (
            <option key={index} value={data?.slug}>
              {data?.title}
            </option>
          ))}
        </select>
        <span className="input-msg2"></span>
        <Link href={`/${prog ? prog : ""}`} className="detailView">
          <i className="las la-eye mr-2"></i> View Details
        </Link>
      </div>
    );
  }

  function GradCoursesList(props) {
    return (
      <div className="d-md-flex form-control mt-md-4">
        <select className="selectpicker" value={prog} onChange={progchanged}>
          <option value="">Select program</option>
          {searchProgram.result_g?.map((data, index) => (
            <option key={index} value={data?.slug}>
              {data?.title}
            </option>
          ))}
        </select>
        <span className="input-msg2"></span>
        <Link href={`/${prog ? prog : ""}`} className="detailView">
          <i className="las la-eye mr-2"></i> View Details
        </Link>
      </div>
    );
  }

  function Doctoral(props) {
    return (
      <div className="d-md-flex form-control mt-md-4">
        <select className="selectpicker" value={prog} onChange={progchanged}>
          <option value="">Select program</option>
          {searchProgram.result_d?.map((data, index) => (
            <option key={index} value={data?.slug}>
              {data?.title}
            </option>
          ))}
        </select>
        <span className="input-msg2"></span>
        <Link href={`/${prog ? prog : ""}`} className="detailView">
          <i className="las la-eye mr-2"></i> View Details
        </Link>
      </div>
    );
  }

  return (
    <Styles>
      <section className="searchForm search-form-area">
        <Container>
          <Form id="form2" className="form">
            <Row>
              <Col md="4">
                <div className="formName">
                  <h4> Find Your Program</h4>
                </div>
              </Col>
              <Col
                className="col-md-8 flex-wrap align-items-center col-12"
                md="8"
              >
                <Row className="">
                  <Col md="12">
                    <div className="progTabs">
                      <Tabs>
                        <TabList>
                          <Tab>Undergraduate</Tab>
                          <Tab>Postgraduate</Tab>
                          <Tab>Doctoral</Tab>
                        </TabList>
                        <TabPanel>
                          <div className="CourseList w-100">
                            <PgradCoursesList />
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div className="CourseList w-100">
                            <GradCoursesList />
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div className="CourseList w-100">
                            <Doctoral />
                          </div>
                        </TabPanel>
                      </Tabs>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
    </Styles>
  );
};

export default SearchProgram;
