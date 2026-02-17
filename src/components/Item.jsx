import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price.toFixed(2)}</p>
      <Link to={`/item/${id}`} className="btn btn-dark view-detail-btn">
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;
