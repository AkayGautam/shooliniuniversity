import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Header from '../../components/Header';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Footer from '../../components/Footer';
import { Styless } from './styles/course.js';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useLocation } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));


function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ProgrameDetails(props) {


    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };



    // console.log(props, "query")

    const [ddata, setDdata] = useState([]);
    let query = useQuery();


    useEffect(() => {
        const courseButton = document.querySelectorAll(".course-button");
        courseButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "course-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "course-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    useEffect(() => {
        window.scrollTo(0, 0)
        fetch('https://shooliniuniversity.com/GetcourseAPI',
            {
                method: "post",
                headers: new Headers({
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }),
                body: JSON.stringify({ auth: "shoolini@999", courseid: query.get("id").toString() })
            },

        )
            .then((response) => response.json())
            .then((res) => setDdata(res))

    }, []);
    var result_d = [];
    result_d = ddata?.success;
    // console.log(result_d, "dddata")
    const postGru = result_d && result_d[0]
    const imgData = result_d && result_d



    const removeHTML = (str) => {
        var tmp = document.createElement("p");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
    }



    return (

        <div className="main-wrapper course-details-page" >

            {/* Header 2 */}
            < Header />

            {/* Breadcroumb */}
            < BreadcrumbBox title={postGru?.title} />

            <Styless>
                {/* Course Details */}
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="8" md="8" sm="12">
                                <div className="course-details-top">
                                    <div className="heading">
                                        <h4>{postGru?.title}</h4>
                                    </div>
                                    <div className="course-top-overview">
                                        <div className="d-flex overviews">

                                            {/* <div className="category">
                                                <h6>Category</h6>
                                                <p>Undergraduate</p>
                                            </div> */}


                                        </div>
                                    </div>
                                    {/* <div className="course-details-banner">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/details-banner.jpg`} alt="" className="img-fluid" />
                                    </div> */}
                                    <div className="course-tab-list">
                                        <Tab.Container defaultActiveKey="overview">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="overview">Overview</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="curriculum">Curriculum</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="instructor">Instructors</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="review">Reviews</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="faq">FAQ</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="overview" className="overview-tab">
                                                    <div className="course-desc">
                                                        <h5>Course Description</h5>
                                                        <p>{removeHTML(postGru?.career_opportunities)}</p>
                                                    </div>
                                                    <div className="course-feature">
                                                        <h5>Course Feature</h5>
                                                        <p> {removeHTML(postGru?.content)} </p>

                                                        <h5> Career Opportunities </h5>
                                                        <div className="car-opp">
                                                            <ul className="list-unstyled">
                                                                <li><i className="las la-arrow-right"></i> R{"&"}D Scientist</li>
                                                                <li><i className="las la-arrow-right"></i> Quality Assurance Manager </li>
                                                                <li><i className="las la-arrow-right"></i> Quality Control Head </li>
                                                                <li><i className="las la-arrow-right"></i> New Process Development Officer </li>
                                                                <li><i className="las la-arrow-right"></i> Regulatory Affairs Officer</li>
                                                                <li><i className="las la-arrow-right"></i> Scientific Research Fellow in R{"&"}D institutions</li>
                                                                <li><i className="las la-arrow-right"></i> Research Scientists  </li>
                                                            </ul>

                                                        </div>
                                                    </div>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="curriculum" className="curriculum-tab">
                                                    <div className="course-curriculum">
                                                        <h5>Course Curriculum</h5>
                                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi, quidem facere quisquam aperiam neque dolorem saepe. Laboriosam, quam aliquam. Optio earum accusantium quam eius dignissimos quaerat voluptatem excepturi aliquid dolor ducimus. Illo porro maiores fuga dignissimos temporibus odio nulla nobis nemo.</p>
                                                    </div>
                                                    <div className="course-element">
                                                        <h5>Course Content</h5>
                                                        <div className="course-item">
                                                            <button className="course-button active">Part 1: Introduction of Javsscript <span>04 Lectures - 30 Min</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 01</span>
                                                                        <span className="lecture-title">Javascript functional components</span>
                                                                        <span className="lecture-duration">02:36</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 02</span>
                                                                        <span className="lecture-title">Javascript api integration</span>
                                                                        <span className="lecture-duration">04:20</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 03</span>
                                                                        <span className="lecture-title">Javscript project Setup</span>
                                                                        <span className="lecture-duration">03:39</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 04</span>
                                                                        <span className="lecture-title">React app setup project</span>
                                                                        <span className="lecture-duration">01:56</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="instructor" className="instructor-tab">
                                                    <h5>Course Instructors</h5>

                                                    <div className="instructor-item">
                                                        <Row>
                                                            {imgData && imgData?.map(res => (
                                                                res.facultydetails?.map(res => (
                                                                    <Col className="mb-3" md="4">
                                                                        <Card sx={{ maxWidth: 345 }}>
                                                                            <CardHeader
                                                                                avatar={
                                                                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                                                        <img src={res.imageurl ? res.imageurl : process.env.PUBLIC_URL + `/assets/images/instructor-2.jpg`} alt="" className="img-fluid"
                                                                                        />
                                                                                    </Avatar>
                                                                                }
                                                                                action={
                                                                                    <IconButton aria-label="settings">
                                                                                        <MoreVertIcon />
                                                                                    </IconButton>
                                                                                }
                                                                                title={res.name}
                                                                                subheader={res.designation}
                                                                            />
                                                                        </Card>
                                                                    </Col>
                                                                ))
                                                            )

                                                            )}

                                                        </Row>
                                                    </div>



                                                </Tab.Pane>
                                                <Tab.Pane eventKey="review" className="review-tab">
                                                    <Row>
                                                        <Col md="12">
                                                            <div className="review-comments">
                                                                <h5>Course Reviews</h5>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-2.jpg`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Mark Shadow</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-1.jpg`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Katrin Kay</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-2.jpg`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>David Show</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="faq" className="faq-tab">
                                                    <div className="course-desc">
                                                        <h5>Frequent Asked Questions</h5>
                                                         <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is the minimum qualification required for B. Tech Biotechnology?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the minimum qualification required for B. Tech Biotechnology?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the minimum qualification required for B. Tech Biotechnology?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
                                                    </div>
                                                    

                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <div className="single-details-sidbar">
                                    <Row>
                                        <Col md="12">
                                            <div className="course-details-feature">
                                                <h5 className="title">Course Details</h5>
                                                <ul className="list-unstyled feature-list">
                                                    <li><i className="las la-calendar"></i> Eligibility: <span>
                                                        10+2 with any of the three following subjects : physics /mathematics / chemistry / computer science / electronics / information technology / biology / informatics practices / biotechnology / technical vocational subject / agriculture / engineering graphics / business studies / entrepreneurship and minimum 60% marks
                                                    </span></li>
                                                    <li><i className="las la-clock"></i> Duration: <span>4 Year</span></li>
                                                    <li><i className="las la-sort-amount-up"></i> Skill Level: <span>Beginner</span></li>
                                                    <li><i className="las la-bookmark"></i> Enrolled: <span>236</span></li>
                                                    <li><i className="las la-certificate"></i> Semester Fees: <span>₹ 92,500</span></li>
                                                </ul>
                                                <p className="secrty"> * One-time refundable security fee of Rs. 10,000 </p>
                                                <button type="button" className="enroll-btn">Enroll Course</button>
                                            </div>
                                        </Col>

                                    </Row>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styless>

            {/* Footer 2 */}
            <Footer />

        </div >

    )
}

export default ProgrameDetails