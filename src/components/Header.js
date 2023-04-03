import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Search from "./common/Search";
import { Styles } from "./common/styles/header";
import StickyMenu from "./common/StickyMenu";
import MobileMenu from "./common/MobileMenu";
import Link from "next/link";
import EnquireForMob from "./EnquireForMob";
import ScrollButton from "../components/common/ScrollButton";
import SocialShare from "./SocialShare";
import Slider from "react-slick";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Image from "next/legacy/image";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
};

const Header = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("https://shooliniuniversity.com/media/GetTopnavAPI", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        auth: "shoolini@999",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLinks(res?.success);
      });
  }, []);

  return (
    <Styles>
      <div className="notification-top-bar">
        <Slider {...settings}>
          <div>
            <a
              target="_blank"
              href="#"
              rel="noreferrer"
            >
             First round of applications are closed. Round two opening soon. Stay tuned!
            </a>
          </div>

          {/* <div>
            <a
              target="_blank"
              href="https://shooliniuniversity.com/news/shoolini-is-no1-private-university-in-india"
              rel="noreferrer"
            >
              {" "}
              #1 Private University in India (THE Rankings) 351-400 Band: No.39
              in Citations (World)
            </a>
          </div> */}

          {/* <div>
            <a target="_blank" href="tel:+917018007000" rel="noreferrer">
              <FaPhoneSquareAlt /> Unlock your Career Goals. Free Counselling:
              7018007000{" "}
            </a>
          </div> */}

          {/* <div>
            <a
              target="_blank"
              href="https://shoolini.online/?utm_source=Applynow&utm_medium=Shooliniwebsitetraffic&utm_campaign=Shooliniwebsitetraffic"
              rel="noreferrer"
            >
              Join Shoolini Online courses & Pay After Placement. Apply Now!
            </a>
          </div> */}
{/* 
          <div>
            <a
              target="_blank"
              href="https://shooliniuniversity.com/media/pdf/REGISTRATION-FOR-RE-APPEAR-EXAMINATION-February-2023.pdf"
              rel="noreferrer"
            >
              Re-appear Exam (Feb 2023) Registration
            </a>
          </div> */}
        </Slider>
      </div>

      <section className="position-relative">
        <div className="top-bar">
          <div className="container-fluid">
            <Row className="m-0">
              <Col lg="12" md="12">
                <div className="bar-right d-md-flex xs-show justify-content-end">
                  <ul className="list-unstyled list-inline bar-login mb-0">
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://shoolini.online/"
                        rel="noreferrer"
                      >
                        Shoolini Online
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a target="_blank" href="/blog">
                        Blogs
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/contact">Contact</Link>
                    </li>

                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://my.shooliniuniversity.com/"
                        rel="noreferrer"
                      >
                        SU Students
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://alumni.shooliniuniversity.com/"
                        rel="noreferrer"
                      >
                        Alumni
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a target="_blank" href="/national-academic-depository">
                        UGC-NAD
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled list-inline bar-lang mb-0">
                    <li className="list-inline-item">
                      <Dropdown>
                        <Dropdown.Toggle id="123" as="a">
                          Online Payment<i className="las la-angle-down"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul">
                          <Dropdown.Item as="li">
                            <a
                              target="_blank"
                              href="https://shooliniuniversity.com/media/pay"
                              rel="noreferrer"
                            >
                              {" "}
                              Pay Tuition Fee{" "}
                            </a>{" "}
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <a
                              target="_blank"
                              href="https://easypay.axisbank.co.in/easyPay/makePayment?mid=NDcwNjg%3D"
                              rel="noreferrer"
                            >
                              {" "}
                              Pay Hostel Fee{" "}
                            </a>{" "}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>

                  <ul className="list-unstyled list-inline bar-lang mb-0">
                    <li className="list-inline-item">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" as="a">
                          Ranking<i className="las la-angle-down"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu as="ul">
                          <Dropdown.Item as="li">
                            <Link href="/nba"> NBA </Link>
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <Link href="/naac-self-study-report"> NAAC </Link>{" "}
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <Link href="/nirf"> NIRF </Link>{" "}
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <Link href="/iqac"> IQAC </Link>{" "}
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <Link href="/nisp"> NISP </Link>{" "}
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <Link href="/iic"> IIC </Link>{" "}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>
                  <ul className="list-unstyled list-inline bar-social mb-0">
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        className="su_whats"
                        href="https://api.whatsapp.com/send?phone=917018994794&text=Hi%20Shoolini%20University"
                        rel="noreferrer"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        className="su_fb"
                        href="https://www.facebook.com/ShooliniUniversityOfficial"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        className="su_twitter"
                        href="https://twitter.com/ShooliniUniv"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        className="su_linked"
                        href="https://www.linkedin.com/school/shooliniuniversity/"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        className="su_insta"
                        href="https://www.instagram.com/shooliniuniversity/"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className={`logo-area main-menu`}>
        <div className="container-fluid">
          <Row>
            <Col md="2"> 
              <div className="logo">
                <Link href="/">
                  <Image
                    src={"/assets/images/f-logo.png"}
                    alt="brandLogo"
                    className="brandLogo"
                    width={140}
                    height={75}
                   
                  />
                </Link>
              </div>
            </Col>

            <Col md="10">
              <div className="main-menu-box">
                <div className="menu-box d-flex justify-content-end">
                  <ul className="nav menu-nav">
                    {links &&
                      links.map((row, index) => {
                        return row?.sub_menu.length === 0 ? (
                          <li className="nav-item dropdown active" key={index}>
                            {row.text === "HOME" ? (
                              <Link
                                href="/"
                                className="nav-link dropdown-toggle"
                              >
                                {row.text}
                              </Link>
                            ) : (
                              <Link
                                href={`/${row.link}`}
                                className="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                {row.text}
                              </Link>
                            )}
                            {row.text === "research" ? (
                             <li> <Link
                                href="https://research.shooliniuniversity.com/"
                                className="nav-link dropdown-toggle newSearch"
                                target={"_blank"}
                              >
                                {row.text}
                              </Link>
                              <ul className="dropdown list-unstyled"> 
                                <li className="nav-item navItem_unpos">
                                <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/Benchmarks">   Benchmarks     </Link>
                                    </li>
                                    <li className="nav-item navItem_unpos">
                                <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/support-researchers">   Support for Researchers     </Link>
                                    </li>
                                    <li className="nav-item navItem_unpos">
                                <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/scholarship">     Scholarships      </Link>
                                    </li>
                                    <li className="nav-item navItem_unpos">
                                <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/phd-programmes">      PhD Programs        </Link>
                                    </li>
                                    <li className="nav-item navItem_unpos">
                                <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/National-Calls">      Research Grants    </Link>
                                    </li>
                              </ul>
                              </li>
                               
                            ) : (
                              <span> </span>
                            )}
                          </li>
                        ) : (
                          <li className="nav-item dropdown" key={index}>
                            <Link
                              href={row.link === "#" ? "#" : `/${row.link}`}
                              className="nav-link dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              {row.text} <i className="las la-angle-down"></i>
                            </Link>

                            <ul className="dropdown list-unstyled">
                              {row?.sub_menu.map((sub, i) => {
                                return (
                                  <li
                                    className="nav-item navItem_unpos"
                                    key={i}
                                  >
                                    {sub.text ===
                                    "All Shoolini Faculty List" ? (
                                      <Link
                                        href={`${sub.link}`}
                                        className="nav-link"
                                      >
                                        {sub.text}
                                        {sub?.sub_menu?.length > 0 && (
                                          <i className="las la-angle-down"></i>
                                        )}
                                      </Link>
                                    ) : (
                                      <Link
                                        href={`/${sub.link}`}
                                        className="nav-link"
                                      >
                                        {sub.text}
                                        {sub?.sub_menu?.length > 0 && (
                                          <i className="las la-angle-down"></i>
                                        )}
                                      </Link>
                                    )}

                                    {sub?.sub_menu?.length > 0 && (
                                      <ul className="dropdown_Last list-unstyled">
                                        {sub.sub_menu.map((submenu, idx) => {
                                          return (
                                            <li className="nav-item" key={idx}>
                                              {submenu.text === "Test Page" ? (
                                                <Link
                                                  href={`${submenu.link.replace(
                                                    "/",
                                                    ""
                                                  )}`}
                                                  className="nav-link"
                                                >
                                                  {submenu.text}
                                                </Link>
                                              ) : (
                                                <Link
                                                  href={`/${submenu.link.replace(
                                                    "/",
                                                    ""
                                                  )}`}
                                                  className="nav-link"
                                                >
                                                  {submenu.text}
                                                </Link>
                                              )}
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        );
                      })}
                  </ul>
                  <ul className="nav search-cart-bar">
                    <li className="nav-item search-box">
                      <Search />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* NavBar */}
      <section className="main-menu">
        <Container>
          <Row>
            <Col md="12"></Col>
          </Row>
        </Container>
      </section>

      <SocialShare />

      <StickyMenu links={links} />
      <ScrollButton />

      <div className="enqDesktop">
        <EnquireForMob />
      </div>
      <MobileMenu links={links} />
    </Styles>
  );
};

export default Header;
