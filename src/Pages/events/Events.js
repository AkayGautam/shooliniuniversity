import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

import { Styles } from './styles/event.js';


const Events = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
    };

    var result = [];

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://shooliniuniversity.com/eventAPI'
            , {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // <-- Specifying the Content-Type
                }),
                body: "auth=shoolini@999"
            }
        )
            .then((response) => response.json())
            .then((res) => setData(res))
            .catch((error) => console.error(error))
    }, [])

    result = data?.success;
    // console.log(result)

   const removeHTML = (str) => { 
        var tmp = document.createElement("p");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
    }
   
    return (

        <Styles>
            {/* Main Wrapper */}
            {/* Events Area */}
            <section className="event-page-area event-page py-5">
                <Container>
                    <div data-aos="fade-right" className="sec-title mb-5 text-left">
                        <h2>events {"&"} Conferences  </h2>
                    </div>
                    <Row>
                        <Col lg="12" md="12">
                            <Slider {...settings}>
                                {result?.map(data => (
                                    
                                    <div className="team-item" key={data?.id}>
                                        <div data-aos="fade-up" className="dflex-card">
                                            {/* <img src={process.env.PUBLIC_URL + `/assets/images/${data.personImage}`} alt="" className="" /> */}
                                            <div className="DateLink">
                                                <Link to="/">

                                                    <h5>{data?.date}</h5>
                                                    <p>{data?.date}</p>
                                                </Link>
                                            </div>
                                            <div className="eveDetail">
                                            <Link to={"/event/" + data?.title} key={data?.id}>
                                                    <h5>{ (data?.title).replace( "%" , '-') }</h5>
                                                    <p>Venue : {data?.location}</p>
                                                    <p>Audience : { removeHTML(data?.content) }</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </Slider>


                        </Col>



                    </Row>
                </Container>
            </section>

        </Styles>
    );
};

export default Events;

