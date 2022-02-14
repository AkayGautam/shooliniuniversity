import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Header from './Header';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Styles } from "./common/styles/Combine";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Datas from '../data/hero/hero-slider.json';
import Aos from 'aos';
import 'aos/dist/aos.css';
import DialogVideo from './Dialogs/DialogVideo';
import ApplyNow from './Dialogs/ApplyNow';


const SliderDemo = () => {

    useEffect(() => {
        Aos.init({duration:2000});
       }, [])

 return (

  

    <Styles>

	<section className="hero-slider-area">
   
		<Slider className="slider-wrapper">
			{Datas.map((data, i) => (
				<div
					key={i}
					className="slider-content slider-image"
					style={{ background: `url('/assets/images/${data.backgroundImage}') no-repeat center center` }}
				>
					 <div className="slider-table">
                                <div className="slider-tablecell">
                                    <Container>
                                        <Row>
                                            <Col md="12">
                                                <div className={data.uniqClass}>
                                                    <div className="slider-title text-center">
                                                        <p>{data.title}</p> 
                                                    </div>
                                                    <div className="slider-desc text-center">
                                                        <h1 data-aos="fade-up">{data.desc}</h1>
                                                    </div>
                                                   
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="resrchTxt mt-5">
                                               <h5> Research Citations Per Paper  </h5> 
                                               <h6>  QS World University Rankings | Asia | 2022 </h6>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                            <Row>
                                            <Col md="6">
                                            <div className="slider-btn mt-5">
                                                        
                                                        <ApplyNow />
                                                        <Link className="slider-btn2" to={process.env.PUBLIC_URL + `/${data.btnTwoLink}`}>Enquire</Link>
                                              </div> 
                                                </Col>
                                                <Col md="6">
                                                <div className="videoMosdal hero__quote-animation">

                                                    <DialogVideo />
                                                   
                                                    </div>
                                                </Col>   

                                            </Row>
                                             
                                         </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
				</div>
			))}

                

		</Slider>
	</section>
    </Styles>
 );
            }

export default SliderDemo;
