import React from "react";
import { FaStar, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaMoneyBillWave, FaHandHoldingUsd } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {SiVisa, SiMastercard, SiVerizon} from "react-icons/si"

const Footer = () => (
  <footer className="footer">
    <div className="black-div">
      <div className="black-diva">
        <div className="jumia-footer">
          <span className="jumia-logo">
            <span class="jumia-txt" style={{ color: "white" }}>
              JUMIA
            </span>
            <span className="starboxy">
              <FaStar color="black" size={15} />
            </span>
          </span>
        </div>
      </div>
      <div className="black-divb">
        <h2 style={{ fontSize: "15px", color: "white" }}>NEW TO JUMIA?</h2>
        <p color="white">
          Subscribe to our Newsletter to get updates on our latest offers!
        </p>
        <div className="emailsubscribe-box">
          <div className="email-iconbox">
            <FaEnvelope color="grey" size={20} />
            <input
              type="text"
              placeholder="Enter E-mail Address"
              style={{
                border: "none",
                outline: "none",
                fontSize: "16px",
                background: "transparent",
                width: "92%",
              }}
            />
          </div>
          <button
            style={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              padding: "17px",
              borderRadius: "4px",
            }}
          >
            Subscribe
          </button>
        </div>
        <p style={{ color: "grey" }}>
          <input
            type="checkbox"
            color="grey"
            style={{ background: "transparent", color: "transparent" }}
          />{" "}
          I agree to Jumia's Privacy and Cookie Policy. You can unsubscribe from
          newsletter at <br /> any time.
        </p>
        <p style={{ color: "#f57224" }}>I accept the Legal Terms</p>
      </div>
      <div className="black-divc">
        <div
          className="download-jumia"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="jumia-box">
            <span
              style={{
                background: "#f57224",
                padding: "13px 11px",
                borderRadius: "5px",
              }}
            >
              <span className="starboxy" style={{ background: "white" }}>
                <FaStar color="#f57224" size={15} />
              </span>
            </span>
          </div>
          <span>
            <h2 style={{ fontSize: "15px" }}> DOWNLOAD JUMIA FREE APP</h2>
            <p>Get access to exclusive offers!</p>
          </span>
        </div>
        <div
          className="box-ab"
          style={{ display: "flex", alignItems: "centre" }}
        >
          <div className="App-store">
            <p>
              <span style={{ fontSize: "10px" }}>Download on the</span> <br />
              <span>App Store</span>
            </p>
          </div>
          <div className="App-store">
            <p>
              <span style={{ fontSize: "10px" }}>Download on the</span> <br />
              <span>App Store</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="harshdiv-cont">
      <div className="harsh-div">
        <div className="harsh-diva">
          <h5 color="white" style={{ fontSize: "12px" }}>
            NEED HELP?
          </h5>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Chat with us
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Help Center
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Contact Us
          </a>
          <h5 style={{ fontSize: "12px" }} color="white">
            USEFUL LINKS
          </h5>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Service Center
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            How to shop on Jumia?
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Delivery options and timelines
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            How to return a product on Jumia?
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Corporate and bulk purchases{" "}
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Report a Product{" "}
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Dispute Resolution Policy
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Returns & Refund Timeline
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Return Policy
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Pickup Stations
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Jumia Delivery
          </a>
        </div>
        <div className="harsh-divb">
          <h5 style={{ fontSize: "12px" }}>ABOUT JUMIA</h5>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            About us
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Jumia careers
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Corporate Website
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Terms and Conditions
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            {" "}
            Privacy Notice
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Jumia Store Credit Terms & Conditions
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Jumia Payment Information Guidelines
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Cookie Notice{" "}
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Official Stores
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Flash Sales
          </a>
        </div>
        <div className="harsh-divc">
          <h5 style={{ fontSize: "12px", color: "white" }}>
            {" "}
            MAKE MONEY WITH JUMIA
          </h5>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Sell on Jumia
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Vendor hub
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white" }}>
            Become a Sales Consultant
          </a>
        </div>
        <div className="harsh-divd">
          <h5 style={{ fontSize: "12px", color: "white" }}>
            JUMIA INTERNATIONAL
          </h5>
          <a href="/" style={{ fontSize: "13px", color: "white", gap: "50px" }}>
            Algeria &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="/"
              style={{ fontSize: "13px", color: "white", gap: "50px" }}
            >
              Kenya
            </a>
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white", gap: "50px" }}>
            Egypt &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/" style={{ fontSize: "13px", color: "white" }}>
              Morocco
            </a>
          </a>
          <a
            href="/"
            style={{
              fontSize: "13px",
              color: "white",
              display: "flex",
              gap: "50px",
            }}
          >
            Ghana&nbsp;
            <a href="/" style={{ fontSize: "13px", color: "white" }}>
              Senegal
            </a>
          </a>
          <a href="/" style={{ fontSize: "13px", color: "white", gap: "50px" }}>
            Ivory Coast &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/" style={{ fontSize: "13px", color: "white" }}>
              Uganda
            </a>
          </a>
        </div>
      </div>
      <div className="bottom-footer" style={{ display: "flex", gap: "145px", paddingBottom:"95px" }}>
        <div className="join-us">
          <span>
            <h5
              style={{ fontSize: "13px", color: "white", marginBottom: "20px" }}
            >
              JOIN US 0N
            </h5>
          </span>
          <span style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
            <FaFacebook className="mastercard" color="white" size={25} />
            <FaYoutube className="mastercard" color="white" size={25} />
            <FaInstagram className="mastercard" color="white" size={25} />
            <FaXTwitter className="mastercard" color="white" size={25} />
            <FaTiktok className="mastercard" color="white" size={25} />
          </span>
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <a href="/" style={{ fontSize: "13px", color: "white" }}>
              ADIDAS
            </a>
            <a href="/" style={{ fontSize: "13px", color: "white" }}>
              Nike
            </a>
          </span>
        </div>
        <div className="payment-method">
          <span>
            <h5 style={{ fontSize: "13px", color: "white" }}>
              PAYMENT METHODS
            </h5>
          </span>
          <span style={{ display: "flex", gap: "10px", marginBottom: "25px" }}>
            <SiMastercard color="white" className="mastercard" size={28} />
            <SiVisa className="mastercard" size={25} color="white" />
            <FaMoneyBillWave className="mastercard" size={25} color="white" />
            <FaHandHoldingUsd
              className="mastercard"
              size={25}
              title="Pay on Delivery"
              color="white"
            />
          </span>
          <span>
            <a href="/" style={{ fontSize: "13px", color: "white" }}>
              Samsung
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
