// src/components/ProductForm.js
import React, {useState} from 'react';
import '../../style/product.css'

const ProductForm = ({ onClose, onProductAdd }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Kiểm tra xem có dữ liệu đầy đủ không
      if (productName && productPrice) {
        const newProduct = {
          id: Date.now(), // Đơn giản sử dụng timestamp làm ID (thực tế sẽ được xử lý một cách phức tạp hơn)
          name: productName,
          price: Number(productPrice),
        };
        onProductAdd(newProduct);
      }
    };
  
    return (
      <div className="product-form-overlay">
        <div className="product-form">
          <h2 className="text-xl font-bold mb-4">Thêm Sản phẩm</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                Tên Sản phẩm
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="form-input"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
                Giá Sản phẩm
              </label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                className="form-input"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={onClose} className="mr-2">
                Hủy
              </button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-1">
                Thêm
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ProductForm;