import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/stickyMenu";

const StickyMenu = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stickyMenu = document.querySelector(".sticky-menu");

            if (window.scrollY > 160) {
                stickyMenu.classList.add("sticky");
            } else {
                stickyMenu.classList.remove("sticky");
            }
        });
    });


    return (
        <>
             <Styles>
            {/* Sticky Menu */}
            <section className="sticky-menu">
            <Container>
                        <Row>

                        <Col md="2">
                                <div className="logo">
                                    <a to={process.env.PUBLIC_URL + "/"}><img className="brandLogo" src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></a> 
                                </div>
                            </Col>
                            <Col md="10">
                            <div className="main-menu-box">
                                    <div className="menu-box d-flex justify-content-between">
                                        <ul className="nav menu-nav">
                                            <li className="nav-item dropdown active">
                                            <Link to="/" className="nav-link dropdown-toggle"  data-toggle="dropdown">Home </Link>
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
                                                <Link to="" className="nav-link dropdown-toggle"  data-toggle="dropdown">Programmes <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link to="/undergraduate-programs" className="nav-link">Undergraduates</Link></li>
                                                    <li className="nav-item"><Link to ="/postgraduate-programs" className="nav-link">Postgraduate</Link></li>
                                                    <li className="nav-item"><Link to="/doctoral-programs" className="nav-link">Doctoral</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                            <Link to="" className="nav-link dropdown-toggle"  data-toggle="dropdown">Admission <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link to="/admission-process" className="nav-link">Admission Process</Link></li>
                                                    <li className="nav-item"><Link to="/scholarships" className="nav-link" >Scholarship</Link></li>
                                                    <li className="nav-item"><Link to="/shoolini-university-fee-structure" className="nav-link" >Fee Structure</Link></li>
                                                    <li className="nav-item"><Link to="/our-education-system" className="nav-link" >Our Education System</Link></li>
                                                    <li className="nav-item"><Link to="/ghs-hostels" className="nav-link" >Hostels</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                            <Link to="" className="nav-link dropdown-toggle"  data-toggle="dropdown">Research <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><a className="nav-link">Patents</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Research Publication</a></li>
                                                    <li className="nav-item"><a className="nav-link">Research Centres</a></li>
                                                    <li className="nav-item"><a className="nav-link">Research Lab</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                            <Link to="" className="nav-link dropdown-toggle"  data-toggle="dropdown">Faculty <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><a className="nav-link">Science</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Agriculture</a></li>
                                                    <li className="nav-item"><a className="nav-link">School of Law</a></li>
                                                    <li className="nav-item"><a className="nav-link">All Faculty List</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="/placements" className="nav-link" >Placements </Link>
                                             
                                            </li>
                                           
                                            <li className="nav-item dropdown">
                                            <Link to="" className="nav-link dropdown-toggle"  data-toggle="dropdown">Campus <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link to="/infrastructure" className="nav-link" >Infrastructure</Link></li>
                                                    <li className="nav-item"><Link to="/community-building-programmes" className="nav-link">Community Programme</Link></li>
                                                    <li className="nav-item"><Link to="/" className="nav-link" >Clubs & Socity</Link></li>
                                                    <li className="nav-item"><Link to="/sports" className="nav-link" >Sports</Link></li>
                                                    <li className="nav-item"><Link to="/" className="nav-link" >Excursions</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="nav search-cart-bar">
                                        <li className="nav-item side-box">
                                            <div className="apply-btn">
                                                <a><i className="las la-clipboard-list"></i>Apply Now</a>
                                            </div>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </section>
        </Styles> 
        </>
    )
}

export default StickyMenu
