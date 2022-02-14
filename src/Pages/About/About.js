import React from 'react'
// import Header  from '../../components/Header';
import HeaderOne from '../../components/HeaderOne';
import  BreadcrumbBox  from '../../components/common/Breadcrumb';
import { Styles } from '../../components/common/styles/header';
import Footer from '../../components/Footer';

const About = () => {
    return (
        <>
         <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper about-page">
 
                    {/* Header 2 */}
                    <HeaderOne/>

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="About Us" />

                    <Footer />
  

                </div>
            </Styles>   
        </>
    )
}

export default About
