import styled from "styled-components";
import { colors } from "../elements/elements";

export const Styles = styled.div`
    .testimonials-area {
        
        background: #fff;

        .sec-title h2 {
            font-weight: 900;
            font-size: 52px;
            text-transform: uppercase;
            color: #fff;
            line-height: 1;
          } 
          .sec-title h4 {
            text-transform: uppercase;
            color: #3f3c3c;
            font-weight: 500;
          }
          .dflex-card img {
            width: 100px !important; 
            float: left;
            margin-right: 16px;
        }
        .dflex-card h5, .dflex-card p {
            padding-left: 30px;
            color: #403e3e;
        }

        .img-content {
            clear: both;
            padding: 10px;
            color: #748494;
        }
        .team-item {
            background: #fff;
            width: 100%;
            padding: 15px;
            border-radius: 5px;
            min-height: 220px;
        }
        .testimonialsSection {
            padding: 130px 0;
        }
        .slick-slide.slick-active.slick-current {
            max-width: 450px;
            margin-right: 20px;
        }
        .team-item {
            opacity: 0.6;
            transition: all 0.5s ease-in-out;
        }
        .slick-current .team-item {
            opacity: 1;
            transition: all 0.5s ease-in-out;
        }

        @media(max-width: 767px) {
        .testimonialsSection {
            padding: 30px 0;
        }
        .team-item {
            min-height: auto !important;
        }
        .sec-title h2 {
            font-weight: 900;
            font-size: 32px;
        }
    }


    @media screen and (max-width:989px)
    {
     .testimonialsSection {
        padding: 0px 0;
    }
    .slick-list {
        max-height: 300px;
    }
    .testimonialsSection {
        background-position: left;
        background-size: 100% 100%;
    }
    }


    }
`;