import styled from 'styled-components'

const Styless = styled.div`
 


.post-list-item .event-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 35%;
  background: #fff;
  color: #999;
  overflow: hidden;
  box-shadow: 0 0 12px -1px rgb(15 15 15 / 10%);
  border-radius: 10px;
  transition: all .2s;
}
.post-list-item .event-item-thumbnail {
position: absolute;
width: 35%;
left: 0;
top: 0;
height: 100%;
padding-top: 0;
border-radius: 10px 0 0 10px;
backface-visibility: hidden;
}
.post-list-item .event-item-thumbnail .placeholder-thumbnail-bg {
position: absolute;
width: 100%;
left: 0;
top: 0;
height: 100%;
background-size: cover;
background-position: center;
transition: all .2s;
overflow: hidden;
}
.post-list-item .event-item-thumbnail img {
width:auto;
max-width: none !important;
height: 100% !important;

left: 50%;
transform: translateX(-50%);

}

span.btn-text {
width: 100%;
display: block;
border-top: 1px solid #cecece;
border-bottom: 1px solid #cecece;
padding: 6px 0;
font-size: 15px;
}
.text-center-button {
text-align: center;
margin: 15px 0;
}
.text-center-button a {
font-size: 13px;
color: #ffffff;
background: #e41a1a;
display: inline-block;
text-align: center;
text-transform: uppercase;
font-weight: 500;
padding: 11px 25px;
border-radius: 5px;
position: relative;
}
.dDmFWc .event-page {
background: #f6f6f6;
}

.post-list-item .event-item:hover {
box-shadow: 0 0 30px 0px rgb(15 15 15 / 15%);
}

#content img {
max-width: 100%;
height: auto;
}
.event-item-thumbnail img {
width: 100%;
position: absolute;
top: 0;
left: 0;
transition: all .2s;
}
.post-list-item .event-date-block {
position: absolute;
top: 10px;
left: 10px;
right: auto;
}
.event-date-block {
position: absolute;
top: 10px;
right: 10px;
padding: 8px 12px;
width: 55px;
height: 55px;
line-height: 1.1;
color: #fff;
background: #222;
background: rgba(0,0,0,0.5);
border-radius: 100px;
font-size: 11px;
text-transform: uppercase;
}
.event-date-block .day {
font-size: 24px;
}
.post-list-item .event-item-content {
padding: 15px 20px 15px;
}
.post-list-item .small-meta {
font-size: 14px;
text-transform: none;
margin-bottom: 7px;
}
.small-meta {
font-size: 11px;
text-transform: uppercase;
color: #aaa;
color: rgba(153,153,153,.8);
margin-bottom: 10px;
}
.post-list-item .small-meta >span:not(:last-child) {
margin-right: 12px;
}
.post-list-item .event-excerpt {
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
margin-bottom: 5px;
}
.social-share-hover {
white-space: nowrap;
margin-left: -100%;
z-index: 5;
position: relative;
height: 40px;
}
.social-share-hover .hover-share-label {
display: inline-block;
text-transform: uppercase;
}
.event-button {
background: #ed3131 !important;
color: #fff !important;
font-size: 13px;
font-weight: 600;
}
h4.event-title.font-2 {
font-size: 18px;
}
.event-excerpt p {
color: #333;
font-family: 'Poppins';
font-size: 14px !important;
margin:0px;
}

.event-title.font-2
{
overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}



`
export default Styless
