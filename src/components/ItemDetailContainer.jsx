import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../data/asyncMock';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error('Error al cargar el producto:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <main className="detail-loading-container">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="not-found-container">
        <h2>Producto no encontrado</h2>
        <p>El producto que buscas no existe.</p>
      </main>
    );
  }

  return (
    <main>
      <ItemDetail {...product} />
    </main>
  );
};

export default ItemDetailContainer;
