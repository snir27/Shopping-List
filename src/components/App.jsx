import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import products from "../products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";

function createProduct(product) {
  return (
    <Product
      key={product.id}
      name={product.name}
      img={product.imageUrl}
      price={product.price}
    />
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={products.map(createProduct)} />
          </Routes>
        </div>
      </BrowserRouter>
      <br />
      <Footer />
    </>
  );
}

export default App;
