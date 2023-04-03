import React, { Suspense, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../components/Header'
import Datas from '../../data/about-us/about-us.json'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import Head from 'next/head'
//import SearchProgram from '../../components/SearchProgram'
// import SearchProgramShort from '@/components/SearchProgramShort'
import SelectCourse from '../../components/SelectCourse'

import Styless from './css/courses.js'
const Courses = () => {
    return (
        <>

            <Suspense
                fallback={
                    <div className="loading">
                        <div className="lds-dual-ring"></div>
                    </div>
                }
            >

                <Head>
                    <title>Courses | Shoolini University</title>
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                </Head>

                <Styles>
                    {/* Main Wrapper */}
                    <div className="main-wrapper about-page">
                        {/* Header 2 */}
                        <Header />

                        {/* Breadcroumb */}
                        <BreadcrumbBox title="Courses" />

                        <Styless> 
                            <section className="my-4 about-us">
                                <Container>
                                    <Row>

                                        <Col md="8">

                                            <div className="searchProgram mt-4">
                                            <h3> Discover your Perfect Program </h3>
                                                <p> Choose from 150+ graduate, postgraduate, and doctoral programs at Shoolini University, the No.1 Private University in India (Times Higher Education World University Rankings 2023). This top research university offers leading-edge programs across various streams such as Engineering, Management, Commerce, Pharmacy, Law, Agriculture, Liberal Arts, Sciences, Media & Journalism, and Hospitality.  </p>

                                                <p>
                                                   <strong>  <em> Hi-tech classrooms, 104+ advanced laboratories, and top research facilities provide a dynamic learning environment for your career journey.</em> </strong>
                                                </p>

                                                <h3> Highlights </h3>

                                                <ul className="hlList">

                                                   <li>	No. 1 Research University (QS World University Rankings, Asia, 2023). </li>
                                                   <li>	World-class faculty with professional portfolios.</li>
                                                   <li>	250+ International Tie-Ups with universities in USA, UK, Italy, Korea, Taiwan.</li>
                                                   <li>	Placements with industry giants.</li>
                                                   <li>Students receive attractive research and overseas fellowships.</li>
                                                   <li>	One-Student-one-Patent Policy.</li>
                                                   <li>	500+ Scholarships to deserving candidates for PhD, Postgraduate, Undergraduate programs.</li>

                                                </ul>
                                            </div>


                                        </Col>

                                        <Col md="4">

                                            <div className="searchProgram">  <SelectCourse /> </div>


                                        </Col>
                                    </Row>
                                </Container>
                            </section>
                        </Styless>

                        <Footer />
                    </div>
                </Styles>


            </Suspense>

        </>
    )
}

export default Courses