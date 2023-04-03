import Link from 'next/link.js'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'

import Styless from './style/allevents'
import Footer from '../../components/Footer'
const Placements = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([])

  var result = []

  const dateFormat = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' }
    var today = new Date(date)
    return today.toLocaleDateString('en-US', options)
  }

  const removeHTML = (str) => {
    var tmp = document.createElement('p')
    tmp.innerHTML = str
    return tmp.textContent || tmp.innerText || ''
  }




  useEffect(() => {
    fetch('https://shooliniuniversity.com/media/allEventAPI', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        // <-- Specifying the Content-Type
      }),
      body: 'auth=shoolini@999',
    })
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error))
  }, [])

  result = data?.success
  console.log(result)

   
 

  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper allevents-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="Events" />

          <Styless>
            <section style={{background:'#f9f9f9'}} className="event-page-area event-page py-5">
              <Container>
                <div data-aos="fade-right" className="sec-title mb-5 text-left">
                  <h2>events {'&'} Conferences </h2>
                </div>



                <Row>
                  {result?.map((data) => (
                    <div className="post-list-item col-md-4 px-2" key={data?.id}>


                      <div className="event-item ">
                        <div className="event-item-inner">
                          <div className="event-item-thumbnail">
                            <a href={data?.weburl} title="Mobile Games Battle">
                              <div className="vfvfv placeholder-thumbnail-bg">
                                <img src={data?.imgurl}  />
                              </div>
                            </a>
                          </div>

                          <div className="event-item-content">
                            <h4 className="event-title font-2"><a href={data?.weburl}>{(data?.title).replace('%', '-')}</a></h4>
                            <div className="event-meta small-meta">

                              <span>
                                <i className="lnr lnr-calendar-full"></i>
                                {dateFormat(data?.date)}	</span>
                            </div>
                            <div className="event-excerpt"><p>  {removeHTML(data?.content)}</p>
                            </div>

                            <span className="btn-text"><i className="lnr lnr-calendar-full"></i> Venue : {data?.location}</span>


                          </div>

                        </div>
                      </div>





                    </div>
                  ))}




                </Row>







              </Container>
            </section>
          </Styless>

          <Footer />
        </div>
      </Styles>
    </>
  )
}

export default Placements
