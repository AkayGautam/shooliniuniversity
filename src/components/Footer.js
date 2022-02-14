import React, { Component } from 'react';
import { Styles } from "../components/common/styles/footer";
import { Link } from 'react-router-dom';

class Footer extends Component {
   render() {
      return (
         <Styles> 
         <footer className="footer1">
            <div className="container-fluid ">
               <div className="row">
                  <div className="col-md-3 bg-reds">
                     <div className="footerAbout text-center">
                        <img src="assets/images/footer-logo.png" className="logo-footer" />
                        <h5 className="text-white"> Think Learning. Think Success. </h5>
                        <ul className="social list-unstyled list-inline">
                           <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                           <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                           <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                           <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                           <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                        </ul>
                     </div>
                  </div>

                  <div className="col-md-9">
                     <div className="pt-5 leftSideFtr">
                      
                     <div className="row">
                      
                              <div className="col-md-3">
                                 <h6>Quick Links</h6>
                                 <ul>
                                    <li><Link to="/coming-soon"> Information Brochure </Link> </li>
                                    <li> <Link to="/coming-soon">  Academic Calendar</Link></li>
                                    <li> <Link to="/coming-soon">  Admission Disclosure </Link></li>
                                    <li> <Link to="/coming-soon">  Support</Link> </li>
                                    <li> <Link to="/coming-soon">  Shoolini Refund Form</Link> </li>
                                    <li> <Link to="/coming-soon">  Virtual Tour</Link> </li>
                                    <li> <Link to="/coming-soon">  Multidisciplinary </Link> </li>
                                    <li> <Link to="/coming-soon">  YICCISS-2021 </Link> </li>
                                    <li> <Link to="/coming-soon">  Result of Common Law Admission Test</Link> </li>
                                    <li> <Link to="/coming-soon">  Online Surveys</Link> </li>
                                    <li> <Link to="/coming-soon">  Himpragati</Link> </li>
                                    <li> <Link to="/coming-soon">  Results</Link>  </li>
                                 </ul>
                              </div>
                              <div className="col-md-3">
                                 <h6> Information About</h6>
                                 <ul>
                                    <li> <Link to="/coming-soon">  About University</Link> </li>
                                    <li> <Link to="/coming-soon">  Vision {"&"} Mission</Link> </li>
                                    <li> <Link to="/coming-soon">  Global Alliances</Link> </li>
                                    <li> <Link to="/coming-soon">  Recognitions</Link> </li>
                                    <li> <Link to="/coming-soon">  Grievance Cell</Link> </li>
                                    <li> <Link to="/coming-soon">  Shoolini Act</Link> </li>
                                    <li> <Link to="/coming-soon">  Policy for Differently Abled Persons</Link> </li>
                                    <li> <Link to="/coming-soon">  Blog</Link> </li>
                                    <li> <Link to="/coming-soon">  Infrastructure</Link> </li>
                                    <li> <Link to="/coming-soon">  Career</Link> </li>
                                    <li> <Link to="/coming-soon">  Award Calculation and Grading</Link> </li>
                     
                                 </ul>
                              </div>
                              <div className="col-md-3"> 
                                 <h6> Information For</h6>
                                 <ul>
                                 <li> <Link to="/coming-soon">  Prevention: Caste-based Discrimination</Link> </li>
                                 <li> <Link to="/coming-soon">  University Balance Sheet</Link> </li>
                                 <li> <Link to="/coming-soon">  Admissions</Link> </li>
                                 <li> <Link to="/coming-soon">  Financial Aid</Link> </li>
                                 <li> <Link to="/coming-soon">  RTI Act</Link> </li>
                                 <li> <Link to="/coming-soon">  NAD</Link> </li>
                                 <li> <Link to="/coming-soon">  ARIIA</Link> </li>
                                 <li> <Link to="/coming-soon">  Best Practices</Link> </li>
                                 <li> <Link to="/coming-soon">  HR Policy</Link> </li>
                                 <li> <Link to="/coming-soon">  Organogram</Link> </li>
                                 </ul>
                              </div>

                              <div className="col-md-3">
                                 <h6> Contact </h6>
                                 <p>
                                   <strong>  City Office </strong> <br />
                                    <span> SILB, The Mall, Solan - 173212 Himachal Pradesh </span>
                                 </p>
                                 <p>
                                 <strong> Address </strong><br />
                                    <span> Shoolini University, Kasauli Hills, Solan, Himachal Pradesh. 173229 </span>
                                 </p>

                                 <p>
                                 <strong> Mailing Address:  </strong> <br />
                                    <span> Accounts/ Fee: 01792-352002, +91 9736745800 </span> <br />
                                    <span> Reception: 01792-350000/ 7807899712 </span>
                                 </p>
                              </div>
                           </div>
                             
                     </div>  
                   

                  </div>

               </div>
            </div>
         </footer>
         </Styles>

      )
   }
}

export default Footer
