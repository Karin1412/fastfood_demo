// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { label: 'Bán hàng', link: '/home' },
    { label: 'Sản phẩm', link: '/products' },
    { label: 'Kho', link: '/inventory' },
    { label: 'Báo cáo', link: '/reports' },
    { label: 'Khuyến mãi', link: '/promotions' },
    { label: 'Setting', link: '/settings' },
  ];

  return (
    <div className="bg-gray-800 h-screen text-white p-4">
      <div className="mb-4">
        <Link to="/" className="text-lg font-bold">POS System</Link>
      </div>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-6">
              <Link to={item.link} className="hover:text-gray-300">{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
