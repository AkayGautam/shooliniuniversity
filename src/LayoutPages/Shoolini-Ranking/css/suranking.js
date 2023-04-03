import styled from 'styled-components'

export const Styles = styled.div`
    .ranking-page {
        
        .RecognitionsHeader {
            padding: 150px 0;
            background: url(../../assets/images/recognisation.jpg);
            margin-bottom: 50px;
            position: relative;
            z-index: 9;
            filter: hue-rotate(745deg);
            &:after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, #4c1212, transparent);
            }

            .pageTitle_secnd {
                position: relative;
                z-index: 9;
                color: #fff;

                h2 {
                    font-size: 6rem;
                    text-shadow: 2px 2px 8px rgb(0 0 0 / 40%);
                    line-height: 105.6px;
                }

            }
           

        }


        .section-title {
            margin-bottom: 40px;
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
            content: "";
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
        .section-title p {
            font-family: Poppins,sans-serif;
            font-size: 18px;
            font-weight: 400;
            line-height: 30px;
            color: #656970;
        }
        .about-bg-img {
            position: relative;
        }
        .about-img {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 66.6%;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            transform: translateX(-100px);
            transition: all .5s ease;
        }
        .about-img  img {
            display: block;
            width: 100%;
        }
        .about-content-area {
            background: #fff;
            padding: 32px;
            margin: 50px 0;
            box-shadow: 0 8px 20px 0 rgb(0 0 0 / 14%);
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            transform: translateX(100px);
            transition: all .5s ease;
        }
        .about-content-area h3 {
            text-transform: capitalize;
            font-weight: 700;
            font-size: 50px;
        }



            @media(max-width: 767px) {
                padding: 0 0 10px;
            }
        }
    }

    @media(max-width: 767px) {
    .about-content-area {
        margin: 0 !important;
        transform: translateX(0px) !important;
    }
    .about-content-area h3 {
        font-size: 34px !important;
    }
    .ranking-page .about-img {
        position: inherit !important;
        height: auto !important;
        width: 100% !important;
        transform: translateX(0px) !important;
    }
}
`
