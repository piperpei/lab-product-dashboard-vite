import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // Step 2: Define your list of product objects
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ]);

  // Step 3: Handle product removal (for the “Remove” button test)
  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <h1>Product Dashboard</h1>
      <ProductList products={products} onRemove={handleRemove} />
    </>
  );
};

export default App;