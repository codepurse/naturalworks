import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Componentdidmount from "../component/componentdidmount";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import Select from "react-select";
import NextNprogress from "nextjs-progressbar";

function cart() {
  const location = [
    { value: "Metro Manila", label: "Metro Manila" },
    { value: "CALABARZON", label: "CALABARZON" },
  ];

  const [payment, setPayment] = React.useState("");

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      color: "#298125",
      border: "none",
      boxShadow: "0 2px 12px -6px gray",
      borderRadius: "10px",
      width: "115%",
      padding: "2px",
      marginTop: "5px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#298125",
    }),
  };

  function selectCod() {
    setPayment("cod");
    $(".chk1").prop("checked", true);
    $(".chk2").prop("checked", false);
  }
  function selectCard() {
    setPayment("card");
    $(".chk1").prop("checked", false);
    $(".chk2").prop("checked", true);
  }

  function goCheckout() {
    if (payment == "card") {
      $(".rowPayment").hide();
      $(".rowCardDetails").removeClass("d-none");
      $(".rowCardDetails").fadeIn(150);
    }
  }

  function goShip() {
    $(".conTable").hide();
    $(".conShip").fadeIn(150);
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
      <div className="container-fluid h-100 conTable">
        <div className="container h-100">
          <div className="row" style={{ marginTop: "150px" }}>
            <div className="col-lg-1">
              <div style={{ marginTop: "50px" }}>
                <div className="divCirclecart">
                  <img src="Image/package.png" className="img-fluid"></img>
                </div>
                <div className="divLine"></div>
                <div className="divCirclecartnumber">
                  <p>2</p>
                </div>
              </div>
            </div>
            <div className="col-lg-11">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QUANTITY</th>
                    <th scope="col">TOTAL</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">
                        <img
                          src="Image/box3.png"
                          className="img-fluid mx-auto d-flex"
                          style={{ width: "70px" }}
                        ></img>
                      </td>
                      <td>
                        <p className="pItem">Elixir</p>
                        <p className="pItemsub">Premium Powdered Drink</p>
                      </td>
                      <td>
                        <p className="pPrice">795.00</p>
                      </td>
                      <td>
                        <div
                          className="form-inline"
                          style={{
                            margin: "0 auto",
                            width: "max-content",
                            paddingTop: "10px",
                          }}
                        >
                          <button className="btnMinus">-</button>
                          <span className="pQuantity">1</span>
                          <button className="btnPlus">+</button>
                        </div>
                      </td>
                      <td>
                        <p className="pTotal">795.00</p>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">
                        <img
                          src="Image/box3.png"
                          className="img-fluid mx-auto d-flex"
                          style={{ width: "70px" }}
                        ></img>
                      </td>
                      <td>
                        <p className="pItem">Elixir</p>
                        <p className="pItemsub">Premium Powdered Drink</p>
                      </td>
                      <td>
                        <p className="pPrice">795.00</p>
                      </td>
                      <td>
                        <div
                          className="form-inline"
                          style={{
                            margin: "0 auto",
                            width: "max-content",
                            paddingTop: "10px",
                          }}
                        >
                          <button className="btnMinus">-</button>
                          <span className="pQuantity">1</span>
                          <button className="btnPlus">+</button>
                        </div>
                      </td>
                      <td>
                        <p className="pTotal">795.00</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row" style={{ marginTop: "-40px" }}>
                <div className="col-lg-12">
                  <hr className="hrTable"></hr>
                </div>
                <p className="pTotalprice">00.00</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-inline">
                    <p className="pVoucher">VOUCHER</p>
                    <input
                      type="text"
                      className="txtVoucher"
                      placeholder="type voucher or code here"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="p3">LOCATION</p>
                    </div>
                    <div className="col-lg-6">
                      <Select options={location} styles={customStyles} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="p3">SHIPPING FEE</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="pShippingfee">0.00</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="p3">TOTAL</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="pShippingfee">900.00</p>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "-20px" }}>
                    <div className="col-lg-12">
                      <button className="btnProceed" onClick = {goShip}>PROCEED</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container conShip"
        style={{ marginTop: "150px", paddingBottom: "40px" }}
      >
        <div className="row">
          <div className="col-lg-8">
            <div className="boxShip">
              <div className="row">
                <div className="col-lg-4">
                  <p className="pTitlebox">SHIPPING ADDRESS</p>
                  <p className="pBoxSub">
                    201A Ritz Towers Apartment Ridge, Urdaneta, Makati City,
                    1225
                  </p>
                </div>
                <div className="col-lg-4">
                  <p className="pTitlebox">BILLING ADDRESS</p>
                  <p className="pBoxSub">
                    401 Batangas North, Ayala Alabang Village, Muntinlupa City,
                    1780
                  </p>
                </div>
                <div className="col-lg-4">
                  <p className="pTitlebox">CONTACT NUMBER</p>
                  <p className="pBoxSub">+639283019284</p>
                </div>
              </div>
            </div>
            <div className="row rowPayment" style={{ marginTop: "30px" }}>
              <div className="col-lg-12" style={{ marginBottom: "5px" }}>
                <div className="form-inline" style={{ marginLeft: "25px" }}>
                  <img
                    src="Image/checkbox.png"
                    className="img-fluid"
                    style={{ marginRight: "10px", marginTop: "-10px" }}
                  ></img>
                  <p className="pTitlebox">PAYMENT DETAILS</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="boxCod" onClick={selectCod}>
                  <div className="chkBox">
                    <input
                      className="inp-cbx chk1"
                      id="cbx"
                      type="checkbox"
                      style={{ display: "none" }}
                    />
                    <label className="cbx" htmlFor="cbx">
                      <span>
                        <svg width="12px" height="9px" viewBox="0 0 12 9">
                          <polyline points="1 5 4 8 11 1" />
                        </svg>
                      </span>
                    </label>
                  </div>
                  <img
                    src="Image/cod.png"
                    className="img-fluid mx-auto d-flex"
                    style={{ width: "80px" }}
                  ></img>
                  <p className="pCash">Cash on Delivery</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="boxCod" onClick={selectCard}>
                  <div className="chkBox">
                    <input
                      className="inp-cbx chk2"
                      id="cbx"
                      type="checkbox"
                      style={{ display: "none" }}
                    />
                    <label className="cbx" htmlFor="cbx">
                      <span>
                        <svg width="12px" height="9px" viewBox="0 0 12 9">
                          <polyline points="1 5 4 8 11 1" />
                        </svg>
                      </span>
                    </label>
                  </div>
                  <img
                    src="Image/credit-card.png"
                    className="img-fluid mx-auto d-flex"
                    style={{ width: "80px" }}
                  ></img>
                  <p className="pCash">Credit/Debit Card</p>
                </div>
              </div>
            </div>
            <div className="row rowCardDetails d-none">
              <div className="col-lg-12">
                <div className="boxCarddetails">
                  <div className="form-inline" style={{ marginLeft: "25px" }}>
                    <img
                      src="Image/checkbox.png"
                      className="img-fluid"
                      style={{ marginRight: "10px", marginTop: "-10px" }}
                    ></img>
                    <p className="pTitlebox">PAYMENT DETAILS</p>
                  </div>
                  <hr style={{ marginTop: "-5px" }}></hr>
                  <p className="pCardInfo">CARD NUMBER</p>
                  <input type="text" className="txtCard"></input>
                  <p className="pCardInfo">NAME ON CARD</p>
                  <input type="text" className="txtCard"></input>
                  <div className="form-inline">
                    <p className="pCardInfo">EXPIRY DATE</p>
                    <input type="text" className="txtDatecard"></input>
                    <input type="text" className="txtDatecard"></input>
                    <input type="text" className="txtDatecard"></input>
                  </div>
                  <p className="pCardInfo">CCV</p>
                  <input type="text" className="txtCard"></input>
                  <button className="btnProceed1 d-block mr-0 ml-auto">PROCEED</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="boxShip">
              <p className="pTitlebox" style={{ fontSize: "1.2rem" }}>
                ORDER SUMMARY - #100324
              </p>
              <p className="pTitleboxsub">Estimated Time of Arrival (ETA)</p>
              <p className="pBoxSub">March 11, 2019</p>
              <p className="pTitleboxsub" style={{ marginTop: "5px" }}>
                Shipping Duration
              </p>
              <p className="pBoxSub">1-2 business days</p>
              <p className="pTitlebox" style={{ marginTop: "15px" }}>
                ITEMS
              </p>
              <div className="row" style={{ marginTop: "-10px" }}>
                <div className="col-lg-5">
                  <p className="pBoxSub">10 capsules</p>
                </div>
                <div className="col-lg-4">
                  <p className="pBoxSub">135.00</p>
                </div>
                <div className="col-lg-3">
                  <p className="pBoxSub">x1</p>
                </div>
              </div>
              <p className="pTitlebox" style={{ marginTop: "15px" }}>
                DISCOUNT
              </p>
              <p className="pDiscount">CAP20 - 20% off 10 Capsules</p>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-10">
                  <p className="pBoxSub">CAP20 - 20% off 10 Capsules</p>
                </div>
                <div className="col-lg-2">
                  <p className="pBoxSub text-right">-13.5</p>
                </div>
              </div>
              <p className="pTitlebox" style={{ marginTop: "15px" }}>
                SHIPPING
              </p>
              <div className="row" style={{ marginTop: "-10px" }}>
                <div className="col-lg-8">
                  <p className="pBoxSub">METRO MANILA</p>
                </div>
                <div className="col-lg-4">
                  <p className="pBoxSub text-right">FREE</p>
                  <hr style={{ backgroundColor: "#298125" }}></hr>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p className="pTitlebox">TOTAL</p>
                </div>
                <div className="col-lg-6">
                  <p className="pBoxSub text-right">916.00</p>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "-5px" }}>
              <div className="col-lg-12">
                <button className="btnProceed" onClick={goCheckout}>
                  PROCEED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid divFooter">
        <Footer></Footer>
      </div>
    </>
  );
}

export default cart;
