import styled from "styled-components";
import { colors } from "../elements/elements";

export const Styles = styled.div`
 

.searchForm {
    background-size    : cover;
    background-position: center;
    background-repeat  : no-repeat;
    padding            : 65px 0 70px;
    position           : relative;
    max-width: 100% !important;
 
    a.detailView {
        font-size: 15px;
        color: #fff;
        background: #2a4dad;
        width: 46%;
        border: none;
        border-radius: 5px;
        margin-top: 0px;
        text-align: center;
        padding: 13px 5px;
        font-weight: 700;
    }

    .hide-courses
    {
        display:none;
    }
    
    .view-courses
    {
        display:block !important;
    }
    .tabSys {
        display: flex;
        justify-content: space-between;
    }
    .btn-primary {
        background: #f8f7f6 !important;
        color: #333 !important;
        width:100% !important;
    }

    h4{
        color: #fff;
        font-size: 60px;
        font-weight: 700;
        padding-top: 8px;
        line-height: 0.9;
    }


    .sec-title {
        h4 {
            color        : #ffffff;
            line-height  : 35px;
            font-weight  : 600;
            max-width    : 550px;
            margin       : auto;
            margin-bottom: 45px;

            @media(max-width: 575px) {
                margin-bottom: 15px;
                font-size: 20px;
            }
        }
    }

    form.form {
        p.form-control {
            padding   : 0;
            width     : auto;
            height    : auto;
            background: transparent;
            border    : none;
            position  : relative;
            
            input, select {
                width           : 100%;
                height          : 50px;
                background-color: rgba(255, 255, 255, 1);
                font-size       : 15px;
                padding         : 15px 20px;
                color           : #333;
                border          : none;
                border-radius : 5px;

                &:focus {
                    background-color: #ffffff;
                    color           : ${colors.black1};

                    &::placeholder {
                        color: #cecece;
                    }
                }

                &::placeholder {
                    font-size  : 15px;
                    font-style : italic;
                    color      : #333;
                    font-weight: 300;
                }
            }
            select{
                max-width: 80%;
                margin-right: 13px;
            }
            button.detailView {
                background: #35368d !important;
            }

            span {
                color      : ${colors.border1};
                font-weight: 300;
                position   : absolute;
                bottom     : -22px;
                left       : 0;
                visibility : hidden;
            }

            @media(max-width: 767px) {
                margin-bottom: 30px;
            }
        }

        p.form-control.success {
            input {
                border: 2px solid ${colors.green};
            }

            &::before {
                position   : absolute;
                content    : "\f058";
                font-family: "Line Awesome Free";
                font-size  : 24px;
                color      : ${colors.green};
                font-weight: 900;
                top        : 8px;
                right      : 10px;
            }
        }

        p.form-control.error {
            input {
                border: 2px solid ${colors.red};
            }
            &::before {
                position   : absolute;
                content    : "\f06a";
                font-family: "Line Awesome Free";
                font-size  : 24px;
                color      : ${colors.red};
                font-weight: 900;
                top        : 8px;
                right      : 10px;
            }
        }

        p.form-control.error {
            span {
                visibility: visible;
            }
        }
        .react-tabs__tab {
            font-size: 15px;
            color: #272727;
            background: #ffffff;
            width: 31%;
            border: none;
            border-radius: 5px;
            margin-top: 0px;
            text-align: center;
            padding: 15px 5px;
        }
        ul.react-tabs__tab-list {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }
        .react-tabs__tab:focus:after {
            content: none;
        }
        .react-tabs__tab--selected {
            background: #1d1b1b !important;
            color: #fff !important;
        }
        .react-tabs__tab-list {
            border-bottom: 0 !important;
        }
        button {
            font-size : 15px;
            color     : #fff;
            background: #170900;
            width     : 180px;
            height    : 50px;
            border    : none;
            border-radius : 5px;
            margin-top: 0px;

            &:hover {
                background: #333;
            }

            @media(max-width: 767px) {
                margin-top: 5px;
            }
        }
    }

    @media(max-width: 767px) {
        padding: 30px 0 40px;

        .react-tabs__tab {
            width: 100% !important;
            margin-bottom:10px;
        }
        form.form ul.react-tabs__tab-list
        {
            display:block !important;
        }
        h4 {
            font-size: 40px;
            margin-bottom: 20px;
        }
        a.detailView {
            width: 60%;
            margin-top: 10px;
            display: inline-block;
        }
        form.form p.form-control select {
            max-width: 100%;
            margin-right: 13px;
        }
    }
    @media(max-width: 989px) {
     h4 {
        font-size: 34px;
    }
}


}

.search-form-area {
    background-color: ${colors.bg1};

    .newsletter-container {
        position: relative;

        .newsletter-box {
            background: ${colors.gr_bg};
            padding   : 37px 40px 40px;
            border-radius : 5px;
            position: absolute;
            width   : 100%;
            top     : -20px;
            left    : 0;
            z-index : 1;

            .sec-title {
                h4 {
                    color        : #ffffff;
                    margin-bottom: 35px;

                    @media(max-width: 575px) {
                        margin-bottom: 15px;
                        font-size: 20px;
                    }
                }
            }

            form.form {
                p.form-control {
                    padding   : 0;
                    width     : auto;
                    height    : auto;
                    background: transparent;
                    border    : none;
                    position  : relative;

                    input {
                        width           : 100%;
                        height          : 50px;
                        background-color: #ffffff;
                        font-size       : 14px;
                        padding         : 15px 20px;
                        color           : ${colors.black1};
                        border          : none;
                        border-radius : 5px;

                        &::placeholder {
                            font-size : 14px;
                            font-style: italic;
                            color     : ${colors.bg1};
                        }

                        @media(max-width: 480px) {
                            height: 42px;
                            padding: 15px;
                        }
                    }

                    span {
                        color      : #ffffff;
                        font-weight: 300;
                        position   : absolute;
                        bottom     : -22px;
                        left       : 0;
                        visibility : hidden;
                    }

                    @media(max-width: 767px) {
                        margin-bottom: 25px;
                    }
                }

                p.form-control.success {
                    input {
                        border: 2px solid ${colors.green};
                    }

                    &::before {
                        position   : absolute;
                        content    : "\f058";
                        font-family: "Line Awesome Free";
                        font-size  : 24px;
                        color      : ${colors.green};
                        font-weight: 900;
                        top        : 8px;
                        right      : 10px;
                    }
                }

                p.form-control.error {
                    input {
                        border: 2px solid ${colors.red};
                    }

                    &::before {
                        position   : absolute;
                        content    : "\f06a";
                        font-family: "Line Awesome Free";
                        font-size  : 24px;
                        color      : ${colors.red};
                        font-weight: 900;
                        top        : 8px;
                        right      : 10px;
                    }
                }

                p.form-control.error {
                    span {
                        visibility: visible;
                    }
                }

                button {
                    font-size  : 14px;
                    color      : #fff;
                    background : ${colors.black1};
                    width      : 100%;
                    height     : 50px;
                    font-weight: 500;
                    border     : none;
                    border-radius : 5px;
                    text-transform: uppercase;

                    i {
                        font-size     : 22px;
                        color         : ${colors.green};
                        margin-right  : 5px;
                        vertical-align: text-bottom;
                        line-height   : 19px;
                    }

                    &:hover {
                        background: ${colors.green};

                        i {
                            color: #ffffff;
                        }
                    }

                    @media(max-width: 480px) {
                        height: 42px;
                    }
                }
            }

            @media(max-width: 767px) {
                padding: 25px 35px 35px;
            }
        }
    }
}
`;