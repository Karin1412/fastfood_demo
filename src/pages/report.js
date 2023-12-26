// src/pages/ReportPage.js
import React, { useState } from 'react';
import Header from '../components/header';
import '../style/report.css'; // Import the CSS file

const ReportPage = () => {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A', price: 100, amount: 100, date: '2023-01-15' },
    { id: 2, name: 'Sản phẩm B', price: 150, amount: 130, date: '2023-02-20' },
    { id: 3, name: 'Sản phẩm C', price: 200, amount: 130, date: '2023-02-25' },
    // ... (Thêm sản phẩm khác)
  ]);

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStockMonth, setSelectedStockMonth] = useState(''); // Thêm state cho bộ lọc tồn
  const [selectedStockYear, setSelectedStockYear] = useState(''); // Thêm state cho bộ lọc tồn

  // Hàm tính tồn kho
  const calculateStock = (product) => {
    // Logic tính tồn kho tại đây
    return product.amount;
  };

  // Tính doanh thu và tồn kho cho mỗi sản phẩm dựa trên tháng và năm được chọn
  const filteredData = products
    .filter((product) => {
      const productDate = new Date(product.date);
      const productMonth = productDate.getMonth() + 1; // Tháng bắt đầu từ 0
      const productYear = productDate.getFullYear();

      return (
        (!selectedMonth || productMonth === Number(selectedMonth)) &&
        (!selectedYear || productYear === Number(selectedYear))
      );
    })
    .map((product) => ({
      id: product.id,
      name: product.name,
      revenue: product.price * product.amount,
      stock: calculateStock(product), // Số lượng tồn
    }));

  return (
    <div className="report-page">
      {/* Header */}
      <Header />

      {/* Nội dung báo cáo */}
      <div className="report-content">
        <h1 className="text-2xl font-bold mb-4">Báo cáo doanh thu</h1>

        {/* Bộ lọc doanh thu */}
        <div className="filter-section">
          <label htmlFor="month">Tháng:</label>
          <select
            id="month"
            onChange={(e) => setSelectedMonth(e.target.value)}
            value={selectedMonth}
          >
            <option value="">Tất cả</option>
            <option value="1">Tháng 1</option>
            <option value="2">Tháng 2</option>
            {/* ... (Thêm các tháng khác) */}
          </select>

          <label htmlFor="year">Năm:</label>
          <select
            id="year"
            onChange={(e) => setSelectedYear(e.target.value)}
            value={selectedYear}
          >
            <option value="">Tất cả</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            {/* ... (Thêm các năm khác) */}
          </select>
        </div>

        {/* Bảng báo cáo doanh thu */}
        <table className="report-table">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Doanh thu</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Bộ lọc tồn kho */}
        

        {/* Bảng báo cáo tồn kho */}
        <h2 className="text-2xl font-bold mt-4 mb-4">Bảo cáo tồn kho</h2>

        <div className="filter-section">
          <label htmlFor="stock-month">Tháng:</label>
          <select
            id="stock-month"
            onChange={(e) => setSelectedStockMonth(e.target.value)}
            value={selectedStockMonth}
          >
            <option value="">Tất cả</option>
            <option value="1">Tháng 1</option>
            <option value="2">Tháng 2</option>
            {/* ... (Thêm các tháng khác) */}
          </select>

          <label htmlFor="stock-year">Năm:</label>
          <select
            id="stock-year"
            onChange={(e) => setSelectedStockYear(e.target.value)}
            value={selectedStockYear}
          >
            <option value="">Tất cả</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            {/* ... (Thêm các năm khác) */}
          </select>
        </div>

        <table className="report-table">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng tồn</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportPage;