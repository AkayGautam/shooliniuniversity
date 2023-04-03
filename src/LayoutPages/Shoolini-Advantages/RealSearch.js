import React, { useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../components/Footer'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import Header from '../../components/Header'

const RealSearch = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  return (
    <>
      <Header />
      <BreadcrumbBox title="ShooliniealSearch" />

      <section className="adVancePage py-5">
        <Container>
          <Row>
            <Col md="12">
              <h2> RealSearch </h2>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default RealSearch
