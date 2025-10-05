import React from "react";
import imga_icon from "../Asset/jumban.jpeg";
import {FaStar} from "react-icons/fa";

// const cats = ["Phones", "Fashion", "Electronics", "Home", "Beauty", "Toys"];

function MainBanner() {
  return (
    <div className="main-banner">
      <div className="mid-banner">
        <img src={imga_icon} alt="" />
      </div>
      <div className="righttop-box">
        <div className="whitebox">
          <h3 className="contact">
            CALL TO ORDER <span>07013656478</span>
          </h3>
          <h3>Sell on Jumia</h3>
          <h3>Send Your Packages</h3>
        </div>
        <div className="jum-star">
          <h1 className="jumtxt">
            JUMIA <br />
            <span>FORCE</span>
          </h1>
          <span className="starboxz">
            <FaStar color="orange" size={25} />
          </span>
        </div>
        <h3 className="join">JOIN NOW</h3>
      </div>
    </div>
  );
}

export default MainBanner

























// const Categories = () => (
//   <section className="categories">
//     {cats.map((c) => (
//       <div key={c} className="nav-category-items">
//         {c}
//       </div>
//     ))}
//   </section>
// );

// export default Categories;
