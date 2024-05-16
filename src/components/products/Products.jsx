import "./products.scss";

import Loading from "../loading/Loading";
import React from "react";
import axios from "../../api";

const Products = ({ data, isAdmin, setReload, loading }) => {
  const handleDelete = (id) => {
    if (confirm("O'chirishni xoxlaysizmi")) {
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
      <h3>{product.name}</h3>
      <p>{product.cost}$</p>
      <p>{product.category}</p>
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
  ));
  return (
    <div>
      <div className="products">{loading ? <Loading /> : productItem}</div>
    </div>
  );
};

export default Products;
