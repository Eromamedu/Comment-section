import React from 'react'
import Sidebar from "../Hero/Sidebar.jsx";
import Navbar from "../header/headers.jsx";
import MainBanner from "../MainBanner/MainBanner.jsx";
import FirstProduct from "../first-product/First-product.jsx";
import Secondproduct from "../Secondproduct/Secondproduct.jsx";
import Thirdproduct from "../Thirdproduct/Thirdproduct.jsx";
import Fourthproduct from "../fourth-product/Fourthproduct.jsx";
import Footer from "../Footer/Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar/>
<div className="top-content">
        <div className="main-container">
          <Sidebar />
        </div>
        <div className="sub-container">
          <MainBanner />
          {/* <Promo/> */}
        </div>
      </div>
      <FirstProduct />
      <Secondproduct/>
      <Thirdproduct/>
      <Fourthproduct/>
      <Footer/>
      </div>
  )
}

export default Home;