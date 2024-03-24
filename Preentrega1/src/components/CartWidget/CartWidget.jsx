import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext'
const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <div className="cartIcon">
      <Link to={"/cart"}>
        <FaCartShopping /> <span>{getQuantity()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
