import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Componentdidmount from "../component/componentdidmount";
import Head from "next/head";
import Link from "next/link";
import NextNprogress from "nextjs-progressbar";

function index() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  function goLearn() {
    $("html, body").animate(
      {
        scrollTop: $("#con3").offset().top,
      },
      1000
    );
  }

  function changeName(e) {
    setName(e.currentTarget.value);
  }

  function changeEmail(e) {
    setEmail(e.currentTarget.value);
  }

  function changeMessage(e) {
    setMessage(e.currentTarget.value);
  }

  function sendMessage() {
    if (!name) {
      $(".txtname").css("border", "1px solid red");
    } else {
      $(".txtname").css("border", "1px solid transparent");
    }
    if (!email) {
      $(".txtemail").css("border", "1px solid red");
    } else {
      $(".txtemail").css("border", "1px solid transparent");
    }
    if (!message) {
      $(".txtmessage").css("border", "1px solid red");
    } else {
      $(".txtmessage").css("border", "1px solid transparent");
    }
  }

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
      <div className="container-fluid h-100 conMain" style={{ position: "relative" }}>
        <img src="Image/conbg.png" className="imgCon d-none"></img>
        <img src="Image/leaves.png" className="img-fluid imgLeave"></img>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <p className="p1">
                Nature's Power,<br></br> in a pill
              </p>
              <p className="p2">
                Discover the numerous health benefits of Virgin Coconut oil made
                available in easy-to-take pills. Adapted to the modern lifestyle
                for stronger bodies and healthy society.
              </p>
            
              <Link href="/about">
                <button className="btnLearn">LEARN MORE</button>
              </Link>
            </div>
            <div className="col-lg-6" style={{ position: "relative" }}>
              <img src="Image/box.png" className="img-fluid"></img>
              <img
                src="Image/Capsules.png"
                className="img-fluid imgCapsule d-none"
              ></img>
              <img
                src="Image/coconut.png"
                className="img-fluid imgCoconut"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid con2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="pCon2">Why get Virgin Coconut Oil</p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col">
              <img
                src="Image/fire.svg"
                className="img-fluid mx-auto d-flex"
                style={{ width: "60px" }}
              ></img>
              <p className="pImage">
                Burns harmful <br></br> abdominal fats
              </p>
            </div>
            <div className="col">
              <img
                src="Image/thunder.svg"
                className="img-fluid mx-auto d-flex"
                style={{ width: "60px" }}
              ></img>
              <p className="pImage" style={{ marginTop: "40px" }}>
                Quick source <br></br> of energy
              </p>
            </div>
            <div className="col">
              <img
                src="Image/brain.svg"
                className="img-fluid mx-auto d-flex"
                style={{ width: "60px" }}
              ></img>
              <p className="pImage" style={{ marginTop: "30px" }}>
                Imporoves<br></br> brain function
              </p>
            </div>
            <div className="col">
              <img
                src="Image/sparkle.svg"
                className="img-fluid mx-auto d-flex"
                style={{ width: "60px" }}
              ></img>
              <p className="pImage" style={{ marginTop: "30px" }}>
                Improves skin health<br></br> and eyesight
              </p>
            </div>
            <div className="col">
              <img
                src="Image/stress.svg"
                className="img-fluid mx-auto d-flex"
                style={{ width: "60px" }}
              ></img>
              <p className="pImage" style={{ marginTop: "40px" }}>
                Helps reduce stress <br></br> and depression
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col">
              <img
                src="Image/leftleaf.png"
                className="img-fluid imgLeafleft"
              ></img>
            </div>
            <div className="col">
              <img
                src="Image/strength.svg"
                className="mx-auto d-flex"
                style={{ width: "60px" }}
              ></img>
              <p className="pImage" style={{ marginTop: "30px" }}>
                Strengthens<br></br>immune system
              </p>
            </div>
            <div className="col">
              <img
                src="Image/heart.svg"
                className="img-fluid mx-auto d-flex"
                style={{ width: "60px" }}
              ></img>
              <p className="pImage" style={{ marginTop: "44px" }}>
                Improves<br></br>heart health
              </p>
            </div>
            <div className="col">
              <img
                src="Image/outline.svg"
                className="img-fluid mx-auto d-flex"
                style={{ width: "35px" }}
              ></img>
              <p className="pImage" style={{ marginTop: "30px" }}>
                Strengthens body<br></br>against Cancel Cells
              </p>
            </div>
            <div className="col">
              <img src="Image/rightleaf.png" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="con3" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="Image/groupbox.png" className="img-fluid"></img>
            </div>
            <div className="col-lg-6" style={{ paddingLeft: "40px" }}>
              <p className="pCon3">Virgin Coconut Oil</p>
              <p className="pCon3Sub">
                Our Virgin Coconut Oil supplements are easier to take than
                taking it by the spoon and they are a rich source of healthy
                Medium Chain Triglycerides, Monolaurin and have the unique
                ability to boost Ketones while providing Lactones.
              </p>
              <Link href="/shop">
                <button className="btnLearn">PRICING</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ marginTop: "140px", backgroundColor: "#FAF9F6" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" style={{ position: "relative" }}>
              <img
                src="Image/leftleaf.png"
                className="img-fluid imgCon3left"
              ></img>
              <p className="pCon4">Get in touch!</p>
              <div className="form-inline">
                <img src="Image/hotel.png"></img>
                <p className="pInfo">915 40th Ave Bettendorf, IA 52722</p>
              </div>
              <div className="form-inline">
                <img src="Image/telephone.png"></img>
                <p className="pInfo">
                  563-386-1999<br></br>563-340-3661
                </p>
              </div>
              <div className="form-inline">
                <img src="Image/paper-plane.png"></img>
                <p className="pInfo">VCOsupplement@hotmail.com</p>
              </div>
            </div>
            <div className="col-lg-6" style={{ position: "relative" }}>
              <img
                src="Image/rightleaf.png"
                className="img-fluid imgCon3"
              ></img>
              <input
                type="text"
                className="txtInfo txtname"
                placeholder="name"
                value={name}
                onChange={changeName}
              ></input>
              <input
                type="text"
                className="txtInfo txtemail"
                placeholder="email"
                value={email}
                onChange={changeEmail}
              ></input>
              <textarea
                id="w3review"
                className="w3review txtmessage"
                rows="6"
                cols="50"
                placeholder="message"
                value={message}
                onChange={changeMessage}
              ></textarea>
              <button className="btnSubmit" onClick={sendMessage}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ marginTop: "170px" }}>
        <Footer></Footer>
      </div>
    </>
  );
}

export default index;
