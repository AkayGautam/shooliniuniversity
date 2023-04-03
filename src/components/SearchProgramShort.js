import React, { Component, useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Styles } from './common/styles/searchFilter'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Link from 'next/link'

import Select from "react-select";



  
const SearchProgramShort = () => {

  
  const [pgdata, setPgata] = useState([])
  const [gdata, setGdata] = useState([])
  const [ddata, setDdata] = useState([])

  var result_pg = []
  var result_g = []
  var result_d = []

  useEffect(() => {
    fetch('https://shooliniuniversity.com/media/programAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', undergraduate: 1 }),
    })
      .then((response) => response.json())
      .then((res) => setPgata(res))
  }, [])
  // console.log(pgdata,"pgdata")

  useEffect(() => {
    fetch('https://shooliniuniversity.com/media/programAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', postgraduate: 2 }),
    })
      .then((response) => response.json())
      .then((res) => setGdata(res))
  }, [])

  useEffect(() => {
    fetch('https://shooliniuniversity.com/media/programAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', doctor: 3 }),
    })
      .then((response) => response.json())
      .then((res) => setDdata(res))
  }, [])

  result_pg = pgdata?.success
  result_g = gdata?.success
  result_d = ddata?.success

   console.log(result_g);
   console.log(result_pg);
  // console.log(result_d);

  const [prog, setProg] = useState()

  const progchanged = (e) => {
    //  console.log(prog,"prog")
    setProg(e.target?.value)
  }

  function PgradCoursesList(props) {
    return (
      <div className="d-md-flex form-control mt-md-4">
        <select className="selectpicker" value={prog} onChange={progchanged}>
          <option value="">Select program</option>
          {result_pg?.map((data, index) => (
            <option key={index} value={data?.slug}>
              {' '}
              {data?.title}
            </option>
          ))}
        </select>
        <span className="input-msg2"></span>
        <Link href={`/${prog}`}>
          <span className="detailView">
            <i className="las la-eye mr-2"></i> View Details
          </span>
        </Link>
      </div>
    )
  }

  function GradCoursesList(props) {
    return (
      <div className="d-md-flex form-control mt-md-4">
        <select className="selectpicker" value={prog} onChange={progchanged}>
          <option value="">Select program</option>
          {result_g?.map((data, index) => (
            <option key={index} value={data?.slug}>
              {' '}
              {data?.title}{' '}
            </option>
          ))}
        </select>
        <span className="input-msg2"></span>
        <Link href={`/${prog}`}>
          <span className="detailView">
            <i className="las la-eye mr-2"></i> View Details
          </span>
        </Link>
      </div>
    )
  }

  function Doctoral(props) {
    return (
      <div className="d-md-flex form-control mt-md-4">
        <select className="selectpicker" value={prog} onChange={progchanged}>
          <option value="">Select program</option>
          {result_d?.map((data, index) => (
            <option key={index} value={data?.slug}>
              {' '}
              {data?.title}{' '}
            </option>
          ))}
        </select>
        <span className="input-msg2"></span>
        <Link href={`/${prog}`}>
          <span className="detailView">
            <i className="las la-eye mr-2"></i> View Details
          </span>
        </Link>
      </div>
    )
  }



  return (
    <Styles>
      <section className="searchForm search-form-area bg-lights">
        <Container>
          <Form id="form2" className="form">
            <Row>
              <Col
                className="col-md-12 flex-wrap align-items-center col-12"
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
  )
}

export default SearchProgramShort
