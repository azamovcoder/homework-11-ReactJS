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
        toast.success("Qo'shildi");
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
              placeholder="Nomi"
            />
          </div>
          <div className="form__card">
            <label htmlFor="price">Product Narxi:</label>
            <input
              id="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, price: +e.target.value }))
              }
              type="number"
              placeholder="Narxi"
            />
          </div>
          <div className="form__card">
            <label htmlFor="desc">Product Desc:</label>
            <input
              id="desc"
              value={newProduct.desc}
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, desc: e.target.value }))
              }
              type="text"
              placeholder="Description"
            />
          </div>
          <button className="form__btn">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
