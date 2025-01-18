import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleCartToggle = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="in-cart">Add to Cart</button>
    </li>
  );
}

export default Item;
