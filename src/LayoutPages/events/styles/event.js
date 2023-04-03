import styled from 'styled-components'
import { colors } from '../../../components/common/elements/elements'

export const Styles = styled.div`
  .event-page {
    background: #fff;

    .dflex-card {
      width: 100%;
    }
    .DateLink {
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
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .DateLink p {
      color: #f02f2f;
      font-size: 17px;
    }
    .dflex-card {
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
      font-weight: 700;
      font-size: 38px;
      text-transform: uppercase;
      color: #f02f2f;
      line-height: 1;
    }

    .dflex-card {
      background: #f8f7f6;
      width: 97% !important;
      padding: 10px;
      height: 100%;
    }
    .slick-prev:before,
    .slick-next:before {
      color: #f02f2f;
    }
    .event-page-area {
      padding: 70px 0;
      .event-box {
        margin-bottom: 30px;
        .event-img {
          a {
            img {
              border-radius: 5px;
            }
          }

          @media (max-width: 991px) {
            display: none;
          }
        }
        .event-content {
          position: relative;
          .content-box {
            box-shadow: 0 0px 20px rgba(0, 0, 0, 0.08);
            padding: 20px;
            background: #ffffff;
            border-radius: 5px;
            position: absolute;
            top: 22px;
            left: -9%;
            z-index: 1;
            .event-title {
              h6 {
                margin-bottom: 10px;
                a {
                  color: ${colors.black1};
                  font-weight: 600;

                  &:hover {
                    color: ${colors.green};
                  }
                }
              }
            }

            .event-time-location {
              margin-bottom: 10px;
              ul {
                li {
                  font-size: 13px;
                  color: ${colors.text3};
                  i {
                    font-size: 18px;
                    color: ${colors.green};
                    vertical-align: top;
                  }
                  &:first-child {
                    margin-right: 20px;
                  }
                }
              }
            }

            .event-desc {
              p {
                font-size: 13px;
                color: ${colors.text2};
                line-height: 20px;
              }

              @media (max-width: 767px) {
                margin-bottom: 10px;
              }
            }

            .event-date {
              position: relative;
              margin-bottom: 20px;
              padding-top: 6px;
              &:before {
                position: absolute;
                content: '';
                background: ${colors.border1};
                width: 1px;
                height: 100px;
                top: 0;
                left: -30px;

                @media (max-width: 767px) {
                  content: none;
                }
              }
              p {
                font-size: 20px;
                color: ${colors.green};
                font-weight: 500;
                text-transform: uppercase;

                @media (max-width: 767px) {
                  float: left;
                  font-size: 18px;
                  margin-right: 20px;
                }
              }

              @media (max-width: 767px) {
                margin-bottom: 0;
                padding-top: 0;
              }
            }

            .join-btn {
              a {
                font-size: 12px;
                color: ${colors.black2};
                border: 1px solid ${colors.border3};
                font-weight: 500;
                text-transform: uppercase;
                padding: 9px 12px 7px;
                border-radius: 5px;
                &:hover {
                  color: #ffffff;
                  background: ${colors.gr_bg};
                  border-color: ${colors.green};
                }

                @media (max-width: 767px) {
                  float: left;
                  padding: 5px 10px 3px;
                }
              }
            }

            @media (max-width: 991px) {
              position: unset;
            }
          }
        }
      }

      ul.pagination-box {
        margin-top: 50px;
      }

      .course-sidebar {
        @media (max-width: 991px) {
          display: none;
        }
      }

      @media (max-width: 767px) {
        padding: 40px 0 35px;
      }
    }
  }

  .about-page {
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

  @media (max-width: 767px) {
    .feature-list li a {
      font-size: 14px !important;
    }

    .text-center-button a
    {
      float:left !important;
    }
    .text-center-button {
      margin: 0 !important;
  }
  }
  .eveDetail a {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
  }
  .DateLink p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }









  .post-list-item .event-item {
    position: relative;
    margin-bottom: 30px;
    padding-left: 30%;
    background: #fff;
    color: #999;
    overflow: hidden;
    box-shadow: 0 0 12px -1px rgb(15 15 15 / 10%);
    border-radius: 10px;
    transition: all .2s;
}
.post-list-item .event-item-thumbnail {
  position: absolute;
  width: 30%;
  left: 0;
  top: 0;
  height: 100%;
  padding-top: 0;
  border-radius: 10px 0 0 10px;
  backface-visibility: hidden;
}
.post-list-item .event-item-thumbnail .placeholder-thumbnail-bg {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all .2s;
  overflow: hidden;
}
.post-list-item .event-item-thumbnail img {
  width:auto;
  max-width: none !important;
  height: 100% !important;

  left: 50%;
  transform: translateX(-50%);

}

span.btn-text {
  width: 100%;
  display: block;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  padding: 6px 0;
  font-size: 15px;
}
.text-center-button {
  text-align: center;
  margin: 15px 0;
}
.text-center-button a {
  background: #f63030;
  padding: 10px 20px;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  border-radius: 3px;
  float: right;
  margin-bottom: 20px;
}
.dDmFWc .event-page {
  background: #f6f6f6;
}

.post-list-item .event-item:hover {
  box-shadow: 0 0 30px 0px rgb(15 15 15 / 15%);
}

#content img {
  max-width: 100%;
  height: auto;
}
.event-item-thumbnail img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all .2s;
}
.post-list-item .event-date-block {
  position: absolute;
  top: 10px;
  left: 10px;
  right: auto;
}
.event-date-block {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 12px;
  width: 55px;
  height: 55px;
  line-height: 1.1;
  color: #fff;
  background: #222;
  background: rgba(0,0,0,0.5);
  border-radius: 100px;
  font-size: 11px;
  text-transform: uppercase;
}
.event-date-block .day {
  font-size: 24px;
}
.post-list-item .event-item-content {
  padding: 15px 20px 15px;
}
.post-list-item .small-meta {
  font-size: 14px;
  text-transform: none;
  margin-bottom: 7px;
}
.small-meta {
  font-size: 11px;
  text-transform: uppercase;
  color: #aaa;
  color: rgba(153,153,153,.8);
  margin-bottom: 10px;
}
.post-list-item .small-meta >span:not(:last-child) {
  margin-right: 12px;
}
.post-list-item .event-excerpt {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 5px;
}
.social-share-hover {
  white-space: nowrap;
  margin-left: -100%;
  z-index: 5;
  position: relative;
  height: 40px;
}
.social-share-hover .hover-share-label {
  display: inline-block;
  text-transform: uppercase;
}
.event-button {
  background: #ed3131 !important;
  color: #fff !important;
  font-size: 13px;
  font-weight: 600;
}
h4.event-title.font-2 {
  font-size: 18px;
}
.event-excerpt p {
  color: #333;
  font-family: 'Poppins';
  font-size: 14px !important;
  margin:0px;
}

.event-title.font-2
{
overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}







`
