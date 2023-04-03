import React, { useState, Suspense, useEffect } from 'react'
import Header from '../../components/Header'
import Styless from './style/style'
import Footer from '../../components/Footer'
import { Modal, Button, Form } from "react-bootstrap";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import Image from "next/legacy/image";
import Head from 'next/head'

const Mbas = () => {

    useEffect(() => {

        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);


    }, [])

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


    return (
        <>

            <Suspense>

                <Head>
                    <title>Summit Research Program (SRP) | Shoolini University</title>
                    <meta name="description" content="Become a future scientist with the highly competitive Summit Research Program (SRP) at India’s No.1 Research University, Shoolini (QS Rankings 2023)." />
                    <meta name="keywords" content="SRP, Summit Research programs, Research programs, No.1 Research University in India, India's No.1 Research University, QS University Rankings 2023, Applied Sciences, BTech Biotech, BTech Food Technology, Faculty of Applied Sciences & Biotechnology " />


                </Head>

                <div id="mbaPage">
                    <Header />
                </div>


                <Styless>





                    <Modal className="" show={show} onHide={handleClose}>

                        <Modal.Body>
                            <h2>Apply Now</h2>
                            <div class="npf_wgts" data-height="400px" data-w="6ecc20f484a5111a5bc1e4b3bc04c426"></div>


                            {/* <div className="modals auto-off" id="demoModal">
                            <div className="modal-dialog  modal-dialog-centered" role="document">
                                <div className="modal-content">

                                    <div className="container-fluid">


                                        <div className="row">

                                            <div className="col-md-12 text-center ">
                                                <h2>Apply Now</h2>


                                                <form method="post" enctype="multipart/form-data"
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


                                                </form>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        </Modal.Body>

                    </Modal>

                    <div className="sidebar-icons">
                        <a target="_blank" href="tel:+917018007000" rel="noreferrer">
                            <Image src="/assets/images/call.png" width={50} height={50} />
                            <span> Talk to us</span><small> Mon-Fri | 9 AM to 5 PM</small>
                        </a>
                        <a href="https://admissions.shooliniuniversity.com/?utm_source=Organic&utm_medium=MbaTraffic2023&utm_campaign=MbaTraffic2023" target="_blank">
                            <Image src="/assets/images/hands.png" width={50} height={50} />

                            <span> Apply Now</span>
                        </a>
                    </div>
                    <main className="innerBody">
                        <section id="shooliniMBA" className="heroBanner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 centerDiv">
                                        <div className="leftCatd">
                                            <h1 className="mb-0"> <span> Reimagined</span> <br /> Summit Research Program </h1>
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

                                            <div className="px-0 btn btn-grad-red xs-none"> <a target="_blank"
                                                href="https://admissions.shooliniuniversity.com/"> Apply Now</a>
                                            </div>
                                            {/* <div className="ugImage">
                                            <img src="assets/images/uglogos.png" />
                                        </div> */}

                                            <div className="row my-md-5">
                                                <div className="col-4">
                                                    <div className="placeVal">
                                                        <h3><strong>  1300+  </strong> <br /> Patents Filed   </h3>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="placeVal">
                                                        <h3><strong>  100  </strong> <br /> H-Index  </h3>
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                    <div className="placeVal">
                                                        <h3><strong>  Top 1%   </strong> <br /> Scientists of the World  </h3>
                                                    </div>
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

                                                    <ul className={`nav tablistItems nav-tabs nav-justified nav-tabs-dropdown border-0 ${stickyClass}`}>
                                                        <li className="active"><a href="#home"
                                                        >Program Highlights</a></li>
                                                        <li ><a href="#Stories"
                                                        >Success Stories  </a></li>
                                                        <li ><a href="#Abroad"
                                                        >International Collaborations </a></li>
                                                        <li ><a href="#specialisation"
                                                        >Specialisation </a></li>

                                                        <li ><a target="_blank" href="https://admissions.shooliniuniversity.com/" className="applyBtn"

                                                        >Apply
                                                            Now</a></li>

                                                    </ul>


                                                    <div className="tab-content mt-md-5">
                                                        <div className="tab-pane active" id="home">
                                                            <div className="tabItemData">

                                                                <div className="pagetitle text-center mb-4  ">
                                                                    <div className="pagetitle text-center">
                                                                        <h2> <span> India’s 1st</span> Undergrad Research Program  </h2>
                                                                    </div>



                                                                    <div className="mt-3">
                                                                        <p>
                                                                        With a proven high-impact research model, Shoolini’s Faculty of Applied Sciences and Biotechnology <strong> empowers students  </strong> with research from the first year itself. It provides first-hand exposure to high-quality research in <strong>  state-of-the-art </strong>global research environments, experience with writing and publishing papers, <strong>personal mentorship</strong> in filing patents, and interaction with acclaimed research practitioners/experts from around the world.   
                                                                        </p>
                                                                      



                                                                    </div>

                                                                    {/* <button onClick={toggleClass} className="btnView">

                                                                        <img className={isActive ? 'rotatebtn ' : null}
                                                                            style={{ width: '60px', height: "auto" }} src="assets/images/seemore.png" /></button> */}
                                                                </div>


                                                                <div className="dataBrdcrmb text-center">
                                                                    <ul className="p-0 m-0">
                                                                        <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                            Duration: <strong> 4 yrs</strong></li>
                                                                        <li> <img src="assets/images/icon2.png" /> Research Degree: <strong>
                                                                            BTech in Biotech/Food Tech</strong></li>
                                                                        {/* <li> <img src="assets/images/icon3.png" /> Mode <strong> Full Time, with Hostel Facility</strong></li> */}
                                                                    </ul>
                                                                </div>

                                                                <div className="row mt-md-5">

                                                                    <div className="col-md-6 pl-md-0">
                                                                        <div className="card-box">

                                                                            <h3 className=" text-dark"> Accreditations {'&'} Rankings </h3>

                                                                            <p> India’s No.1 Research University as per QS Asian Rankings 2023, Shoolini has consistently been ranked among the leading institutes of higher education. 
 </p>


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
                                                                                            src="/assets/images/NAAC_LOGO.png"
                                                                                            width={80}
                                                                                            className="img-responsive"
                                                                                            height={70}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> NAAC B+ Accredited  </h4>
                                                                                        <p> National Assessment And Accreditation Council
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row my-4">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/qs-rankingNew.png"
                                                                                            width={100}
                                                                                            height={40}
                                                                                            className="img-responsive"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> No.1 in India No.9 in Asia </h4>
                                                                                        <p> QS World University Rankings (Asia 2023)
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-4">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/Indyjskie.png"
                                                                                            width={150}
                                                                                            className="img-responsive"
                                                                                            height={60}
                                                                                        />

                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> No. 3 in India </h4>
                                                                                        <p>in Patent Filing
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>


                                                                    <div className="col-md-6 pr-md-0">
                                                                        <div className="card-box">
                                                                            <h3 className="title-red"> Start Your Application </h3>
                                                                            <p className="lightTexty">
                                                                                at India’s First Biotechnology University  <br />
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
                                                                            <h3 className="title-default">Research-Driven Program That Drives Innovation {"&"} Makes You Industry-Ready  </h3> <br />
                                                                            <p className="m-0"> Through SRP, Shoolini fosters scientific curiosity and encourages <strong> out-of-the-box thinking</strong>. Additionally, students are encouraged to innovate in the lab as well as provided <strong>startup workshops</strong> to turn their ideas into reality.  
<br /><br />
The faculty comprises highly experienced, research-oriented postdocs from top national and international institutions such as NIH USA, IISc, IIT, ISB. The program <strong> combines course work with research,</strong> starting from the first semester, preparing students for careers as professional biotechnologists, microbiologists, and future scientists.  
<br /><br />
The degree follows a <strong>one-student one-patent norm</strong> that is supported by <strong>104+ high-tech labs</strong>, a <strong>cancer research center</strong> and several <strong>research fellowships for UG</strong> students in government-funded projects. 


                                                                            </p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 pl-md-0 mt-5">
                                                                        <div className="voices-image position-relative">

                                                                            <Image
                                                                                src="/assets/images/sourabh.JPG"
                                                                                width={548}
                                                                                className="img-responsive"
                                                                                height={543}
                                                                            />
                                                                            <div className="namedes">
                                                                                <h4> Saurabh Kulshrestha</h4>
                                                                                <h5> Dean (Research {"&"} Development) </h5>
                                                                                <p> PhD Biosciences (Jamia Millia Islamia, New Delhi), Postdoc Assignments (University of Kentucky, USA {"&"} Max-Planck Institute for Plant Breeding Research Köln, Germany) </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>


                                                        <div className="tab-pane" id="profile">

                                                            <div className="tabItemData">
                                                                <div className="pagetitle text-center">
                                                                    <h2> <span> Start Your Application  </span> </h2>
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


                        <section>
                        <div className="container">
                        <div class="pagetitle text-center mb-4"><h2>Why Choose Shoolini SRP?  </h2></div>
 <div className="row">

 <div className="column">
     <div className="card card-box">
       <div className="icon-wrapper">
         <i className="fa fa-graduation-cap"></i>
       </div>
       <h3>File Patents as Students  </h3>
      
     </div>
   </div>

   <div className="column">
     <div className="card card-box">
       <div className="icon-wrapper">
         <i className="fa fa-globe"></i>
       </div>
       <h3>9 Centres of Excellence</h3>
     
     </div>
   </div>
 
   <div className="column">
     <div className="card card-box">
       <div className="icon-wrapper">
         <i className="fa fa-flask"></i>
       </div>
       <h3>Researchers in Residence Program </h3>
      
     </div>
   </div>
   <div className="column">
     <div className="card card-box">
       <div className="icon-wrapper">
         <i className="fa fa-book"></i>
       </div>
       <h3>Scholarships in foreign universities</h3>
      
     </div>
   </div>
   <div className="column ">
     <div className="card card-box">
       <div className="icon-wrapper">
         <i className="fa fa-search-plus"></i>
       </div>
       <h3>24x7 Library with EBSCO Access</h3>
      
     </div>
   </div>
  
 </div>
 </div>
</section>


                        <section id="Stories" className="student-voices">
                            <div className="container">
                            <div class="pagetitle text-center mb-4"><h2>Success Stories </h2></div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="cardImage">
                                            <img className="img-responsive" src="assets/images/Arkansas.jpeg" />
                                        </div>
                                        <div className="card-box">
                                            <h3 className="title-default"> Student Exchange at the University of Arkansas, USA </h3>

                                            <p className="text-18"> Shoolini collaborates with the University of Arkansas for exchange programs and joint research. Six of our students spent 6+ months in Arkansas university labs. Dr Stephenson from Arkansas also visited Shoolini on Fulbright fellowship. 
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                    <div className="cardImage">
                                            <img className="img-responsive" src="assets/images/aman.jpg" />
                                        </div>
                                        <div className="card-box">
                                            <h3 className="title-default"> Dr Amanpreet wins International Young Water Fellowship </h3>

                                            <p className="text-18"> Dr Amanpreet Kaur Virk (Alumni, PhD Biotechnology, 2019) is the only Indian to win the Brussels, Belgium-based Young Water Fellowship in 2019. She achieved this for her work on Moringa-based water purification systems. 
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                    <div className="cardImage">
                                            <img className="img-responsive" src="assets/images/fdl.jpeg" />
                                        </div>
                                        <div className="card-box">
                                   
                                            <h3 className="title-default">	Himachal’s First Commercial Food Testing Laboratory </h3>

                                            <p className="text-18"> Shoolini University established Himachal’s first commercial Food Testing Lab: Shoolini Lifesciences with support from the Ministry of Food Processing Industries (MoFPI), Govt. of India. The total outlay of this lab is Rs 2.85 crore. 
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>


                

                        <section id="Abroad" className="student-voices">
                            <div className="container">
                            <div class="pagetitle text-center mb-4"><h2>International Collaborations  </h2>
                          
                            </div>
                                <div className="row">

                                <div className="col-md-6">
                                        <div className="card-box">
                                        <p className="mb-0"> Shoolini University has strong academic bonds with 250+ higher educational institutions in 28+ countries. Through meaningful collaborations, our faculty and students avail exchange opportunities in leading foreign universities under various scholarship programs.     </p>                     
                                          
                                            <div class="slide-track logosMax">
                                                <div class="slides">
                                                    <span>  <img src="/srp-lp/img/TMU_CoM_Logo.png" alt="" /></span>
                                                </div>
                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/Uni_Napoli_512px.png" alt="" /></span>
                                                </div>


                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/usa.png" alt="" /></span>
                                                </div>

                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/nih.jpg" alt="" /></span>
                                                </div>
                                                <div class="slides">
                                                    <span> <img src="/srp-lp/img/Gachonlogo.jpg" alt="" /></span>
                                                </div>
                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/lu.jpg" alt="" /></span>
                                                </div>

                                            </div>

                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="card-box twoPtwo">
                                            <h3 className="title-default"> 2+2 Study Abroad Programs </h3>
                                            <p> Study first 2 years at Shoolini University and final 2 years at a leading university abroad.   </p>
                                                <div class="slide-track ">
                                                <div class="slides">
                                                    <img src="/srp-lp/img/mlogo.png" alt="" />
                                                </div>
                                                <div class="slides">
                                                    <img src="/srp-lp/img/sheffield-hallam-university.png" alt="" />
                                                </div>
                                                <div class="slides">
                                                    <img src="/srp-lp/img/TMU_CoM_Logo.png" alt="" />
                                                </div>
                                                <div class="slides">
                                                    <img src="/srp-lp/img/University-of-Reading-Logo.png" alt="" />
                                                </div>
                                                <div class="slides">
                                                    <img src="/srp-lp/img/WSU_logo.jpg" alt="" />
                                                </div>
                                                <div class="slides">
                                                    <img src="/srp-lp/img/download.png" alt="" />
                                                </div>


                                            </div>


                                        </div>

                                    </div>

                                    
                          </div>
                            </div>
                        </section>




                        <section id="faqs" className="student-voices">
                            <div className="container">

                                <div className="row">
                                 

                                    <div className="col-md-12">

                                        <div className="card-box">
                                            <h3 className="title-default">250+  <span> Hiring Partners </span></h3>
                                            <p> <strong> Unlock Career Opportunities at India’s Top Companies. </strong> <br />
                                            Join the Elite Ranks of our BTech (Biotech{" &"} Food Tech) Alumni Network. </p>


                                            <div className="row">
                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/1631353749-nes.jpg" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Abbot.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Aishwarya.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Alchemist.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Altruist.png" width={200} className="img-responsive" height={70} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/biogentek.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>


                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Cremica.png" width={200} className="img-responsive" height={90} />

                                                    </div>
                                                </div>

                                              

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Oxigen.png" width={200} className="img-responsive" height={80} />
                                                    </div>
                                                </div>
                                                <div className={isActive ? 'allLogoss row position-relative ' : null} style={{ display: "none" }}>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/macro.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>


                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/thermo.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>


                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Patanjali.png" width={200} className="img-responsive" height={80} />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/srl.png" width={200} className="img-responsive" height={70} />
                                                    </div>
                                                </div>





                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Sentiss.jpg" width={180} className="img-responsive" height={90} />
                                                    </div>
                                                </div>


                                                <div className="col-md-2 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/SatyamAuto.jpg" width={200} className="img-responsive" height={80} />
                                                    </div>
                                                </div>


                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Verka.png" width={200} className="img-responsive" height={80} />
                                                    </div>
                                                </div>


                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/ZEON.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>


                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Neptune.jpg" width={180} className="img-responsive" height={80} />
                                                    </div>
                                                </div>


                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Panacea.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/mcain.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/macro.png" width={200} className="img-responsive" height={100} />
                                                    </div>
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





                        <section id="specialisation" className="spiecalisation">
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-6 pr-md-0">
                                        <div className="card-box">
                                            <h3 className="title-default"> <span className="text-red"> Summit Research Program</span>: Join the League of Extraordinary Biotechnologists  </h3>
                                          
                                            <p> Our research-intensive BTech curriculum designed by the <strong> Top 1%</strong> Scientists of the World (Stanford University 2021), gives students a competitive edge in the industry by turning them into inventors, academicians, and entrepreneurs. This <strong>transformational program</strong> provides cutting-edge research training and <strong>develops scientific temper </strong> among young minds.  </p>

                                            <div className="courselist">
                                                <ul className="p-0">
                                                    <li> <a target="_blank" href="https://shooliniuniversity.com/b-tech-biotechnology-with-summit-research-program ">  <strong> BTech Biotech </strong>  </a> </li>
                                                    <li> <a target="_blank" href="https://shooliniuniversity.com/b-tech-food-technology-with-summit-research-program "> <strong>BTech Food Tech  </strong>
                                                    </a> </li>

                                                </ul>
                                            </div>

                                            <div class="px-0 btn btn-grad-red"> <button onClick={handleShow}  > Need Help? Talk to our Career Counsellor</button></div>

                                        </div>
                                    </div>

                                    <div className="col-md-6 pl-md-0">
                                        <div className="voices-image position-relative">
                                            <Image src="/assets/images/collabs.jpg" width={558} className="img-responsive" height={420} />

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

export default Mbas