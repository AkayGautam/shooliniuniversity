/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Styles } from "./styles/mobilemenu";
import Link from "next/link";
import Image from "next/legacy/image";
import Search from "./Search";
import SearchResearcher from "../SearchResearcher";

const MobileMenu = ({ links }) => {
  const [visible, setVisible] = useState(false);
  const [opened, setOpened] = useState(false);
  const [Data, setData] = useState([]);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    const hmBtn = window.document.getElementById("mb-sidebar-btn");

    if (hmBtn) {
      const mdSidebarOverlay =
        window.document.getElementById("mb-sidebar-overlay");
      const mdSidebarBody = window.document.getElementById("mb-sidebar-body");
      const mdSidebarExit = window.document.getElementById("close-mb-sidebar");

      hmBtn.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }

    const menuButton = document.querySelectorAll(".mb-menu-button");
    menuButton.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;

        if (button.classList.contains("active")) {
          content.className = "mb-menu-content show";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.className = "mb-menu-content";
          content.style.maxHeight = "0";
        }
      });
    });
  });

  const toggleMenu = () => {
    setVisible(!visible);
    setOpened(!opened);
  };

  const searchHandler = async (e) => {
    console.log(searchTerm);
    e.preventDefault();
  };

  return (
    <>
      <Styles>
        {/* Mobile Menu */}
        <section className="mobile-menu-area">
          <Container>
            <Row>
              <Col md="0" sm="12">
                <div className="mb-topbar d-flex justify-content-between">
                  <div className="topbar-item">
                    <p>
                      <i className="las la-phone"></i>+1 (396) 486 4709
                    </p>
                  </div>
                  <div className="topbar-item">
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">
                        <Link href={"/login"}>Log In</Link>
                      </li>
                      <li className="list-inline-item">/</li>
                      <li className="list-inline-item">
                        <Link href={"/registration"}>Register</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-logo-area d-flex justify-content-between">
                  <div className="mb-logo-box d-flex">
                    <div className="hm-button" onClick={toggleMenu}>
                      <a href={"/"} id="mb-sidebar-btn">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                      </a>
                    </div>

                    <div className="mb-logo">
                      <Link href={"/"}>
                        <Image
                          src={"/assets/images/f-logo.png"}
                          width={100}
                          height={50}
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="mb-search-box">

                    <div className="searchMobile">
                      <SearchResearcher />
                    </div>

                    {/* <form action="#">
                      <input
                        type="text"
                        name="search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoComplete="off"
                        placeholder="Search Here"
                      />
                      
                     
                      {/* <button onClick={searchHandler} type="submit">
                       
                        <i className="las la-search"></i>
                      </button> 
                    </form> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Mobile Menu Sidebar */}
        <section
          className={`mb-sidebar ${opened ? "opened" : ""}`}
          id="mb-sidebar-body"
        >
          <div className="mb-sidebar-heading d-flex justify-content-between">
            <div>
              <h5>Menu</h5>
            </div>
            <div></div>
          </div>
          <div className="mb-sidebar-menu">
            {links &&
              links.map((item, index) => {
                return (
                  <div className="mb-menu-item" key={index}>
                    <button className="mb-menu-button active">
                      {item.sub_menu.length > 0 ? (
                        <p>
                          {item.text}
                          <i className="fa fa-caret-down" aria-hidden="true"></i>
                         

                        </p>
                      ) : (
                        <>
                          {item.text === "HOME" ? (
                            <Link href="/">{item.text}</Link>
                          ) : (
                            <Link href={`/${item.link}`}>{item.text}</Link>
                          )}

                          {item.text === "research" ? (
                            
                            <Link  className="xs-display"   href="https://research.shooliniuniversity.com/"
                            target="_blank" >{item.text}
                            </Link>
                          ) : (
                            <span> </span>
                          )}

                        </>
                      )}
                    </button>
                    {item.sub_menu.length > 0 ? (
                      <div className="mb-menu-content">
                        <ul className="list-unstyled">
                          {item.sub_menu.map((row, sub_index) => {
                            return (
                              <li className="nav-item" key={sub_index}>


                                <Link className="bottmDropdown" href={`/${row.link.replace("/", "")}`}>
                                 <span className="rowText"> {row.text}  </span>

                                  {row?.sub_menu?.length > 0 && (
                                    <i className="fa fa-caret-down" aria-hidden="true"
                                      style={{ paddingLeft: "50px" }}
                                      onClick={() =>
                                        setOpenSubMenu(!openSubMenu)
                                      }
                                    ></i>
                                  )}
                                </Link>
                                <ul
                                  className={`mb-menu-content list-unstyled ${openSubMenu && "show"
                                    }`}
                                >
                                  {row?.sub_menu &&
                                    row?.sub_menu.map(
                                      (sub_row, sub_sub_index) => {
                                        return (
                                          <li
                                            className="nav-item"
                                            key={sub_sub_index}
                                          >
                                            <Link
                                              href={`/${sub_row.link.replace(
                                                "/",
                                                ""
                                              )}`}
                                            >
                                              <span
                                                style={{
                                                  paddingLeft: "20px",
                                                }}
                                              >
                                                {sub_row.text}
                                              </span>
                                            </Link>
                                          </li>
                                        );
                                      }
                                    )}
                                </ul>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}

            <div className="mb-menu-item">
              <button className="mb-menu-button active">
                <p>SU Students </p>
              </button>
              <div className="mb-menu-content show">
                <ul className="list-unstyled">
                  <li className="list-inline-item">
                    <Link target="_blank" href="/blog">
                      Blogs
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link href="/Internship">Internship</Link>
                  </li>

                  <li className="list-item">
                    <a
                      target="_blank"
                      href="https://my.shooliniuniversity.com/"
                      rel="noreferrer"
                    >
                      SU Students
                    </a>
                  </li>
                  <li className="list-item">
                    <a
                      target="_blank"
                      href="https://alumni.shooliniuniversity.com/"
                      rel="noreferrer"
                    >
                      Alumni
                    </a>
                  </li>
                  <li className="list-item">
                    <a target="_blank" href="/national-academic-depository">
                      UGC-NAD
                    </a>
                  </li>
                  <li className="list-item">
                    <Dropdown>
                      <Dropdown.Toggle id="456" as="a">
                        Online Payment
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
                  <li className="list-item">
                    <Dropdown>
                      <Dropdown.Toggle id="458" as="a">
                        Ranking
                      </Dropdown.Toggle>
                      <Dropdown.Menu as="ul">
                        <Dropdown.Item as="li">
                          <a
                            target="_blank"
                            href="https://shooliniuniversity.com/nba"
                            rel="noreferrer"
                          >
                            {" "}
                            NBA{" "}
                          </a>{" "}
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <a
                            target="_blank"
                            href="https://shooliniuniversity.com/naac-self-study-report"
                            rel="noreferrer"
                          >
                            NAAC
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <a
                            target="_blank"
                            href="https://shooliniuniversity.com/nirf"
                            rel="noreferrer"
                          >
                            {" "}
                            NIRF{" "}
                          </a>{" "}
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <a
                            target="_blank"
                            href="https://shooliniuniversity.com/iqac"
                            rel="noreferrer"
                          >
                            {" "}
                            IQAC{" "}
                          </a>{" "}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div
          className={`mb-sidebar-overlay ${visible ? " visible" : ""}`}
          id="mb-sidebar-overlay"
          onClick={toggleMenu}
        ></div>

        
      </Styles>
    </>
  );
};

export default MobileMenu;
