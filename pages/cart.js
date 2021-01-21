import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Componentdidmount from "../component/componentdidmount";
import Head from "next/head";
import Router, { useRouter } from "next/router";

function cart() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Componentdidmount></Componentdidmount>
      <div className="container-fluid h-100">
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
                    <div className="col-lg-6"></div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="p3">SHIPPING FEE</p>
                    </div>
                    <div className="col-lg-6"><p className = "pShippingfee">0.00</p></div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="p3">TOTAL</p>
                    </div>
                    <div className = "col-lg-6">
                    <p className = "pShippingfee">900.00</p>
                    </div>
                  </div>
                  <div className = "row" style = {{marginTop: "-20px"}}>
                      <div className = "col-lg-12">
                          <button className = "btnProceed">PROCEED</button>
                      </div>
                  </div>
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

export default cart;
