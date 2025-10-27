import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  // Conditional rendering for empty product list
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </>
  );
};

export default ProductList;