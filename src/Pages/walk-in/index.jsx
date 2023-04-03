import React, { Component, Suspense, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbBox from "../../components/common/Breadcrumb";
import Head from "next/head";

const WalkIn = () => {

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  }, [])
  

  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Head>
        <title>Walkin | Shoolini University</title>
      </Head>
      <Header />
      <BreadcrumbBox title="Walk In" />

      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="bokkingForm mt-5">
            <div class="npf_wgts" data-height="400px" data-w="785eaab4f9699619c5c7abfe9d08f0fc"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Suspense>
  );
};

export default WalkIn;
