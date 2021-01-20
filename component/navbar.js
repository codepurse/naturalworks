import React, { Component } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export class navbar1 extends Component {
  render() {
    return (
      <div className="container-fluid" style = {{position: "relative"}}>
        <img src = "Image/bglogonav.png" className = "img-fluid imgBglogo"></img>
        <nav
          className="navbar navbar-expand-md fixed-top"
          style={{ padding: "20px 20px" }}
        >
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="navbar-brand" href="#">
            <Link href="/">
              <a>
                <img
                  src="Image/logo.png"
                  className="img-fluid imglogo"
                  style={{ width: "54%", marginLeft: "50px" }}
                />
              </a>
            </Link>
          </nav>
          <div className="collapse navbar-collapse" id="collapse">
            <div className="col2 ml-auto">
              <ul className="nav navbar-nav">
                <Link href="/">
                  <li className = "liNav">
                    <a
                      className="nav-link"
                      style={{ color: "#298125" }}
                    >
                      HOME
                    </a>
                  </li>
                </Link>
                <Link href="/main">
                  <li>
                    <a
                      className="nav-link"
                      style={{ color: "#298125" }}
                    >
                      ABOUT
                    </a>
                  </li>
                </Link>
                <li>
                  <a
                    className="nav-link"
                    style={{ color: "#298125" }}
                  >
                    SHOP
                  </a>
                </li>
                <Link href="/cart">
                  <li>
                    <a
                      className="nav-link"
                      style={{ color: "#298125" }}
                    >
                      <img src = "Image/cart.png" className = "img-fluid" style = {{width: "23px"}}></img>
                    </a>
                  </li>
                </Link>
                  <Link href="/about">
                  <li>
                    <a
                      className="nav-link"
                      style={{ color: "#298125" }}
                    >
                      <img src = "Image/search.png" className = "img-fluid" style = {{width: "23px"}}></img>
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar1;
