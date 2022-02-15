import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./style/programmes";
import Aos from 'aos';
import 'aos/dist/aos.css';
import FindPrograme from '../../components/FindPrograme';

const Programmes = () => {

    useEffect(() => {
        Aos.init({duration:2000});
       }, [])

    //    https://www.youtube.com/watch?v=SSXA2XluIBU
       

       const [data, setData] = useState([]);
       const [filter, setFilter] = useState(data);
       const [loading, setLoading] = useState(false)
       let componentMounted = true;

       useEffect(() => {
        const getProducts = async() =>
        {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted)
            {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return() =>{
                componentMounted = false;
            }
        }  


       }, []);

       const Loading = () =>
       {
           return(
               <>
                Loading....
               </>
           )
       }



    return (
        <>

     { filter.map((products) =>{
         return(
             <>
            <h5> { products.title } </h5>
             </>
         );
     }
     ) }   

        


             <Styles>
            {/* Faq & Event */}
            <section className="programme-area">
                <Container>
                    <Row>
                        <Col md="12">
                            <div data-aos="fade-right" className="sec-title mb-4 pb-md-4 pt-md-4">
                                 <h2>SCHOOLS and Programs </h2>
                            </div>
                        </Col> 
                        <Col md="10">
                            <Row>
                                <Col md="4">
                                    <div data-aos="fade-up" className="programme_card">
                                        <div className="school_name">
                                            <span> YOGANANDA SCHOOL of AI,<br />Computers and Data Science   </span>
                                        </div>
                                        <div className="programme_detail">
                                            <h3> Computer Science Engineering </h3>
                                            <h5> BTech | MTech | PhD </h5>
                                            <ul class="programme_list">
                                                <li> AI /Machine Learning </li>
                                                <li> Big Data Analytics </li>
                                                <li> Cloud Computing </li>
                                            </ul>
                                            <div className="featured_img">
                                                <img className="img-fluid" src= "assets/images/p1.jpg" />
                                                <Link to="/school-detail" > See ALl Programs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>



                                <Col md="4">
                                    <div data-aos="fade-up" className="programme_card">
                                        <div className="school_name">
                                            <span> YOGANANDA SCHOOL of AI,<br />Computers and Data Science   </span>
                                        </div>
                                        <div className="programme_detail">
                                            <h3> Computer Science Engineering </h3>
                                            <h5> BTech | MTech | PhD </h5>
                                            <ul class="programme_list">
                                                <li> AI /Machine Learning </li>
                                                <li> Big Data Analytics </li>
                                                <li> Cloud Computing </li>
                                            </ul>
                                            <div className="featured_img">
                                                <img className="img-fluid" src= "assets/images/p1.jpg" alt=""/>
                                                <Link to="/" > See ALl Programs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>


                                <Col md="4">
                                    <div data-aos="fade-up" className="programme_card">
                                        <div className="school_name">
                                            <span> YOGANANDA SCHOOL of AI,<br />Computers and Data Science   </span>
                                        </div>
                                        <div className="programme_detail">
                                            <h3> Computer Science Engineering </h3>
                                            <h5> BTech | MTech | PhD </h5>
                                            <ul class="programme_list">
                                                <li> AI /Machine Learning </li>
                                                <li> Big Data Analytics </li>
                                                <li> Cloud Computing </li>
                                            </ul>
                                            <div className="featured_img">
                                                <img className="img-fluid" alt="" src= "assets/images/p1.jpg" />
                                                <Link to="/" > See ALl Programs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>


                                <Col md="4">
                                    <div data-aos="fade-up" className="programme_card">
                                        <div className="school_name">
                                            <span> YOGANANDA SCHOOL of AI,<br />Computers and Data Science   </span>
                                        </div>
                                        <div className="programme_detail">
                                            <h3> Computer Science Engineering </h3>
                                            <h5> BTech | MTech | PhD </h5>
                                            <ul class="programme_list">
                                                <li> AI /Machine Learning </li>
                                                <li> Big Data Analytics </li>
                                                <li> Cloud Computing </li>
                                            </ul>
                                            <div className="featured_img">
                                                <img className="img-fluid" alt="" src= "assets/images/p1.jpg" />
                                                <Link to="/" > See ALl Programs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>


                                <Col md="4">
                                    <div data-aos="fade-up" className="programme_card">
                                        <div className="school_name">
                                            <span> YOGANANDA SCHOOL of AI,<br />Computers and Data Science   </span>
                                        </div>
                                        <div className="programme_detail">
                                            <h3> Computer Science Engineering </h3>
                                            <h5> BTech | MTech | PhD </h5>
                                            <ul class="programme_list">
                                                <li> AI /Machine Learning </li>
                                                <li> Big Data Analytics </li>
                                                <li> Cloud Computing </li>
                                            </ul>
                                            <div className="featured_img">
                                                <img alt="" className="img-fluid" src= "assets/images/p1.jpg" />
                                                <Link to="/" > See ALl Programs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col md="4">
                                    <div data-aos="fade-up" className="programme_card">
                                        <div className="school_name">
                                            <span> YOGANANDA SCHOOL of AI,<br />Computers and Data Science   </span>
                                        </div>
                                        <div className="programme_detail">
                                            <h3> Computer Science Engineering </h3>
                                            <h5> BTech | MTech | PhD </h5>
                                            <ul class="programme_list">
                                                <li> AI /Machine Learning </li>
                                                <li> Big Data Analytics </li>
                                                <li> Cloud Computing </li>
                                            </ul>
                                            <div className="featured_img">
                                                <img alt="" className="img-fluid" src= "assets/images/p1.jpg" />
                                                <Link to="/" > See ALl Programs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div data-aos="fade-up" className="programme_card">
                                        <div className="school_name">
                                            <span> YOGANANDA SCHOOL of AI,<br />Computers and Data Science   </span>
                                        </div>
                                        <div className="programme_detail">
                                            <h3> Computer Science Engineering </h3>
                                            <h5> BTech | MTech | PhD </h5>
                                            <ul class="programme_list">
                                                <li> AI /Machine Learning </li>
                                                <li> Big Data Analytics </li>
                                                <li> Cloud Computing </li>
                                            </ul>
                                            <div className="featured_img">
                                                <img alt="" className="img-fluid" src= "assets/images/p1.jpg" />
                                                <Link to="/" > See ALl Programs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col md="4">
                                    <div data-aos="fade-up" className="programme_card">
                                        <div className="school_name">
                                            <span> YOGANANDA SCHOOL of AI,<br />Computers and Data Science   </span>
                                        </div>
                                        <div className="programme_detail">
                                            <h3> Computer Science Engineering </h3>
                                            <h5> BTech | MTech | PhD </h5>
                                            <ul class="programme_list">
                                                <li> AI /Machine Learning </li>
                                                <li> Big Data Analytics </li>
                                                <li> Cloud Computing </li>
                                            </ul>
                                            <div className="featured_img">
                                                <img alt="" className="img-fluid" src= "assets/images/p1.jpg" />
                                                <Link to="/" > See ALl Programs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col md="4">
                                    <div data-aos="fade-up" className="programme_card">
                                        <div className="school_name">
                                            <span> YOGANANDA SCHOOL of AI,<br />Computers and Data Science   </span>
                                        </div>
                                        <div className="programme_detail">
                                            <h3> Computer Science Engineering </h3>
                                            <h5> BTech | MTech | PhD </h5>
                                            <ul class="programme_list">
                                                <li> AI /Machine Learning </li>
                                                <li> Big Data Analytics </li>
                                                <li> Cloud Computing </li>
                                            </ul>
                                            <div className="featured_img">
                                                <img alt="" className="img-fluid" src= "assets/images/p1.jpg" />
                                                <Link to="/" > See ALl Programs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col md="12">
                            <FindPrograme />
                        </Col>
                    </Row> 
                </Container>
            </section>
            </Styles>
        </>
    )
}

export default Programmes



