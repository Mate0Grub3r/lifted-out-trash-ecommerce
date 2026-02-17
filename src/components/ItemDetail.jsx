import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, price, image, description, stock, category }) => {
  const handleOnAdd = (quantity) => {
    console.log(`Agregados ${quantity} productos al carrito`);
    // Aquí posteriormente se implementará la lógica del carrito
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail-image">
          <img src={image} alt={name} />
        </div>
        <div className="item-detail-info">
          <span className="item-category">{category.toUpperCase()}</span>
          <h1 className="item-detail-title">{name}</h1>
          <p className="item-detail-description">{description}</p>
          <div className="item-detail-price-stock">
            <h2 className="item-detail-price">${price.toFixed(2)}</h2>
            <span className="item-stock">
              {stock > 0 ? `Stock disponible: ${stock}` : 'Sin stock'}
            </span>
          </div>
          <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
