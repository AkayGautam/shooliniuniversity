import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
const LogoSlider = () => {
  const [logos, setLogos] = useState([])

  var result = []

  useEffect(() => {
    fetch('https://shooliniuniversity.com/media/GetCompaniesAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', id: 'all' }),
    })
      .then((response) => response.json())
      .then((res) => setLogos(res))
  }, [])

  result = logos?.success

  //   console.log(result, "logos");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <div data-aos="fade-up" className="sec-title mb-5">
              <h2>Think Placements </h2>
              <h4> in 250+ of india’s Top Corporates </h4>
            </div>
          </Col>
        </Row>

        {result?.map((data, index) => (
          <Col md="12" key={index}>
            <div className="cuCourse" key={index}>
              <h4> {data?.title} </h4>
            </div>
          </Col>
        ))}

        {/* <div>
                        <div   className="logoItem">
                           title
                        </div>
                    </div> */}
      </Container>
    </>
  )
}

export default LogoSlider
