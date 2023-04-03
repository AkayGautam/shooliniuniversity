import React, { useState, Suspense, useEffect } from 'react'
import Header from '../../components/Header'
import Styless from './style/style'
import Footer from '../../components/Footer'
import { Modal, Button, Form } from "react-bootstrap";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import Image from "next/legacy/image";
import Head from 'next/head'

const Masterbusiness = () => {


    
    const data = [
        {
            title: "Who teaches MBA at Shoolini University?",
            content: "The faculty at Shoolini University's business school comprises experts in all areas of management studies. Most members have either completed their Doctoral studies at leading universities or have worked in corporate companies at leadership positions. The experienced team hails from the University of Berkeley, IIT, IIM, ISB and other reputed universities in India and abroad. Apart from regular full-time faculty, our visiting faculty comprises corporate leaders who augment the learning with their practical experience. Passionate about what they do, the teachers of all MBA modules are deeply involved in teaching, research, and consultancy, and they are teachers by choice "
        },

        {
            title: "Tell me about the curriculum for MBA at Shoolini University?",
            content: "Shoolini MBA curriculum is based on inputs from industry, alumni and academia. The first four quadmesters cater to the understanding of the fundamental concepts in business management, communications, research, analytics and legal aspects of the business. Students undergo a compulsory two-month summer internship after completion of the first year. In their second year -- quadmester 5 onwards -- students select their major and a minor specialisation. The specialisation choices available to the students are marketing, finance, human resource management, digital, biotechnology, pharmaceutical and healthcare management, rural management, international business and analytics. The course curriculum is dynamic in nature and continuously updated to incorporate the latest developments in the field. Overall, the Shoolini MBA curriculum focuses on knowledge of concepts in business management, development of practical skills for success in the real world and development of responsible business leaders."
        },

        {
            title: "What are the future opportunities after completing MBA from Shoolini University?",
            content: "Shoolini MBA graduates have a world of opportunities available to them. Our meticulously designed placement process ensures each student gets a great career opportunity in leading Indian and global corporates. Where few students get a pre-placement offer in their summer internship, others participate in Placement Week. During the Placement season, students have the option to choose jobs that offer packages of more than Rs 8 lakh per annum. Shoolini MBA graduates have been continuously getting absorbed into the public sector. Our alumni have established start-ups in India, Australia, the Middle East, New Zealand and the US. Students have also been extremely successful in corporate leadership positions and others have joined professional NGOs to contribute to society. Our students have also joined reputed institutions of higher learning for their Doctoral studies, while some have opted out of campus placements and joined their family establishments to give them a more professional outlook.         "
        },

        {
            title: "How do you expose MBA students to industry experience?",
            content: "Students of Shoolini University regularly interact with experts from industry through guest lectures, workshops and seminars to get updated on contemporary concepts in business management. Our skill enhancement program SPRINT offers an excellent platform for hands-on workshops with corporates. Each course understanding is augmented with a masterclass by subject matter experts from the industry for deeper and comprehensive understanding. The students also undergo compulsory two months summer internship where they are mentored by leaders in the corporate sector. Students collaborate to solve live problems of the business world by undertaking research projects and participate in consultancy projects led by the faculty.         "
        },

        {
            title: "What are the job prospects after completing MBA International Relations?",
            content: "After completing this program, students have a wide range of job opportunities in the commercial sectors, multinational companies and organisations at the global level.         "
        },

        {
            title: "Why is Shoolini a fully residential MBA?   ",
            content: "Experts and academicians from the field believe that the best management education is experienced in a residential programme. Hence, the MBA programme is 100% residential for 24*7 learning. By spending two years on the campus, students can gain a lifetime of experience. The live-in facility offers intensive learning to MBA students, who mostly join after some experience or even a bachelor’s degree.    "
        },
    ];
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        // on scroll fixed

        const [stickyClass, setStickyClass] = useState('relative');

        useEffect(() => {
          window.addEventListener('scroll', stickNavbar);
      
          return () => {
            window.removeEventListener('scroll', stickNavbar);
          };
        }, []);
      
        const stickNavbar = () => {
          if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 700 ? setStickyClass('fixedCHildNav z-50') : setStickyClass('relative');
          }
        };

        useEffect(() => {

            var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
            
        
           
         
        }, [])

    return (
        <>

<Suspense> 

<Head>
<title>MBA Course, Eligibility, Fees, Admissions 2023 | Shoolini</title>
<meta name="description" content="Get admission in MBA at India's No.1 Private University - Shoolini. Check Course details, Eligibility, Fee, Placements and MBA specialisations available." />
<meta name="keywords" content="master of business administration,mba, mba specialisation, mba courses, mba fees, mba eligibility, mba admissions 2023, shoolini admissions, admissions 2023, data science, agri business management, logistics and supply chain management, tourism, biotechnology, food technology, banking and insurance, business analytics, finance, financial markets, pharma and healthcare management, human resources, marketing, digital marketing, operations, retail management, strategy and consulting, communications, shoolini university, no.1 private university in India" />
</Head>

            <div id="mbaPage">
                <Header />
            </div>


            <Styless>





                <Modal className="animated zoomInDown" show={show} onHide={handleClose}>

                    <Modal.Body>




                        <div className="modals auto-off" id="demoModal">
                            <div className="modal-dialog  modal-dialog-centered" role="document">
                                <div className="modal-content">

                                    <div className="container-fluid">


                                        <div className="row">

                                            <div className="col-md-12 text-center ">
                                                <h2>Apply Now</h2>


                                                {/* <form method="post" enctype="multipart/form-data"
                                                    action="https://web-in21.mxradon.com/t/FormTracker.aspx"
                                                    className="form-card">
                                                    <fieldset className="form-fieldset">


                                                        <div className="form-element form-input">
                                                            <input type='text' id='FirstName' name='FirstName'
                                                                maxlength='100' autocomplete='off'
                                                                required='required' className="form-element-field"
                                                                placeholder="Name " />
                                                            <div className="form-element-bar"></div>
                                                            <label className="form-element-label"
                                                                for='FirstName'>Enter Name *</label>
                                                        </div>

                                                        <div className="form-element form-input">
                                                            <input type='email' id='EmailAddress'
                                                                name='EmailAddress' maxlength='100'
                                                                autocomplete='off' required='required'
                                                                className="form-element-field" placeholder=" "
                                                            />
                                                            <div className="form-element-bar"></div>
                                                            <label className="form-element-label"
                                                                for='EmailAddress'>Enter Email Address *</label>

                                                        </div>


                                                        <div className="form-element form-input">
                                                            <input id='Phone' name='Phone'
                                                                maxlength='10' autocomplete='off'
                                                                required='required' className="form-element-field"
                                                                placeholder="Number" type="number" />
                                                            <div className="form-element-bar"></div>
                                                            <label className="form-element-label" for='Phone'>Enter
                                                                Phone Number *</label>

                                                        </div>

                                                        <div className="form-element form-input">


                                                            <select id='mx_Course' name='mx_Course' required='required' className="form-element-field" >
                                                                <option value='' selected="true"></option>
                                                                <option value='Undergraduate' >Undergraduate</option>
                                                                <option value='Postgraduate' >Postgraduate</option>
                                                                <option value='PhD' >PhD</option></select>

                                                            <div className="form-element-bar"></div>
                                                            <label className="form-element-label" for='mx_Course'>Select Course *</label>

                                                        </div>

                                                        <div className="form-element form-input">
                                                            <input type='text' id='mx_Specialization' name='mx_Specialization' maxlength='100' autocomplete='off' required='required' className="form-element-field"
                                                                placeholder="Specialization" />
                                                            <div className="form-element-bar"></div>
                                                            <label className="form-element-label" for='mx_Specialization'>Select Specialization *</label>

                                                        </div>


                                                    </fieldset>


                                                    <div className="form-actions">
                                                        <button id="form-submit-button" type="submit"
                                                            className="form-btn">Apply</button>

                                                    </div>

                                                    <input type="hidden" name="MXHOrgCode" value="64755" />
                                                    <input type="hidden" name="MXHLandingPageId"
                                                        value="8b8c0c2f-5e98-11ed-a19b-0acc9d8b1d02" />
                                                    <input type="hidden" name="MXHFormBehaviour" value="1" />
                                                    <input type="hidden" name="MXHFormDataTransfer" value="0" />
                                                    <input type="hidden" name="MXHRedirectUrl"
                                                        value="https://shooliniuniversity.com/thankyou" />
                                                    <input type="hidden" name="MXHAsc" value="5" /> <input
                                                        type="hidden" name="MXHPageTitle" value="Enquire Now" />
                                                    <input type="hidden" name="MXHOutputMessagePosition"
                                                        value="0" />
                                                    <input type="hidden" name="MXHIsExternallyUsed" value="1" />


                                                </form> */}

<div class="npf_wgts" data-height="400px" data-w="6ecc20f484a5111a5bc1e4b3bc04c426"></div>

<script type="text/javascript"> {`var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);`} </script>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>

                </Modal>

                <div className="sidebar-icons">
                    <a target="_blank" href="tel:+917018007000" rel="noreferrer">
                    <Image src="/assets/images/call.png" width={90}  height={90} />
                        <span> Talk to us</span><small> Mon-Fri | 9 AM to 5 PM</small>
                    </a>
                    <button onClick={handleShow}>
                    <Image src="/assets/images/hands.png" width={90}  height={90} />
                        
                        <span> Apply Now</span>
                    </button>
                </div>
                <main className="innerBody">
                    <section id="shooliniMBA" className="heroBanner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="leftCatd">
                                        <h1 className="mb-0"> <span> Top-ranked <strong> MBA </strong> </span> <br /> Mentored by the Top 1%</h1>
                                        <div className="noretype">
                                            <p className="border-right-1"> at India's No.1 <br /> Private University </p>
                                            <p className="text-center py-0">
                                                <Image
                                                    src="/assets/images/theLogo.png"
                                                    alt="THE Logo"
                                                    width={120}
                                                    height={54}
                                                />
                                            </p>
                                        </div>

                                        <div className="forMobile d-md-none">

                                            <Image
                                                src="/assets/images/mobile-banner.jpg"
                                                alt="Shoolini Banner"
                                                className="mg-responsive w-100"
                                                width={535}
                                                height={514}
                                            />

                                        </div>

                                        <div className="px-0 btn btn-grad-red"> <a target="_blank"
                                            href="https://admissions.shooliniuniversity.com/"> Apply Now</a>
                                        </div>
                                        {/* <div className="ugImage">
                                            <img src="assets/images/uglogos.png" />
                                        </div> */}
                                    </div>
                                    <div className="row my-md-5">
                                        <div className="col-4">
                                            <div className="placeVal">
                                                <h3><strong> 100% </strong> <br /> Placements </h3>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="placeVal">
                                                <h3><strong> 18LPA </strong> <br /> Highest Salary </h3>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="placeVal">
                                                <h3><strong> 250+ </strong> <br /> Global Alliances </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="rightCard">

                                        <Image
                                            src="/assets/images/heroOne.png"
                                            alt="Hero Banner"
                                            className="mg-responsive w-100"
                                            width={356}
                                            height={621}
                                        />

                                    </div>
                                </div>
                            </div>




                        </div>
                    </section>

                    {/* section  */}


                    <section id="mentorship" className="mba_tabs pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="tablist">
                                        <div className="demo">
                                            <div>

                                            <ul className=   {`nav tablistItems nav-tabs nav-justified nav-tabs-dropdown border-0 ${stickyClass}`}>
                                                    <li className="active"><a href="#home"
                                                    >Program Highlights</a></li>
                                                    <li ><a href="#specialization"
                                                    >Internships {'&'} Placements</a></li>
                                                    <li ><a href="#special"
                                                    >Specializations</a></li>
                                                    <li ><a href="#fees"
                                                    >Fees </a></li>
                                                    <li ><a href="#faqs"
                                                    > FAQ</a></li>
                                                    <li ><a target="_blank" href="https://admissions.shooliniuniversity.com/" className="applyBtn"

                                                    >Apply
                                                        Now</a></li>

                                                </ul>

                                                <div className="tab-content mt-md-5">
                                                    <div className="tab-pane active" id="home">
                                                        <div className="tabItemData">

                                                            <div className="pagetitle text-center mb-4  ">
                                                                <div className="pagetitle text-center">
                                                                    <h2> The <span> Shoolini MBA</span> Experience </h2>
                                                                </div>



                                                                <div className="mt-3">
                                                                    <p>
                                                                        Designed and run for future leaders of the corporate world, the Management School of Shoolini is ranked 102-125 among all Indian institutes at the 2022 NIRF Ranking. Students of MBA at Shoolini University are prepared to excel at a plethora of job profiles in the corporate world. The Management School is approved by HP PERC (Govt of HP) and is UGC approved.
                                                                    </p>
                                                                    <div className={isActive ? 'allLogos ' : null} style={{ display: "none" }} >
                                                                        <p>
                                                                            Shoolini offers cutting-edge specialisations and a unique curriculum. Additionally, the MBA program at Shoolini University has seen a 100% placement record for its students. Theory, practical experiences, internships and campus placements have helped the university become a school of choice for its MBA programs.

                                                                            The National Board of Accreditation (NBA) has accredited the MBA Program at Shoolini University. With this, Shoolini becomes the first university in Himachal Pradesh to be granted NBA Accreditation for its MBA program.
                                                                        </p>
                                                                    </div>



                                                                </div>

                                                                <button onClick={toggleClass} className="btnView">

                                                                     <img className={isActive ? 'rotatebtn ' : null}
                                                                      style={{  width: '60px', height:"auto" }}  src="assets/images/seemore.png" /></button>
                                                            </div>


                                                            <div className="dataBrdcrmb text-center">
                                                                <ul className="p-0 m-0">
                                                                    <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                        Duration <strong> 2yrs | 4 semesters</strong></li>
                                                                    <li> <img src="assets/images/icon2.png" /> Degree <strong>
                                                                        Full-time MBA</strong></li>
                                                                    <li> <img src="assets/images/icon3.png" /> Mode <strong> Fully
                                                                        Residential, on Campus</strong></li>
                                                                </ul>
                                                            </div>

                                                            <div className="row mt-md-5">

                                                                <div className="col-md-6 pl-md-0">
                                                                    <div className="card-box">

                                                                        <h3 className=" text-dark"> Accreditations {'&'} Rankings </h3>
                                                                       


                                                                     
                                                                        <div className="row my-4">
                                                                            <div className="col-3">
                                                                                <div className="sb_logo">
                                                                                    <Image
                                                                                        src="/assets/images/logo3.jpg"
                                                                                        width={80}
                                                                                        className="img-responsive"
                                                                                        height={81}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-9">
                                                                                <div className="sb_text">
                                                                                    <h4> Approved by UGC </h4>
                                                                                    <p> University Grants Commission
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="row my-4">
                                                                            <div className="col-3">
                                                                                <div className="sb_logo">
                                                                                    <Image
                                                                                        src="/assets/images/logo4.jpg"
                                                                                        width={80}
                                                                                        className="img-responsive"
                                                                                        height={81}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-9">
                                                                                <div className="sb_text">
                                                                                    <h4> NBA Accreditation for MBA </h4>
                                                                                    <p> 1st university in Himachal Pradesh to be granted NBA Accreditation for its MBA Program
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="row my-4">
                                                                            <div className="col-3">
                                                                                <div className="sb_logo">
                                                                                    <Image
                                                                                        src="/assets/images/logo1.jpg"
                                                                                        width={80}
                                                                                        height={54}
                                                                                        className="img-responsive"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-9">
                                                                                <div className="sb_text">
                                                                                    <h4> #102-125 in Management </h4>
                                                                                    <p> NIRF India Rankings 2022 <br /> Ministry of Education, Government of India
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row my-4">
                                                                            <div className="col-3">
                                                                                <div className="sb_logo">
                                                                                    <Image
                                                                                        src="/assets/images/logo2.jpg"
                                                                                        width={80}
                                                                                        className="img-responsive"
                                                                                        height={81}
                                                                                    />

                                                                                </div>
                                                                            </div>
                                                                            <div className="col-9">
                                                                                <div className="sb_text">
                                                                                    <h4> Approved by HP PERC </h4>
                                                                                    <p>H.P. Private Educational Institutions Regulatory Commission, Govt. of HP
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                       
                                                                    </div>
                                                                </div>


                                                                <div className="col-md-6 pr-md-0">
                                                                    <div className="card-box">
                                                                        <h3 className="title-red"> Start Your MBA Application</h3>
                                                                        <p className="lightTexty"> 
                                                                            Please fill in the registration form below: <br /> 
                                                                           <small>  (fields with * are mandatory)</small></p>
                                                                        {/* <form method="post" enctype="multipart/form-data"
                                                                            action="https://web-in21.mxradon.com/t/FormTracker.aspx"
                                                                            className="form-card">
                                                                            <fieldset className="form-fieldset">


                                                                                <div className="form-element form-input">

                                                                                    <input type='text' id='FirstName' name='FirstName'
                                                                                        maxlength='100' autocomplete='off'
                                                                                        required='required' className="form-element-field"
                                                                                        placeholder="Name " />
                                                                                    <div className="form-element-bar"></div>
                                                                                    <label className="form-element-label"
                                                                                        for='FirstName'>Enter Name *</label>
                                                                                </div>

                                                                                <div className="form-element form-input">
                                                                                    <input id='EmailAddress'
                                                                                        name='EmailAddress' maxlength='100'
                                                                                        autocomplete='off' required='required'
                                                                                        className="form-element-field" placeholder=" "
                                                                                        type="email" />
                                                                                    <div className="form-element-bar"></div>
                                                                                    <label className="form-element-label"
                                                                                        for='EmailAddress'>Enter Email Address *</label>

                                                                                </div>


                                                                                <div className="form-element form-input">
                                                                                    <input type='text' id='Phone' name='Phone'
                                                                                        maxlength='10' autocomplete='off'
                                                                                        required='required' className="form-element-field"
                                                                                        placeholder="Number" />
                                                                                    <div className="form-element-bar"></div>
                                                                                    <label className="form-element-label" for='Phone'>Enter
                                                                                        Phone Number *</label>

                                                                                </div>

                                                                                <div className="form-checkbox form-checkbox-inline">
                                                                                    <label for='mx_I_Agree_1'
                                                                                        className="form-checkbox-label">
                                                                                        <input type='checkbox' id='mx_I_Agree_1' className="form-checkbox-field"
                                                                                            name='mx_I_Agree_1' value='1'
                                                                                        />
                                                                                        <i className="form-checkbox-button"></i>
                                                                                        <span>I agree to the Terms {'&'} Conditions</span>
                                                                                    </label>
                                                                                </div>

                                                                            </fieldset>


                                                                            <div className="form-actions">
                                                                                <button id="form-submit-button" type="submit"
                                                                                    className="form-btn">Enquire Now</button>

                                                                            </div>

                                                                            <input type="hidden" name="MXHOrgCode" value="64755" />
                                                                            <input type="hidden" name="MXHLandingPageId"
                                                                                value="8b8c0c2f-5e98-11ed-a19b-0acc9d8b1d02" />
                                                                            <input type="hidden" name="MXHFormBehaviour" value="1" />
                                                                            <input type="hidden" name="MXHFormDataTransfer" value="0" />
                                                                            <input type="hidden" name="MXHRedirectUrl"
                                                                                value="https://shooliniuniversity.com/thankyou" />
                                                                            <input type="hidden" name="MXHAsc" value="5" /> <input
                                                                                type="hidden" name="MXHPageTitle" value="Enquire Now" />
                                                                            <input type="hidden" name="MXHOutputMessagePosition"
                                                                                value="0" />
                                                                            <input type="hidden" name="MXHIsExternallyUsed" value="1" />


                                                                        </form> */}

<div class="npf_wgts" data-height="400px" data-w="6ecc20f484a5111a5bc1e4b3bc04c426"></div>

                                                                    </div>
                                                                </div>




                                                                <div className="col-md-6 mt-5">
                                                                    <div className="card-box">
                                                                        <h3 className="title-default"> MBA that Gets You Industry-Ready with
                                                                            India's <span> Top Mentorship Program </span></h3> <br />
                                                                        <p> Designed and <strong> mentored by business leaders from the
                                                                            world’s top 1% companies </strong> like McKinsey, PwC,
                                                                            Citi and institutions like the IITs, IIMs, ISB, the Shoolini
                                                                            MBA gets you industry ready from the get go. <br /><br />
                                                                            As a full-time MBA student, you will <strong> develop <br />
                                                                                strong general management and leadership abilities
                                                                                through rigorous experience-based curriculum </strong>
                                                                            based on the Stanford Graduate Business School. Our
                                                                            multidisciplinary approach empowers you with the tools to
                                                                            think critically and make sound decisions.<br /><br />
                                                                            Join a collaborative community of faculty, alumni, and peers
                                                                            who will support your success every step of the way. <br /> <br />
                                                                            <strong> Invest in your future</strong>. <strong> <span
                                                                                className="text-red"> Join our MBA programme
                                                                                today!</span></strong>
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 pl-md-0 mt-5">
                                                                    <div className="voices-image position-relative">

                                                                        <Image
                                                                            src="/assets/images/ashish.jpg"
                                                                            width={548}
                                                                            className="img-responsive"
                                                                            height={607}
                                                                        />
                                                                        <div className="namedes">
                                                                            <h4> Prof Atul Khosla</h4>
                                                                            <h5> VC {'&'} Dean of the School of Business </h5>
                                                                            <p> Ex-Mckinsey {'&'} Company </p>
                                                                            <p> Former India Head-Oliver Wyman</p>
                                                                            <p> Alum IIT-Kanpur, JBIMS</p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div className="tab-pane" id="profile">

                                                        <div className="tabItemData">
                                                            <div className="pagetitle text-center">
                                                                <h2> The <span> Internship & Placement</span> </h2>
                                                            </div>
                                                            <div className="dataBrdcrmb text-center">
                                                                <ul className="p-0 m-0">
                                                                    <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                        Duration <strong> 2yrs | 4 semesters</strong></li>
                                                                    <li> <img src="assets/images/icon2.png" /> Degree <strong>
                                                                        Full-time MBA</strong></li>
                                                                    <li> <img src="assets/images/icon3.png" /> Mode <strong> Fully
                                                                        Residential, on Campus</strong></li>
                                                                </ul>
                                                            </div>

                                                            <div className="row mt-md-5">
                                                                <div className="col-md-6">
                                                                    <div className="card-box">
                                                                        <h3 className="title-red"> Start Your MBA Application</h3>
                                                                        <form>

                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="card-box">
                                                                        <h3 className="title-default"> MBA that Gets You Industry-Ready with
                                                                            India's <span> Top Mentorship Program </span></h3>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div className="tab-pane" id="messages">
                                                        <div className="tabItemData">
                                                            <div className="pagetitle text-center">
                                                                <h2> The <span>Specializations</span> </h2>
                                                            </div>
                                                            <div className="dataBrdcrmb text-center">
                                                                <ul className="p-0 m-0">
                                                                    <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                        Duration <strong> 2yrs</strong></li>
                                                                    <li> <img src="assets/images/icon2.png" /> Degree <strong>
                                                                        Full-time MBA</strong></li>
                                                                    <li> <img src="assets/images/icon3.png" /> Mode <strong> Fully
                                                                        Residential, on Campus</strong></li>
                                                                </ul>
                                                            </div>

                                                            <div className="row mt-md-5">
                                                                <div className="col-md-6">
                                                                    <div className="card-box">
                                                                        <h3 className="title-red"> Start Your MBA Application</h3>
                                                                        <form>

                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="card-box">
                                                                        <h3 className="title-default"> MBA that Gets You Industry-Ready with
                                                                            India's <span> Top Mentorship Program </span></h3>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="settings">
                                                        <div className="tabItemData">
                                                            <div className="pagetitle text-center">
                                                                <h2> The <span> Fees {'&'} Scholarships</span> </h2>
                                                            </div>
                                                            <div className="dataBrdcrmb text-center">
                                                                <ul className="p-0 m-0">
                                                                    <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                        Duration <strong> 2yrs | 4 semesters</strong></li>
                                                                    <li> <img src="assets/images/icon2.png" /> Degree <strong>
                                                                        Full-time MBA</strong></li>
                                                                    <li> <img src="assets/images/icon3.png" /> Mode <strong> Fully
                                                                        Residential, on Campus</strong></li>
                                                                </ul>
                                                            </div>

                                                            <div className="row mt-md-5">
                                                                <div className="col-md-6">
                                                                    <div className="card-box">
                                                                        <h3 className="title-red"> Start Your MBA Application</h3>
                                                                        <form>

                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="card-box">
                                                                        <h3 className="title-default"> MBA that Gets You Industry-Ready with
                                                                            India's <span> Top Mentorship Program </span></h3>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>




                    <section id="specialization" className="student-voices">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card-box">
                                        <h3 className="title-default">MBA Placements & Internships</h3>
                                       
                                        <p className="text-18"> The dedicated team of experts at the Placement Cell at Shoolini
                                            University including career coaches, employer engagement
                                            specialists and events and data management experts, is
                                            committed to help you <strong> maximize your career goals.</strong> </p>

                                        <div className="text-center">

                                            <div className="row">
                                            <div className="col-3 inRow">
                                                <div className="icon-image">
                                                <Image
                                                src="/assets/images/icon14.png"
                                                width={50}
                                                className="w-70"
                                                height={50}
                                            />
                                                </div>
                                                <div className="placeVal"><h3><strong> 100% </strong> <br /> Placements </h3></div></div>

                                                <div className="col-3 inRow">
                                                <div className="icon-image">
                                                <Image
                                                src="/assets/images/icon13.png"
                                                width={50}
                                                className="w-70"
                                                height={35}
                                            />
                                                </div>
                                                <div className="placeVal"><h3><strong> 100% </strong> <br /> Paid Internships </h3></div></div>

                                                <div className="col-3 inRow">
                                                <div className="icon-image">
                                                <Image
                                                src="/assets/images/icon12.png"
                                                width={50}
                                                className="w-70"
                                                height={35}
                                            />
                                                </div>
                                                <div className="placeVal"><h3><strong> 18LPA </strong> <br /> Highest CTC </h3></div></div>

                                                <div className="col-3 inRow">
                                                <div className="icon-image">
                                                <Image
                                                src="/assets/images/icon11.png"
                                                width={50}
                                                className="w-70"
                                                height={50}
                                            />
                                                </div>
                                                <div className="placeVal"><h3><strong> 250+ </strong> <br /> Recruiting Companies </h3></div></div>
                                            </div>
                                         

                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>



                    <section id="hiring" className="student-voices">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 pr-md-0">
                                    <div className="voices-image">
                                        <img className="img-responsive" src="assets/images/students.jpg" />
                                    </div>
                                </div>
                                <div className="col-md-6 pl-md-0">
                                    <div className="voices-text card-box card-box-dark pt-5">
                                        <h3 className="title-default text-white">MBA graduates <span className="text-red"> land dream
                                            jobs</span> thanks to the mentorship and placement program of Shoolini University</h3>
                                        <p className="text-white text-18"> “ The MBA programme at Shoolini University exceeded my
                                            expectations. The faculty here are truly world-className, providing invaluable training to equip
                                            me with the skills to excel in the business world. Shoolini MBA is both a challenging and
                                            transforming experience, professionally and personally.” </p>
 

                                        <div className="text-right mt-4">
                                            <Image
                                                src="/assets/images/icici.png"
                                                width={250}
                                                className="w-70"
                                                height={89}
                                            />


                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                    <section id="fees" className="student-voices">
                        <div className="container">
                            {/* <div class="pagetitle text-center mb-4"><h2> Curriculum {'&'}  Fees </h2></div> */}
                            <div className="row">
                                <div className="col-md-6 mb-xs-20">
                                    <div className="card-box">
                                        <h3 className="title-default"> Fee Structure </h3>
                                        <table className="table table-responsive">
                                            <thead>
                                                <tr>
                                                    <td> <strong> Semester Fee </strong> </td>
                                                    <td> </td> </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> Himachal Pradesh Domicile : </td>
                                                    <td> ₹135000 </td>
                                                </tr>
                                                <tr>
                                                    <td> Non-Himachal Pradesh Domicile : </td>
                                                    <td>₹148750</td>
                                                </tr>
                                                <tr>
                                                    <td> Duration </td>
                                                    <td> 2 Years </td>
                                                </tr>

                                                <tr>
                                                    <td><strong>Eligibility: </strong> </td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td> A bachelor’s degree (any discipline) with minimum 50% marks
                                                    </td>
                                                    <td> </td>
                                                </tr>

                                                <tr>
                                                    <td><strong>Admission Criteria: </strong> </td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>GMAT/CAT/MAT or state entrance, and letter of intent and faculty interaction
                                                    </td>
                                                    <td> </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card-box">
                                        <h3 className="title-default"> Skill Development </h3>
                                        <p className="text-18">  <strong> SPRINT </strong>   <br /> SPRINT (Skill Progression through Rapid, Intensive & Innovative Training) is a week-long program that focuses on industry exposure, hands-on-experience on concepts through workshops, games and guest lectures.  <br />
                                            <br />
                                            <strong>  Advanced Training Program (ATP) </strong>   <br />
                                            FMS launched the fully residential program ATP, which is a 21-day program equips students with strong problem-solving skills and conceptual knowledge.
                                            <br /><br />
                                            <strong>  The Troops</strong><br />
                                            The Troops Program brings students out of their comfort zones, ensuring they learn and excel outside the classroom with indoor and outdoor sports, and outdoor-ed activities such as trekking with a cause, tree plantations, case studies etc.


                                        </p>




                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>




                    <section id="faqs" className="student-voices">
                        <div className="container">
                            <div class="pagetitle text-center mb-4"><h2> Frequently Asked Questions </h2></div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card-box acordianFaq">
                                        <Accordion>
                                            {data.map((item, index) => (
                                                <AccordionItem key={index}>
                                                    {({ open }) => (
                                                        <>
                                                            <AccordionHeader>
                                                                <span className={`accordion-title ${open ? 'accordion-active' : ''}`}>{item.title}</span>
                                                            </AccordionHeader>

                                                            <AccordionBody>
                                                                <div className="accordion-body">
                                                                    {item.content}
                                                                </div>
                                                            </AccordionBody>
                                                        </>
                                                    )}
                                                </AccordionItem>
                                            ))}
                                        </Accordion>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>

                  
                    <section id="placements" className="mba-placements">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="card-box">
                                        <h3 className="title-default">250+ Top MBA <span> Hiring Partners </span></h3>
                                        <p> <strong> Unlock Career Opportunities at India’s Top Companies. </strong> <br />
                                            Join the Elite Ranks of our MBA Alumni Network </p>


                                        <div className="row">
                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/citrix.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/CodeBrew.jpeg" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/Cogni.jpeg" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/Damco.jpeg" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/Genpact.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/huges.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>


                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/IBM.jpeg" width={200} className="img-responsive" height={100} />
                                                    
                                                </div>
                                            </div>


                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/KhannaPaper.jpeg" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>


                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/Lg.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>


                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/Netsolutions.jpeg" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>


                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/NPF.jpeg" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/orange.png" width={200} className="img-responsive" height={70} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive ? 'allLogoss row position-relative ' : null} style={{ display: "none" }}>
                                       



                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/Peoplestrong.jpeg" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>


                                            <div className="col-md-2 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/polariss.jpeg" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>


                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/TataHitachi.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>


                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/engg/havells.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>


                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/engg/Onida.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>


                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/engg/SBIcard.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/engg/Shubham.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/engg/microtek.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/CSE/citrix.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/engg/logo55.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/engg/Windowit.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/engg/xcelris.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/logos/zydu.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/logos/l1.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/logos/bio.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/logos/hind.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/management/airtel.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/management/Byjus.png" width={200} className="img-responsive" height={60} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/management/Lg.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/management/ICICIBAnk.png" width={200} className="img-responsive" height={100} />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/management/jio.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/management/hindustantimes.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/management/accenture.png" width={200} className="img-responsive" height={60} />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                    <Image src="/assets/images/management/airtel.png" width={200} className="img-responsive" height={80} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="moreView">
                                                
                                                <button className={isActive ? 'btnView ' : "nullRotate"} onClick={toggleClass} >  <Image src="/assets/images/seemore.png" width={70} className="img-responsive rotatebtn" height={65} /></button>
                                            </div>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="special" className="spiecalisation">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-6 pr-md-0">
                                    <div className="card-box">
                                        <h3 className="title-default">Choose more with <span className="text-red"> the Shoolini MBA</span> <br /> Pick a Specialisation</h3>
                                        <p> Our future-ready MBA specializations are <strong> designed by leading
                                            industry experts from the world’s top 1% companies </strong> to help
                                            you succeed in a dynamic, fast-changing business landscape. </p>

                                        <div className="courselist">
                                            <ul className="p-0">
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-data-science"> Data
                                                    Science </a> </li>
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-marketing"> Marketing
                                                </a> </li>
                                                <li> <a target="_blank" href="#"> Business Analytics </a> </li>
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-digital"> Digital
                                                    Marketing </a> </li>
                                                <li> <a target="_blank"
                                                    href="https://shooliniuniversity.com/mba-logistics-and-supply-chain-management">
                                                    Logistic and Supply Chain Management </a> </li>
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-human-resource"> Human
                                                    Resources </a> </li>
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-tourism"> Tourism </a>
                                                </li>
                                                <li> <a target="_blank" href="#"> Operations </a> </li>
                                                <li> <a target="_blank" href="#"> Agri Business </a> </li>
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-finance"> Finance </a>
                                                </li>
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-pharma"> Pharma and
                                                    Healthcare </a> </li>
                                                <li> <a target="_blank" href="#"> Financial Markets </a> </li>
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-biotechnology">
                                                    Biotechnology </a> </li>
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-banking-and-insurance">
                                                    Banking and Insurance </a> </li>
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-food-technology"> Food
                                                    Technology </a> </li>
                                                <li> <a target="_blank" href="#"> Communications </a> </li>
                                                <li> <a target="_blank" href="https://shooliniuniversity.com/mba-retail"> Retail </a>
                                                </li>
                                                <li> <a target="_blank" href="#"> Strategy and Consulting </a> </li>
                                            </ul>
                                        </div>

                                        <div class="px-0 btn btn-grad-red"> <button onClick={handleShow}  > Need Help? Consult MBA Mentor</button></div>

                                    </div>
                                </div>

                                <div className="col-md-6 pl-md-0">
                                    <div className="voices-image position-relative">
                                    <Image src="/assets/images/girlstudent.jpg" width={558} className="img-responsive" height={630} />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </main>

            </Styless>
            <div id="mba_footer">
                <Footer />
            </div>

            </Suspense>

        </>
    )
}

export default Masterbusiness