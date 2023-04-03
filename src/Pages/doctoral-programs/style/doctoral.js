import styled from 'styled-components'

const Styles = styled.div`
  .doctoral-page {
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

    .cuCourse {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.87);
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 4px;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      overflow: hidden;
      max-width: 100%;
      margin: 9px 0;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 90%;
    }

    .cuCourse h3 {
      font-size: 18px !important;
      font-weight: 700;
      color: #e8223b !important;
    }
    a.detailView p {
      font-size: 14px;
      color: #333;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .cuCourse h3 {
      font-size: 18px !important;
      font-weight: 700;
      color: #e8223b !important;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
`

export default Styles
