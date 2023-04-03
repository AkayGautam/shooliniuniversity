import styled from 'styled-components'

export const Styles = styled.div` 

.gal_container h1 {
  font-weight: 900;
  font-size: 50px;
  text-transform: uppercase;
  color: #f02f2f;
  line-height: 1;
}
div#section p {
color: #3f3c3c;
font-weight: 500;
text-transform: lowercase;
letter-spacing: 0;
font-size: 19px !important;
}
#section{
  display: block;
  margin: auto;
  top: 30px !important;
  position: relative;
  z-index: -1;
}

#section a{
color: #4d4d4d; 
text-transform:capitalize;
text-decoration:none;
}
#section img{
  width: 30px;
  margin-right: 5px;
}
.row1{
  transition: all 0.2s ease-in-out;
  -webkit-animation: float 6s ease-in-out infinite;
          animation: float 6s ease-in-out infinite;
}
.galleryViewER {
  overflow: hidden;
}
@-webkit-keyframes float {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes float {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}


@media (min-width: 768px) and (max-width: 992px)
.galImage {
  max-height: 200px !important;
}
}

@media screen and (min-width:980px)
{
      .gal_container{
        width:100vw%;
        height:650px;
        background-color:white;
        perspective:1500px;
        text-align:center;
        text-transform:uppercase;
        
        }
   
        .one{
          margin: 10px;
          width: 290px;
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          transform: rotateY(30deg);
          border-radius: 5px;
          position: relative;
          top: 170px;
          left: 40px;
          box-shadow:0px 2px 0px rgba(0,0,0,0.1);
          height: 220px;
          overflow: hidden;
          transform-origin: 20% 40%;
        }
        .two{
          margin: 10px;
          width: 230px;
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          transform: rotateY(30deg);
          border-radius: 5px;
          position: relative;
          top: 70px;
          left: 0px;
          box-shadow:0px 2px 0px rgba(0,0,0,0.1);
          height: 150px;
          overflow: hidden;
        }
        .three{
          margin: 10px;
          width: 230px;
          -webkit-transform: rotateY(-30deg);
          -ms-transform: rotateY(-30deg);
          transform: rotateY(-30deg);
          border-radius: 5px;
          position: relative;
          top: 70px;
          right: 50px;
          box-shadow:0px 2px 0px rgba(0,0,0,0.1);
          height: 150px;
          overflow: hidden;
        }
        .four{
          margin: 10px;
          width: 290px;
          -webkit-transform: rotateY(-30deg);
          -ms-transform: rotateY(-30deg);
          -webkit-transform: rotateY(-30deg);
          -ms-transform: rotateY(-30deg);
          transform: rotateY(-220deg);
          border-radius: 10px;
          position: relative;
          top: 161px;
          right: 70px;
          box-shadow:0px 2px 0px rgba(0,0,0,0.1);
          height: 200px;
          overflow: hidden;
        }
        .five{
          margin: 10px;
          width: 230px;
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          transform: rotateY(30deg);
          border-radius: 5px;
          position: relative;
          top: 40px;
          left: 140px;
          box-shadow:0px 2px 0px rgba(0,0,0,0.1);
          height: 180px;
          overflow: hidden;
          -webkit-transform-origin: 20% 40%;
          -ms-transform-origin: 20% 40%;
          -webkit-transform-origin: 20% 40%;
          -ms-transform-origin: 20% 40%;
          transform-origin: 20% 40%;
        }
        .six{
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          -webkit-transform: rotateY(30deg);
          -ms-transform: rotateY(30deg);
          transform: rotateY(30deg);
          border-radius: 5px;
          position: relative;
          top: 90px;
          left: 60px;
          box-shadow:0px 2px 0px rgba(0,0,0,0.1);
          height: 129px;
          overflow: hidden;
          width: 200px;
      
        }
        .seven{
          margin: 10px;
          width: 220px;  
          transform: rotateY(140deg);
          border-radius: 5px;
          position: relative;
          top: 50px;
          left: 50px;
          box-shadow:0px 2px 0px rgba(0,0,0,0.1);
          height: 140px;
          overflow: hidden;
          transform-origin: 20% 40%;
        }
        .eight{
          margin: 10px;
          width: 240px;
          -webkit-transform: rotateY(-30deg);
          -ms-transform: rotateY(-30deg);
          -webkit-transform: rotateY(-30deg);
          -ms-transform: rotateY(-30deg);
          -webkit-transform: rotateY(-220deg);
          -ms-transform: rotateY(-220deg);
          -webkit-transform: rotateY(-220deg);
          -ms-transform: rotateY(-220deg);
          transform: rotateY(-220deg);
          border-radius: 10px;
          position: relative;
          top: 10px;
          right: 200px;
          box-shadow:0px 2px 0px rgba(0,0,0,0.1);
          height: 180px;
          overflow: hidden;
        }

      }

      @media screen and (max-width:767px)
      {     
    
  }



@media screen and (max-width:979px)
{

  #section {
    display: block;
    margin: auto;
    top: 0px !important;
    position: relative;
    z-index: auto;
}
.gal_container h1 {
  font-weight: 700;
  font-size: 32px;
}
  .gal_container {
    background: #eeeeee;
}
.galImage {
  width: 50%;
  flex-basis: 50%;
  padding: 10px;
  height: 130px;
    overflow: hidden;
    position: relative;
}
.row1 {
  flex-wrap: wrap;
  padding: 20px;
}
div#section {
  text-align: center;
  padding: 0px 20px;
}
}



     .galleryView {
  

        .galImage img {
          width: 100%;
          cursor:pointer;
      }
      .row1 {
        display: flex;
        width: 100%;
        justify-content: space-around;
        perspective: 1000px;
    }
  



        #heroTitle {
            margin-top:30vh;
            background-image: linear-gradient(45deg, #d5e9f8, #72bff5);
          
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            margin-top: 60px;
            color: white;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 9px;
          }
          
          #showCaseBackgroundLine{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
            width:90vw;
             border: 0;
              height: 3px;
              border-radius: 50%;
              background-image: linear-gradient(to right, rgb(143 205 185 / 0%), rgb(170 231 244 / 75%), rgba(0, 0, 0, 0));
          }
          
          .imageContainer {
            position:relative;
            display: flex;
            justify-content: center;
            perspective: 600px;
          }
          
          .image {
            box-shadow: 3px 3px 12px #141414, 0 0 200px rgba(0,0,0,0.9) inset;
            width: 200px;
            transition: all 0.72s;
            cursor: pointer;
            border-radius: 6px;
            width: 270px;
            height: 180px;
            background-size: cover;
            background-position: center;
            position:relative;
            perspective:500px;
          }
          .a {
            transform: rotateY(42deg);
            background-image: url(https://img5.goodfon.com/wallpaper/nbig/7/e3/stefan-koidl-by-stefan-koidl-chernobyl-horror-story-mashina.jpg);
          }
          .b {
            transform: translateZ(-70px);
            background-image: url(https://cdnb.artstation.com/p/assets/images/images/010/874/585/large/stefan-koidl-tallandskinny.jpg?1526674661);
          }
          .c {
            transform: rotateY(-42deg);
            background-image: url(https://cdnb.artstation.com/p/assets/images/images/012/158/221/large/stefan-koidl-intruders5.jpg);
          }
          
          .activeA {
            box-shadow: 3px 3px 12px #141414;
            transform: translateX(100%) translateZ(200px);
            z-index: 2;
            border: 3px solid white;
            border-radius: 12px;
          }
          
          .activeB {
            box-shadow: 3px 3px 12px #141414;
            transform: translateZ(200px);
            z-index: 2;
            border: 3px solid white;
            border-radius: 12px;
          }
          
          .activeC {
            box-shadow: 3px 3px 12px #141414;
            transform: translateX(-100%) translateZ(200px);
            z-index: 2;
            border: 3px solid white;
            border-radius: 12px;
          }
          
          #img-1{
            height: 140px;
            width: 195px;
            box-shadow: 3px 3px 10px;
            margin-left: 290px;
         }
         #img-2{
          height: 140px;
          width: 205px;
          box-shadow: 3px 3px 10px;
          margin-left: 50px;
      }
         }
         #img-3{
          height: 200px;
          width: 320px;
           
            box-shadow: 3px 3px 10px;
            margin-top: -50px;
         }
         #img-4{
          height: 190px;
          width: 300px;
          box-shadow: 3px 3px 10px;
          margin-top: -40px;
          margin-left: 40px;
         }
         #img-5{
          height: 200px;
          width: 300px;
          box-shadow: 3px 3px 10px;
         }
         #img-6{
          height: 130px;
          width: 180px;
          box-shadow: 3px 3px 10px;
          margin-top: 100px;
         }
         #img-7{
          height: 130px;
    width: 180px;
    box-shadow: 3px 3px 10px;
    margin-top: 80px;
    margin-left: 40px;
         }
         #img-8{
          height: 160px;
    width: 220px;
    box-shadow: 3px 3px 10px;
    margin-top: -100px;
    margin-left: 20px;
         }

    }
    .galleryImage
    {
      clear:both;
    }
    .galleryImage svg
    {
      width:100%!important;
    }


    .galleryImage {
      position: relative;
  }

    @media(max-width: 767px) {
    .galleryImage svg {
      height: 200px;
  }
}
@media screen and (min-width:1279px)
{
 .gal_container  div#section p {
    font-size: 15px !important;
    position: relative;
}
}



`
