import React from "react";
import ImageProduct from "./ImageProduct";

function Product(props) {
  return (
    <div className="product">
      <div class="row">
        <h1 className="name">{props.name}</h1>
        <h3 className="price">{props.price}</h3>
      </div>
      <ImageProduct img={props.img} />
    </div>
  );
}

export default Product;
