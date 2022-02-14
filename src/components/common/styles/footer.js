import styled from "styled-components";
import { colors } from "../elements/elements";

export const Styles = styled.div` 
    footer.footer1 {
        background-size    : cover;
        background-position: center;
        background-repeat  : no-repeat;
        position           : relative;
        background:#fff !important;

        .footerAbout {
            padding: 100px 0;
        }

        .leftSideFtr {
            padding: 25px;
        }

        ul li a, h6
        {
            color:#333 !important
        }
         ul li a,  p {
            font-size: 14px;
        }
        .social {
            display: block;
            padding: 20px 0;
        }
        .bg-reds{
            background:#f02f2f;
        }
        ul.social {
            li {
                a {
                    text-align: center;
                    position  : relative;

                   

                    i {
                        font-size: 14px;
                        color: #ffffff;
                        width: 32px;
                        height: 32px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: transparent;
                        border: 1px solid #fff;
                        border-radius: 50%;
                    }

                    &:hover {
                        background-color: ${colors.green} !important;

                    }
                }

               
            }

            @media(max-width: 767px) {
                text-align : center;
            }
        }
        ul.social {
            display: flex;
            justify-content: space-evenly;
        }

        .footer-logo-info {
            img {
                margin-bottom: 30px;

                @media(max-width: 575px) {
                    margin-bottom : 20px;
                }
            }

            p {
                font-size    : 14px;
                color        : ${colors.text3};
                line-height  : 28px;
                margin-bottom: 20px;
            }

            ul {
                li {
                    color        : ${colors.text3};
                    margin-bottom: 12px;

                    i {
                        font-size     : 18px;
                        color         : ${colors.green};
                        width         : 35px;
                        vertical-align: top;
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom : 30px;
            }
        }

        .f-links {
            h5 {
                color         : ${colors.border1};
                text-transform: uppercase;
                margin-top    : 8px;
                margin-bottom : 35px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }

            ul {
                float: left;
                width: 50%;

                li {
                    a {
                        font-size  : 14px;
                        line-height: 38px;

                        i {
                            font-size   : 12px;
                            color       : ${colors.green};
                            margin-right: 10px;
                        }

                        &:hover {
                            color: ${colors.green};
                        }

                        @media(max-width: 991px) {
                            font-size: 13px;
                            letter-spacing: 0;
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom : 20px;
                display: inline-block;
            }
        }

        .f-post {
            h5 {
                color         : ${colors.border1};
                text-transform: uppercase;
                margin-top    : 8px;
                margin-bottom : 45px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }

            .post-box {
                margin-bottom: 12px;

                .post-img {
                    img {
                        max-width: 80px;
                        border-radius : 5px;
                        margin-right: 15px;
                    }
                }

                .post-content {
                    a {
                        font-size    : 14px;
                        color        : ${colors.text3};
                        display      : inline-block;
                        margin-bottom: 10px;

                        &:hover {
                            color: ${colors.green};
                        }

                        @media(max-width: 991px) {
                            font-size: 13px;
                            letter-spacing: 0;
                            margin-bottom: 0;
                        }
                    }

                    span {
                        display: block;
                        color  : ${colors.text2};
                    }
                }
            }
        }

        @media(max-width: 767px) {
            padding: 0px 0 20px;
        }
    }

    .copyright-area {
        padding   : 35px 0 38px;
        background: ${colors.copy_bg};

        .copy-text {
            p {
                color      : ${colors.text3};
                padding-top: 3px;

                i {
                    color : ${colors.green};
                    margin: 0 2px;
                }

                a {
                    color: ${colors.green};

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            @media(max-width: 767px) {
                text-align : center;
                margin-bottom: 20px;
            }
        }

        
        @media screen and (max-width:989px)
        {
        .footerAbout img {
            width: 100%;
        }
    }

    }
`;