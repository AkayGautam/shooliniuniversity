import React, { useEffect, useState } from 'react'
import { Styles } from './css/templateOne'
import {
  Container,
  Row,
  Col,
  Card as Cards,
  Card,
  Table,
} from 'react-bootstrap'
import Footer from '../../components/Footer'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import Header from '../../components/Header'
import Template from '../../components/Template'
import SearchProgram from '../../components/SearchProgram'
import Companies from '../../components/Companies'
import { resetMetaTags, setMetaTags } from '../../helper/setMetaTags'

const BASE_URI = 'https://shooliniuniversity.com/media'

const TemplateOne = ({ id }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  const [Data, setData] = useState({})
  const [Gallery, setGallery] = useState([])
  const [Numbers, setNumbers] = useState([])
  const [companies, setcompanies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showTable, setShowTable] = useState(false)
  const [facD, setFacD] = useState([])
  const [facList, setFacList] = useState([])

  useEffect(() => {
    document.body.setAttribute('pageId', id)
    fetch(`${BASE_URI}/Stream2API`, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({
        auth: 'shoolini@999',
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setData(res?.success[0])
        setMetaTags(res.success[0])
        if (res?.success[0]?.gallery) {
          setGallery(JSON.parse(res?.success[0]?.gallery))
        }
        if (res?.success[0]?.numbers) {
          setNumbers(JSON.parse(res?.success[0]?.numbers))
        }
        setcompanies(res?.success.companydetail)
        setFacD(res?.success.facultydetail)
        setFacList(res?.success.facultylistdetails)
        setIsLoading(false)
      })

    return () => {
      document.body.removeAttribute('pageId')
      resetMetaTags()
    }
  }, [id])

  return (
    <>
      <Styles>
        <Header />
        <Template />

        <section className="templateOne py-5">
          <Container>
            <Row>
              <Col md="12">
                <div data-aos="fade-right" class="section-title">
                  <h2 className="text-darks">
                    {' '}
                    Research Impact on par with the world's best universities{' '}
                  </h2>
                </div>
                <div className="sec-para mt-5">
                  <p>
                    The MS Swaminathan School of Agriculture, named after the
                    legendary ‘Father of Green Revolution in India’, drives
                    inspiration from his contributions in introducing and
                    developing high-yielding varieties of wheat in the county.
                    <br />
                    <br />
                    The agricultural industry is undergoing a critical phase of
                    adaptation and change as it faces numerous environmental and
                    social challenges. Growth and development of agriculture is
                    important for the overall economic development as the
                    expansion of market for industrial goods and services hinges
                    on agriculture growth.
                    <br />
                    <br />
                    Agriculture sector demands trained human resource in its
                    various sub-disciplines, especially scientific agriculture.
                    Dedicated faculty members with extensive teaching, extension
                    work, and research experience are able to effectively
                    interact and relate with students from diverse cultural
                    backgrounds.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="highLights">
          <div className="container-fluid p-0">
            <div className="row m-0">
              <div className="col-md-4 p-0">
                <img className="w-100" src="assets/images/baby2.jpg" />
              </div>
              <div className="col-md-8 p-0">
                <div className="hgContent">
                  <div className="hgContentinner">
                    <div class="sec-title text-left">
                      <h2>HighLight </h2>
                    </div>
                    <div className="newData">
                      <p>
                        {' '}
                        Instills technical and managerial skills to prepare
                        students to pursue a career in food, agroindustry,
                        agriculture extension, environment, and health{' '}
                      </p>
                      <p>
                        {' '}
                        Aims to modernise Indian agriculture with formal
                        agricultural education{' '}
                      </p>
                      <p>
                        {' '}
                        Located in the midst of a thriving Himalayan ecosystem,
                        we aim at professionalising agriculture{' '}
                      </p>
                      <p>
                        {' '}
                        Programmes run as per the guidelines of Indian Council
                        of Agricultural Research (ICAR) Placements with industry
                        giants{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="templateOne py-5">
          <Container>
            <Row>
              <Col md="12">
                <div data-aos="fade-right" class="sec-title section-title">
                  <h2> Programmes </h2>
                </div>
                <div className="sec-para2 mt-5">
                  <table className="w-100 table table-striped">
                    <thead>
                      {' '}
                      <tr>
                        <th> Programme </th>
                        <th> Duration </th>
                        <th> Eligibility </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {' '}
                          MSc Agriculture (Agricultural Extension Education){' '}
                        </td>
                        <td> 2 years </td>
                        <td>
                          BSc Agriculture/Horticulture/ Forestery with 6/10 OGPA
                          or 60%.{' '}
                        </td>
                      </tr>
                      <tr>
                        <td>MSc Agriculture (Agronomy) </td>
                        <td> 2 years </td>
                        <td>
                          {' '}
                          BSc Agriculture/Horticulture/ Forestery with 6/10 OGPA
                          or 60%.{' '}
                        </td>
                      </tr>
                      <tr>
                        <td> MSc Agriculture (Soil Science) </td>
                        <td> 2 years </td>
                        <td>
                          {' '}
                          BSc Agriculture/Horticulture/ Forestery with 6/10 OGPA
                          or 60%.{' '}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <SearchProgram />
        <Companies />

        <Footer />
      </Styles>
    </>
  )
}

export default TemplateOne
