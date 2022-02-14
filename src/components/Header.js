import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styles } from "./common/styles/header";
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';



const Header = () => {

    return (
        <>



            <Styles>
                <section className="top-bar">

                    <Container>
                        <Row>

                            <Col lg="12" md="12">
                                <div className="bar-right d-flex justify-content-end">


                                    <ul className="list-unstyled list-inline bar-login mb-0">
                                        <li className="list-inline-item"><a href="">SU Students</a></li>
                                        <li className="list-inline-item"><a href="">Alumini</a></li>
                                        <li className="list-inline-item"><a href="">Online Payment</a></li>

                                    </ul>
                                    <ul className="list-unstyled list-inline bar-lang mb-0">
                                        <li className="list-inline-item">
                                            <Dropdown>
                                                <Dropdown.Toggle as="a">Ranking<i className="las la-angle-down"></i></Dropdown.Toggle>
                                                <Dropdown.Menu as="ul">
                                                    <Dropdown.Item as="li"><a href=""> NBA </a> </Dropdown.Item>
                                                    <Dropdown.Item as="li"><a href=""> NAAC </a> </Dropdown.Item>
                                                    <Dropdown.Item as="li"><a href=""> NIRF </a> </Dropdown.Item>
                                                    <Dropdown.Item as="li"><a href=""> IQAC </a>  </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    </ul>

                                    <ul className="list-unstyled list-inline bar-social mb-0">
                                        <li className="list-inline-item"><a className="su_fb" href=""><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a className="su_twitter" href=""><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a className="su_linked" href=""><i className="fab fa-linkedin-in"></i></a></li>
                                        <li className="list-inline-item"><a className="su_insta" href=""><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>

                <section className="logo-area main-menu">
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="logo">
                                    <a to={process.env.PUBLIC_URL + "/"}><img className="brandLogo" src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></a>
                                </div>
                            </Col>
                            <Col md="9">
                                <div className="main-menu-box">
                                    <div className="menu-box d-flex justify-content-between">
                                        <ul className="nav menu-nav">
                                            <li className="nav-item dropdown active">
                                                <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Home </Link>
                                            </li>
                                            <li className="nav-item dropdown">

                                                <Link to="" className="nav-link dropdown-toggle" data-toggle="dropdown">About <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"> <Link to="/about-us" className="nav-link">About Us</Link></li>
                                                    <li className="nav-item"> <Link to="/vission-mission" className="nav-link">Vision & Mission</Link></li>
                                                    <li className="nav-item"><Link to="/history" className="nav-link">History</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="" className="nav-link dropdown-toggle" data-toggle="dropdown">Programmes <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link to="/undergraduate-programs" className="nav-link">Undergraduates</Link></li>
                                                    <li className="nav-item"><Link to="/postgraduate-programs" className="nav-link">Postgraduate</Link></li>
                                                    <li className="nav-item"><Link to="/doctoral-programs" className="nav-link">Doctoral</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="" className="nav-link dropdown-toggle" data-toggle="dropdown">Admission <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link to="/admission-process" className="nav-link">Admission Process</Link></li>
                                                    <li className="nav-item"><Link to="/scholarships" className="nav-link" >Scholarship</Link></li>
                                                    <li className="nav-item"><Link to="/shoolini-university-fee-structure" className="nav-link" >Fee Structure</Link></li>
                                                    <li className="nav-item"><Link to="/our-education-system" className="nav-link" >Our Education System</Link></li>
                                                    <li className="nav-item"><Link to="/ghs-hostels" className="nav-link" >Hostels</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="" className="nav-link">Research </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="" className="nav-link">Faculty </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/placements" className="nav-link" >Placements </Link>

                                            </li>

                                            <li className="nav-item dropdown">
                                                <Link to="" className="nav-link">Life at Shoolini </Link>
                                               
                                            </li>
                                        </ul>
                                        <ul className="nav search-cart-bar">
                                            <li className="nav-item search-box">
                                                <a href="#" className="nav-link nav-search">
                                                    <i className="las la-search text-white"></i>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Navbar */}
                <section className="main-menu">
                    <Container>
                        <Row>
                            <Col md="12">

                            </Col>
                        </Row>
                    </Container>
                </section>

                <StickyMenu />

                <MobileMenu />
            </Styles>
        </>
    )
}

export default Header
