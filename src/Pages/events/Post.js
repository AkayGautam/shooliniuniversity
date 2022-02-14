import React, { Component, useEffect, useState } from 'react';
import { useParams } from "react-router";
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
// const postsData = require("https://shooliniuniversity.com/eventAPI");
import { BreadcrumbBox } from '../../components/common/Breadcrumb';

import { Styles } from '../../components/styles/homepage';
 

const Post = () => {
 
  
    return (
        <>
         <Styles>
                {/* Main Wrapper */}
                <Header />
                <div className="main-wrapper about-page">

            

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Blog Detail" />

                    {/* About Area */}

                    <div className="container">
                        <div className="post-content-view p-5">
                            <h3> result </h3>
                        {/* <h1 className="title">{post?.title}</h1>
                        <content>{post?.content}</content> */}
                        </div>

                        </div>

                  

                </div>
                <Footer />
            </Styles>

        
       
       
      
        </>
      )

     

};

export default Post;
