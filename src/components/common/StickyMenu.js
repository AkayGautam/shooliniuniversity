import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Styles } from "./styles/stickyMenu";
import Link from "next/link";
import Image from "next/legacy/image";

const StickyMenu = ({ links }) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const stickyMenu = document.querySelector(".sticky-menu");

      if (window.scrollY > 160) {
        stickyMenu?.classList.add("sticky");
      } else {
        stickyMenu?.classList.remove("sticky");
      }
    });
  });

  return (
    <>
      <Styles>
        <section className="sticky-menu">
          <div className="container-fluid pxs-4">
            <Row>
              <Col md="2">
                <div className="logo">
                  <Link href={"/"}>
                    <Image
                      src={"/assets/images/logo.png"}
                      alt=""
                      className="brandLogo"
                      width={200}
                      height={50}
                    />
                  </Link>
                </div>
              </Col>
              <Col md="10">
                <div className="main-menu-box">
                  <div className="menu-box d-flex justify-content-between">
                    <ul className="nav menu-nav">
                      {links &&
                        links.map((row, index) => {
                          return row?.sub_menu.length === 0 ? (
                            <li
                              className="nav-item dropdown active"
                              key={index}
                            >
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
                                href={row.link && `/${row.link}`}
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
                                              <li
                                                className="nav-item"
                                                key={idx}
                                              >
                                                {submenu.text ===
                                                "Test Page" ? (
                                                  <Link
                                                    href={`${submenu.link}`}
                                                    className="nav-link"
                                                  >
                                                    {submenu.text}
                                                  </Link>
                                                ) : (
                                                  <Link
                                                    href={`/${submenu.link}`}
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
                      <li className="nav-item side-box">
                        <div className="apply-btn">
                          <a
                            href="https://admissions.shooliniuniversity.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Apply Now
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Styles>
    </>
  );
};

export default StickyMenu;
