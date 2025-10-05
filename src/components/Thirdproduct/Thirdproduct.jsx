import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import imga_icon from "../Asset/jumban.jpeg";
import imgb_icon from "../Asset/jumpicb.jpeg";
import imgc_icon from "../Asset/jumpicc.jpeg";
import imgd_icon from "../Asset/jumpicd.jpeg";
import imge_icon from "../Asset/jumpice.jpeg";
import imgf_icon from "../Asset/jumpicf.jpeg";

function Thirdproduct() {
  return (
    <div className="third-product">
      <div className="second-product">
        <div className="main-thirdproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgd_icon} alt="" className="second-imagea" />
            </div>
            <span className="img-txta">Phones & Tablets</span>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgf_icon} alt="" className="second-imagea" />
            </div>
            <span className="img-txta">TV & Audio</span>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <span className="img-txta">Beauty Must Have</span>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea" />
            </div>
            <span className="img-txta">Appliances</span>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imge_icon} alt="" className="second-imagea" />
            </div>
            <span className="img-txta">Generators & Inverters</span>
          </div>

          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <span className="img-txta">Fashion</span>
          </div>
        </div>
      </div>

      <div className="second-producta">
        <div className="main-thirdproduct">
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgb_icon} alt="" className="second-imagea"/>
            </div>
            <span className="img-txta"> Home & Office </span>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imge_icon} alt="" className="second-imagea" />
            </div>
            <span className="img-txta">Computing</span>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imga_icon} alt="" className="second-imagea" />
            </div>
            <span className="img-txta">Wristwatches</span>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgc_icon} alt="" className="second-imagea" />
            </div>
            <span className="img-txta">Mobile Accessories</span>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgd_icon} alt="" className="second-imagea" />
            </div>
            <span className="img-txta">Sneakers</span>
          </div>
          <div className="secondimg-box">
            <div className="second-image">
              <img src={imgf_icon} alt="" className="second-imagea" />
            </div>
            <span className= "img-txta" > Automobile </span>
          </div>
        </div>
      </div>
    </div>
  );


//     import React, { useCallback, useEffect, useMemo, useState } from "react";
// import "./app.css";
// import Navbar from "./Components/Navbar/Navbar";
// import Page from "./Components/Page/page";
// import Ez
// // import Home from "./Components/Home/home";
// // import Main from "./Components/Main/main";
// // import Footer from "./Components/Footer/footer";
// import Pinfo from "./Components/Pinfo/pinfo";
// import Cartshop from "./Components/Cartshop/shop";
// import Login from "./Components/Login/login";
// import RegisterForm from "./Components/RegisterForm/reg";
// import Stopwatch from "./Components/Stopwatch/timer";
// import axios from "axios";
// import { Value } from "sass";
// // import Modal from  "./Components/Modal/modal";

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [cart, setcart] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [search, setsearch] = useState("");

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

  // useEffect(() => {
  //   const fetdhdata = async () => {
  //     try {
  //       const response = await axios({
  //         url: "https://real-time-amazon-data.p.rapidapi.com/search?query=Loiyus",
  //         method: "GET",
  //         params: {
  //           query: "Phone"
  //         },
  //         headers: {
  //           Authorization: "",
  //           "x-rapidapi-key":
  //             "87e66598c3msh77c20cdca3581b3p1ac346jsneb6fc2ea5220",
  //           "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  //         },
  //       });

  //       console.log(response?.data?.data);
  //       if (response?.data?.data?.products) {
  //         const totalProduct = response?.data?.data?.total_products;
  //         setcart(response?.data?.data?.products);
  //         console.log(totalProduct);
  //       }
  //     } catch (e) {}
  //   };

  //   fetdhdata();
  // }, [cart]);

  }
export default Thirdproduct;