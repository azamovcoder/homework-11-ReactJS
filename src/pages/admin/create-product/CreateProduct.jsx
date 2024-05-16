import "./createProduct.scss";
import "./createProduct.scss";

import React, { useState } from "react";

import axios from "../../../api";
import { toast } from "react-toastify";

let initialState = {
  name: "",
  price: "",
  desc: "",
};

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState);

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(newProduct);

    axios
      .post("/products", newProduct)
      .then((res) => {
        setNewProduct(initialState);
        console.log(res);
      })
      .catch((res) => console.log(res));
  };

  return (
    <>
      <div className="form">
        <form className="form__info" onSubmit={handleCreate} action="">
          <div className="form__card">
            <label htmlFor="name">Product Name:</label>
            <input
              id="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="form__card">
            <label htmlFor="price">Product Cost:</label>
            <input
              id="cost"
              value={newProduct.cost}
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, price: +e.target.value }))
              }
              type="number"
              placeholder="Cost"
            />
          </div>
          <div className="form__card">
            <label htmlFor="desc">Product Category:</label>
            <input
              id="category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, category: e.target.value }))
              }
              type="text"
              placeholder="Category"
            />
          </div>
          <button className="form__btn">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
