import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import Link from 'next/link'
import { Styles } from './common/styles/header'

const Topbar = () => {
  return (
    <>
      <Styles>
        <section className="position-relative">
          <div>
            <div className="container-fluid">
              <Row className="m-0">
                <Col lg="12" md="12">
                  <div className="bar-right d-md-flex xs-show justify-content-end">
                    <ul className="list-unstyled list-inline bar-login mb-0">
                      <li className="list-inline-item">
                        <Link href="/Internship">
                          Internship
                        </Link>
                      </li>

                      <li className="list-inline-item">
                        <a
                          target="_blank"
                          href="https://my.shooliniuniversity.com/"
                        >
                          SU Students
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          target="_blank"
                          href="https://alumni.shooliniuniversity.com/"
                        >
                          Alumni
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          target="_blank"
                          href="https://shooliniuniversity.com/national-academic-depository"
                        >
                          UGC-NAD
                        </a>
                      </li>
                    </ul>
                    <ul className="list-unstyled list-inline bar-lang mb-0">
                      <li className="list-inline-item">
                        <Dropdown>
                          <Dropdown.Toggle as="a">
                            Online Payment<i className="las la-angle-down"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul">
                            <Dropdown.Item as="li">
                              <a
                                target="_blank"
                                href="https://shooliniuniversity.com/pay/"
                              >
                                {' '}
                                Pay Tuition Fee{' '}
                              </a>{' '}
                            </Dropdown.Item>
                            <Dropdown.Item as="li">
                              <a
                                target="_blank"
                                href="https://easypay.axisbank.co.in/easyPay/makePayment?mid=NDcwNjg%3D"
                              >
                                {' '}
                                Pay Hostel Fee{' '}
                              </a>{' '}
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    </ul>
                    <ul className="list-unstyled list-inline bar-lang mb-0">
                      <li className="list-inline-item">
                        <Dropdown>
                          <Dropdown.Toggle as="a">
                            Ranking<i className="las la-angle-down"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul">
                            <Dropdown.Item as="li">
                              <a target="_blank" href="/nba">
                                {' '}
                                NBA{' '}
                              </a>{' '}
                            </Dropdown.Item>
                            <Dropdown.Item as="li">
                              <a target="_blank" href="/naac-self-study-report">
                                {' '}
                                NAAC{' '}
                              </a>{' '}
                            </Dropdown.Item>
                            <Dropdown.Item as="li">
                              <a target="_blank" href="/nirf">
                                {' '}
                                NIRF{' '}
                              </a>{' '}
                            </Dropdown.Item>
                            <Dropdown.Item as="li">
                              <a target="_blank" href="/iqac">
                                {' '}
                                IQAC{' '}
                              </a>{' '}
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    </ul>

                    <ul className="list-unstyled list-inline bar-social mb-0">
                      <li className="list-inline-item">
                        <a className="su_fb" href="">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="su_twitter" href="">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="su_linked" href="">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="su_insta" href="">
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
      </Styles>
    </>
  )
}

export default Topbar
