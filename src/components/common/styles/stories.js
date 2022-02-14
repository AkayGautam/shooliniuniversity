import styled from "styled-components";

export const Styles = styled.div`
    .stories-area {
                background-size: 100% 100%;
                padding: 0px 0;
                height:100vh;

        .full-wrap-red
        {
            background:#f02f2f;
            height:100%;
        }
        .bgImgSU {
            background: url(assets/images/baby.jpg);
            background-size: cover;
        }
        .bgImgSU2 
        {
            background: url(assets/images/baby2.jpg);
            background-size: cover;
        }
        .pl-4s {
            padding-left: 4% !important;
        }
        .ml-4s {
            margin-left: 4% !important;
        }
        p.whyUsSubText {
            font-size: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        ul.whyUs li {
            display: block;
            font-size: 17px;
            line-height: 1.8;
            padding: 2px 0;
            border-bottom: 1px solid rgba(255,255,255,0.4);
        }
        a.iconArrL {
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            padding-left: 30px;
        }
                .z-index-9
                {
                    z-index: 9;
                    position: relative;
                }

              .container, .row {
                    height: 100%;
                }
                .col-md-6 {
                    align-items: center;
                    display: flex;
                    flex-wrap: wrap;
                    height: 100%;
                }

        .sec-title h2 {
            font-weight: 900;
            font-size: 58px;
            text-transform: uppercase;
            color: #fff;
            line-height: 1;
          }
          .sec-title h4 {
            text-transform: uppercase;
            color: #3f3c3c;
            font-weight: 500;
          }
       .researchText {
                max-width: 500px;
            }
            .researchText p {
                font-size: 17px;
                margin-top: 30px;
                line-height: 1.7;
            }
            h4.about-title {
                font-size: 28px;
                text-transform: uppercase;
                font-weight: 600;
                color: #474646;
            }
            .pd-right
            {
                padding-right:10%;
            }
            .applyBtn a {
                background: #ee3032;
                padding: 8px 15px;
                color: #fff !important;
                border-radius: 4px;
                float: right;
                margin-right: 24%;
                margin-top: 30px;
            }
            .StoriesData {
                position: relative;
                z-index: 9;
                max-width: 270px;
                padding-left: 20px;
                color: #fff;
                padding: 5px 0;
                border-bottom: 2px solid #fff;
            }
            .StoriesData h4 {
                font-size: 32px;
                font-weight: 700;
                color: #fff;
            }
            .StoriesData p {
                font-size: 21px;
                font-weight: 500;
                margin-top: 30px;
                line-height: 1.3;
            }
            a.iconArr {
                position: absolute;
                z-index: 9;
                color: #fff;
                font-size: 30px;
                right: 20%;
                bottom: 0;
            }

            @media screen and (max-width:767px)
            {
                .sec-title h2 {
                    font-size: 38px;
                    margin-top: 40px;
                }
                .stories-area:after {
                    content:none !important;   
                  }
                  .stories-area {
                    background-size: cover;
                    padding: 50px 0;
                    height: 100%;
                  }
                   
            }
            
    }
    .bg-area2{
        background: url(assets/images/st2.jpg) !important;
    }
    .bg-area2:after
    {
        background: linear-gradient( 90deg ,transparent 50%, #f02f2f 50%);
    }
`;