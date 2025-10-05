import React from "react";

function Promo() {
const promos = ["Awoof of the Month", "Clearance Sales" , "Jumia Delivery" , "Buy 2 Items Get 1", "Jumia Force", "Gadget Deals"];

  return (
    <div className="promos">
   { promos.map((promo, i)=>(
    <div key={i} className="promo-item"> {promo}</div>
   ))

   }
    </div>
  )
}

export default Promo

























// const sampleProducts = Array.from({ length: 8 }, (_, i) => ({
//   id: i,
//   name: `Product ${i + 1}`,
//   img: "https://via.placeholder.com/200",
//   price: (10 + i) * 100,
// }));

// const ProductGrid = () => (
//   <main className="products">
//     {sampleProducts.map((p) => (
//       <div key={p.id} className="product-card">
//         <img src={p.img} alt={p.name} />
//         <h3>{p.name}</h3>
//         <p>₦{p.price}</p>
//         <button>Add to Cart</button>
//       </div>
//     ))}
//   </main>
// );

// export default ProductGrid;
