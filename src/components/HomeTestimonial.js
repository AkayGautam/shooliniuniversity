import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { setMetaTags } from '../helper/setMetaTags'

export const HomeTestimonial = () => {
  const [Data, setData] = useState([])

  useEffect(() => {
    fetch('https://shooliniuniversity.com/media/GetHprogramAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        auth: 'shoolini@999',
        url: 'homepage',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.success[0])
        setMetaTags(data.success[0])
        // console.log(data.success[0])
      })
  }, [])

  return (
    <>
      <div className="testimonial-area">
        <div className="container">
          <div className="row text-center">
            <h2>Student Testimonials</h2>
          </div>
          <div className="row">
            {Data?.testimonial?.map((item, index) => {
              return (
                <div className="col-md-4 col-sm-6 mb-2" key={index}>
                  <Card className="testimonial-card" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={item?.imageurl} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
