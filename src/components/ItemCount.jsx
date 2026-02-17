import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="counter-controls">
        <button 
          className="btn btn-outline-dark" 
          onClick={decrement}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="counter-value">{quantity}</span>
        <button 
          className="btn btn-outline-dark" 
          onClick={increment}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="btn btn-dark add-to-cart-btn" 
        onClick={() => onAdd(quantity)}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
      </button>
    </div>
  );
};

export default ItemCount;
