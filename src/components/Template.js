import React, { useEffect } from 'react'
import { render } from 'react-dom'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import Header from './Header'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import { Styles } from './common/styles/Combine'
import { useState } from 'react'
import Link from 'next/link'
import Datas from '../data/school/school.json'
import Aos from 'aos'
import 'aos/dist/aos.css'
import DialogVideo from './Dialogs/DialogVideo'
import ApplyNow from './Dialogs/ApplyNow'

const Template = ({ title, img }) => {

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  })


  const [bgimg, setBgimg] = useState('')
  useEffect(() => {
    // Aos.init({ duration: 2000 })
    setBgimg(img)
  }, [img])

  return (
    <Styles>
      <section className="hero-slider-area scSlider sliderForBio">
        <div className="slider-wrapper">
          {Datas.map((data, i) => (
            <div
              key={i}
              className="slider-content slider-image"
              style={{
                background: `url('${bgimg}') no-repeat center center`,
              }}
            >
              <div className="slider-table">
                <div className="slider-tablecell">
                  <Container>
                    <Row>
                      <Col md="12"></Col>
                      <Col md="6">
                        <div className="resrchTxt Slide">
                          <h1> {title} </h1>
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="resForm box">
                          <h4> Enquire Now</h4>
                        <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                        </div>
                      </Col>

                      {/* <Col className="atBottom" md="6">
                        <Row>
                          <Col md="8">
                            <div className="slider-btn mt-md-5">
                              <ApplyNow />
                              <a
                                target="_blank"
                                href="https://admissions.shooliniuniversity.com/?utm_source=organic&utm_medium=website&utm_campaign=applynow"
                                className="appBtn ml-2 slider-btn2"
                                to=""
                              >
                                Apply Now
                              </a>
                            </div>
                          </Col>
                          <Col md="4">
                            <div className="videoMosdal vdoUnpos hero__quote-animation">
                              <DialogVideo />
                            </div>
                          </Col>
                        </Row>
                      </Col> */}
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Styles>
  )
}

export default Template
