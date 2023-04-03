import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../../components/Header'
import BreadcrumbBox from '../../../components/common/Breadcrumb'
import { Styles } from './style/postgraduate'
import Footer from '../../../components/Footer'
import SearchResearcher from '../../../components/SearchResearcher'
import { streamTemplateData } from '../Undergraduate/Undergraduate'
import { setMetaTags } from '../../../helper/setMetaTags'
import Link from 'next/link'
const Postgraduate = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

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
        url: 'postgraduate-programs',
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
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', postgraduate: 2 }),
    })
      .then((response) => response.json())
      .then((res) => setPgata(res))
  }, [])

  result_pg = pgdata?.success

  var s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = 'https://widgets.nopaperforms.com/emwgts.js'
  document.body.appendChild(s)

  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper postgraduate-page">
          {/* Header 2 */}
          <Header />
          {/* Breadcroumb */}
          <BreadcrumbBox title="Postgraduate Programs" />
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
                  <div className="sidebar-content">
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

export default Postgraduate
