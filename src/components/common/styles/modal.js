import styled from "styled-components";
import { colors } from "../elements/elements";

export const Styles = styled.div`


.modalContainer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${colors.text4};
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    .modal {
        background-color: hsla(0,0%,100%,.35);
        width: calc(15rem + 15vw);
        height: auto;
        padding: 2rem;
        border-radius: 20px;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
        -webkit-transform: translateY(-600px);
        transform: translateY(-600px);
        transition: all .4s ease;
  
      &_header {
        position: relative;
        border-bottom: 1px solid #dddddd;
        &-title {
          text-align: center;
        }
  
        .close {
          position: absolute;
          top: 0;
          right: 0;
          background: transparent;
  
          img {
            width: 1rem;
            height: auto;
            transition: all 0.3s;
          }
          &:hover {
            img {
              transform: scale(1.1);
            }
          }
        }
      }
  
      &_content {
        border-bottom: 1px solid #dddddd;
        padding: 2rem 0;
      }
  
      &_footer {
        padding: 2rem 0;
        padding-bottom: 0;
  
        button {
          float: right;
          padding: 0.5rem;
  
          border-radius: 8px;
        }
        .modal-close {
          background-color: transparent;
          font-weight: 600;
  
          &:hover {
            color: rgba(54, 67, 72, 0.8);
          }
        }
        .submit {
          margin-right: 1rem;
          background-color: #364348;
          color: #fff;
  
          &:hover {
            background-color: rgba(54, 67, 72, 0.8);
          }
        }
      }
    }
  }

  `;