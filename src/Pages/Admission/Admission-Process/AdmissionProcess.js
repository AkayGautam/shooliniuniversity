import React from 'react'
import Header  from '../../../components/Header';
import  BreadcrumbBox  from '../../../components/common/Breadcrumb';
import { Styles } from '../../../components/common/styles/header';
import Footer from '../../../components/Footer';
const AdmissionProcess = () => {
    return (
        <>
          <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper visionmission-page">
 
                    {/* Header 2 */}
                    <Header/>

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Admission Process" />

                    <Footer />
                </div>
            </Styles>    
        </>
    )
}

export default AdmissionProcess
