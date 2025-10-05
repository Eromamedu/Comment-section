import React from "react";
import imga_icon from "../Asset/jumban.jpeg";
import imgb_icon from "../Asset/jumpicb.jpeg";
import imgc_icon from "../Asset/jumpicc.jpeg";
import imgd_icon from "../Asset/jumpicd.jpeg";
import imge_icon from "../Asset/jumpice.jpeg";
import imgf_icon from "../Asset/jumpicf.jpeg";
import imgg_icon from "../Asset/jumpicg.jpeg";

function firstProduct() {
  return (
    <div className="first-product">
      <div className="img-box">
        <div className="imaged">
          <img src={imga_icon} alt="" className="imagee" />
          <span className="img-text">Awoof Deals</span>
        </div>
      </div>
      <div className="img-box">
        <div className="imaged">
          <img src={imgb_icon} alt="" className="imagee" />
          <span className="img-text">Up to 80% off</span>
        </div>
      </div>
      <div className="img-box">
        <div className="imaged">
          <img src={imgc_icon} alt="" className="imagee" />
          <span className="img-text">Send packages</span>
        </div>
      </div>
      <div className="img-box">
        <div className="imaged">
          <img src={imgd_icon} alt="" className="imagee" />
          <span className="img-text">Up to 50% off</span>
        </div>
      </div>
      <div className="img-box">
        <div className="imaged">
          <img src={imge_icon} alt="" className="imagee" />
          <span className="img-text">Unlock Your Deal </span>
        </div>
      </div>
      <div className="img-box">
        <div className="imaged">
          <img src={imgf_icon} alt="" className="imagee" />
          <span className="img-text">Banger Deals</span>
        </div>
      </div>
      <div className="img-box">
        <div className="imaged">
          <img src={imgc_icon} alt="" className="imagee" />
          <span className="img-text">Send packages</span>
        </div>
      </div>
      <div className="img-box">
        <div className="imaged">
          <img src={imgg_icon} alt="" className="imagee" />
          <span className="img-text">Earn & Shop</span>
        </div>
      </div>
    </div>
  );
}

export default firstProduct;
