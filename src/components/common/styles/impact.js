import styled from "styled-components";
import { colors } from "../elements/elements";

export const Styles = styled.div`
    .impact-box-area {
        padding-bottom: 80px;

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

        .sec-title h2 {
            font-weight: 900;
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
        }
        .listO img {
            width: 170px;
            padding: 10px;
            background: #f6f6f6;
        }
        .listO p {
            font-size: 17px;
            color: #333;
            padding-top: 10px;
        }
        .sidebarText li {
            display: block;
        }
        
    }
`;