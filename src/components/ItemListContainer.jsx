import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from '../data/asyncMock';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <main>
        <div className="welcome-box">
          <h1 className="welcome-text">{greeting}</h1>
        </div>
        <div className="loading-container">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="welcome-box">
        <h1 className="welcome-text">{greeting}</h1>
      </div>
      
      {categoryId && (
        <div className="category-title-box">
          <h2 className="category-title">{categoryId.toUpperCase()}</h2>
        </div>
      )}
      
      <section className="products-section">
        <ItemList products={products} />
      </section>
    </main>
  );
};

export default ItemListContainer;
