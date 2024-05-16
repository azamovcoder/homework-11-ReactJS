import "../create-product/createProduct.scss";

import React, { useState } from "react";

import axios from "../../../api";

let initialState = {
  name: "",
  price: "",
  desc: "",
};

const CreateUser = () => {
  const [newUser, setNewUser] = useState(initialState);

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(newUser);

    axios
      .post("/users", newUser)
      .then((res) => {
        setNewUser(initialState);
        console.log(res);
      })
      .catch((res) => console.log(res));
  };

  return (
    <div className="form">
      <form className="form__info" onSubmit={handleCreate} action="">
        <div className="form__card">
          <label htmlFor="fullName">User Name:</label>
          <input
            id="fullName"
            value={newUser.name}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="form__card">
          <label htmlFor="surname">User surname:</label>
          <input
            id="surname"
            value={newUser.surname}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, surname: e.target.value }))
            }
            type="text"
            placeholder="Surname"
          />
        </div>
        <div className="form__card">
          <label htmlFor="username">User username:</label>
          <input
            id="username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, username: e.target.value }))
            }
            type="text"
            placeholder="username"
          />
        </div>

        <button className="form__btn">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
