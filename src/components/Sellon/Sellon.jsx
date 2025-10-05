import React from 'react'
import Navbar from "../header/headers.jsx";
import Footer from '../Footer/Footer.jsx';
import jumpic_h from '../Asset/jumpich.jpeg';
import jumpic_i from "../Asset/jumpici.jpeg";
import jumpic_j from "../Asset/jumpicj.jpeg";
import jumpic_k from "../Asset/jumpick.jpeg";
// import myVideo from "../Asset/video.mp4"




function Sellon() {
  
  return (
    <div className="sell-on">
      <Navbar />
      <div className="sell-banner">
        <img src={jumpic_i} alt="" />
      </div>
      <div className="sell-bannerb">
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "700",
            color: "#444343",
          }}
        >
          Why sell on Jumia?
        </p>
        <div className="text-boxes">
          <p>Connect with more buyers</p>
          <p className="sell-more"> Sell more products</p>
          <p>Top notch seller support</p>
          <p>Expert product delivery</p>
          <p>Improve revenue</p>
          <p>Free online/offline training</p>
        </div>
      </div>
      <div className="video-div">
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "700",
            color: "#444343",
            paddingTop: "10px",
          }}
        >
          Testimonials
        </p>
        <div style={{ display: "flex", alignItems: "start" }}>
          <img src={jumpic_i} alt="" style={{ width: "49%" }} />
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              fontSize: "13px",
              marginLeft: "14px",
            }}
          >
            Selling on Jumia has been very rewarding with high turnover and good
            profit. <br /> <i>-Yejide Olulana - Allure Beauty Store</i>{" "}
          </span>
        </div>
      </div>
      <div className="video-diva">
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "700",
            color: "#444343",
            paddingTop: "10px",
          }}
        >
          How it works
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "65px" }}>
          {/* <div style={{display:"flex", alignItems:'center', gap:"15px"}}>
            <img
              src={jumpic_i}
              alt=""
              style={{
                width: "105px",
                height:"105px",
                borderRadius: "50%",
                border: "2px dotted black",
              }}
            />
            <img
              src={jumpic_j}
              alt=""
              style={{
                width: "95px",
                borderRadius: "50%",
                border: "2px dotted black",
              }}
            />
            <img
              src={jumpic_k}
              alt=""
              style={{
                width: "95px",
                borderRadius: "50%",
                border: "2px dotted black",
              }}
            />
            <img
              src={jumpic_h}
              alt=""
              style={{
                width: "95px",
                borderRadius: "50%",
                border: "2px dotted black",
              }}
            />
          </div> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
              // border: "2px solid red",
              alignItems: "center",
            }}
          >
            <div style={{ paddingLeft: "85px" }}>
              <img
                src={jumpic_h}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "2px dotted black",
                }}
              />
            </div>

            <span
              style={{
                fontSize: "13px",
                color: "#4e4d4d",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  color: "#4e4d4d",
                  fontWeight: "700",
                  // marginBottom:"20px"
                }}
              >
                {" "}
                Step 1: Register under 5 minutes
              </span>{" "}
              <br /> fill the registration form <br /> submit the required
              documents <br /> (a) business registration <br /> (b) bank account
              details
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
              // border: "2px solid red",
              alignItems: "center",
              // marginBottom:"10px"
            }}
          >
            <div style={{ paddingLeft: "55px" }}>
              <img
                src={jumpic_i}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "2px dotted black",
                }}
              />
            </div>

            <span
              style={{
                fontSize: "13px",
                color: "#4e4d4d",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  color: "#4e4d4d",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Step 2: Become an ecommerce expert
              </span>{" "}
              complete the dedicated new seller <br /> training <br /> activate
              your seller center account to manage <br /> your shop
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
              // border: "2px solid red",
              alignItems: "center",
              marginBottom: "23px",
            }}
          >
            <div style={{ paddingLeft: "55px" }}>
              <img
                src={jumpic_j}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "2px dotted black",
                }}
              />
            </div>

            <span
              style={{
                fontSize: "13px",
                color: "#4e4d4d",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  color: "#4e4d4d",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Step 3: list your products and sell
              </span>{" "}
              upload your best selling products <br /> and start selling
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
              // border: "2px solid red",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ paddingLeft: "55px" }}>
              <img
                src={jumpic_i}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "2px dotted black",
                }}
              />
            </div>

            <span
              style={{
                fontSize: "13px",
                color: "#4e4d4d",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  color: "#4e4d4d",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Step 4: Benefit from our promotions and <br /> marketing
              </span>{" "}
              get visibility from our campaigns/promotions <br /> and insight on
              best selling products.
            </span>
          </div>
        </div>
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              padding: "12px 13px",
              background: "#f57224",
              border: "none",
              color: "white",
              cursor: "pointer"
            }}
          >
            <b style={{ textDecoration: "none", fontSize: "12px" }}>
              VENDOR HUB
            </b>
          </button>
          <button
            style={{
              padding: "12px 13px",
              background: "#f57224",
              border: "none",
              boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
              color: "white",
              cursor: "pointer",
            }}
          >
            <b style={{ textDecoration: "none", fontSize: "12px" }}>
              START SELLING
            </b>
          </button>
        </div>
      </div>
      <Footer />
    </div>

    // </div>

    // </div>
  );
}

export default Sellon