import React from 'react'
// import Secondproduct from '../Secondproduct/Secondproduct';
import { FaAngleRight } from "react-icons/fa";
import imga_icon from "../Asset/jumban.jpeg";
import imgb_icon from "../Asset/jumpicb.jpeg";
import imgc_icon from "../Asset/jumpicc.jpeg";
import imgd_icon from "../Asset/jumpicd.jpeg";
import imge_icon from "../Asset/jumpice.jpeg";
import imgf_icon from "../Asset/jumpicf.jpeg";

function Fourthproduct() {
  return (
    <div className="fourth-product">
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Top Sellers</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
                gap: "3px",
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
                gap: "3px",
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
                gap: "3px",
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
            </div>
          </div>
        </div>
      </div>

      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span style={{ fontWeight: "500" }}>Limited Stock Deals</span>
            <span style={{ fontSize: "14px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
        <div className="second-product">
          <div className="main-secondproduct">
            <div className="secondimg-box">
              <div className="second-image">
                <img src={imga_icon} alt="" className="second-imagea" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
              </div>
            </div>
            <div className="secondimg-box">
              <div className="second-image">
                <img src={imgb_icon} alt="" className="second-imagea" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
              </div>
            </div>
            <div className="secondimg-box">
              <div className="second-image">
                <img src={imgc_icon} alt="" className="second-imagea" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "3px",
                }}
              >
                <span className="img-txt" style={{ fontSize: "12px" }}>
                  NIVEA NOURISHNG COCOA..
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
                <span style={{ fontSize: "12.5px" }}>48 items left</span>
                {/* <div className="rang-div"> */}
                {/* <div className="range"></div> */}
                {/* </div> */}
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
                  gap: "3px",
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
                {/* <div className="rang-div"> */}
                {/* <div className="ranga"></div> */}
                {/* </div> */}
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
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
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
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="second-product">
          <div className="main-secondproduct">
            <div className="secondimg-box">
              <div className="second-image">
                <img src={imga_icon} alt="" className="second-imagea" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
              </div>
            </div>
            <div className="secondimg-box">
              <div className="second-image">
                <img src={imgb_icon} alt="" className="second-imagea" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
              </div>
            </div>
            <div className="secondimg-box">
              <div className="second-image">
                <img src={imgc_icon} alt="" className="second-imagea" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "3px",
                }}
              >
                <span className="img-txt" style={{ fontSize: "12px" }}>
                  NIVEA NOURISHNG COCOA..
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
                <span style={{ fontSize: "12.5px" }}>48 items left</span>
                {/* <div className="rang-div"> */}
                {/* <div className="range"></div> */}
                {/* </div> */}
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
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
                {/* <div className="rang-div"> */}
                {/* <div className="ranga"></div> */}
                {/* </div> */}
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
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
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
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="second-product">
          <div className="main-secondproduct">
            <div className="secondimg-box">
              <div className="second-image">
                <img src={imga_icon} alt="" className="second-imagea" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
              </div>
            </div>
            <div className="secondimg-box">
              <div className="second-image">
                <img src={imgb_icon} alt="" className="second-imagea" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
              </div>
            </div>
            <div className="secondimg-box">
              <div className="second-image">
                <img src={imgc_icon} alt="" className="second-imagea" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "3px",
                }}
              >
                <span className="img-txt" style={{ fontSize: "12px" }}>
                  NIVEA NOURISHNG COCOA..
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
                {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
                {/* <div className="rang-div"> */}
                {/* <div className="range"></div> */}
                {/* </div> */}
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
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
                {/* <div className="rang-div"> */}
                {/* <div className="ranga"></div> */}
                {/* </div> */}
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
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
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
                  gap: "3px",
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
                {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
                {/* <div className="range-div"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Appliances Hub</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Everything For Your Home</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Top Selling Items</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Everything Must Go | Up to 60% off</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Clearance Sales</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Television and Audio Deals</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Fashion Deals</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={imgb_icon} alt="" />
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Century Official Store | Up to 38% off</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Itel Official Store</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Beauty Deals</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Phone Accessories deals</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Seasonal Offer Up to 30% Off</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Computing Deals</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Seasonal Offer Up to 30% Off</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Handpicked For You</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="second-product">
        <div className="top-secondproducta">
          <span className="top-text">
            <span>Jumia Bar</span>
            <span style={{ fontSize: "15px" }}>
              See All <FaAngleRight />
            </span>
          </span>
        </div>
        <div className="main-secondproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "3px",
              }}
            >
              <span className="img-txt" style={{ fontSize: "14px" }}>
                NIVEA NOURISHNG COCOA..
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
              {/* <span style={{ fontSize: "12.5px" }}>48 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="range"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>34 items left</span> */}
              {/* <div className="rang-div"> */}
              {/* <div className="ranga"></div> */}
              {/* </div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
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
                gap: "3px",
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
              {/* <span style={{ fontSize: "12.5px" }}>50 items left</span> */}
              {/* <div className="range-div"></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="text-box">
        <span>
          <h2 style={{ fontSize: "18px", padding: "0px 20px" }}>
            Jumia Nigeria - Nigeria's No. 1 Shopping Destination
          </h2>{" "}
          <h2 style={{ fontSize: "18px", padding: "0px 20px" }}>
            {" "}
            Shop for Everything You Need on Jumia Nigeria
          </h2>{" "}
          <p style={{ fontSize: "13px", padding: "0px 20px" }}>
            Jumia Nigeria is the largest online shopping website in Nigeria. We
            offer a platform where customers in any part of Nigeria can find and
            shop for all they need in one online store and that platform is the
            Jumia shopping website. On the Jumia mobile app or website, you can
            shop from the comfort of your home or during work breaks and get
            everything delivered fast without you having to stress or move an
            inch. Be it{" "}
            <b style={{ fontWeight: "700", textDecoration: "underline" }}>
              fashion, electronics, mobile phones, computers,
            </b>
            or your everyday groceries you can get everything you need on Jumia
            online store.
          </p>{" "}
          <p style={{ fontSize: "13px", padding: "0px 20px" }}>
            Have you used the Jumia online store today? Shop now on Jumia to
            enjoy a seamless online shopping experience. With fast delivery,
            free returns, and flexible payment options, you are certain to enjoy
            the convenience of shopping online.
          </p>
          <h2 style={{ fontSize: "15px", padding: "0px 20px" }}>
            Shop for Original and Quality Items at The Best Prices
          </h2>{" "}
          <p>Jumia Nigeria prides itself in giving the best prices and the best
          quality of products you can find anywhere in the country. Our strong
          partnership with top brands like <b>Oraimo, Samsung, Infinix, Xiaomi,
          Diageo, Tecno, Adidas, Nike, Trendyol,</b> etc. guarantees our customers
          the cheapest prices on original brand products. Beyond that, customers
          also have exclusive access to the latest product released by these top
          brands. If you enjoy exclusivity, the <b>Jumia Official Store</b> is the
          right place for you. On the Jumia official stores, you can experience
          product launches and be among the first set of people in Nigeria to
          own new products. You can also enjoy huge offers on brand days that
          come with heavy discounts on various products ranging from mobile
          phones to drinks, clothing items, sneakers, and many more!</p> 
          <p>Explore our official stores today to see a wide range of popular brands that sell
          directly on our platform and get assured of the best prices and
          quality of products you buy on Jumia.</p> <h2 style={{ fontSize: "15px", padding: "0px 20px" }}>Shop the Latest Fashion and
          Trendy Outfits Online</h2> <p> Discover an extensive range of fashion items for
          women, men, and kids on Jumia. Our <b>women's fashion</b> collection includes
          a diverse selection of clothing such as blouses, pants, and jeans. We
          also offer a variety of gowns in different lengths and materials to
          suit your individual style. Additionally, browse through our unique
          fashion accessories like <b>shoes, bags, jewelry,</b> and sunglasses, all at
          unbeatable prices. </p>  <p>For <b>men's fashion</b>, Jumia has an impressive
          collection of stylish clothing pieces that can make a statement. Find
          quality men's trousers, shoes, shirts, <b>watches</b> and suits at the most
          affordable prices. Sports enthusiasts can also get their hands on
          quality gym wear, trendy sneakers, and other sportswear items.</p> <p> At
          Jumia, we haven't forgotten about the little ones. Browse through our
          selection of <b>baby clothes</b> for boys and girls and their accessories.
          Shop now on Jumia Nigeria and enjoy an incredible online shopping
          experience.</p> <h2 style={{ fontSize: "15px", padding: "0px 20px" }}> Indulge in a Selection of Beauty Products</h2> <p>Our online store
          also offers you the best beauty products from top brands in the world,
          e.g. <b>Nivea</b> and many others. Many things related to <b>health and beauty</b>
          e.g. skin care products, makeup and cosmetics, wigs, oral care, hair
          care, and <b>fragrances</b> can be found at our online store.</p> <p>Be certain that
          whatever we sell on the Jumia website is of good quality. When you
          shop for your beauty products on Jumia you have successfully avoided
          getting fake products that can cause unhealthy reactions to your skin
          or body and without breaking the bank, you can maintain a healthy
          beauty routine to leave jaws dropping.</p> <h2 style={{ fontSize: "15px", padding: "0px 20px" }}>Get Your Home Needs on Jumia
          Nigeria</h2> <p> Jumia is an online supermarket where you can shop for your
          daily groceries in Nigeria at prices cheaper than others. Check off
          your grocery list and stock up your pantry with a variety of items
          ranging from rice to cooking oils, wines, Snacks, beverages, household
          cleaning items, and many others. We also have a section for fresh
          foods and canned foods. Also, Discover our baby shop for all baby
          essentials from baby food and diapers to toys and educational games. </p>

         <p>  Beyond your daily grocery needs, you can shop on Jumia online for
          unique home furniture and interior decor pieces to beautify your homes
          and offices. We have carefully designed outdoor furniture and lighting
          for your patio and rooftops. We also have generators, inverters, and
          inverter batteries to power up. There is nothing your home needs that
          is not on Jumia. You can easily shop from our huge collection of large
          and small appliances such as fridges, washing machines, air
          conditioners, iron, blenders, air fryers, and many others. Shop for
          all your home needs and enjoy top deals, prices, and offers you can
          get nowhere else.</p> <h2 style={{ fontSize: "15px", padding: "0px 20px" }}> Buy the Latest Smartphones and Electronics From
          Jumia Nigeria </h2> <p> Shopping on Jumia guarantees that you get the latest
          mobile phones, tablets, or phablets before anyone else. Buy trusted
          Apple iOS iPhones and iPads and quality Android brands like Samsung,
          Tecno, Xiaomi, Infinix, and many others! Unlock the best functionality
          of your smartphones when you buy our amazing phone accessories like
          AirPods, earphones, powerbank, Bluetooth speakers, durable phone
          cases, and many more! We have an endless supply of Jumia phone
          accessories from top brands like Oraimo, Edifier, Samsung, Tecno, JBL,
          etc. </p>  <p>We also have an amazing collection of top computing brands like
          Hp, Dell, Lenovo, Microsoft, Apple Macbook, and more! You can either
          buy these computing devices as desktops or laptops depending on your
          choice. Shop for computing accessories like printers, scanners,
          computer components, and monitors to enhance your computer or laptop
          experience.</p> <p>Our catalog of electronics offers you the highest quality
          of products from trusted sellers and brands. You can get the latest
          smart televisions and home audio devices for your living room. To
          spice things up, you can get the PlayStation consoles or Xbox consoles
          especially if you love gaming during your leisure time.</p> <h2 > Enjoy Top
          Deals and Discounts when Shopping on Jumia Nigeria Online Store </h2> <p> There
          are limitless offers and deals on the Jumia Nigeria online store.
          Enjoy up to 80% discount on selected items of the day during the flash
          sales. We also have Half Price Deals where our shoppers buy selected
          products like mobile phones, laptops, phone accessories, and clothing
          pieces for half the original price. Get the best prices you can find
          on the best deals page.</p> <p> Enjoy other weekly offers that run all year
          long, which means that every time you shop on the Jumia website, you
          are sure to enjoy mouth-watering discounts and deals that will help
          you save more and get the most affordable prices no one else can give
          you. To know more about these offers and deals, you can subscribe to
          our push notifications and newsletters, read our blog, and follow us
          on all our social media accounts. </p> <h2> Experience Fast Delivery and Online
          Shopping Convenience</h2> <p> Get your cart delivered to you within 24 hrs when
          you buy items with the Jumia Express tag, for selected products, you
          are also assured of free delivery and have your products delivered to
          you at no extra cost! Also, we have products that you can ship from
          abroad under the Jumia Global catalog. This means that you can order
          various items from outside the country and get them delivered to your
          doorstep without hassles.</p> <h2>Frequently Asked Questions (FAQs) </h2> <h2 style={{ fontSize: "15px", padding: "0px 20px" }}> What
          Payment Options are Available on Jumia?</h2> <p> You can either pay online or
          pay on delivery when you shop from us. With out payment solution
          called JumiaPay, you can conveniently pay online or on delivery with
          your cards (MasterCard, Visa and Verve), bank transfers and USSD.</p> <h2>Can 
          I Return the Items I Bought From Jumia?</h2> <p>Yes, you can return items you
          bought for free and get refunded as soon as possible! We have a refund
          policy that grants you 7 days to return ALL eligible items bought from
          the official store and other sellers on Jumia Nigeria. </p>  <h2 style={{ fontSize: "15px", padding: "0px 20px" }}>When is the
          Next Jumia Black Friday?</h2> <p> Jumia Black Friday happens in November. Jumia
          is the pioneer of Black Friday in Nigeria, so expect us to do it best!
          It comes with the biggest discount and offers on various categories of
          products like fashion, phones, computers, home appliances, electronics
          and many more! We also have various exciting and engaging activities
          like the treasure hunt and games our customers love to play.</p> <h2 style={{ fontSize: "15px", padding: "0px 20px" }}> Can I get
          Free Delivery on All my Orders?</h2> <p> Customers in Lagos, Abuja,
          Ibadan,Warri,Benin, Abeokuta, Akure and Portharcourt enjoy free
          delivery on items with the free delivery tag. Free delivery does not
          apply to large items like refrigerators, huge TVs, washing machines
          and others.</p> <h2 style={{ fontSize: "15px", padding: "0px 20px" }}> What Is the Jumia Customer Care Line?</h2> <p>We have a dedicated
          team that is always available to make sure your shopping experience on
          Jumia is effortless. Simply dial 02018881106 to reach out to us for
          complaints and other inquiries. If you would like to place an order,
          please call us at 0700-600-0000. You can also chat with us on the
          Jumia app if you find that more convenient. Whatever you do, we are
          always available to help.</p> <h2 style={{ fontSize: "15px", padding: "0px 20px" }}>How Can I Become a Seller on Jumia?</h2> <p>You can
          partner with Jumia as a seller on the website. All you need to do is
          register and follow the necessary steps. With our large customer base,
          we can help you reach a wider audience and sell many of your products
          to our customers </p> <h2 style={{ fontSize: "15px", padding: "0px 20px" }}> What Other Events are Celebrated in Jumia?</h2> <p> Aside the
          Jumia Black Friday, the Jumia Tech Week is another big event we
          celebrate in Jumia Nigeria. The goal of the Jumia Tech Week is to help
          customers have access to the latest technology at the cheapest prices
          they can get. It happens in the month of March of every year and lasts
          at least two weeks. </p> <p> Aside these major events, we also have Ramadan
          sales, Easter sales, Christmas sales and other seasonal celebrations
          we make sure our customers enjoy on Jumia.</p>  <p>Shop now and enjoy
          unlimited offers, discounts and the best online shopping experience!</p>

        </span>
      </div>
    </div>
  );}
export default Fourthproduct;