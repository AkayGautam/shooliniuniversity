import Head from 'next/head'
import React, { useEffect } from "react";

export default function index() {

  useEffect(() => {
    
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
  
  }, [])
  


  return (
    <>
      <Head>
        <title>Buddy Referrals</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="assets/landing/buddy/images/icons/favicon.ico"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/landing/buddy/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/landing/buddy/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/landing/buddy/fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/landing/buddy/vendor/animate/animate.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/landing/buddy/vendor/css-hamburgers/hamburgers.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/landing/buddy/vendor/animsition/css/animsition.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/landing/buddy/vendor/select2/select2.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/landing/buddy/vendor/daterangepicker/daterangepicker.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/landing/buddy/css/util.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/landing/buddy/css/main.css"
        />

        
<link id="lnkWebFonts" rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans" />

<link rel="stylesheet" type="text/css" href="https://dwmbily8o2kmd.cloudfront.net/common/css/lsq.form.v2.min.css" />


        <script src="assets/landing/buddy/vendor/jquery/jquery-3.2.1.min.js"></script>
        <script src="assets/landing/buddy/vendor/animsition/assets/landing/buddy/js/animsition.min.js"></script>
        <script src="assets/landing/buddy/vendor/bootstrap/assets/landing/buddy/js/popper.js"></script>
        <script src="assets/landing/buddy/vendor/bootstrap/assets/landing/buddy/js/bootstrap.min.js"></script>
        <script src="assets/landing/buddy/vendor/select2/select2.min.js"></script>

        <script src="assets/landing/buddy/vendor/daterangepicker/moment.min.js"></script>
        <script src="assets/landing/buddy/vendor/daterangepicker/daterangepicker.js"></script>
        <script src="assets/landing/buddy/vendor/countdowntime/countdowntime.js"></script>
        <script src="assets/landing/buddy/js/main.js"></script>
                                                  

      </Head>

      

      <div className="container-contact100">
        <div className="wrap-contact100">
          <form
            className="contact100-form validate-form"
            style={{
              padding: '30px 30px 30px 30px',
            }}
            action="buddy.php"
            method="post"
          >
            <h2
              style={{
                marginBottom: '20px',
              }}
            >
              <center>
                <b>
                  <i className="fa fa-university" aria-hidden="true"></i> BUDDY{' '}
                  <color
                    style={{
                      color: '#ff1a1a',
                    }}
                  >
                    REFERRAL
                  </color>
                </b>
              </center>
            </h2>
           

           
        <div class="npf_wgts" data-height="550px" data-w="b1dc6be42a7106098724e7237469f63e"></div> 

           
            
{/* <iframe name="leadsquared_landing_page_frame" src="http://select.shooliniuniversity.com/Buddy-Referral?ignoremxtracking=mxtrue" width="500" height="650" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
             */}


            {/* <div name="leadsquared_landing_page_frame" src="http://select.shooliniuniversity.com/Buddy-Referral?ignoremxtracking=mxtrue" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></div> */}
            
          </form>

          <div
            className="contact100-more flex-col-c-m"
            style={{
              backgroundImage: 'url("assets/landing/buddy/images/bg-05a.jpg")',
            }}
          ></div>
        </div>
      </div>


    </>
  )
}
