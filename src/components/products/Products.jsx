import "./products.scss";

import Loading from "../loading/Loading";
import React from "react";
import axios from "../../api";

const Products = ({ data, isAdmin, setReload, loading }) => {
  const handleDelete = (id) => {
    if (confirm("Are you Sure")) {
      axios
        .delete(`products/${id}`)
        .then((res) => {
          setReload((p) => !p);
          console.log(res);
        })
        .catch((res) => console.log(res));
    }
  };

  let productItem = data?.map((product) => (
    <div className="products__card" key={product.id}>
      <div className="products__img">
        <img src={product.img} alt="" />
      </div>
      <div className="products__info">
        <h3>Name: {product.name}</h3>
        <p>Cost: {product.cost}$</p>
        <p>Category: {product.category}</p>
        {isAdmin ? (
          <>
            <button
              onClick={() => handleDelete(product.id)}
              className="btn__delete"
            >
              Delete
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  ));
  return (
    <>
      <div className="hero ">
        <div className="container">
          <h2>Products</h2>
          <div className="products">{loading ? <Loading /> : productItem}</div>
        </div>
      </div>
    </>
  );
};

export default Products;
