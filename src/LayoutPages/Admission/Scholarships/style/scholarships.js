// import styled from "styled-components";

// export const Styles = styled.div`
//     .visionmission-page {
//         .icon-box-area {
//             padding-bottom : 72px;
//             .full-icon-box {
//                 .icon-box {
//                     position: inherit;
//                     top: 0;
//                     left: 0;
//                     width: unset;
//                 }
//             }

//             @media(max-width: 767px) {
//                 padding: 0 0 10px;
//             }
//         }
//     }
// `;

import styled from 'styled-components'

export const Styless = styled.div`
  .admidsionProcess {
    li {
      display: block;
    }

    li.check-btn {
      border-top: 1px dashed rgb(221, 221, 221);
      padding: 10px 0px;
  }
    .course-category {
      border: 1px solid rgb(238, 238, 238);
      padding: 15px 20px 20px;
      border-radius: 5px;
      margin-bottom: 30px;
  }


    .about-content i {
      float: left;
      color: #ff2023;
      border: 1px solid #dddddd;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      text-align: center;
      padding-top: 9px;
      margin-top: 7px;
      margin-right: 15px;
      margin-bottom: 20px;
    }
    .about__area.about__area_one ul li.last-li em {
      display: block;
      font-size: 14px;
      color: #999;
      line-height: 15px;
      margin-top: 5px;
      font-style: normal;
    }
    .about__area.about__area_one ul li.last-li a {
      font-size: 18px;
      color: #00306e;
      font-weight: 700;
    }
    .about__area ul li.last-li {
      background: url(../../assets/images/comment.png) no-repeat left top;
      padding-left: 72px;
    }

    .about-content li {
      font-family: Poppins, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
      color: #656970;
      margin-bottom: 15px;
    }
    .react__shape__ab {
      position: absolute;
      right: 11.5%;
      top: 4%;
      -webkit-animation: slide-top 5000ms linear infinite alternate;
      animation: slide-top 5000ms linear infinite alternate;
    }
    .about__image {
      position: relative;
    }

    .videosSec iframe {
      margin-right: 10px;
    }

    /* .videosSec {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 29px;
      grid-row-gap: 0px;
    }

 

    
    @-webkit-keyframes slide-top {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-100px);
        transform: translateY(-100px);
      }
    }
    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-100px);
        transform: translateY(-100px);
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
      content: '';
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
      font-family: Poppins, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
      color: #333;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    ol {
      padding: 0;
      margin: 0;
  }
  ol li {
    padding: 10px 0;
}
.course-search {
  background: #fff;
}
    .about__area h2 em {
      color: #d2093c;
      font-style: normal;
    }
  }


`
