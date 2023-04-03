import styled from 'styled-components'

export const Styles = styled.div`
  li.check-btn {
    border-top: 1px dashed rgb(221, 221, 221);
    padding: 10px 0px;
  }
  .course-category li {
    border-top: 1px dashed rgb(221, 221, 221);
  }
  li.check-btn a {
    color: #333;
    padding: 0px 20px;
  }
  .course-category h5 {
    color: #182b49;
    font-weight: 600;
    padding: 10px 0;
    margin-bottom: 20px;
    position: relative;
  }
  .course-category h5:before {
    position: absolute;
    content: '';
    background: #ff2023;
    width: 50px;
    height: 2px;
    bottom: 0;
    left: 0;
  }
  .course-category {
    border: 1px solid #eeeeee;
    padding: 15px 20px 20px;
    border-radius: 5px;
    margin-bottom: 30px;
    background: #fff;
  }
`
