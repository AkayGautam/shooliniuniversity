import React, { useEffect } from 'react';
import Datas from '../data/faq-event/faq-event.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./common/styles/ranking";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Ranking = () => {

    useEffect(() => {
        Aos.init({duration:2000});
       }, [])

    useEffect(() => {
        const accordionButton = document.querySelectorAll(".accordion-button");
        accordionButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "accordion-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "accordion-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <Styles>
            {/* Faq & Event */}
            <section className="event-faq-area pt-0">
                <Container>
                    <Row>
                    <Col md="5">
                        <div data-aos="fade-right" className="sec-title">
                            <h2>Think <br /> Ranking </h2>
                            <h4> that matter - 2021-22 </h4>
                        </div>
                        <div data-aos="flip-up" className="introVDO">
                        <iframe   src="https://www.youtube.com/embed/NdBAPZxr4Pg?controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        </div>
                    </Col>
                     <Col md="7">
                            <div className="event-area">
                                <Row>
                                   
                                    <Col md="12">
                                        {
                                            Datas.eventDataList.map((eventData, i) => (
                                                <div className="event-box d-flex" key={i}>
                                                    
                                                    <div data-aos="fade-up" className="rankingYear">
                                                        <p>{eventData.eventDate}</p>
                                                    </div>
                                                    <div className="rankingLogo">
                                                    <img data-aos="fade-up" src={process.env.PUBLIC_URL + `/assets/images/${eventData.ranking_logo}`} alt="" className="img-fluid" />
                                                     
                                                    </div>

                                                    <div className="event-details">
                                                        <h6 data-aos="fade-up"><Link to={eventData.eventLink}>{eventData.eventTitle}</Link></h6>
                                                       
                                                        <p data-aos="fade-up">{eventData.eventdesc}</p>
                                                    </div>
                                                    <div data-aos="fade-up" className="seeMoreBtn">
                                                        <Link to="/"> See More </Link>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </div>

                            <div className="event-area mt-5">
                                <Row>
                                   
                                    <Col md="12">
                                        {
                                            Datas.faqDataList.map((eventData, i) => (
                                                <div data-aos="fade-up" className="event-box d-flex" key={i}>
                                                    
                                                    <div className="rankingYear">
                                                        <p>{eventData.eventDate}</p>
                                                    </div>
                                                    <div className="rankingLogo">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/${eventData.ranking_logo}`} alt="" className="img-fluid" />
                                                     
                                                    </div>

                                                    <div className="event-details">
                                                        <h6><Link to={eventData.eventLink}>{eventData.eventTitle}</Link></h6>
                                                       
                                                        <p>{eventData.eventdesc}</p>
                                                    </div>
                                                    <div className="seeMoreBtn">
                                                        <Link to="/"> See More </Link>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </section>
        </Styles>
    ) 
}

export default Ranking
