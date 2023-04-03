import styled from 'styled-components'

export const Styless = styled.div`
  .visionmission-page {
    .icon-box-area {
      padding-bottom: 72px;
      .full-icon-box {
        .icon-box {
          position: inherit;
          top: 0;
          left: 0;
          width: unset;
        }
      }

      @media (max-width: 767px) {
        padding: 0 0 10px;
      }
    }
  }

  .admidsionProcess {
    li {
      display: block;
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
    
        ol {
          padding: 0;
          margin: 0;
      }
      ol li {
        padding: 10px 0;
    }
    
        .div1 {
          grid-area: 1 / 2 / 2 / 3;
        } */

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
      font-size: 40px;
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

    ul {
      padding: 0;
      margin: 30px 0;
    }
    .about__area h2 em {
      color: #d2093c;
      font-style: normal;
    }
  }

  .olList h5 {
    background: transparent !important;
    font-weight: 700;
    margin: 10px 0 !important;
    color: #e33535;
  }
  .olList ol li:after {
    content: '';
    position: absolute;
    left: -22px;
    top: 8px;
    width: 20px;
    height: 20px;
    background: url(assets/images/check.png);
    background-size: 10px;
    background-repeat: no-repeat;
    background-color: #efecec;
    border-radius: 50%;
    background-position: center;
  }
  .olList ol li {
    position: relative;
    position: relative;
    display: block;
    padding: 6px 11px;
  }
  .olList ol {
    padding-left: 20px;
  }

  .snip1527 {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    color: #ffffff;
    float: left;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    margin: 10px 1%;
    min-width: 250px;
    overflow: hidden;
    position: relative;
    text-align: left;
    width: 100%;
    height: 95%;
  }

  .snip1527 * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .snip1527 img {
    max-width: 100%;
    vertical-align: top;
    position: relative;
  }

  .snip1527 figcaption {
    padding: 10px 10px 10px;
    position: relative;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .snip1527 figcaption:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    content: '';
    opacity: 0.8;
    z-index: -1;
  }

  .snip1527 .date {
    background-color: #fff;
    border-radius: 50%;
    color: #700877;
    font-size: 18px;
    font-weight: 700;
    min-height: 48px;
    min-width: 48px;
    padding: 10px 0;
    position: absolute;
    right: 15px;
    text-align: center;
    text-transform: uppercase;
    top: -25px;
  }

  .snip1527 .date span {
    display: block;
    line-height: 14px;
  }

  .snip1527 .date .month {
    font-size: 11px;
  }

  .snip1527 h3,
  .snip1527 p {
    margin: 0;
    padding: 0;
  }

  .snip1527 h3 {
    display: inline-block;
    font-weight: 400;
    -webkit-letter-spacing: -0.4px;
    -moz-letter-spacing: -0.4px;
    -ms-letter-spacing: -0.4px;
    letter-spacing: 0;
    margin-bottom: 0 !important;
    font-size: 17px !important;
    line-height: 1.6 !important;
    text-transform: capitalize;
  }

  .snip1527 p {
    font-size: 0.8em;
    line-height: 1.6em;
    margin-bottom: 0px;
  }

  .snip1527 a {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }

  .snip1527:hover img,
  .snip1527.hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .titleAdjust h2 {
    font-size: 28px;
    color: #e33535;
    font-weight: 700;
  }
  .titleAdjust table td {
    padding: 10px;
  }

  .titleAdjust ul li:after {
    content: '';
    position: absolute;
    background: #cecece url(assets/images/check.png);
    width: 25px;
    height: 25px;
    background-size: 11px;
    background-position: center;
    border-radius: 50%;
    background-repeat: no-repeat;
    left: -7px;
    top: 5px;
  }

  .titleAdjust ul li {
    position: relative;
    position: relative;
    line-height: 1.8rem;
    margin: 8px 0;
    padding-left: 26px;
  }

  .olList.titleAdjust p div a {
    color: #333;
  }
  .olList.titleAdjust p div a {
    font-size: 12px;
    color: #444444 !important;
    font-weight: 500;
    text-transform: uppercase;
    padding: 12px 30px 10px;
    display: inline-block;
    border-radius: 5px;
    box-shadow: none;
    background: #d8ddfe;
  }
  .olList.titleAdjust p div {
    display: inline-block;
  }
  .cardCntn p {
    color: #fff !important;
  }
  .image {
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    table.cj-wysiwyg-table {
      width: 100% !important;
    }
  }

  .collapsible .content {
    padding: 6px;
    background-color: #eeeeee;
  }
  .collapsible .header {
    background-color: #dddddd;
    padding: 6px;
    cursor: pointer;
  }
  .Collapsible {
    display: block;
    padding: 0px;
    text-decoration: none;
    color: #555;
    font-weight: 600;
    background: #4260a2 !important;
    color: #fff !important;
    border-bottom: 1px solid #ddd;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }
  .Collapsible__contentInner a {
    display: block;
    padding: 7px 25px;
    background: #1f4087;
    color: #fff;
    margin-bottom: 1px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 400;
  }
  .Collapsible__contentInner {
    margin: 0;
  }
  .colapseSidebar h5 {
    color: #182b49;
    font-weight: 600;
    padding-bottom: 10px;
    margin-bottom: 20px;
    position: relative;
  }
  .sideBarNew {
    border: 1px solid #eeeeee;
    padding: 15px 20px 20px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .Collapsible span {
    padding: 10px 15px;
    display: block;
  }
  .colapseSidebar svg {
    float: right;
    position: relative;
    top: 5px;
  }
`
