import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Styles } from "./style/programmes";
import { BiArrowToRight } from "react-icons/bi";

function ProgramSingle() {
    useEffect(() => {
        const sidebarBtn = document.getElementById("sidebar-btn");

        if (sidebarBtn) {
            const sidebarOverlay = document.getElementById("sidebar-overlay");
            const sidebarBody = document.getElementById("sidebar-body");
            const sidebarExit = document.getElementById("close-sidebar");

            sidebarBtn.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.add("visible");
                sidebarBody.classList.add("opened");
            });

            sidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.remove("visible");
                sidebarBody.classList.remove("opened");
            });

            sidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.remove("visible");
                sidebarBody.classList.remove("opened");
            });
        }
    });  

    return (
        <Styles>
            {/* Sidebar */}
            <a href={process.env.PUBLIC_URL + "/"} className="nav-link nav-sidebar" id="sidebar-btn">
                <BiArrowToRight />
            </a>

            <div className="sidebar" id="sidebar-body">
                <div className="side-logo d-flex justify-content-between">
                <div className="sidebarLogo"><Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link></div>
                    <div><a href={process.env.PUBLIC_URL + "/"} id="close-sidebar"><i className="las la-times"></i></a></div>
                </div>
                <div className="side-content">
                    <h5>BA (HONS) in English</h5>
                    <p>BA (Hons) English at Shoolini University is an extensively designed programme with a holistic approach. English is a diverse language as it provides multiple opportunities to the young aspirants who want to explore varied aspects of this global language through world literature, drama, novel and poetry.
<br /><br />
Students learn to read widely, analyse and comprehend literature in various forms and genres, and are trained to use their skills analytically as well as creatively. This approach helps them hone their essential skills in critical thinking, expression and research.
<br /><br />
The vibrant department is allied with other departments of English across the country and aims at establishing global networks. It organises literary programmes at the regional, national as well as international level, collaborating with national and global academic associations. 
<br /><br />
The programme is taught by dynamic, conversant and devoted faculty members, who, with their innovative pedagogical approaches, encourage students to explore the nuances of the world, specifically Indian Literature, and its aspects such as poetry, prose, and others.</p>
                </div>
                <div className="side-post">
                    <h5>Highlights</h5>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={process.env.PUBLIC_URL + "/assets/images/post-01.jpg"} alt="" />
                        </div>
                        <div className="post-title">
                            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                            <span>March 12, 2020</span>
                        </div>
                    </div>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={process.env.PUBLIC_URL + "/assets/images/post-02.jpg"} alt="" />
                        </div>
                        <div className="post-title">
                            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                            <span>March 12, 2020</span>
                        </div>
                    </div>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={process.env.PUBLIC_URL + "/assets/images/post-03.jpg"} alt="" />
                        </div>
                        <div className="post-title">
                            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                            <span>March 12, 2020</span>
                        </div>
                    </div>
                </div>
              
                <div className="side-car">
                    <h5>Career Opportunities</h5>
                    <p> A degree in English prepares students for a wide range of career opportunities in the various academic and information sectors, corporate sector and organisations </p>
                </div>
              
            </div>
            <div className="sidebar-overlay" id="sidebar-overlay"></div>
        </Styles>
    )
}

export default ProgramSingle
