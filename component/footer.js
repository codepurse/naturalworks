import React, { Component } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

function footer() {
  return (
    <>
      <div className="container-fluid conFooter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img
                src="Image/logo.png"
                className="img-fluid"
                style={{ width: "100%", marginLeft: "50px" }}
              ></img>
            </div>
            <div className="col-lg-6 mx-auto d-flex">
              <ul className="ulFooter">
                <li>
                  <a>HOME</a>
                </li>
                <li>
                  <a>ABOUT</a>
                </li>
                <li>
                  <a>PRODUCTS</a>
                </li>
                <li>
                  <a>CONTACT</a>
                </li>
              </ul>
            </div>
            <div className = "col-lg-3">
              <input type = "text" className = "txtSearchFooter" placeholder = "Search the website"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
