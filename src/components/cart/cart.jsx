import React from "react";
// import Navbar from "../header/headers.jsx";
import { useState } from "react";
import {
  FaXTwitter,
  FaFacebook,
  FaWhatsapp,
  FaCircleExclamation,
  FaStar,
} from "react-icons/fa6";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import imgb_icon from "../Asset/Nail.jpeg";
import imgc_icon from "../Asset/jumpicc.jpeg";
import imgd_icon from "../Asset/jumpicd.jpeg";
import imge_icon from "../Asset/jumpice.jpeg";
import imgf_icon from "../Asset/jumpicf.jpeg";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

function Cart({onAddToCart, onUpdateQuantity}) {
//  const products = [
//    {
//      id: 1,
//      name: "iphone 14",
//      price: 1200,
//    },
//    {
//      id: 2,
//      name: "Samsung S23",
//      price: 1000,
//    },
//    {
//      id: 3,
//      name: "Infinix Note 12",
//      price: 500,
//    }
//  ];
const Product = 
    {
      id: 1,
      name: "SILVER CREST 2L Industrial 8500W Food Crusher Blender with 2 jar",
      source: "Seller: HANSEN-AC ",
      stock: "In Stock",
      Price: "₦24,691",
      Oldprice: "₦ 27,036",
      percentage: "-9%",
      image: imgb_icon 
    }
      const [quantity, setQuantity] = useState(0);
      const [showQtyToggle, setShowQtyToggle] = useState(false);

      const handleDoubleClick = () => {
        if (!showQtyToggle) {
          setQuantity(1);
          setShowQtyToggle(true);
          onAddToCart(Product, 1);
        }
      };

      const increment = () => {
        setQuantity((prev) => prev + 1);
        onUpdateQuantity(Product, quantity + 1);
      };

      const decrement = () => {
        if (quantity > 1) {
          setQuantity((prev) => prev - 1);
          onUpdateQuantity(Product, quantity - 1);
        } else {
          setQuantity(0);
          setShowQtyToggle(false);
          // Optionally, remove from cart when quantity hits zero
          onUpdateQuantity(Product, 0);
        }
      };


  return (
    <div
      className="cart-buy"
      style={{
        backgroundColor: " rgb(247, 245, 245)",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* <Navbar /> */}

      <Link
        to="/"
        style={{ textDecoration: "none", display: "flex", gap: "30px" }}
      >
        <span
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "100",
            display: "flex",
            fontSize: "12px",
            marginLeft: "90px",
            marginTop: "10px",
          }}
        >
          {" "}
          Home &nbsp; {">"} &nbsp; Health & Beauty &nbsp; {">"} &nbsp; Beauty &
          Personal Care &nbsp;{">"} &nbsp; Tools & Accessories &nbsp; {">"}
          &nbsp; Feet, Hand & Nail Tools &nbsp; {">"} &nbsp; Sets & Kits &nbsp;
          {">"} &nbsp;
          <span style={{ cursor: "text", color: "grey" }}>
            16pcs/Set Ear Pick Grooming Nail Clipper Cutter Trimmer Kit Feet
            Hand Tools{" "}
          </span>
        </span>
      </Link>
      <main className="main">
        <section
          style={{
            background: "white",
            width: "64vw",
            height: "100vh",
            display: "flex",
            paddingTop: "15px",
          }}
        >
          <div style={{}}>
            <div
              style={{
                // border: "2px solid blue",
                height: "100vh",
                paddingLeft: "20px",
                width: "25vw",
              }}
            >
              <img
                src={imgb_icon}
                alt=""
                style={{ width: "95%", height: "45%" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  // border: "2px solid green",
                  height: "54vh",
                }}
              >
                <div
                  className="small-imgs"
                  style={{ display: "flex", gap: "10px", width: "90%" }}
                >
                  <img src={imgb_icon} alt="" style={{ width: "12%" }} />
                  <img src={imgc_icon} alt="" style={{ width: "12%" }} />
                  <img src={imgb_icon} alt="" style={{ width: "12%" }} />
                  <img src={imge_icon} alt="" style={{ width: "12%" }} />
                  <img src={imgc_icon} alt="" style={{ width: "12%" }} />
                  <img src={imgb_icon} alt="" style={{ width: "12%" }} />
                </div>
                <span style={{ fontSize: "14px" }}>SHARE THIS PRODUCT</span>
                <div
                  className="social-media"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaFacebook size={25} />
                  </div>
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "1px 6px",
                      paddingTop: "1px",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "50px",
                    }}
                  >
                    <FaXTwitter size={14} />
                  </div>
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "1px 5px",
                      paddingTop: "4px",
                      borderRadius: "50px",
                    }}
                  >
                    <FaWhatsapp />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="part-b" style={{ width: "70%" }}>
            <span
              style={{ display: "flex", gap: "65px", paddingBottom: "25px" }}
            >
              <span
                style={{
                  fontSize: "20px",
                  // border: "2px solid red",
                  whiteSpace: "nowrap",
                }}
              >
                16pcs/Set Ear Pick Grooming Nail Clipper Cutter <br />
                Trimmer Kit Feet Hand Tools
              </span>
              <FaRegHeart size={20} style={{ color: "#f78503" }} />
            </span>
            <div
              className="flash-sales"
              style={{
                background: "#e92a24",
                width: "97%",
                padding: " 6px 15px",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span style={{ color: "white", fontSize: "15px" }}>
                Flash Sales
              </span>
              <span style={{ color: "white", fontSize: "15px" }}>
                Starts on: 23 Aug, 12:00pm
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span>
                ₦6,424 <span>₦ 11, 100</span>{" "}
              </span>{" "}
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaCircleExclamation size={13} />1 units left
              </span>
              <span>+ shipping from ₦750 to LEKKI-AJAH (SANGOTEDO) </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <FaStar size={19} style={{ color: "#f78503" }} />
                <FaStar size={19} style={{ color: "#f78503" }} />
                <FaStar size={19} style={{ color: "#f78503" }} />
                <FaStar size={19} style={{ color: "#f78503" }} />
                <FaStar size={19} style={{ color: "#f78503" }} />
                <Link to="" style={{ fontSize: "15px" }}>
                  (118 verified ratings)
                </Link>{" "}
              </span>
            </div>
            <div>
              <div className="products">
                {showQtyToggle ? (
                  <div>
                    <button onClick={decrement}>–</button>
                    <span style={{ margin: "0 8px" }}>{quantity}</span>
                    <button onClick={increment}>+</button>
                  </div>
                ) : (
                <button
                  onDoubleClick={handleDoubleClick}
                  className="cart-click"
                  style={{
                    fontSize: "15px",
                    display: "flex",
                    // alignItems: "center",
                    paddingLeft: "12px",
                    gap: "35%",
                  }}
                >
                  {" "}
                  <FaShoppingCart size={22} /> Add to cart
                </button>
                )}
              </div>
              <div style={{ gap: "10px" }}>
                <span style={{}}>PROMOTIONS</span> <br />
                <div style={{ paddingTop: "17px", paddingBottom: "5px" }}>
                  <span
                    style={{
                      background: "#f78503",
                      borderRadius: "50%",
                      padding: "1px 2px",
                    }}
                  >
                    {" "}
                    <FaStar
                      color="white"
                      size={15}
                      style={{ paddingTop: "2px" }}
                    />
                  </span>
                  <Link to="" style={{ marginLeft: "12px" }}>
                    Call 07006000000 To Place Your Order
                  </Link>{" "}
                </div>
                <span
                  style={{
                    background: "#f78503",
                    borderRadius: "50%",
                    padding: "1px 2px",
                  }}
                >
                  {" "}
                  <FaStar
                    color="white"
                    size={15}
                    style={{ paddingTop: "2px" }}
                  />
                </span>
                <Link style={{ marginLeft: "12px" }}>
                  Enjoy cheaper shipping fees when you select a PickUp station
                  at checkout
                </Link>
                <br />
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "white",
            width: "21vw",
            height: "100vh",
          }}
        ></section>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
