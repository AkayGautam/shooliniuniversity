import styled from "styled-components";
import { colors } from "../../../components/common/elements/elements";

export const Styless = styled.div`

    /* Course Grid */
    .course-grid-area {
        padding: 70px 0;
        .course-items {
            .course-item {
                border: 1px solid ${colors.border1};
                border-radius : 5px;
                transition : all 0.2s ease;
                overflow : hidden;
                margin-bottom: 30px;

                .course-image {
                    width              : 100%;
                    height             : 240px;
                    background-size    : cover;
                    background-position: center;
                    background-repeat  : no-repeat;
                    border-radius : 5px 5px 0 0;
                    position: relative;

                    .author-img {
                        position: absolute;
                        left    : 20px;
                        bottom  : 20px;

                        img {
                            max-width: 40px;
                            border-radius : 50%;
                            margin-right: 5px;
                        }

                        .title {
                            background: #ffffff;
                            padding   : 3px 8px;
                            border-radius : 5px;

                            p {
                                font-size    : 12px;
                                color        : ${colors.black1};
                                font-weight  : 500;
                                margin-bottom: -4px;
                            }

                            span {
                                font-size  : 11px;
                                color      : ${colors.text3};
                                font-weight: 500;
                            }
                        }

                    }

                    .course-price {
                        p {
                            font-size  : 16px;
                            color      : #ffffff;
                            background : ${colors.bg1};
                            position   : absolute;
                            right      : 20px;
                            bottom     : 20px;
                            padding    : 8px 10px;
                            font-weight: 500;
                            border-radius : 5px;
                        }
                    }

                    @media(max-width: 767px) {
                        height: 185px;
                    }
                }

                .course-content {
                    background: #fff;
                    padding   : 20px 25px;

                    h6.heading {
                        a {
                            color        : ${colors.black1};
                            font-weight  : 600;
                            display      : inline-block;
                            margin-bottom: 12px;

                            &:hover {
                                color: ${colors.green};
                            }
                        }
                    }

                    p.desc {
                        font-size     : 14px;
                        color         : ${colors.text3};
                        line-height   : 25px;
                        border-bottom : 1px solid ${colors.border1};
                        padding-bottom: 10px;
                        margin-bottom : 12px;
                    }

                    .course-face {

                        .duration,
                        .student {
                            p {
                                font-size: 13px;
                                color    : ${colors.text3};

                                i {
                                    font-size     : 16px;
                                    color         : ${colors.green};
                                    vertical-align: text-bottom;
                                    margin-right  : 3px;
                                }
                            }
                        }

                        .rating {
                            ul {
                                li {
                                    margin-right: 0;

                                    i {
                                        font-size: 14px;
                                        color    : ${colors.yellow};
                                    }

                                    &:last-child {
                                        font-size: 13px;
                                        color    : ${colors.text3};
                                    }
                                }
                            }
                        }
                    }
                }

                &:hover {
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
                }
            }
        }

        @media(max-width: 767px) {
            padding: 40px 0 30px;
        }
    }

    /* Course List */
    .course-list-area {
        padding: 70px 0;
        .course-items2 {
            .course-item {
                border-radius : 5px;
                transition : all 0.2s ease;
                overflow : hidden;
                box-shadow: 0 8px 20px 5px rgba(0,0,0,0.07);
                margin-bottom: 30px;

                .course-image-box {
                    .course-image {
                        width              : 290px;
                        height             : 230px;
                        background-size    : cover;
                        background-position: center;
                        background-repeat  : no-repeat;
                        border-radius : 5px 5px 0 0;
                        position: relative;

                        .author-img {
                            position: absolute;
                            left    : 20px;
                            top  : 20px;

                            img {
                                max-width: 40px;
                                border-radius : 50%;
                                margin-right: 5px;
                            }

                            .title {
                                background: #ffffff;
                                padding   : 3px 8px;
                                border-radius : 5px;

                                p {
                                    font-size    : 12px;
                                    color        : ${colors.black1};
                                    font-weight  : 500;
                                    margin-bottom: -4px;
                                }

                                span {
                                    font-size  : 11px;
                                    color      : ${colors.text3};
                                    font-weight: 500;
                                }
                            }

                            @media(max-width: 991px) {
                                top  : unset;
                                bottom : 20px;
                            }
                        }

                        .course-price {
                            p {
                                font-size  : 16px;
                                color      : #ffffff;
                                background : ${colors.bg1};
                                position   : absolute;
                                right      : 20px;
                                top     : 20px;
                                padding    : 8px 10px;
                                font-weight: 500;
                                border-radius : 5px;

                                @media(max-width: 991px) {
                                    top  : unset;
                                    bottom : 20px;
                                }
                            }
                        }

                        @media(max-width: 991px) {
                            width: 100%;
                        }
                    }
                }

                .course-content {
                    background: #fff;
                    padding   : 20px 25px;

                    h6.heading {
                        padding-bottom: 12px;
                        margin-bottom: 20px;
                        position: relative;
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.green};
                            width: 50px;
                            height: 2px;
                            bottom: 0;
                            left: 0;
                        }

                        a {
                            color        : ${colors.black1};
                            font-weight  : 600;
                            display      : inline-block;

                            &:hover {
                                color: ${colors.green};
                            }
                        }
                    }

                    .rating {
                        margin-bottom: 6px;
                        ul {
                            li {
                                margin-right: 0;

                                i {
                                    font-size: 14px;
                                    color    : ${colors.yellow};
                                }

                                &:last-child {
                                    font-size: 13px;
                                    color    : ${colors.text3};
                                }
                            }
                        }
                    }

                    p.desc {
                        font-size     : 14px;
                        color         : ${colors.text3};
                        line-height   : 25px;
                        margin-bottom : 15px;
                    }

                    a.details-btn {
                        font-size : 13px;
                        color : ${colors.green};
                        border : 1px solid ${colors.border3};
                        padding: 7px 15px;
                        border-radius: 5px;
                        font-weight: 500;
                        &:hover {
                            color : #ffffff;
                            background : ${colors.gr_bg};
                            border-color : ${colors.green};
                        }
                    }
                }

                &:hover {
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
                }

                @media(max-width: 991px) {
                    display : block !important;
                }
            }
        }

        @media(max-width: 767px) {
            padding: 40px 0 30px;
        }
    }

    /* Course Details */
    .course-details-area {
        padding : 70px 0 78px;
        .course-details-top {
            .heading {
                h4 {
                    color : ${colors.black1};
                    font-weight: 600;
                    line-height: 35px;
                    margin-bottom: 25px;

                    @media(max-width: 575px) {
                        font-size : 20px;
                    }
                }
            }
            .course-top-overview {
                margin-bottom : 25px;
                .overviews {
                    .author {
                        margin-right : 20px;
                        padding-right : 20px;
                        margin-top: -3px;
                        border-right : 1px solid ${colors.border3};
                        img {
                            float : left;
                            max-width: 50px;
                            border-radius: 50%;
                            margin-right: 10px;
                        }
                        .author-name {
                            float : left;
                            margin-top: 3px;
                            h6 {
                                color : ${colors.black2};
                                font-weight: 600;
                                text-transform: uppercase;
                                margin-bottom: 5px;

                                @media(max-width: 767px) {
                                    font-size : 14px;
                                }
                            }
                            p {
                                font-size : 15px;
                                color : ${colors.text3};
                                font-weight: 500;

                                @media(max-width: 767px) {
                                    font-size : 14px;
                                }
                            }
                        }
                    }

                    .category {
                        margin-right : 20px;
                        padding-right : 20px;
                        border-right : 1px solid ${colors.border3};
                        h6 {
                            color : ${colors.black2};
                            font-weight: 600;
                            text-transform: uppercase;
                            margin-bottom: 5px;

                            @media(max-width: 767px) {
                                font-size : 14px;
                            }
                        }
                        p {
                            font-size : 15px;
                            color : ${colors.text3};
                            font-weight: 500;

                            @media(max-width: 767px) {
                                font-size : 14px;
                            }
                        }
                    }

                    .rating {
                        margin-right : 20px;
                        padding-right : 20px;
                        border-right : 1px solid ${colors.border3};
                        h6 {
                            color : ${colors.black2};
                            font-weight: 600;
                            text-transform: uppercase;
                            margin-bottom: 5px;

                            @media(max-width: 767px) {
                                font-size : 14px;
                            }
                        }
                        ul {
                            li {
                                margin-right: 1px;
                                i {
                                    font-size: 16px;
                                    color: ${colors.yellow};
                                }
                                &:last-child {
                                    font-size : 15px;
                                    color : ${colors.text3};
                                    font-weight: 500;
                                    margin-left: 5px;

                                    @media(max-width: 767px) {
                                        font-size : 14px;
                                    }
                                }
                            }
                        }
                    }

                    .price {
                        h6 {
                            color : ${colors.black2};
                            font-weight: 600;
                            text-transform: uppercase;
                            margin-bottom: 5px;

                            @media(max-width: 767px) {
                                font-size : 14px;
                            }
                        }
                        p {
                            font-size : 15px;
                            color : ${colors.text3};
                            font-weight: 500;

                            @media(max-width: 767px) {
                                font-size : 14px;
                            }
                        }
                    }
                }

                @media(max-width: 480px) {
                    display : none;
                }
            }
            .course-details-banner {
                margin-bottom: 40px;
                img {
                    border-radius : 5px;
                }
            }
            .course-tab-list {
                .nav {
                    display: inline-block;
                    border-radius: 5px;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                    margin-bottom: 35px;
                    .nav-item {
                        display: inline-block;
                        a.nav-link {
                            font-size: 14px;
                            color: ${colors.black2};
                            font-weight: 500;
                            text-transform : uppercase;
                            padding: 12px 30px 10px;
                            border-radius: 5px;

                            @media(max-width: 991px) {
                                padding: 12px 16px 9px;
                            }
                        }
                        a.nav-link.active {
                            background : linear-gradient(90deg,#e4351a 0%,#de513b 100%);
                            color : #ffffff;
                        }
                    }
                }
                .tab-content {
                    .overview-tab {
                        h5 {
                            color: ${colors.black2};
                            font-weight: 600;
                            padding-bottom: 10px;
                            margin-bottom: 20px;
                            position: relative;
                            &:before {
                                position: absolute;
                                content: "";
                                background: ${colors.green};
                                width: 50px;
                                height: 2px;
                                bottom: 0;
                                left: 0;
                            }

                            @media(max-width: 575px) {
                                font-size : 17px;
                            }                            
                        }
                        p {
                            font-size: 15px;
                            color: ${colors.text2};
                            line-height: 25px;

                            @media(max-width: 575px) {
                                font-size : 14px;
                            }
                        }

                        .course-desc {
                            margin-bottom: 40px;
                        }

                        .course-feature {
                            margin-bottom: 40px;
                            ul {
                                margin-top: 20px;
                                li {
                                    font-size : 14px;
                                    color: ${colors.text3};
                                    line-height : 20px;
                                    margin-bottom :0px;
                                    i {
                                        font-size : 20px;
                                        color: ${colors.green};
                                        float: left;
                                        line-height: 27px;
                                        margin-right: 10px;
                                    }
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                }
                            }
                        }
                        .course-learn {
                            margin-bottom: 40px;
                            ul {
                                margin-top: 20px;
                                li {
                                    font-size: 14px;
                                    color: ${colors.text3};
                                    line-height: 25px;
                                    margin-bottom: 15px;
                                    i {
                                        float: left;
                                        color: ${colors.green};
                                        border: 1px solid ${colors.border3};
                                        width: 35px;
                                        height: 35px;
                                        border-radius: 50%;
                                        text-align: center;
                                        padding-top: 9px;
                                        margin-top: 8px;
                                        margin-right: 15px;
                                    }
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                }
                            }
                        }
                        .course-share {
                            ul.social {
                                margin-top: 30px;
                                li {
                                    a {
                                        text-align: center;
                                        position  : relative;
                                        height    : 18px;
                                        display   : inline-block;

                                        &:before {
                                            content           : "";
                                            position          : absolute;
                                            border-width      : 9px 17px;
                                            border-style      : solid;
                                            border-top-color  : transparent;
                                            border-right-color: transparent;
                                            border-left-color : transparent;
                                            top               : -18px;
                                            left              : 0;
                                            z-index           : 1;
                                            transition : all 0.2s ease;
                                        }

                                        &:after {
                                            content            : "";
                                            position           : absolute;
                                            border-width       : 9px 17px;
                                            border-style       : solid;
                                            border-right-color : transparent;
                                            border-bottom-color: transparent;
                                            border-left-color  : transparent;
                                            bottom             : -18px;
                                            left               : 0;
                                            z-index            : 1;
                                            transition : all 0.2s ease;
                                        }

                                        i {
                                            font-size: 14px;
                                            color    : #ffffff;
                                            width    : 34px;
                                        }

                                        &:hover {
                                            background-color: ${colors.green} !important;

                                            &:before {
                                                border-bottom-color: ${colors.green} !important;
                                            }

                                            &:after {
                                                border-top-color: ${colors.green} !important;
                                            }
                                        }
                                    }

                                    &:nth-child(1) {
                                        a {
                                            background-color: #4267B2;

                                            &:before {
                                                border-bottom-color: #4267B2;
                                            }

                                            &:after {
                                                border-top-color: #4267B2;
                                            }
                                        }
                                    }

                                    &:nth-child(2) {
                                        a {
                                            background-color: #1DA1F2;

                                            &:before {
                                                border-bottom-color: #1DA1F2;
                                            }

                                            &:after {
                                                border-top-color: #1DA1F2;
                                            }
                                        }
                                    }

                                    &:nth-child(3) {
                                        a {
                                            background-color: #2867B2;

                                            &:before {
                                                border-bottom-color: #2867B2;
                                            }

                                            &:after {
                                                border-top-color: #2867B2;
                                            }
                                        }
                                    }

                                    &:nth-child(4) {
                                        a {
                                            background-color: #DD1343;

                                            &:before {
                                                border-bottom-color: #DD1343;
                                            }

                                            &:after {
                                                border-top-color: #DD1343;
                                            }
                                        }
                                    }

                                    &:nth-child(5) {
                                        a {
                                            background-color: #ea4c89;

                                            &:before {
                                                border-bottom-color: #ea4c89;
                                            }

                                            &:after {
                                                border-top-color: #ea4c89;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .curriculum-tab {
                        .course-curriculum {
                            margin-bottom: 40px;
                            h5 {
                                color: ${colors.black2};
                                font-weight: 600;
                                padding-bottom: 10px;
                                margin-bottom: 20px;
                                position: relative;
                                &:before {
                                    position: absolute;
                                    content: "";
                                    background: ${colors.green};
                                    width: 50px;
                                    height: 2px;
                                    bottom: 0;
                                    left: 0;
                                }

                                @media(max-width: 575px) {
                                    font-size : 17px;
                                }  
                            }
                            p {
                                font-size: 15px;
                                color: ${colors.text2};
                                line-height: 25px;

                                @media(max-width: 575px) {
                                    font-size : 14px;
                                }
                            }
                        }
                        .course-element {
                            h5 {
                                color: ${colors.black2};
                                font-weight: 600;
                                padding-bottom: 10px;
                                margin-bottom: 20px;
                                position: relative;
                                &:before {
                                    position: absolute;
                                    content: "";
                                    background: ${colors.green};
                                    width: 50px;
                                    height: 2px;
                                    bottom: 0;
                                    left: 0;
                                }

                                @media(max-width: 575px) {
                                    font-size : 17px;
                                }
                            }
                            .course-item {
                                margin-bottom: 10px;
                                button.course-button {
                                    border: none;
                                    background: transparent;
                                    margin-bottom: 15px;
                                    display: block;
                                    width: 100%;
                                    text-align : left;
                                    padding: 0;
                                    font-size : 18px;
                                    color: ${colors.black2};
                                    font-weight: 500;
                                    span {
                                        float: right;
                                        font-size: 14px;
                                        color: ${colors.text3};
                                        font-weight: 400;
                                    }
                                }

                                .course-content {
                                    max-height: 0;
                                    overflow  : hidden;
                                    transition: max-height 0.2s ease-in-out;
                                    ul {
                                        li {
                                            border-bottom : 1px solid ${colors.border3};
                                            margin-left: 0px;
                                            padding: 12px 0;
                                            span.play-icon {
                                                font-size : 14px;
                                                color: ${colors.text3};
                                                margin-right: 20px;
                                                i {
                                                    color: ${colors.green};
                                                    border: 1px solid ${colors.green};
                                                    font-size: 22px;
                                                    width: 30px;
                                                    height: 30px;
                                                    border-radius: 50%;
                                                    padding-left: 3px;
                                                    text-align: center;
                                                    line-height: 29px;
                                                    vertical-align: middle;
                                                    margin-right: 10px;
                                                }
                                            }
                                            span.lecture-title {
                                                font-size : 15px;
                                                color: ${colors.black2};

                                                @media(max-width: 575px) {
                                                    font-size : 14px;
                                                }
                                            }
                                            span.lecture-duration {
                                                float: right;
                                                font-size: 14px;
                                                color: ${colors.text3};
                                                line-height: 28px;
                                                font-weight: 400;
                                            }
                                        }
                                    }
                                }

                                .course-content.show {
                                    max-height: 100%;
                                    margin-bottom: 40px;
                                }

                                &:last-child {
                                    margin-bottom: 40px;
                                }
                            }
                        }
                    }

                    .instructor-tab {
                        h5 {
                            color: ${colors.black2};
                            font-weight: 600;
                            padding-bottom: 10px;
                            margin-bottom: 35px;
                            position: relative;
                            &:before {
                                position: absolute;
                                content: "";
                                background: ${colors.green};
                                width: 50px;
                                height: 2px;
                                bottom: 0;
                                left: 0;
                            }

                            @media(max-width: 575px) {
                                font-size : 17px;
                            }
                        }

                        .instructor-item {
                            margin-bottom: 30px;

                            .instructor-img {
                                img {
                                    border-radius : 5px;
                                }
                            }

                            .instructor-content {
                                position: relative;

                                .instructor-box {
                                    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.08);
                                    padding   : 25px;
                                    background: #ffffff;
                                    border-radius : 5px;
                                    
                                    z-index : 1;

                                    .top-content {
                                        margin-bottom:0px;

                                        .instructor-name {
                                            h6 {
                                                color      : ${colors.black2};
                                                font-weight: 600;
                                                text-transform: uppercase;
                                                margin-bottom: 12px;

                                                @media(max-width: 575px) {
                                                    font-size : 14px;
                                                }
                                            }
                                            p {
                                                font-size  : 14px;
                                                color      : ${colors.text3};
                                                font-weight: 500;
                                            }
                                        }
                                        .instructor-social {
                                            margin-top: 25px;
                                            ul.social {
                                                li {
                                                    a {
                                                        text-align: center;
                                                        position  : relative;

                                                        &:before {
                                                            content           : "";
                                                            position          : absolute;
                                                            border-width      : 8px 14px;
                                                            border-style      : solid;
                                                            border-top-color  : transparent;
                                                            border-right-color: transparent;
                                                            border-left-color : transparent;
                                                            top               : -16px;
                                                            left              : 0;
                                                            z-index           : 1;
                                                            transition : all 0.2s ease;
                                                        }

                                                        &:after {
                                                            content            : "";
                                                            position           : absolute;
                                                            border-width       : 8px 14px;
                                                            border-style       : solid;
                                                            border-right-color : transparent;
                                                            border-bottom-color: transparent;
                                                            border-left-color  : transparent;
                                                            bottom             : -16px;
                                                            left               : 0;
                                                            z-index            : 1;
                                                            transition : all 0.2s ease;
                                                        }

                                                        i {
                                                            font-size: 13px;
                                                            color    : #ffffff;
                                                            width    : 28px;
                                                        }

                                                        &:hover {
                                                            background-color: ${colors.green} !important;

                                                            &:before {
                                                                border-bottom-color: ${colors.green} !important;
                                                            }

                                                            &:after {
                                                                border-top-color: ${colors.green} !important;
                                                            }
                                                        }
                                                    }

                                                    &:nth-child(1) {
                                                        a {
                                                            background-color: #4267B2;

                                                            &:before {
                                                                border-bottom-color: #4267B2;
                                                            }

                                                            &:after {
                                                                border-top-color: #4267B2;
                                                            }
                                                        }
                                                    }

                                                    &:nth-child(2) {
                                                        a {
                                                            background-color: #1DA1F2;

                                                            &:before {
                                                                border-bottom-color: #1DA1F2;
                                                            }

                                                            &:after {
                                                                border-top-color: #1DA1F2;
                                                            }
                                                        }
                                                    }

                                                    &:nth-child(3) {
                                                        a {
                                                            background-color: #2867B2;

                                                            &:before {
                                                                border-bottom-color: #2867B2;
                                                            }

                                                            &:after {
                                                                border-top-color: #2867B2;
                                                            }
                                                        }
                                                    }

                                                    &:nth-child(4) {
                                                        a {
                                                            background-color: #DD1343;

                                                            &:before {
                                                                border-bottom-color: #DD1343;
                                                            }

                                                            &:after {
                                                                border-top-color: #DD1343;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    .instructor-desk {
                                        p {
                                            font-size : 15px;
                                            color      : ${colors.text2};
                                            line-height: 25px;

                                            @media(max-width: 575px) {
                                                font-size : 14px;
                                            }
                                        }
                                    }
                                }
                            }

                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }

                    .review-tab {
                        .review-comments {
                            margin-bottom: 40px;
                            h5 {
                                color: ${colors.black2};
                                font-weight: 600;
                                padding-bottom: 10px;
                                margin-bottom: 35px;
                                position: relative;
                                &:before {
                                    position: absolute;
                                    content: "";
                                    background: ${colors.green};
                                    width: 50px;
                                    height: 2px;
                                    bottom: 0;
                                    left: 0;
                                }

                                @media(max-width: 575px) {
                                    font-size : 17px;
                                }
                            }
                            .comment-box {
                                border-bottom: 1px solid ${colors.border1};
                                padding-bottom: 20px;
                                margin-bottom: 25px;
                                .comment-image {
                                    img {
                                        max-width : 100px;
                                        border-radius : 5px;
                                        margin-right : 20px;
                                    }
                                }
                                .comment-content {
                                    .content-title {
                                        .comment-writer {
                                            h6 {
                                                color: ${colors.black2};
                                                font-weight: 600;
                                                margin-bottom : 10px;

                                                @media(max-width: 575px) {
                                                    font-size : 14px;
                                                }
                                            }
                                            p {
                                                font-size : 12px;
                                                color: ${colors.text3};
                                                margin-bottom: 5px;
                                            }
                                            ul {
                                                margin-bottom: 8px;
                                                li {
                                                    margin-right: 1px;
                                                    i {
                                                        font-size: 16px;
                                                        color: ${colors.yellow};
                                                    }
                                                    &:last-child {
                                                        font-size: 13px;
                                                        color: ${colors.text2};
                                                        margin-left: 5px;
                                                    }
                                                }
                                            }
                                        }
                                        .reply-btn {
                                            button {
                                                font-size : 14px;
                                                color: ${colors.green};
                                                background : transparent;
                                                border : 1px solid ${colors.border3};
                                                font-weight: 500;
                                                border-radius: 25px;
                                                padding: 4px 12px 3px;
                                                margin-top : 10px;
                                                i {
                                                    font-size: 17px;
                                                    vertical-align: text-top;
                                                }
                                                &:hover {
                                                    color : #ffffff;
                                                    background : ${colors.gr_bg};
                                                    border-color : ${colors.green};
                                                }
                                            }
                                        }
                                    }
                                    .comment-desc {
                                        p {
                                            font-size: 14px;
                                            color: ${colors.text3};
                                            line-height: 25px;
                                        }
                                    }
                                }
                                &:last-child {
                                    border-bottom : none;
                                    padding-bottom : 0;
                                    margin-bottom : 0;
                                }
                            }
                        }

                        .review-form {
                            h5 {
                                color: ${colors.black2};
                                font-weight: 600;
                                padding-bottom: 10px;
                                margin-bottom: 25px;
                                position: relative;
                                &:before {
                                    position: absolute;
                                    content: "";
                                    background: ${colors.green};
                                    width: 50px;
                                    height: 2px;
                                    bottom: 0;
                                    left: 0;
                                }

                                @media(max-width: 575px) {
                                    font-size : 17px;
                                }
                            }
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom: 40px;
            }
        }

        .single-details-sidbar {
            .course-details-feature {
                box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                border-radius: 5px;
                padding: 15px 20px 20px;
                h5.title {
                    color: ${colors.black1};
                    font-weight: 600;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.green};
                        width: 50px;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                    }

                    @media(max-width: 575px) {
                        font-size : 17px;
                    }
                }

                ul.feature-list {
                    margin-bottom: 20px;
                    li {
                        border-top: 1px dashed ${colors.border3};
                        padding: 12px 0;
                        font-size : 14px;
                        color : ${colors.black2};
                        font-weight: 500;
                        i {
                            font-size : 20px;
                            color: ${colors.green};
                            vertical-align: top;
                            margin-right : 2px;
                        }
                        span {
                            float : right;
                            font-size: 13px;
                            color: ${colors.text3};
                            font-weight: 400;
                            line-height: 20px;
                        }
                        &:first-child {
                            border-top : none;
                            padding-top : 0;
                        }
                        &:last-child {
                            padding-bottom : 0;
                        }
                    }
                }

                button.enroll-btn {
                    font-size: 16px;
                    color: #fff;
                    background: #e4351a;
                    display: inline-block;
                    width: 100%;
                    height: 40px;
                    font-weight : 500;
                    border : none;
                    padding: 9px;
                    border-radius: 5px;
                    &:hover {
                        background: #e4351a;
                    }

                    @media(max-width: 575px) {
                        font-size : 14px;
                    }
                }

                @media(max-width: 1199px) {
                    padding: 12px 15px 15px;
                }
            }
        }

        @media(max-width: 767px) {
            padding: 20px 0 5px;
        }
    }
    
.sticky-menu.main-menu.sticky {
    z-index: 999;
}

.top-bar {
    background: ${colors.bg1};
    .bar-left {
        ul {
            li {
                font-size  : 13px;
                color      : ${colors.text4};
                padding    : 10px 15px;
                margin     : 0;
                display    : inline-block;

                a {
                    font-size: 13px;
                    color    : #fff;
                    text-decoration:none;
                    font-family: 'Gotham';

                    &:hover {
                        color: ${colors.green};
                    }
                }

                i {
                    font-size     : 20px;
                    color         : ${colors.green};
                    vertical-align: bottom;
                    margin-right  : 5px;
                }

                &:last-child {
                }

                @media(max-width: 991px) {
                    border : none;
                    padding: 10px 0px;
                    &:last-child {
                        display : none;
                    }
                }
            }
        }
    }

    .bar-right {
        ul.bar-social {
            padding     : 10px 15px;

            li {
                a {
                    font-size   : 14px;
                    color       : #fff;
                    padding: 0px;
                    width: 20px;
                    display: inline-block;
                    text-align: center; 
                    text-decoration:none;  
                    &:hover {
                        color: #ffffff;

                    }
                }

                &:last-child {
                    a {
                        margin-right: 0;
                    }
                }
                a.su_fb {
                    background: #372fd8;
                    border-radius: 4px;
                }
                a.su_twitter {
                    background: #43ace6;
                    border-radius: 4px;
                }
                a.su_insta {
                    background: #c23098;
                    border-radius: 4px;
                }
                a.su_linked {
                    background: #0077b5;
                    border-radius: 4px;
                }
            }

            @media(max-width: 991px) {
                display : none;
            }
        }

        ul.bar-lang {
            padding     : 10px 15px;

            li {
                .dropdown {
                    a.dropdown-toggle {
                        font-size: 13px;
                        color    : ${colors.text4};

                        img {
                            margin-right: 5px;
                            max-width   : 21px;
                        }

                        i {
                            font-size  : 12px;
                            margin-left: 3px;
                        }

                        &::after {
                            display: none;
                        }

                        &:hover {
                            cursor: pointer;
                            color : ${colors.green};
                        }
                    }

                    ul.dropdown-menu {
                        padding: 0;
                        margin : 0;
                        border : none;
                        background: #ffffff;
                        border-radius: 5px;
                        top       : 68% !important;
                        left      : -16px !important;
                        box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

                        li {
                            display      : block;
                            background: transparent;
                            border-bottom: 1px solid ${colors.border1};
                            padding      : 7px 15px;
                            color        : ${colors.text2};
                            cursor       : pointer;
                            overflow    : hidden;

                            img {
                                max-width   : 21px;
                                margin-right: 5px;
                            }

                            &:hover {
                                color      : ${colors.bg1};
                                font-weight: 500;
                            }

                            &:last-child {
                                border-bottom: none;
                            }
                        }
                    }
                }
            }
           
            @media(max-width: 991px) {
                border-right : none;
                padding: 10px 0px;
            }
        }

        ul.bar-login {
            li {
              
                margin      : 0;
                display     : inline-block;

                a {
                    font-size: 12px;
                    color: #ffffff;
                    font-family: 'Gotham';
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0;

                    i {
                        font-size     : 20px;
                        color         : ${colors.green};
                        vertical-align: bottom;
                        margin-right  : 5px;
                    }

                    &:hover {
                        color:#ffffff;
                    }
                }

                @media(max-width: 991px) {
                    border-right : none;
                    padding-right: 0;
                }
            }
        }
    }

    @media(max-width: 767px) {
        display : none;
    }
}

.logo-area {
    padding:10px 0;
    width: 100%;
    z-index: 99;
    .logo {
        a {
            img {
                @media(max-width: 991px) {
                    max-width : 100%;
                    margin-top: 4px;
                }
                width: 140px;
            }
        }
    }

    .logo-contact-box {
        .emcontact-box {
            margin-right: 45px;

            .box-icon {
                background  : ${colors.green};
                height      : 21px;
                text-align  : center;
                margin-top  : 10px;
                margin-right: 12px;
                position    : relative;

                i {
                    position  : relative;
                    z-index   : 111;
                    font-size : 22px;
                    color     : #ffffff;
                    width     : 36px;
                    display   : inline-block;
                    margin-top: -5px;
                }

                &:before {
                    content            : "";
                    position           : absolute;
                    border-width       : 10px 18px;
                    border-style       : solid;
                    border-top-color   : transparent;
                    border-right-color : transparent;
                    border-bottom-color: ${colors.green};
                    border-left-color  : transparent;
                    top                : -20px;
                    left               : 0;
                    z-index            : 1;
                }

                &:after {
                    content            : "";
                    position           : absolute;
                    border-width       : 10px 18px;
                    border-style       : solid;
                    border-top-color   : ${colors.green};
                    border-right-color : transparent;
                    border-bottom-color: transparent;
                    border-left-color  : transparent;
                    bottom             : -20px;
                    left               : 0;
                    z-index            : 1;
                }

                @media(max-width: 991px) {
                    display : none;
                }
            }

            .box-content {
                p {
                    font-size    : 13px;
                    color        : ${colors.text3};
                    margin-bottom: -2px;
                }

                span {
                    font-size  : 17px;
                    color      : ${colors.black1};
                    font-weight: 500;
                }
            }

            @media(max-width: 991px) {
                margin-right : 20px;
            }
        }

        .apply-btn {
            margin-left: 40px;

            a {
                font-size     : 13px;
                color         : #ffffff;
                background    : ${colors.gr_bg};
                display       : inline-block;
                width         : 110px;
                height        : 40px;
                text-align    : center;
                text-transform: uppercase;
                font-weight   : 500;
                padding       : 11px;
                border-radius : 0 5px 5px 0;
                position: relative;

                i {
                    position : absolute;
                    font-size: 20px;
                    left     : -40px;
                    top      : 0;
                    padding  : 10px;
                    width    : 40px;
                    height   : 100%;
                    border-radius : 5px 0 0 5px;
                    background-color: #ff2023;
                }

                &:hover {
                    background: ${colors.gr_bg2};
                }
            }
        }
    }

    @media(max-width: 767px) {
        display : none;
    }
}

.main-menu {

  
    a.nav-link.nav-search {
        font-size: 20px;
        padding: 12px 15px;
    }

    .main-menu-box {
        position: relative;
        z-index: 111;
        height: 100%;
        display: flex;
        justify-content: right;
        align-items: center;

        .menu-box {

            ul.nav.menu-nav {

               

                li.nav-item {
                    position: relative;

                    a.nav-link {
                        font-size: 14px;
                        color: #4d4d4d;
                        text-transform: capitalize;
                        font-family: 'Gotham';
                        padding: 0.5rem 0.5rem;   
                        i {
                            font-size: 12px;
                        }

                        &:after {
                            content: none;
                        }

                        &:hover {
                            color:#e8223b;
                        }

                        @media(max-width: 991px) {
                            padding-right : 10px;
                        }
                    }

                    ul.dropdown {
                        position  : absolute;
                        left      : -10px;
                        top       : 100%;
                        min-width : 190px;
                        background: #fff;
                        text-align: left;
                        padding   : 0;
                        border-radius : 0 0 5px 5px;
                        transition : 0.2s ease;
                        opacity         : 0;
                        transform       : scaleY(0);
                        visibility      : hidden;
                        z-index         : 999;
                        transform-origin: center top 0;

                        li.nav-item {
                            position: relative;

                            a.nav-link {
                                font-size     : 13px;
                                color         : ${colors.text1};
                                padding       : 10px 20px;
                                text-transform: capitalize;
                                margin-right  : 0;
                                font-weight   : 400;
                                border-bottom : 1px solid ${colors.border1};

                                &:hover {
                                    color: ${colors.green};

                                    i {
                                        color: #fff;
                                    }
                                }

                                i {
                                    float     : right;
                                    margin-top: 4px;
                                }
                            }

                            &:last-child {
                                margin-left: 0;

                                a.nav-link {
                                    border-bottom: none;
                                }
                            }

                            ul.dropdown2 {
                                position  : absolute;
                                top       : 0;
                                left      : 100%;
                                min-width : 180px;
                                background: #fff;
                                border    : 1px solid ${colors.border1};
                                transition : 0.2s ease;
                                opacity         : 0;
                                transform       : scaleY(0);
                                visibility      : hidden;
                                z-index         : 999;
                                transform-origin: center top 0;
                            }

                            &:hover {
                                ul.dropdown2 {
                                    opacity   : 1;
                                    transform : scaleY(1);
                                    visibility: visible;
                                }
                            }
                        }
                    }

                    &:hover {
                        ul.dropdown {
                            opacity   : 1;
                            transform : scaleY(1);
                            visibility: visible;
                        }
                    }
                }
            }

            ul.search-cart-bar {
                li.search-box {
                    i.close-btn {
                        position : absolute;
                        top      : 25px;
                        right    : -12px;
                        font-size: 26px;
                        color    : ${colors.green};
                        cursor   : pointer;
                    }
                }

                li.cart-box {
                    a.nav-cart {
                        padding: 18px 0 0 10px;

                        i {
                            font-size: 20px;
                            color    : ${colors.border1};
                            line-height: 17px;
                        }
                    }
                }
            }

            @media(max-width: 991px) {
                padding: 0 20px;
            }
        }
    }

    
    @media(max-width: 767px) {
        display : none;
    }
}

.activeHome:after {
    content: "" !important;
    position: absolute;
    border-right: 8px solid red;
    border-top: 8px solid transparent;
    bottom: -7px;
    left: 44%;
    transform: rotate( 45deg );
}
.car-opp ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.course-details-top {
    padding: 15px;
    background: #fff;
}
p.secrty {
    font-size: 12px;
    padding: 10px;
    background: #96e6a7;
    text-align: center;
    border: 2px dashed #fff;
}
`;