// src/pages/SalesPage.js
import React, { useState } from 'react';
import Header from '../components/header';
import ProductList from '../components/home/productList';
import CheckoutArea from '../components/home/checkoutArea';

const SalesPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (product) => {
    const existingProduct = selectedProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      setSelectedProducts(
        selectedProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
  };

  const handleIncrease = (product) => {
    setSelectedProducts(
      selectedProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const handleDecrease = (product) => {
    if (product.quantity > 1) {
      setSelectedProducts(
        selectedProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  };

  const handleRemove = (product) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
  };

  return (
    <div className="flex h-screen">
      {/* Header */}
      <Header />

      {/* Danh sách sản phẩm */}
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
        <ProductList onProductSelect={handleProductSelect} />
      </div>

      {/* Khu vực thanh toán */}
      <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Khu vực thanh toán</h2>
        <CheckoutArea
          selectedProducts={selectedProducts}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      </div>
    </div>
  );
};

export default SalesPage;
