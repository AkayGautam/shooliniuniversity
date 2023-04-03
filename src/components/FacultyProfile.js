import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Card as Cards,
  Button,
} from 'react-bootstrap'
import { BreadcrumbBox } from './common/Breadcrumb'
import { Styless } from './common/styles/FacultyOfAgriculture'
import SearchResearcher from './SearchResearcher'
import AdmissionFormSidebar from './AdmissionFormSidebar'
import Image from "next/legacy/image";


const BASE_URI = 'https://shooliniuniversity.com/media'

const FacultyProfile = () => {
  const [Data, setData] = useState({})
  const [id, setId] = useState(0)
  const [Gallery, setGallery] = useState([])
  const [Numbers, setNumbers] = useState([])
  const [facId, seTfacId] = useState([])
  const [facD, setFacD] = useState([])
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  const fetchData = async (id) => {
    fetch(`${BASE_URI}/GetFacultyDetailsAPI`, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({
        auth: 'shoolini@999',
        fid: id,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res) {
          let result = res
          setData(result.success[0][0])
          setIsLoading(false)
          document.title = `${result.success[0][0]?.name} | Faculty Profile`
        }
      })
  }

  const fetchId = async () => {
    fetch(`${BASE_URI}/GetFacultyID`, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        auth: 'shoolini@999',
        slug: '',
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res) {
          fetchData(res.success[0].facultyid)
        }
      })
  }

  useEffect(() => {
    // document.body.setAttribute('pageId', location?.state?.id)

    fetchId()

    return () => {
      document.title = 'Shoolini University'
      document.body.removeAttribute('pageId')
    }
  }, [location])

  return (
    <div className="main-wrapper course-details-page">
      {/* Header 2 */}
      <Header />

      {/* Breadcroumb */}
      <BreadcrumbBox title={Data?.name} />
      <Styless>
        <section className="course-details-area our-webcoderskull">
          <Container>
            <Row>
              <Col lg="8" md="8" sm="12">
                {isLoading ? (
                  <div className="loading">loading...</div>
                ) : (
                  <>
                    <Row>
                      <Col lg="3" md="3">
                        <figure>
                        <Image width={196} height={245}
                            src={Data?.imageurl}
                            className="img-responsive"
                            style={{ width: '100%', borderRadius: '8px' }}
                            alt=""
                          />
                        </figure>
                      </Col>
                      <Col lg="9" md="9">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: Data?.intro,
                          }}
                        ></p>
                      </Col>
                    </Row>

                    <div className="gallery myPub">
                      <h3>Publication</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: Data?.publications,
                        }}
                      />
                    </div>
                  </>
                )}
              </Col>

              <Col lg="4" md="4" sm="12">
                <div className="single-details-sidbar">
                  <SearchResearcher />
                </div>
                <AdmissionFormSidebar />
              </Col>
            </Row>
          </Container>
        </section>
      </Styless>

      {/* Footer 2 */}
      <Footer />
    </div>
  )
}

export default FacultyProfile
