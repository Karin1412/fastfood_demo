// src/pages/ReportPage.js
import React, { useState } from 'react';
import Header from '../components/header';
import '../style/report.css';

const ReportPage = () => {
  // Dữ liệu thống kê doanh thu của từng sản phẩm
  const reportData = [
    // ... (Dữ liệu báo cáo)
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const reportItemsPerPage = 5; // Số lượng mục báo cáo hiển thị trên mỗi trang

  // Tính toán số lượng trang
  const totalPages = Math.ceil(reportData.length / reportItemsPerPage);

  // Lấy danh sách mục báo cáo cho trang hiện tại
  const currentReportItems = reportData.slice(
    (currentPage - 1) * reportItemsPerPage,
    currentPage * reportItemsPerPage
  );

  // Hàm xử lý sự kiện khi chuyển trang
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Hàm xử lý sự kiện khi thay đổi tháng
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Hàm xử lý sự kiện khi thay đổi năm
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="report-page">
      {/* Header */}
      <Header />

      {/* Vùng báo cáo dạng bảng */}
      <div className="report-content">
        <h1 className="text-2xl font-bold mb-4">Báo cáo doanh thu</h1>

        {/* Filter tháng và năm */}
        <div className="flex mb-4">
          <label className="mr-2">Tháng:</label>
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="border border-gray-400 px-2 py-1"
          >
            {/* Options cho tháng */}
          </select>

          <label className="ml-4 mr-2">Năm:</label>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="border border-gray-400 px-2 py-1"
          >
            {/* Options cho năm */}
          </select>
        </div>

        {/* Bảng báo cáo */}
        <table className="w-full border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Sản phẩm</th>
              <th className="border border-gray-500 px-4 py-2">Doanh thu</th>
            </tr>
          </thead>
          <tbody>
            {currentReportItems.map((item) => (
              <tr key={item.productId}>
                <td className="border border-gray-500 px-4 py-2">{item.productName}</td>
                <td className="border border-gray-500 px-4 py-2">{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Phân trang */}
        <div className="mt-4 flex justify-end">
          <div>
            <button
              className="bg-blue-500 text-white px-4 py-1 ml-2"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-1 ml-2"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
