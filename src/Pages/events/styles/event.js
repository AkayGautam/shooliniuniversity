import styled from "styled-components";
import { colors } from "../../../components/common/elements/elements";

export const Styles = styled.div`
    .event-page {
        background:#fff;
        
        .dflex-card {
            display: flex;
            width: 100%;
        }
        .DateLink {
            display: flex;
            height: 100%;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 0px 10px;
        }
        .DateLink h5 {
            margin-bottom: 20px;
            color: #f02f2f;
            font-weight: 500;
        }
        .DateLink p {
            color: #f02f2f;
            font-size: 17px;
        }
        .dflex-card {
            display: flex;
            justify-content: stretch;
            align-items: flex-start;
        }
        .DateLink h5 {
            color: #f02f2f;
            margin-bottom: 22px;
        }
        .DateLink p {
            color: #f02f2f;
        }
        .eveDetail h5 {
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 700;
            margin-bottom: 15px;
            line-height: 1.4;
            color: #333;
        }
        .eveDetail p {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }


        .eveDetail p {
            color: #333;
            font-size: 14px;
            font-weight: 400;
        }
        .eveDetail {
            padding-left: 15px;
        }
        .sec-title h2 {
            font-weight: 900;
            font-size: 38px;
            text-transform: uppercase;
            color: #f02f2f;
            line-height: 1;
          }

          .dflex-card {
            background: #f8f7f6;
            width: 97% !important;
            padding: 10px;
        }
        .slick-prev:before, .slick-next:before {
            color: #f02f2f;
        }
        .event-page-area {
            padding : 70px 0;
            .event-box {
                margin-bottom : 30px;
                .event-img {
                    a {
                        img {
                            border-radius : 5px;
                        }
                    }

                    @media(max-width: 991px) {
                        display : none;
                    }
                }
                .event-content {
                    position: relative;
                    .content-box {
                        box-shadow: 0 0px 20px rgba(0, 0, 0, 0.08);
                        padding   : 20px;
                        background: #ffffff;
                        border-radius : 5px;
                        position: absolute;
                        top     : 22px;
                        left    : -9%;
                        z-index : 1;
                        .event-title{
                            h6 {
                                margin-bottom: 10px;
                                a {
                                    color      : ${colors.black1};
                                    font-weight: 600;

                                    &:hover {
                                        color: ${colors.green};
                                    }
                                }
                            }
                        }

                        .event-time-location {
                            margin-bottom : 10px;
                            ul {
                                li {
                                    font-size : 13px;
                                    color: ${colors.text3};
                                    i {
                                        font-size : 18px;
                                        color: ${colors.green};
                                        vertical-align: top;
                                    }
                                    &:first-child {
                                        margin-right : 20px;
                                    }
                                }
                            }
                        }

                        .event-desc {
                            p {
                                font-size : 13px;
                                color: ${colors.text2};
                                line-height : 20px;
                            }

                            @media(max-width: 767px) {
                                margin-bottom: 10px;
                            }
                        }

                        .event-date {
                            position: relative;
                            margin-bottom : 20px;
                            padding-top: 6px;
                            &:before {
                                position : absolute;
                                content : '';
                                background : ${colors.border1};
                                width : 1px;
                                height : 100px;
                                top : 0;
                                left : -30px;

                                @media(max-width: 767px) {
                                    content : none;
                                }
                            }
                            p {
                                font-size : 20px;
                                color: ${colors.green};
                                font-weight: 500;
                                text-transform : uppercase;

                                @media(max-width: 767px) {
                                    float: left;
                                    font-size: 18px;
                                    margin-right: 20px;
                                }
                            }

                            @media(max-width: 767px) {
                                margin-bottom: 0;
                                padding-top: 0;
                            }
                        }

                        .join-btn {
                            a {
                                font-size : 12px;
                                color: ${colors.black2};
                                border: 1px solid ${colors.border3};
                                font-weight : 500;
                                text-transform : uppercase;
                                padding: 9px 12px 7px;
                                border-radius: 5px;
                                &:hover {
                                    color: #ffffff;
                                    background: ${colors.gr_bg};
                                    border-color : ${colors.green};
                                }

                                @media(max-width: 767px) {
                                    float: left;
                                    padding: 5px 10px 3px;
                                }
                            }
                        }

                        @media(max-width: 991px) {
                            position: unset;
                        }
                    }
                }
            }

            ul.pagination-box {
                margin-top: 50px;
            }

            .course-sidebar {
                @media(max-width: 991px) {
                    display : none;
                }
            }

            @media(max-width: 767px) {
                padding : 40px 0 35px;
            }
        }
    }


    .about-page {
        .icon-box-area {
            padding-bottom : 72px;
            .full-icon-box {
                .icon-box {
                    position: inherit;
                    top: 0;
                    left: 0;
                    width: unset;
                }
            }

            @media(max-width: 767px) {
                padding: 0 0 10px;
            }
        }
    }
    
`;