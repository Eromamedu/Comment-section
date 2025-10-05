import React from "react";
import { FaAngleRight } from "react-icons/fa";
import imga_icon from "../Asset/jumban.jpeg";
import imgb_icon from "../Asset/jumpicb.jpeg";
import imgc_icon from "../Asset/jumpicc.jpeg";
import imgd_icon from "../Asset/jumpicd.jpeg";
import imge_icon from "../Asset/jumpice.jpeg";
import imgf_icon from "../Asset/jumpicf.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import Sellon from "./components/Sellon/Sellon.jsx";
// import imgg_icon from "../Asset/jumpicg.jpeg";

function Secondproduct() {
  return (
    <div className="second-product">
      <div className="top-secondproduct">
        <span className="top-text">
          <span>Flash-sales</span>
          <span>
            Time Left:{" "}
            <span style={{ fontWeight: "700", marginLeft: "4px" }}>
              {" "}
              00h : 00m: 00s{"  "}
            </span>
          </span>
          <span style={{ fontSize: "15px" }}>
            See All <FaAngleRight />
          </span>
        </span>
      </div>
      <div className="main-secondproduct">
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "5px",
              }}
            >
              <span className="img-txt">Tecno T101 1.8" Dual Sim..</span>
              <span className="img-txt">N11,863</span>
              <span
                style={{
                  fontSize: "12.5px",
                  color: "#8b8989ff",
                  textDecoration: "line-through",
                }}
              >
                N12,105
              </span>
              <span style={{ fontSize: "12.5px", color: "black" }}>
                50 items left
              </span>
              <div className="range-div"></div>
            </div>
          </div>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "5px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                SOLITEC STANDING FAN...
              </span>
              <span className="img-txt">N17,300</span>
              <span
                style={{
                  fontSize: "12.5px",
                  color: "#8b8989ff",
                  textDecoration: "line-through",
                }}
              >
                N19,012
              </span>
              <span style={{ fontSize: "12.5px", color: "black" }}>
                50 items left
              </span>
              <div className="range-div"></div>
            </div>
          </div>
        </Link>
        <div className="secondimg-box">
          <div className="second-image">
            <img src={imgc_icon} alt="" className="second-imagea" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "5px",
            }}
          >
            <span className="img-txt" style={{ fontSize: "14px" }}>
              NIVEA COCOA
            </span>
            <span className="img-txt">N4,340</span>
            <span
              style={{
                fontSize: "12.5px",
                color: "#8b8989ff",
                textDecoration: "line-through",
              }}
            >
              N4,440
            </span>
            <span style={{ fontSize: "12.5px", color:"black" }}>48 items left</span>
            <div className="rang-div">
              <div className="range"></div>
            </div>
          </div>
        </div>
        <div className="secondimg-box">
          <div className="second-image">
            <img src={imgd_icon} alt="" className="second-imagea" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "5px",
            }}
          >
            <span className="img-txt" style={{ fontSize: "14px" }}>
              Itel Water Proof ISW 011....
            </span>
            <span className="img-txt">N14,470</span>
            <span
              style={{
                fontSize: "12.5px",
                color: "#8b8989ff",
                textDecoration: "line-through",
              }}
            >
              N40,000
            </span>
            <span style={{ fontSize: "12.5px" }}>34 items left</span>
            <div className="rang-div">
              <div className="ranga"></div>
            </div>
          </div>
        </div>
        <div className="secondimg-box">
          <div className="second-image">
            <img src={imge_icon} alt="" className="second-imagea" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "5px",
            }}
          >
            <span className="img-txt">Tecno T101 1.8"..</span>
            <span className="img-txt">N11,863</span>
            <span
              style={{
                fontSize: "12.5px",
                color: "#8b8989ff",
                textDecoration: "line-through",
              }}
            >
              N12,105
            </span>
            <span style={{ fontSize: "12.5px" }}>50 items left</span>
            <div className="range-div"></div>
          </div>
        </div>
        <div className="secondimg-box">
          <div className="second-image">
            <img src={imgf_icon} alt="" className="second-imagea" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "5px",
            }}
          >
            <span className="img-txt">Tecno T101 1.8"..</span>
            <span className="img-txt">N11,863</span>
            <span
              style={{
                fontSize: "12.5px",
                color: "#8b8989ff",
                textDecoration: "line-through",
              }}
            >
              N12,105
            </span>
            <span style={{ fontSize: "12.5px" }}>50 items left</span>
            <div className="range-div"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondproduct;
