import React, { Component, useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Header from '../../../components/Header'
import BreadcrumbBox from '../../../components/common/Breadcrumb'
import { Styles } from './style/undergraduate'
import Footer from '../../../components/Footer'
import SearchResearcher from '../../../components/SearchResearcher'
import { resetMetaTags, setMetaTags } from '../../../helper/setMetaTags'

export const streamTemplateData = async (id) => {
  document.body.setAttribute('id', `pageid-${id}`)
  return fetch('https://shooliniuniversity.com/media/GetStreamAPI', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      auth: 'shoolini@999',
      id: id,
    }),
  })
}

const Undergraduate = () => {
  const [pgdata, setPgata] = useState([])

  var result_pg = []

  useEffect(() => {
    fetch('https://shooliniuniversity.com/media/GetTemplateNameAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        auth: 'shoolini@999',
        url: 'undergraduate-programs',
      }),
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        const data = await streamTemplateData(responseJson.success[0].id)
        const dataJson = await data.json()
        setMetaTags({
          seo_title: dataJson.success[0].seo_title,
          seo_description: dataJson.success[0].seo_description,
          seo_keywords: dataJson.success[0].seo_keywords,
        })
      })

    fetch('https://shooliniuniversity.com/media/programAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', undergraduate: 1 }),
    })
      .then((response) => response.json())
      .then((res) => {
        setPgata(res)
      })

    return () => {
      document.title = 'Shoolini University'
      resetMetaTags()
      document.body.removeAttribute('pageId')
    }
  }, [])

  result_pg = pgdata?.success


  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper undergraduate-page">
          {/* Header 2 */}
          <Header />
          {/* Breadcroumb */}
          <BreadcrumbBox title="Undergraduate Programs" />
          <section className="py-5">
            <Container>
              <Row>
                <Col md="8">
                  <Row>
                    {result_pg?.map((data, index) => (
                      <Col md="6" key={index}>
                        <div className="cuCourse">
                          <Link href={`/${data?.slug}`} className="detailView">
                            <div className="detailView">
                              <div key={index} value={data?.id}>
                                {' '}
                                <h3> {data?.title} </h3>
                                <p>
                                  {' '}
                                  <strong> Eligibility </strong>
                                  {data?.eligibility}{' '}
                                </p>
                                <span>
                                  {' '}
                                  <strong> Duration </strong>
                                  {data?.duration}{' '}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col md="4">
                  <div className="sidebar-content sideBarpage">
                    <SearchResearcher />

                    <div className="sideBarNew">
                      <div className="enqForm">
                        <div
                          className="npf_wgts"
                          data-height="500px"
                          data-w="7d1b402b547afa4d6a10968170a856b6"
                        ></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <Footer />
        </div>
      </Styles>
    </>
  )
}

export default Undergraduate
