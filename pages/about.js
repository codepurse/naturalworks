import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Componentdidmount from "../component/componentdidmount";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import NextNprogress from "nextjs-progressbar";
function about() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Componentdidmount></Componentdidmount>
       <NextNprogress
        color="#298125"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <div className="container-fluid h-100 conMain" style = {{position: "relative"}}>
       
      
  
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-12 text-center" style = {{position: "relative"}}>
            <img src = "Image/leftleaf.png" className = "img-fluid imgLeafabout2"></img>
            <img src = "Image/cocoicon.png" className = "img-fluid imgLeafabout1"></img>
              <p className="pAbout">MISSION</p>
              <p className="pAboutSub">
                Greenstrong Inc. (GSI) was founded in March 2018 to create and market responsible & effective products that cater to the health and personal care needs of consumers.
              </p>
              <p className="pAboutSub">We believe in the power of nature. The Philippines is blessed with a great success and abudnance of greenery, wherein plants (whether as a whole or in parts - roots, bark, leaves, seeds & fruis, or their extracts) have superior ability to provide prophylactic and/or healing properties as a better alternative to synthetically produced products. Natural works, indeed.</p>
              <p className="pAbout" style = {{marginTop: "15px"}}>ABOUT US</p>
              <p className="pAboutSub">
              The health of consumers in our utmost priority. To promote appreciation of natural health alternatives by those with the modern lifestyle, we aim to delight and create usage convenience.
              </p>
              <p className="pAboutSub">
               With Philippine Virgin Coconut Oil acknowledged as the best in the world, we aim to continue to produce world-class quality natural products at world-class quality standards. Through our added voice, we aim  to support the economic uplift of the Filipino local coconut farmers and promote to the world the amazing properties of Virgin Coconut Oil.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default about;
