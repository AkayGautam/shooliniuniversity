import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`
  .impact-box-area {
    padding-bottom: 80px;
    overflow: hidden;
    .IMDetail {
      position: relative;
      z-index: 99;
      max-width: 320px;
      top: -50px;
      left: 40px;
      background: #fff;
      padding: 18px;
      box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 20%);
      border-radius: 5px;
    }


    .listO {
      justify-content: space-between;
  }

    p.textLimit3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .moreNews a {
      background: #f63030;
      padding: 10px 20px;
      color: #fff;
      font-size: 17px;
      font-weight: 500;
      border-radius: 3px;
      float: right;
      margin-bottom: 20px;
    }
    .sec-title h2 {
      font-weight: 700;
      font-size: 48px;
      text-transform: uppercase;
      color: #f02f2f;
      line-height: 1;
    }
    .listO {
      display: flex;
      padding: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #cecece;
      background: #fff;
    }
    .listO img {
      width: 130px;
      padding: 10px;
      background: #f6f6f6;
      max-height: 100px;
    }
    .listO p {
      font-size: 14px !important;
      color: #212529;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sidebarText li {
      display: block;
    }
    .fixHeight {
      max-height:370px;
      position: relative;
      overflow: hidden;
    }
    .imSUtext {
      position: relative;
  }
   
    .listO h5 {
      color: #212529;
      font-weight: 600;
  }
  .slick-slide img {
    height: auto;
}

.moreNews {
  display: flex;
  justify-content: left;
  align-items: center;
}
  }


  @media (max-width: 767px) {
 .IMDetail {
      max-width: 100% !important;
      top: 0 !important;
      left: 0 !important;
      width: 100%;
  }

  I .text-center-button a {
    float: left !important;
}

}


`

