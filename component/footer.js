import React, { Component } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

function footer() {
  return (
    <>
      <div className="container-fluid conFooter">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img
                src="Image/logo.png"
                className="img-fluid"
                style={{ width: "80%", marginLeft: "50px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
