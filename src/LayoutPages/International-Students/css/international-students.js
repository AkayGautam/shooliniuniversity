import styled from 'styled-components'

const Styles = styled.div`
  .admission-img {
    position: relative;
    padding-top: 70px;
    padding-bottom: 70px;
    padding-left: 70px;
    z-index: 1;
  }
  .admission-img:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 100%;
    border: 20px solid #e41a1a;
    z-index: -1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
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
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
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
    margin-top: 20px;
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

  .shad-card {
    background: #fff;
    padding: 20px;
    max-width: 980px;
    margin: auto;
    margin-bottom: 60px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 10%);
  }
  .single-simple-steps {
    padding: 30px;
    margin-bottom: 30px;
    -webkit-transition: all ease 0.5s;
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
    border: 1px solid #dddddd;
  }
  .single-simple-steps h3 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  p:last-child {
    margin-bottom: 0;
  }
  .section-title h3 {
    font-size: 50px;
    font-weight: 700;
    line-height: 49px;
    text-transform: uppercase;
    margin-bottom: 40px;
    color: #f02f2f;
    font-style: normal;
  }
  .sec-title {
    h2 {
      font-weight: 700;
      font-size: 40px;
      text-transform: revert;
      color: #232323;
      line-height: 1;
      border-bottom: 1px solid red;
      padding: 20px 0;
      margin: 20px 0;
    }
    span {
      color: #ee3032;
    }
  }

  .listCard {
    background: #fff;
    padding: 20px;
    max-width: 980px;
    margin: auto;
    margin-bottom: 60px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 10%);
  }
  .table td,
  .table th {
    border: 0;
  }
  .listCard table {
    text-align: center;
  }
  .listCard table th {
    font-size: 18px;
    font-weight: 400;
  }

  .listCard th {
    width: 25%;
  }
  .table thead th {
    vertical-align: text-bottom !important;
  }
  .listCard td {
    font-size: 20px;
    font-weight: 700;
  }
  .listCard table tr td:nth-child(1),
  .listCard table tr th:nth-child(1) {
    text-align: left;
  }
  .listCard table tr:nth-child(1) td {
    color: red;
  }
  .tableContent {
    padding: 20px 0;
  }
  .tableContent h4 {
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.5;
    font-weight: 500;
  }

  @media screen and (max-width: 767px) {
    .listCard td {
      font-size: 14px;
      font-weight: 700;
    }
    .listCard table th {
      font-size: 15px;
    }
    .sec-title h2 {
      font-weight: 700;
      font-size: 32px;
    }
  }

  .team-member-area .slick-track {
    width: 100% !important;
  }
  .team-slider .team-item {
    position: relative;
    margin: 0 10px 55px 5px;
  }
  .teamSlider {
    display: flex !important;
    width: 100%;
  }
  .team-member-area .slick-slide {
    width: 100% !important;
  }
  .slick-track {
    margin: 0;
  }
  .userContent p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .shooliniresearch-area {
    background: #fff;
    padding: 50px 0;

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
    .applyBtn a {
      background: #ee3032;
      padding: 8px 15px;
      color: #fff !important;
      border-radius: 4px;
      float: right;
      margin-right: 24%;
      margin-top: 30px;
    }

    @media screen and (max-width: 767px) {
      .sec-title h2 {
        font-weight: 700;
        font-size: 32px;
      }
    }
  }

  @media (max-width: 767px) {
    .slick-next {
      right: 2px;
    }

    .teamSlider {
      display: block !important;
    }

    .admission-content h2 {
      font-size: 25px !important;
      margin-top: 20px;
    }
    .download-pdf {
      text-align: center;
      margin-bottom: 20px;
    }

    .about-img {
      width: 100% !important;
      position: inherit !important;
      transform: inherit !important;
      height: auto !important;
    }
    .admission-img {
      position: relative;
      padding: 0px !important;
    }
    .admission-img:after {
      content: none !important;
    }
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

  .ResearchAtGlance-area {
    padding: 50px 0;
    padding-bottom: 0;

    .sec-title h2 {
      font-weight: 700;
      font-size: 58px;
      text-transform: uppercase;
      color: #f02f2f;
      line-height: 1;
      border: 0;
      padding: 0;
      margin: 0;
    }
    .sec-title h4 {
      text-transform: uppercase;
      color: #3f3c3c;
      font-weight: 500;
    }
    .full-icon-box {
      margin-bottom: 3rem;
    }
    .box-title p {
      font-size: 18px;
      font-weight: 500;
      color: #333;
    }
    .box-title h6 {
      font-size: 34px;
      color: #f02f2f;
      font-weight: 700;
      max-width: 290px;
    }
    .smallBoxTtl p {
      font-size: 17px;
      max-width: 260px;
      font-weight: 400;
      color: #333;
    }
    @media (max-width: 989px) {
      .box-title h6 {
        font-size: 22px;
      }
    }
  }

  .team-member-area {
    padding: 63px 0;

    .sec-title {
      h4 {
        line-height: 35px;
        font-weight: 600;
        max-width: 550px;
        margin: auto;
        margin-bottom: 50px;

        @media (max-width: 575px) {
          margin-bottom: 15px;
          font-size: 20px;
        }
      }
    }

    .team-slider {
      position: relative;

      .team-item {
        position: relative;
        margin-bottom: 55px;

        img {
          border-radius: 5px;
        }

        .img-content {
          background: #ffffff;
          box-shadow: 0 10px 18px rgba(0, 0, 0, 0.07);
          position: absolute;
          bottom: -30px;
          left: 10%;
          width: 80%;
          z-index: 1;
          border-radius: 5px;
          padding: 15px 0;

          h5 {
            font-weight: 600;
            margin-bottom: 5px;
          }

          p {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 5px;
          }

          ul {
            li {
              a {
                i {
                  font-size: 14px;
                  color: #ffffff;
                  width: 33px;
                  height: 33px;
                  border-radius: 50%;
                  padding-top: 10px;
                  transition: all 0.2s ease;
                }

                i.fa-facebook-f {
                  background-color: #4267b2;
                }

                i.fa-twitter {
                  background-color: #1da1f2;
                }

                i.fa-youtube {
                  background-color: #dd1343;
                }
              }
            }
          }
        }
      }

      .slider-dot {
        margin-top: 25px !important;

        .swiper-pagination-bullet {
          width: 22px;
          height: 9px;

          display: inline-block;
          margin: 3px;
          opacity: 1 !important;
          border-radius: 5px;
        }
      }
    }

    @media (max-width: 767px) {
      padding: 25px 0;
    }
  }
`

export default Styles
