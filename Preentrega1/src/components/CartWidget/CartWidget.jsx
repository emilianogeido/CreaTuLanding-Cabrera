import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="cartIcon">
      <Link to={"/cart"}>
        <FaCartShopping />
      </Link>
    </div>
  );
};

export default CartWidget;
