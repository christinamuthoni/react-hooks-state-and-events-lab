import React, {useState}from "react";

function Item({ name, category }) {

  const[isInCart, setIsInCart] = useState(false)

  // Define a function to handle adding/removing from the cart
  const handleToggleCart = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };
  
   const className = isInCart ? 'in-cart' : '';

  return (
    <li className={className}>
      {isInCart ? 'in-cart' : 'The item is NOT in the cart'}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleToggleCart}>{isInCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
