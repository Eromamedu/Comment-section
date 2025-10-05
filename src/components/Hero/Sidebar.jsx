import React, { useState } from "react";
// import imga_icon from "../Asset/jumig.png";


function Sidebar() {
  const categories = [
   "Appliances", 
    "Phones & Tablets",
    "Health & Beauty",
    "Home & Office",
    "Electronics",
    "Fashion",
    "Supermarket",
    "Computing",
    "Baby Products",
    "Gaming",
    "Musical Instruments",
    "Other categories",
  ];
const[hoveredItem, setHoveredItem]=useState(null);
const DropdownContent = {
  Appliances: (
    <div className="appliances">
      <div className="small-appliances">
        <span className="title-drop">SMALL APPLIANCES</span>
        <span>Blenders</span>
        <span>Deep Fryers</span>
        <span>Juicers</span>
        <span>Air Fryers</span>
        <span>Rice Cookers</span>
        <span>Toasters & Ovens</span>
        <span>Microwaves</span>
        <span>Bundles</span>
        <span>Vacuum Cleaners</span>
        <span>Kettles</span>
        <span>Yam Pounders</span>
        <span>Irons</span>
        <span>Electric Cookware</span>
        <span>Electric Drink Mixers</span>
        <span>Food processors</span>
        <span>Coffee Makers</span>
        <span>Blenders</span>
        <span>Electric pressure cookers</span>
      </div>
      <div className="large-appliances">
        <span className="title-drop">LARGE APPLIANCES</span>
        <span>Washing Machines</span>
        <span>Fridges</span>
        <span>Freezers</span>
        <span>Air Conditioners</span>
        <span>Heaters</span>
        <span>Fans</span>
        <span>Air Purifiers</span>
        <span>Water Dispensers</span>
        <span>Generators & Inverters</span>
      </div>
      <div className="home-appliances">
        <span className="title-drop">HOME APPLIANCES</span>
        <span>Nexus</span>
        <span>Hisense</span>
        <span>Polystar</span>
        <span>TLC</span>
      </div>
    </div>
  ),
  "Phones & Tablets": (
    <div className="appliancesa">
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits</span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PPHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
    // </div>
  ),

  "Health & Beauty": (
    <div className="appliancesa" style={{ marginTop: "-40%" }}>
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits </span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PPHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
    // </div>
  ),
  "Home & Office": (
    <div className="appliancesa" style={{ marginTop: "-55%" }}>
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits</span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PPHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
  ),
  Electronics: (
    <div className="appliancesa" style={{ marginTop: "-70%" }}>
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits</span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
  ),
  Fashion: (
    <div className="appliancesa" style={{ marginTop: "-86%" }}>
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits</span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PPHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
  ),
  Supermarket: (
    <div className="appliancesa" style={{ marginTop: "-101%" }}>
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits</span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PPHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
  ),
  Computing: (
    <div className="appliancesa" style={{ marginTop: "-117%" }}>
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits</span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PPHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
  ),
  "Baby Products": (
    <div className="appliancesa" style={{ marginTop: "-132%" }}>
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits</span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PPHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
  ),
  Gaming: (
    <div className="appliancesa" style={{ marginTop: "-148%" }}>
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits</span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PPHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
  ),
  "Musical Instruments": (
    <div className="appliancesa" style={{ marginTop: "-164%" }}>
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits</span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PPHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
  ),
  "Other categories": (
    <div className="appliancesa" style={{ marginTop: "-179%" }}>
      <div
        className="small-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">MOBILE PHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TABLETS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
      <div className="large-appliances">
        <span className="title-drop">MOBILE ACCESSORIES</span>
        <span>Accessory Kits</span>
        <span>Adapters</span>
        <span>Batteries</span>
        <span>Battery Chargers</span>
        <span>Bluetooth Headset</span>
        <span>Cables</span>
        <span>Car Accessories</span>
        <span>Chargers</span>
        <span>Earphones & Headsets</span>
        <span>MicroSD Cards</span>
        <span>Screen Protectors</span>
        <span>Selfie Sticks & Tripods</span>
        <span>Smart Watches</span>
        <span>Power banks</span>
        <span>Phone Camera Lenses</span>
      </div>
      {/* <div className="home-appliances"> */}
      <div
        className="home-appliances"
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP SMARTPHONES</span>
          <span>Smart Phones</span>
          <span>Android Phones</span>
          <span>Iphones</span>
          <span>Basic Phones</span>
          <span>Refurbished Phones</span>
          <span>Rugged Phones</span>
          <span>Cordless Phones</span>
          <span>Dual Sim Phones</span>
        </div>
        <div style={{ display: "flex", flexDirection: "Column", gap: "5px" }}>
          <span className="title-drop">TOP PPHONE BRANDS</span>
          <span>Ipads</span>
          <span>Android Tablets</span>
          <span>Educational TAblets</span>
          <span>Tablet Accessories</span>
          <span>Amazon Fire Tablets</span>
          <span>Microsoft Tablets</span>
        </div>
      </div>
    </div>
  ),
};
  return (
    // <div className="sidebar-container">
    <div className="sidebar">
      {categories.map((cat, index) => (
        <div
          className="sidebar-item"
          key={index}
          onMouseEnter={() => {
            setHoveredItem(cat);
          }}
          onMouseLeave={()=>{setHoveredItem(null)}}
          // onClick={()=>{setHoveredItem(hoveredItem)}}
          style={{ position: "relative" }}
        >
          {cat}
         {hoveredItem=== cat &&(
          <div className="dropdown">
            {DropdownContent[cat]}
          </div>
         )}
        </div>
      ))}
    </div>
    // </div>
  );
}

export default Sidebar;

// const Hero = () => (
//   <section className="hero-wrapper">
//     <div className="hero">
//       <div id="left-div" className="top-div-items">
//         Category
//       </div>
//       <div id="center-div">
//         <img  alt =""/>
//       </div>
//       <div id="right-div" className="top-div-items">
//         Offers
//       </div>
//     </div>
//   </section>
// );
