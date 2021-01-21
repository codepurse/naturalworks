import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Componentdidmount from "../component/componentdidmount";
import Head from "next/head";
import Router, { useRouter } from "next/router";

function about() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Componentdidmount></Componentdidmount>
      <div className="container-fluid h-100">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-12 text-center">
              <p className="pAbout">MISSION</p>
              <p className="pAboutSub">
                Our Virgin Coconut Oil supplements are easier to take than
                taking it by the spoon and they are a rich source of healthy
                Medium Chain Triglycerides, Monolaurin and have the unique
                ability to boost Ketones while providing Lactones.
              </p>
              <p className="pAbout" style = {{marginTop: "15px"}}>ABOUT US</p>
              <p className="pAboutSub">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
