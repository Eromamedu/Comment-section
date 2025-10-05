import React from 'react'
import img_b from "../Asset/Nail.jpeg";
import img_c from "../Asset/jumpicc.jpeg";


function Ordered({cartItems}) {
  // const Products = [
  //   {
  //     id: 1,
  //     name: "SILVER CREST 2L Industrial 8500W Food Crusher Blender with 2 jar",
  //     source: "Seller: HANSEN-AC ",
  //     stock: "In Stock",
  //     Price: "₦24,691",
  //     Oldprice: "₦ 27,036",
  //     percentage: "-9%",
  //     image: img_b
  //   },

  //   {
  //     id: 2,
  //     name: "SILVER CREST 2L Industrial 8500W Food Crusher Blender with 2 jar",
  //     source: "Seller: HANSEN-AC ",
  //     stock: "In Stock",
  //     Price: "₦24,691",
  //     Oldprice: "₦ 27,036",
  //     percentage: "-9%", 
  //     image: img_c
  //   },

  //   {
  //     id: 3,
  //     name: "SILVER CREST 2L Industrial 8500W Food Crusher Blender with 2 jar",
  //     source: "Seller: HANSEN-AC ",
  //     stock: "In Stock",
  //     Price: "₦24,691",
  //     Oldprice: "₦ 27,036",
  //     percentage: "-9%",
  //   },
  // ];

  return (
    <div className="cart-list" style={{backgroundColor:"white", width:"64vw"}}>
      {cartItems.map((product, id) => (
        <div key={id} className="item-design" style={{padding:"7px 45px"}}>
          <div className="top-div" style={{ display: "flex", justifyContent:"space-between" }}>
            <div className="product-details" style={{ display: "flex" }}>
              <img
                src={product.image}
                alt=""
                style={{ width: "6vw", height: "14vh" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span>{product.name}</span>
                <span>{product.source}</span>
                <span>{product.stock}</span>
              </div>
            </div>
            <div className="prices" style={{ display: "flex", flexDirection:"column" }}>
              <span>{product.Price}</span>
              <span>{product.Oldprice}</span>
            </div>
          </div>
          <div className="bottom-div"></div>
        </div>
      ))
    }
    </div>
  );
}

export default Ordered