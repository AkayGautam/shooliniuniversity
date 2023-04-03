import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`
  a.nav-search {
    padding: 18px 0 0 10px;

    i {
      font-size: 20px;
      color: ${colors.border1};
    }
  }
  form.search-form {
    text-align: center;
  }
  .search-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.96);
    transform: scale(1, 0);
    transform-origin: bottom center;
    transition: transform 0.7s ease;

    .search-overlay {
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.96);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
      opacity: 0.7;
    }

    .search-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      form.search-form {
        position: relative;
        z-index: 9991;
        width: 50%;
        margin-top: -80px;
        position: relative;

        input {
          width: 100%;
          height: 65px;
          border: none;
          border-bottom: 2px solid ${colors.border3};
          font-size: 26px;
          padding: 0 10px 0 10px;
          margin-bottom: 0;
          color: ${colors.black2};
          position: relative;
          box-shadow: none;
          border-radius: 0;
          outline: none;
          background: transparent;

          @include input-placeholder {
            font-style: italic;
            color: ${colors.black1};
            font-weight: 300;
          }
        }

        .close-btn {
          position: absolute;
          top: 25px;
          right: -12px;
          font-size: 26px;
          color: ${colors.green};
          cursor: pointer;
        }
      }
    }
  }

  .search-wrap.active {
    transform-origin: top center;
    transform: scale(1, 1);
  }

  .course-search {
    border: 1px solid ${colors.border1};
    padding: 15px 20px 20px;
    border-radius: 5px;
    margin-bottom: 0px;
    background: #fff;
    h5 {
      color: ${colors.black1};
      font-weight: 600;
      padding-bottom: 10px;
      margin-bottom: 20px;
      position: relative;
      &:before {
        position: absolute;
        content: '';
        background: ${colors.green};
        width: 50px;
        height: 2px;
        bottom: 0;
        left: 0;
      }

      @media (max-width: 575px) {
        font-size: 17px;
      }
    }
    form {
      position: relative;
      input {
        width: 100%;
        height: 45px;
        border: 1px solid ${colors.border3};
        color: ${colors.black1};
        padding-left: 15px;
        &:focus {
          border-color: ${colors.green};
        }
        &::placeholder {
          font-size: 14px;
          font-style: italic;
          color: ${colors.black2};
          font-weight: 400;
        }
      }
      button {
        position: absolute;
        width: 45px;
        height: 100%;
        top: 0;
        right: 0;
        background: transparent;
        padding: 0;
        border: none;
        font-size: 20px;
        color: ${colors.green};
      }
    }

    @media (max-width: 1199px) {
      padding: 12px 15px 15px;
    }
  }

  .searchedCourse {
    .cuCourse {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.87);
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 4px;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      overflow: hidden;
      max-width: 100%;
      margin: 9px 0;
      padding: 10px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      height: 90%;
    }
    a.detailView h3 {
      font-size: 18px !important;
      font-weight: 700;
      color: #e8223b !important;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    a.detailView p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #333;
      font-size: 14px;
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
  }
`
