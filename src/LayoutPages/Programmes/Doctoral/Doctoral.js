import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Header from '../../../components/Header'
import BreadcrumbBox from '../../../components/common/Breadcrumb'
import { Styles } from './style/doctoral'
import Footer from '../../../components/Footer'
import SearchResearcher from '../../../components/SearchResearcher'
import { streamTemplateData } from '../Undergraduate/Undergraduate'
import { resetMetaTags, setMetaTags } from '../../../helper/setMetaTags'
import Link from 'next/link'

const Doctoral = () => {
  const [pgdata, setPgata] = useState([])

  var result_pg = []


useEffect(() => {
  var MXLandingPageId = '8b8c0c2f-5e98-11ed-a19b-0acc9d8b1d02';
}, [])




  useEffect(() => {
    fetch('https://shooliniuniversity.com/media/GetTemplateNameAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        auth: 'shoolini@999',
        url: 'doctoral-programs',
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
      body: JSON.stringify({ auth: 'shoolini@999', doctor: 3 }),
    })
      .then((response) => response.json())
      .then((res) => setPgata(res))

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
        <div className="main-wrapper doctoral-page">
          {/* Header 2 */}
          <Header />
          {/* Breadcroumb */}
          <BreadcrumbBox title="Doctoral Programs" />
          <section className="py-5">
            <Container>
              <Row>
                <Col md="8">
                  <Row>
                    {result_pg?.map((data, index) => (
                      <Col md="6">
                        <div className="cuCourse">
                          <Link href={`/${data?.slug}`} className="detailView">
                            <div className="detailView" rel="canonical">
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
                      <iframe name="leadsquared_landing_page_frame" src="https://shooliniuniversity.viewpage.co/Enquire-Now?ignoremxtracking=mxtrue" width="400" height="700" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
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

export default Doctoral
