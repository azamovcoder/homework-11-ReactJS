import "./adminHeader.scss";

import { IoIosMenu } from "react-icons/io";
import React from "react";

const AdminHeader = ({ setClose }) => {
  return (
    <div className="admin__header">
      <button
        onClick={() => setClose((p) => !p)}
        className="admin__header__btn"
      >
        <IoIosMenu className="admin__header__humburger" />
      </button>
      <div></div>
    </div>
  );
};

export default AdminHeader;
