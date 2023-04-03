import styled from 'styled-components'

export const Styles = styled.div`
  .thinkLearning {
    @media (max-width: 767px) {
      li a span svg {
        margin-right: 0 !important;
      }
    }
    a.iconArrL.btnRedaas {
      display: block;
      border: 1px solid rgb(255, 255, 255);
      max-width: 170px;
      text-align: center;
      border-radius: 40px;
      padding: 11px 20px !important;
      background: #fff;
      color: #f02f2f;
  }
  .feature-list {
    margin-bottom: 0;
}
  .feature-list li a:hover {
    background: #f02f2f;
    color: #fff !important;
}

  .text-lg {
    font-size: 20px !important;
    font-weight: 300;
    margin-top: 30px;
}
  .bg-red {
    background: rgb(240,47,47);
    padding: 30px;
}
    .learningCard {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h3.subHeading {
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid #333;
    }
    .course-details-feature {
      li a {
        font-size: 20px;
        color: #615c5c;
        width: 100%;
        line-height: 1.7;
        padding: 5px 13px;
        border-bottom: 1px solid #cecece;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        span svg {
          font-size: 25px;
          margin-right: 80px;
          color: #333;
          transition: all 0.1s 0.5s ease;
        }
      }

      li:hover span svg {
        fill: red;
        color: red;
        margin-right: 90px;
      }
    }

    @media (max-width: 767px) {

      .learningCard {
        margin-bottom: 10px;
    }
    
      h3.subHeading {
        text-transform: uppercase;
        font-size: 20px;
      }
      .feature-list li a {
        font-size: 14px !important;
      }
    }
  }
`
