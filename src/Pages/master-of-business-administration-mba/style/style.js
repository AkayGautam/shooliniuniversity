import styled from 'styled-components'
import { colors } from '../../../components/common/elements/elements'

const Styless = styled.div`


section {
    font-family: CircularStd;
    background: #f5f5f7;
    padding:40px 0px;
}

section#shooliniMBA {
    background: url(../../assets/images/heroimage.jpg);
    background-size: 100%;
}


.container {
    max-width: 1140px !important;
}

p {
    font-family: 'TT Norms';
    line-height: 1.8;
}

.navbar .nav-item {
    padding: 10px 0px;
}

.navbar .nav-link {
    font-size: 15px;
    margin-left: 30px;
}

.fa-bars {
    color: #fff;
    font-size: 30px;
}

.bg-red {
    background: linear-gradient(to right, #ff2a3c 0%, #ff0085 100%);
}
h1, h2, h3, h4, h5{
    font-family: CircularStd !important;
}
/* tabs */

.demo {
    min-height: 280px;
}

.tab-content {
    padding: 10px;
}

ul.nav.nav-tabs {
    justify-content: space-between;
}

.tablistItems li a {
    color: #333;
    padding: 25px;
    display: inline-block;
    transition: all 0.3s ease 0s;
}

.tablistItems {
    background: #fff;
}

a.applyBtn {
    background: #0044cd !important;
    color: #fff !important;
}

.dataBrdcrmb ul {
    display: inline-flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
}

.inRow {
    display: flex;
    align-items: center;
    text-align: left;
}
.placeVal {
    padding-left: 12px;
}
#specialization .placeVal h3 {
    font-size: 17px;
    font-weight:500;
}

@media (min-width: 980px) {

    .fixedCHildNav {
        transform: translateY(-80px);
        position: fixed;
        top: 81px;
        z-index: 999;
        left: 18%;
        transition : all 0.3s ease-out;
    }
}


@media (max-width: 767px) {

    .order-xs-2 {
        order: 2;
    }

    .order-xs-1 {
        order: 1;
    }
.order-xs-3
{
    order : 3;
}
.order-xs-4
{
    order:4;
}
.order-xs-5
{
    order:5;
    margin-top:40px;
}
.order-xs-6
{
    order:6;
    margin-top:40px;
}
    .img-responsive {
        height: auto !important;
        min-height: auto !important;
    }

    #specialization .col-3 {
        flex: 0 0 auto;
        width: 50%;
    }
    .nav-tabs.nav-tabs-dropdown,
    .nav-tabs-dropdown {
        border: 1px solid #dddddd;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
    }

    .nav-tabs.nav-tabs-dropdown.open a,
    .nav-tabs-dropdown.open a {
        position: relative;
        display: block;
    }

    .nav-tabs.nav-tabs-dropdown.open>li.active>a,
    .nav-tabs-dropdown.open>li.active>a {
        background-color: #eeeeee;
    }

    .nav-tabs.nav-tabs-dropdown li,
    .nav-tabs-dropdown li {
        display: block;
        padding: 0;
        vertical-align: bottom;
    }

    .nav-tabs.nav-tabs-dropdown>li>a,
    .nav-tabs-dropdown>li>a {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        border-color: transparent;
    }

    .nav-tabs.nav-tabs-dropdown>li>a:focus,
    .nav-tabs-dropdown>li>a:focus,
    .nav-tabs.nav-tabs-dropdown>li>a:hover,
    .nav-tabs-dropdown>li>a:hover,
    .nav-tabs.nav-tabs-dropdown>li>a:active,
    .nav-tabs-dropdown>li>a:active {
        border-color: transparent;
    }

    .nav-tabs.nav-tabs-dropdown>li.active>a,
    .nav-tabs-dropdown>li.active>a {
        display: block;
        border-color: transparent;
        position: relative;
        z-index: 1;
        background: #fff;
    }

    .nav-tabs.nav-tabs-dropdown>li.active>a:focus,
    .nav-tabs-dropdown>li.active>a:focus,
    .nav-tabs.nav-tabs-dropdown>li.active>a:hover,
    .nav-tabs-dropdown>li.active>a:hover,
    .nav-tabs.nav-tabs-dropdown>li.active>a:active,
    .nav-tabs-dropdown>li.active>a:active {
        border-color: transparent;
    }
}

.leftCatd h1 {
    font-size: 58px;
    font-weight: 800;
    color: #000;
    line-height: 1.5;
}

.leftCatd h1 span {
    position: relative;
}

.leftCatd h1 span:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -11px;
    height: 4px;
    width: 100%;
    background: linear-gradient(to right,#f63030 0%,#e33535 100%);
}

.leftCatd h1 strong {
    text-transform: uppercase;
    background: linear-gradient(to right,#f63030 0%,#e33535 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.noretype {
    display: inline-flex;
    justify-content: space-evenly;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    align-items: center;
    margin: 5px 0px;
}

#shooliniMBA .noretype p {
    margin: 0;
    background: linear-gradient(to right,#f63030 0%,#e33535 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 32px !important;
    padding: 10px 10px;
    text-align: left;
    text-transform: uppercase;
    line-height: 1.2!important;
    font-weight: 700;
}

.border-right-1 {
    border-right: 1px solid #c2c2c2;
}
.accordion-body {
    font-size: 14px;
    padding: 10px 20px;
    font-family: 'Poppins';
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%) !important;
    margin-bottom: 20px;
}
.allLogos {
    display: block !important;
}
.allLogoss {
    display: flex !important;
}
table td {
    font-family: 'Poppins';
}
.acordianFaq button {
    background: #ffffff;
    border: 0;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    border-bottom: 1px solid #cecece;
}
.accordion-title {
    font-size: 18px !important;
    font-weight: 700;
    padding: 10px 20px !important;
    display: block;
}
.innerBody {
    background: #f5f5f7;
}
.btn-grad-red {
    display: block;
    text-align: left;
    margin:10px 0;
}

.btn-grad-red a, .btn-grad-red button  {
    display: block;
    max-width: 440px;
    background: linear-gradient(to right,#f63030 0%,#e33535 100%);
    color: #fff;
    padding: 12px 15px;
    text-align: center;
    font-size: 22px;
    box-shadow: 3px 2px 12px 2px rgb(0 0 0 / 20%);
    border-radius: 5px;
}
.btn-grad-red button
{
    width:100%;
    border:0;
    max-width:100% !important;
}
.placeVal h3 strong {
    font-size: 36px;
    font-weight: 900;
    font-family: 'CircularStd';
    color: #000;
}

.placeVal h3 {
    font-weight: 300;
    font-family: poppins;
    font-size: 24px;
    color: #000;
}

.dataBrdcrmb ul li {
    display: inline-flex;
    font-size: 18px;
    color: #5e5e5e;

}

.dataBrdcrmb ul li {
    font-family: 'CircularStd';
    font-weight: 700;
}

.dataBrdcrmb ul li {
    font-weight: 400;
    font-family: poppins;
}

.dataBrdcrmb img {
    width: 28px;
    margin-right: 8px;
}

.dataBrdcrmb {
    margin: 26px 0;
}

.dataBrdcrmb li strong {
    display: inline-block;
    margin-left: 5px;
}

.pagetitle h2 {
    font-weight: 900;
    font-size: 40px;
    position: relative;
}

.pagetitle h2 span:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 2px;
    width: 100%;
    background: linear-gradient(to right,#f63030 0%,#e33535 100%);
}

.pagetitle h2 span {
    position: relative;
}
.sb_text p {
    font-size: 14px !important;
    line-height: 1.5 !important;
}
.card-box {
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    height: 100%;
}
.sb_logo img {
    max-width: 80px !important;
}
.sb_logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.sb_text h4 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;  
}
.card-box h3 {
    margin: 0;
    font-family: 'CircularStd';
    font-weight: 900;
    margin-bottom: 10px;
    font-size: 23px;
    color: #000;
}

h3.title-red {
    background: linear-gradient(to right,#f63030 0%,#e33535 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-red {
    background: linear-gradient(to right,#f63030 0%,#e33535 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.img-responsive {
    max-width: 100%;
}

.card-box-dark {
    background: #1d1d1f;
    ;
}

.voices-text {
    border-radius: 0 30px 30px 0px;
}

.text-18 {
    font-family: 'CircularStd';
    font-size: 18px;
}

.logo-file {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 5px;
}

.courselist ul li {
    display: block;
}

.courselist ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.courselist ul li {
    display: block;
    flex-basis: 50%;
}

.courselist ul li a {
    display: inline-flex;
    padding: 5px 10px;
    width: 100%;
    font-size: 15px;
    height: 100%;
    align-items: center;
    position: relative;
    color: #000;
}

.courselist ul li a:after {
    content: "";
    background: url(../../assets/images/arrow.png);
    height: 13px;
    width: 12px;
    background-size: 100%;
    left: -12px;
    position: absolute;
}

.courselist ul li a:hover {
    background: linear-gradient(to right,#f63030 0%,#e33535 100%);
    color: #fff;
    transition: all 0.3s ease 0s;
}

.courselist ul li a:hover:after {
    background: url(../../assets/images/arrow-white.png);
}

ul.nav.tablistItems a:hover {
    background: linear-gradient(to right,#f63030 0%,#e33535 100%)
    color: #fff;
}

footer.footer1 {
    position: relative;
    background: rgb(255, 255, 255) !important;
}

footer.footer1 .bg-reds {
    background: linear-gradient(to right, #ff2a3c 0%, #ff0085 100%);
}

footer.footer1 .footerAbout {
    padding: 100px 0px;
}

footer.footer1 ul.social {
    display: flex;
    justify-content: space-evenly;
}

footer ul li {
    list-style: none;
    display: block;
}

footer.footer1 ul.social li a {
    text-align: center;
    position: relative;
}

footer.footer1 ul.social li a i {
    font-size: 14px;
    color: rgb(255, 255, 255);
    width: 32px;
    height: 32px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: transparent;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
}

footer.footer1 h6 {
    color: rgb(51, 51, 51) !important;
}

footer ul {
    padding-left: 0px;
}

footer ul li {
    list-style: none;
    display: block;
}

footer.footer1 ul li a,
footer.footer1 h6 {
    color: rgb(51, 51, 51) !important;
    font-size: 14px;
    font-family: poppins;
}

h6.ftr_tgl {
    font-size: 19px !important;
    font-weight: 700;
}

.rightCard h1 {
    font-size: 200px;
    background: url(../../assets/images/bg.jpg);
    background-attachment: fixed;
    background-size: 60%;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: 900;

    background-position: right;
}

.card-box p {
    font-family: 'CircularStd';
}


#scroll {
    position:fixed;
    right:10px;
    bottom:10px;
    cursor:pointer;
    width:50px;
    height:50px;
    background: linear-gradient(to right,#f63030 0%,#e33535 100%);
    text-indent:-9999px;
    display:none;
    -webkit-border-radius:60px;
    -moz-border-radius:60px;
    border-radius:60px
}
#scroll span {
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-8px;
    margin-top:-12px;
    height:0;
    width:0;
    border:8px solid transparent;
    border-bottom-color:#ffffff;
}
#scroll:hover {
    background-color:linear-gradient(to right,#f63030 0%,#e33535 100%);
    opacity:1;filter:"alpha(opacity=100)";
    -ms-filter:"alpha(opacity=100)";
}
.sidebar-icons {
    position: fixed;
    right: 0;
    top: 30%;
    z-index: 99;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
}
.sidebar-icons button, .sidebar-icons a {
    flex-basis: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    flex-direction: column;
    color: #000;
    font-family: poppins;
    padding:10px 10px;
    text-align: center;
    line-height: 1.2;
    font-size: 14px;
    border: 0;
}
.sidebar-icons  img {
    width: 85px;
    padding: 15px;
}
.sidebar-icons  small {
    font-size: 50%;
}
.sidebar-icons button:hover {
    background: #f6f6f6;
}
a.goLive {
    color: #333;
    font-size: 14px;
    line-height: 1.5;
}

button.btnView {
    border: 0;
    box-shadow: none !important;
    background: transparent;
}

.navbar-light .navbar-toggler {
    background: linear-gradient(to right,#f63030 0%,#e33535 100%);
}
.navbar-light .navbar-toggler-icon {
    left: -5px;
    top: -1px;
}

.voices-image {
    border-radius: 0px 30px 30px 0px;
    position: relative;
    overflow: hidden;
}


@media screen and (min-width:980px)
{
    .pl-md-0
    {
        padding-left:0px;
    }
    .pr-md-0
    {
        padding-right:0px;
    }
}


@media screen and (max-width:767px)
{
    .img-responsive {
        max-width: 100%;
        height: auto;
    }
    .w-100 {
        height: 100%;
    }
    .accordion-title {
        font-size: 16px !important;
        font-weight: 700;
        padding: 0 !important;
        display: block;
        border-bottom: 1px solid #cecece;
    }


    #mba_footer img.logo-footer {
        width: auto;
    }

    .acordianFaq button {
        background: #fff;
    }
    .tabItemData p {
        text-align: left;
    }

    .tabItemData > .pagetitle {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
    }

    .voices-image {
        border-radius: 0;
    }
   #faqs .pagetitle h2 {
        text-align: center;
    }

    .mb-xs-20
    {
        margin-bottom:40px;
    }

    section {
        padding: 20px 0px;
    }

    .tablistItems a {
        position: inherit !important;
    }
    .ugImage img {
        width: 100%;
    }

    section#shooliniMBA {
        margin-top: 0 !important;
    }
    .sidebar-icons {
        display: none;
    }
    #placements .col-3 {
        -ms-flex: 0 0 33%;
        flex: 0 0 35%;
        max-width: 33%;
    }

    .leftCatd > h1 {
        font-size: 28px;
    }
    .sidebar-icons a img {
        width: 50px;
        padding: 10px;
    }
    .sidebar-icons a {
        font-size: 12px;
    }
    .noretype, .rightCard, .applyBtn {
        display: none !important;
    }
    .leftCatd {
        width: 100%;
    }
    .placeVal h3 strong {
        font-size: 26px;
    }
    .placeVal h3 {
        font-size: 12px;
    }
    .tablistItems li {
        background: #f6f6f6;
        border: 1px solid #cecece;
        margin-bottom: 10px;
    }
    .tablistItems li a {
        font-family: poppins;
        text-align: center;
        font-weight: 300;
        font-size: 18px;
    }
    .tablistItems {
        background: transparent;
        display: block;
    }
    .pagetitle h2 {
        font-size: 19px;
        text-align: left;
    }
    .dataBrdcrmb ul {
        display: block;
        text-align: left;
    }
    .dataBrdcrmb ul li {
        display: block;
        font-size: 14px;
        color: #5e5e5e;
    }
    .order1{
        order: 1;
    }
    .order2{
        order: 2;
    }
    .card-box h3 {
        font-size: 19px;
    }
   #placements .col-3 {
        padding: 0 5px;
    }
    .courselist ul li a {
        font-size: 12px;
    }
   .container {
        padding-right: 15px !important;
        padding-left: 15px !important;
    }
    .sidebar-icons {
        top: 50%;
    }
    .voices-text {
        border-radius: 0;
    }
    img.w-70 {
        max-width:100% !important;
        height: auto;
    }
}

img.w-70 {
    max-width: 90%;
}

img.rotatebtn{
    transform: rotate(180deg);
    transition : all 0.3s ease-out;
}

.nullRotate img.rotatebtn{
    transform: rotate(0deg);
    transition : all 0.3s ease-out;
}

.btnView img, .nullRotate img 
{
    transition : all 0.3s ease-out;  
}
.start-header {
	opacity: 1;
	transform: translateY(0);
	padding:10px 0;
	box-shadow: 0 10px 30px 0 rgba(138, 155, 165, 0.15);
	-webkit-transition : all 0.3s ease-out;
	transition : all 0.3s ease-out;
}
.start-header.scroll-on {
	box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
	padding: 10px 0;
	-webkit-transition : all 0.3s ease-out;
	transition : all 0.3s ease-out;
}
.start-header.scroll-on .navbar-brand img{
	height: 40px;
	-webkit-transition : all 0.3s ease-out;
	transition : all 0.3s ease-out;
}
.navigation-wrap{
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1000;
	-webkit-transition : all 0.3s ease-out;
	transition : all 0.3s ease-out;
}
.navbar{
	padding: 0;
}
.navbar-brand img{
	height: 48px;
	width: auto;
	-webkit-transition : all 0.3s ease-out;
	transition : all 0.3s ease-out;
}
.navbar-toggler {
	float: right;
	border: none;
	padding-right: 0;
}
.navbar-toggler:active,
.navbar-toggler:focus {
	outline: none;
}
.navbar-light .navbar-toggler-icon {
	width: 24px;
	height: 17px;
	background-image: none;
	position: relative;
	border-bottom: 2px solid #fff;
    transition: all 300ms linear;
}
.navbar-light .navbar-toggler-icon:after, 
.navbar-light .navbar-toggler-icon:before{
	width: 24px;
	position: absolute;
	height: 1px;
	background-color: #fff;
	top: 0;
	left: 0;
	content: '';
	z-index: 2;
    transition: all 300ms linear;
}
.navbar-light .navbar-toggler-icon:after{
	top: 8px;
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
	transform: rotate(45deg);
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
	transform: translateY(8px) rotate(-45deg);
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
	border-color: transparent;
}
.nav-link{
	color: #000 !important;
	font-weight: 500;
    transition: all 200ms linear;
}
.nav-item:hover .nav-link{
	color: #8167a9 !important;
}
.nav-item.active .nav-link{
	color: #777 !important;
}
.nav-link {
	position: relative;
	padding: 5px 0 !important;
	display: inline-block;
}

.nav-item:hover:after{
	bottom: 0;
	opacity: 1;
}
.nav-item.active:hover:after{
	opacity: 0;
}
.nav-item{
	position: relative;
    transition: all 200ms linear;
}
.namedes {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    padding: 20px 22px;
}
.namedes h4, .namedes h5, .namedes p {
    margin: 0;
    text-align: right;
}
.namedes p {
    font-size: 14px;
}
/* #Primary style
================================================== */

.bg-light {
	background: linear-gradient(to right, #ff2a3c 0%, #ff0085 100%);
    transition: all 200ms linear;
}
.section {
    position: relative;
	width: 100%;
	display: block;
}
.full-height {
    height: 100vh;
}
.over-hide {
    overflow: hidden;
}
.absolute-center {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
  margin-top: 40px;
	transform: translateY(-50%);
	z-index: 20;
}
#switch,
#circle {
	cursor: pointer;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
} 
#switch {
	width: 60px;
	height: 8px;
	border: 2px solid #8167a9;
	border-radius: 27px;
	background: #000;
	position: relative;
	display: block;
	margin: 0 auto;
	text-align: center;
	opacity: 1;
	transform: translate(0);
    transition: all 300ms linear;
    transition-delay: 1900ms;
}
body.hero-anime #switch{
	opacity: 0;
	transform: translateY(40px);
    transition-delay: 1900ms;
}
#circle {
	position: absolute;
	top: -11px;
	left: -13px;
	width: 26px;
	height: 26px;
	border-radius: 50%;
	background: #000;
}
.switched {
	border-color: #000 !important;
	background: #8167a9 !important;
}
.switched #circle {
	left: 43px;
	box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
	background: #fff;
}
.nav-item .dropdown-menu {
    transform: translate3d(0, 10px, 0);
    visibility: hidden;
    opacity: 0;
	max-height: 0;
    display: block;
	padding: 0;
	margin: 0;
    transition: all 200ms linear;
}
.nav-item.show .dropdown-menu {
    opacity: 1;
    visibility: visible;
	max-height: 999px;
    transform: translate3d(0, 0px, 0);
}
.dropdown-menu {
	padding: 10px!important;
	margin: 0;
	font-size: 13px;
	letter-spacing: 1px;
	color: #212121;
	background-color: #fcfaff;
	border: none;
	border-radius: 3px;
	box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
    transition: all 200ms linear;
}
.dropdown-toggle::after {
	display: none;
}

.dropdown-item {
	padding: 3px 15px;
	color: #212121;
	border-radius: 2px;
    transition: all 200ms linear;
}
.dropdown-item:hover, 
.dropdown-item:focus {
	color: #fff;
	background-color: rgba(129,103,169,.6);
}

body.dark{
	color: #fff;
	background-color: #1f2029;
}
body.dark .navbar-brand img{
  filter: brightness(100%);
}


body.dark .start-header {
	box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
}
body.dark .start-header.scroll-on {
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
}
body.dark .nav-link{
	color: #fff !important;
}
body.dark .nav-item.active .nav-link{
	color: #999 !important;
}
body.dark .dropdown-menu {
	color: #fff;
	background-color: #1f2029;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
}

section#shooliniMBA {
    margin-top: 0px;
    padding-top: 20px !important;
}


/* #Media
================================================== */

@media (max-width: 767px) { 

    .tablistItems {
        display: none !important;
    }
    .xs-none
    {
        display:none;
    }

	.dropdown-toggle::after {
		position: absolute;
		display: block;
		top: 10px;
		left: -23px;
		width: 1px;
		height: 11px;
		content: "";
		border: none;
		background-color: #000;
		vertical-align: 0;
		transition: all 200ms linear;
	}
	.dropdown-toggle[aria-expanded="true"]::after{
		transform: rotate(90deg);
		opacity: 0;
	}
	.dropdown-menu {
		padding: 0 !important;
		background-color: transparent;
		box-shadow: none;
		transition: all 200ms linear;
	}
	.dropdown-toggle[aria-expanded="true"] + .dropdown-menu {
		margin-top: 10px !important;
		margin-bottom: 20px !important;
	}
	
}

.moreView button img {
    width: 70px;
}
.moreView {
    width: 100%;
    text-align: center;
}
.moreView button {
    border: 0;
    background: transparent;
}


  .bg-img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat
  }

  .pointer-events-none {
    pointer-events: none
  }


  .btn-cstm-light {
    color: #212841;
    background-color: #fff;
    border-color: #fff
  }

  .btn-cstm-light:hover {
    color: #212841;
    background-color: #ececec;
    border-color: #e6e6e6
  }

  .btn-cstm-light.focus,
  .btn-cstm-light:focus {
    box-shadow: 0 0 0 .2rem rgba(255, 255, 255, .5)
  }

  .btn-cstm-light.disabled,
  .btn-cstm-light:disabled {
    color: #212841;
    background-color: #fff;
    border-color: #fff
  }

  .btn-cstm-light:not(:disabled):not(.disabled).active,
  .btn-cstm-light:not(:disabled):not(.disabled):active,
  .show>.btn-cstm-light.dropdown-toggle {
    color: #212841;
    background-color: #e6e6e6;
    border-color: #dfdfdf
  }

  .btn-cstm-light:not(:disabled):not(.disabled).active:focus,
  .btn-cstm-light:not(:disabled):not(.disabled):active:focus,
  .show>.btn-cstm-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(255, 255, 255, .5)
  }

  .btn-cstm-dark {
    color: #fff;
    background-color: #28304e;
    border-color: #28304e
  }

  .btn-cstm-dark:hover {
    color: #fff;
    background-color: #1b2035;
    border-color: #171b2c
  }

  .btn-cstm-dark.focus,
  .btn-cstm-dark:focus {
    box-shadow: 0 0 0 .2rem rgba(40, 48, 78, .5)
  }

  .btn-cstm-dark.disabled,
  .btn-cstm-dark:disabled {
    color: #fff;
    background-color: #28304e;
    border-color: #28304e
  }

  .btn-cstm-dark:not(:disabled):not(.disabled).active,
  .btn-cstm-dark:not(:disabled):not(.disabled):active,
  .show>.btn-cstm-dark.dropdown-toggle {
    color: #fff;
    background-color: #171b2c;
    border-color: #121624
  }

  .btn-cstm-danger {
    color: #fff;
    background-color: #f2545b;
    border-color: #f2545b
  }

  .btn-cstm-danger:hover {
    color: #fff;
    background-color: #ef3039;
    border-color: #ee252e
  }

  .btn-cstm-danger.focus,
  .btn-cstm-danger:focus {
    box-shadow: 0 0 0 .2rem rgba(242, 84, 91, .5)
  }

  .btn-cstm-danger.disabled,
  .btn-cstm-danger:disabled {
    color: #fff;
    background-color: #f2545b;
    border-color: #f2545b
  }

  .btn-cstm-danger:not(:disabled):not(.disabled).active,
  .btn-cstm-danger:not(:disabled):not(.disabled):active,
  .show>.btn-cstm-danger.dropdown-toggle {
    color: #fff;
    background-color: #ee252e;
    border-color: #ed1922
  }

  .btn-cstm-danger:not(:disabled):not(.disabled).active:focus,
  .btn-cstm-danger:not(:disabled):not(.disabled):active:focus,
  .show>.btn-cstm-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(242, 84, 91, .5)
  }

  .btn-cstm-success {
    color: #fff;
    background-color: #0c9;
    border-color: #0c9
  }

  .btn-cstm-success:hover {
    color: #fff;
    background-color: #00a67c;
    border-color: #009973
  }

  .btn-cstm-success.focus,
  .btn-cstm-success:focus {
    box-shadow: 0 0 0 .2rem rgba(0, 204, 153, .5)
  }

  .btn-cstm-success.disabled,
  .btn-cstm-success:disabled {
    color: #fff;
    background-color: #0c9;
    border-color: #0c9
  }

  .btn-cstm-success:not(:disabled):not(.disabled).active,
  .btn-cstm-success:not(:disabled):not(.disabled):active,
  .show>.btn-cstm-success.dropdown-toggle {
    color: #fff;
    background-color: #009973;
    border-color: #008c69
  }

  .btn-cstm-success:not(:disabled):not(.disabled).active:focus,
  .btn-cstm-success:not(:disabled):not(.disabled):active:focus,
  .show>.btn-cstm-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(0, 204, 153, .5)
  }

  .btn-cstm-secondary {
    color: #fff;
    background-color: #95aac9;
    border-color: #95aac9
  }

  .btn-cstm-secondary:hover {
    color: #fff;
    background-color: #7c96bc;
    border-color: #738fb8
  }

  .btn-cstm-secondary.focus,
  .btn-cstm-secondary:focus {
    box-shadow: 0 0 0 .2rem rgba(149, 170, 201, .5)
  }

  .btn-cstm-secondary.disabled,
  .btn-cstm-secondary:disabled {
    color: #fff;
    background-color: #95aac9;
    border-color: #95aac9
  }

  .btn-cstm-secondary:not(:disabled):not(.disabled).active,
  .btn-cstm-secondary:not(:disabled):not(.disabled):active,
  .show>.btn-cstm-secondary.dropdown-toggle {
    color: #fff;
    background-color: #738fb8;
    border-color: #6b88b3
  }

  .btn-cstm-secondary:not(:disabled):not(.disabled).active:focus,
  .btn-cstm-secondary:not(:disabled):not(.disabled):active:focus,
  .show>.btn-cstm-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(149, 170, 201, .5)
  }



  .demo-panel {
    display: flex;
    overflow: hidden;
    height: 100vh
  }

  .demo-area {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center
  }

  .demo-sidebar {
    width: 320px;
    overflow: auto;
    height: 100vh;
    padding: 25px;
    background: #160f16
  }

  .modal-preview {
    opacity: .7;
    transition: all ease .2s;
    overflow: hidden
  }

  .modal-preview:hover {
    opacity: 1
  }

  .frame-window {
    flex: 1
  }


  .modal-name {
    color: #fff;
    text-decoration: none;
    position: absolute;
    z-index: 1;
    bottom: 10px;
    background: #000;
    padding: 4px 10px;
    font-size: 10px;
    left: 10px;
    border-radius: 29px;
    text-transform: uppercase;
    font-weight: 600
  }

  .open-frame,
  .open-frame:hover {
    text-decoration: none;
    position: relative;
    display: block;
    border: 2px solid rgba(255, 255, 255, .18);
    border-radius: .25rem;
    height: 181.89px;
    background: rgba(255, 255, 255, .09)
  }

  .font-worksans {
    font-family: 'Work Sans';
    font-weight: 600
  }

  .underline {
    color: inherit;
    border-bottom: 1px dashed currentColor;
    transition: all ease .2s
  }

  .underline:hover {
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid currentColor
  }

  @media (max-width:768px) {
    .frame-window {
      display: none
    }

    .demo-sidebar {
      flex: 1
    }
  }

  a.custom-anchor {
    height: 340px;
    display: block;
    background-size: 680px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease 3s
  }

  a.custom-anchor:hover {
    background-position: center 0
  }
 
`

export default Styless
