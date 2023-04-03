import React, { useEffect } from 'react'
import Datas from '../data/icon-box/icon-box.json'
import { Container, Row, Col } from 'react-bootstrap'
import { Styles } from './common/styles/iconBox'
import CountUp from 'react-countup'

const IconBox = () => {

  return (
    <>
      <Styles>
        {/* Icon Box */}
        <section className="icon-box-area pt-md-4 mt-2">
          <Container>
            <Row>
              {Datas.map((data, i) => (
                <Col className="col-4 xm-2" key={i}>
                  <div className="full-icon-box">
                    <div className="icon-box d-flex">
                      <div className="box-title">
                        <h6>
                          <CountUp end={data.title} duration={3} delay={0.5} />+
                        </h6>
                        <p>{data.subTitle}</p>
                      </div>
                      <div className="smallBoxTtl w-100 align-items-center">
                        <p> {data.showcase} </p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Styles>
    </>
  )
}

export default IconBox
