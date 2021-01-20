import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Head from "next/head";

function index() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="container-fluid h-100" style={{ position: "relative" }}>
        <img src="Image/conbg.png" className="imgCon"></img>
        <img src="Image/leaves.png" className="img-fluid imgLeave"></img>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <p className="p1">
                For a balanced,<br></br> healthy diet
              </p>
              <p className="p2">
                We encourage people to re-discover the Powers of Nature for its
                caring & healing capabilities, and how it can be adapted to the
                modern lifestyle for stronger bodies and a healthier society.
              </p>
              <div className="form-inline">
                <img
                  src="Image/icon1.png"
                  className="img-fluid"
                  style={{ width: "50px", marginRight: "20px" }}
                ></img>
                <img
                  src="Image/icon2.png"
                  className="img-fluid"
                  style={{ width: "50px" }}
                ></img>
              </div>
              <button className="btnLearn">LEARN MORE</button>
            </div>
            <div className="col-lg-6" style={{ position: "relative" }}>
              <img src="Image/box.png" className="img-fluid"></img>
              <img
                src="Image/Capsules.png"
                className="img-fluid imgCapsule"
              ></img>
              <img
                src="Image/coconut.png"
                className="img-fluid imgCoconut"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className = "container-fluid con2">
          <div className = "container">
              <div className = "row">
                  <div className = "col-lg-12">
                      <p className = "pCon2">Why get Virgin Coconut Oil</p>
                  </div>
              </div>
              <div className = "row" style = {{marginTop: "40px"}}>
                  <div className = "col">
                      <img src = "Image/fire.svg" className = "img-fluid mx-auto d-flex" style = {{width: "60px"}}></img>
                      <p className = "pImage">Burns harmful <br></br> abdominal fats</p>
                  </div>
                  <div className = "col">
                      <img src = "Image/thunder.svg" className = "img-fluid mx-auto d-flex" style = {{width: "60px"}}></img>
                      <p className = "pImage" style = {{marginTop: "40px"}}>Quick source <br></br> of energy</p>
                  </div>
                  <div className = "col">
                      <img src = "Image/brain.svg" className = "img-fluid mx-auto d-flex" style = {{width: "60px"}}></img>
                      <p className = "pImage" style = {{marginTop: "30px"}}>Imporoves<br></br> brain function</p>
                  </div>
                   <div className = "col">
                      <img src = "Image/sparkle.svg" className = "img-fluid mx-auto d-flex" style = {{width: "60px"}}></img>
                      <p className = "pImage" style = {{marginTop: "30px"}}>Improves skin health<br></br> and eyesight</p>
                  </div>
                  <div className = "col">
                      <img src = "Image/stress.svg" className = "img-fluid mx-auto d-flex" style = {{width: "60px"}}></img>
                      <p className = "pImage" style = {{marginTop: "40px"}}>Helps reduce stress <br></br> and depression</p>
                  </div>
              </div>
              <div className = "row" style = {{marginTop: "40px"}}>
                   <div className = "col">
                      
                  </div>
                  <div className = "col">
                  <img src = "Image/strength.svg" className = "img-fluid mx-auto d-flex" style = {{width: "60px"}}></img>
                      <p className = "pImage" style = {{marginTop: "30px"}}>Strengthens<br></br>immune system</p>
                  </div>
                  <div className = "col">
                  <img src = "Image/heart.svg" className = "img-fluid mx-auto d-flex" style = {{width: "60px"}}></img>
                      <p className = "pImage" style = {{marginTop: "44px"}}>Improves<br></br>heart health</p>
                  </div>
                  <div className = "col">
                  <img src = "Image/outline.svg" className = "img-fluid mx-auto d-flex" style = {{width: "35px"}}></img>
                      <p className = "pImage" style = {{marginTop: "30px"}}>Strengthens body<br></br>against Cancel Cells</p>
                  </div>
                  <div className = "col">

                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default index;
