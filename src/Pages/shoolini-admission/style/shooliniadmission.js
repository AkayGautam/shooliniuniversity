import styled from "styled-components";

export const Styles = styled.div`
    .admission-page {


        .single-simple-steps {
            padding: 30px;
            margin-bottom: 30px;
            -webkit-transition: all ease .5s;
            transition: all ease .5s;
            border: 1px solid #dddddd;
        }
        .single-simple-steps i {
            background-color: #172f41;
            width: 100px;
            height: 100px;
            line-height: 100px;
            border-radius: 50%;
            color: var(--white-color);
            display: inline-block; 
            text-align: center;
            font-size: 50px;
            margin-bottom: 20px;
        }
        .single-simple-steps h3 {
            font-size: 20px;
            margin-bottom: 10px;
            font-weight: 700;
        }
        p:last-child {
            margin-bottom: 0;
        }
        .RecognitionsHeader {
            padding: 150px 0;
            background: url(../../assets/images/recognisation.jpg);
            margin-bottom: 50px;
            position: relative;
            z-index: 9;
            filter: hue-rotate(745deg);
            &:after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, #4c1212, transparent);
            }

            .pageTitle_secnd {
                position: relative;
                z-index: 9;
                color: #fff;

                h2 {
                    font-size: 6rem;
                    text-shadow: 2px 2px 8px rgb(0 0 0 / 40%);
                    line-height: 105.6px;
                }

            }
           

        }


        .section-title {
            margin-bottom: 40px;
        }
        .section-title h4 {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 20px;
            position: relative;
            padding-left: 60px;
            margin-bottom: 15px;
            display: inline-block;
            color: #353858;
            font-style: normal;
        }
        .section-title h4:before {
            background: #f26522;
            height: 2px;
            width: 45px;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            margin: auto;
        }
        .section-title h3 {
            font-size: 50px;
            font-weight: 700;
            line-height: 49px;
            text-transform: uppercase;
            margin-bottom: 20px;
            color: #f02f2f;
             font-style: normal;
        }   
        .section-title p {
            font-family: Poppins,sans-serif;
            font-size: 18px;
            font-weight: 400;
            line-height: 30px;
            color: #656970;
        }
        .about-bg-img {
            position: relative;
        }
        .about-img {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 66.6%;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            transform: translateX(-100px);
            transition: all .5s ease;
        }
        .about-img  img {
            display: block;
            width: 100%;
        }
        .about-content-area {
         
            padding: 32px;
            margin: 20px 0;
           
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            transform: translateX(100px);
            transition: all .5s ease;
        }
        .about-content-area h3 {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 50px;
            color: #e41a1a;
        }
        .single-simple-steps:hover {
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
        }

            @media(max-width: 767px) {
                padding: 0 0 10px;
            }
        }
    }

    @media(max-width: 767px) {
    .about-content-area {
        margin: 0 !important;
        transform: translateX(0px) !important;
    }
    .about-content-area h3 {
        font-size: 34px !important;
    }
    .ranking-page .about-img {
        position: inherit !important;
        height: auto !important;
        width: 100% !important;
        transform: translateX(0px) !important;
    }
}

@media(max-width: 767px) {
.about-img {
    width: 100% !important;
    position: inherit !important;
    transform: inherit !important;
    height:auto !important;
}
.admission-img {
    position: relative;
    padding:0px !important;
}
.admission-img:after
{
    content:none !important;
}
}




.admission-img {
    position: relative;
    padding-top: 70px;
    padding-bottom: 70px;
    padding-left: 70px;
    z-index: 1;
} 
.admission-img:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 100%;
    border: 20px solid #e41a1a;
    z-index: -1;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}
.admission-content h2 {
    font-size: 45px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 700;
    color: #e41a1a;
}
.admission-content span {
    font-size: 15px;
    color: #e41a1a;
    font-weight: 600;
    display: block;
    margin-bottom: 10px;
}
.admission-content p {
    margin-bottom: 30px;
}
img {
    max-width: 100%;
    height: auto;
}
.default-btn {
    font-size: 16px;
    color: #fff;
    line-height: 1;
    -webkit-transition: all .5s ease;
    transition:  all .5s ease;
    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: inline-table;
    padding: 18px 30px;
    font-weight: 600;
    background-color: #e41a1a;
}
.course-odf-bg {
    background-color: #fff;
    margin-top:20px;
    padding: 30px;
}
.course-pdf {
    position: relative;
}
.course-pdf i {
    position: absolute;
    top: -24px;
    left: 0;
    font-size: 50px;
    color: #e41a1a;
}
.course-pdf h3 {
    font-size: 45px;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: 700;
    color: #e41a1a;
}
.download-pdf {
    text-align: right;
}

.addmisionPage section.breadcrumb-area {
    background: transparent !important;
    position: inherit;
}
.addmisionPage {
    background: url(../../assets/images/adm3.jpg);
    background-size: 100%;
    background-position: 0;
    position: relative;
}
.addmisionPage .breadcrumb-area {
    padding: 200px 0;
}
.addmisionPage .breadcrumb-area:before
{
    background:transparent;
}
.addmisionPage .breadcrumb-box
{
    display:none;
}
`

export default Styles
