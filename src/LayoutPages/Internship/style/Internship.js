import styled from 'styled-components'

export const Styless = styled.div`
  .heading {
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    text-transform: uppercase;
    margin-bottom: 0;
    color: #f02f2f;
    font-style: normal;
    padding: 30px 0;
  }
  .picture {
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0 / 10%),
      0 0px 0 1px rgb(0 0 0 / 2%);
    color: #4a4a4a;
    padding: 0.8rem;
    margin-bottom: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 35px);
    margin: 25px 7px;
    margin-top: 0;
  }
  .content {
    background-color: #f8f9fa;
  }

  .content2 {
    background-color: #fff;
  }

  @media screen and (min-width: 980px) {
    .picture img {
      max-width: 150px;
      max-height: 80px;
    }
  }
`
