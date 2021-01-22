import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Componentdidmount from "../component/componentdidmount";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import NextNprogress from "nextjs-progressbar";

function shop() {
  const router = useRouter();
  function add60(e) {
    $(".box2Shop").hide();
    $(".box1Shop").show();
    $(".box1Shop").addClass("animate__animated animate__flipInY animate__fast");
    $(".btnCapsule").css("background-color", "transparent");
    $(".btnCapsule").css("color", "#298125");
    $(e.currentTarget).css("background-color", " #298125");
    $(e.currentTarget).css("color", "white");
  }
  function add10(e) {
    $(".box1Shop").hide();
    $(".box2Shop").show();
    $(".box2Shop").addClass("animate__animated animate__flipInY animate__fast");
    $(".btnCapsule").css("background-color", "transparent");
    $(".btnCapsule").css("color", "#298125");
    $(e.currentTarget).css("background-color", " #298125");
    $(e.currentTarget).css("color", "white");
  }

  function addCart() {
    router.push("/cart");
  }

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <NextNprogress
        color="#298125"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <div className="container-fluid h-100" style={{ position: "relative" }}>
        <img src="Image/conbg.png" className="imgCon"></img>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="form-inline" style={{ marginBottom: "10px" }}>
                <img
                  src="Image/icon1.png"
                  className="img-fluid"
                  style={{ width: "60px", marginRight: "20px" }}
                ></img>
                <img
                  src="Image/icon2.png"
                  className="img-fluid"
                  style={{ width: "60px" }}
                ></img>
              </div>
              <p className="p1" style={{ fontSize: "2.5rem" }}>
                Virgin Coconut<br></br> Oil supplements
              </p>
              <p className="pPriceShop">P795.00</p>
              <p className="p2">
                Our Virgin Coconut Oil supplements are easier to take than
                taking it by the spoon and they are a rich source of healthy
                Medium Chain Triglycerides, Monolaurin and have the unique
                ability to boost Ketones while providing Lactones.
              </p>
              <div className="form-inline">
                <button className="btnCapsule" onClick={add60}>
                  60 capsule
                </button>
                <button className="btnCapsule" onClick={add10}>
                  10 capsule
                </button>
              </div>
              <button className="btnaddCart" onClick={addCart}>
                Add to cart
                <img
                  src="Image/cart.png"
                  className="img-fluid"
                  style={{ width: "20px", marginLeft: "8px" }}
                ></img>
              </button>
            </div>
            <div className="col-lg-6">
              <img src="Image/box.png" className="img-fluid box1Shop"></img>
              <img src="Image/box3.png" className="img-fluid box2Shop"></img>
              <div className="float-right">
                <div className="form-inline" style={{ marginTop: "10px" }}>
                  <p className="pShop">Shop at</p>
                  <img
                    src="Image/shopee.png"
                    className="img-fluid"
                    style={{ width: "40px", margin: "0px 15px" }}
                  ></img>
                  <img
                    src="Image/lazada.png"
                    className="img-fluid"
                    style={{ width: "40px" }}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default shop;
