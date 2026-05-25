import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  // Hàm kiểm tra trạng thái active của menu
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom sticky-top py-2">
      <div className="container">
        {/* Nút bấm Menu cho giao diện điện thoại */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Cụm Menu bên trái: TRANG CHỦ, GIỚI THIỆU, LIÊN HỆ, GIỎ HÀNG */}
          <ul className="navbar-nav me-auto gap-3">
            <li className="nav-item">
              <Link 
                className={`nav-link fw-bold ${isActive('/') ? 'text-success' : 'text-dark'}`} 
                to="/"
              >
                TRANG CHỦ
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className={`nav-link fw-bold ${isActive('/about') ? 'text-success' : 'text-dark'}`} 
                to="/about"
              >
                GIỚI THIỆU
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className={`nav-link fw-bold ${isActive('/contact') ? 'text-success' : 'text-dark'}`} 
                to="/contact"
              >
                LIÊN HỆ
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className={`nav-link fw-bold ${isActive('/cart') ? 'text-success' : 'text-dark'}`} 
                to="/cart"
              >
                GIỎ HÀNG
              </Link>
            </li>
          </ul>

          {/* Cục Hotline hỗ trợ gắn vào bên phải dòng Menu (theo image_b90ad6.png) */}
          <div className="d-none d-lg-block">
            <div 
              className="d-flex align-items-center px-3 py-1 rounded-pill shadow-sm border" 
              style={{ 
                backgroundColor: '#f8f9fa', 
                minWidth: '180px',
                border: '1px solid #eee'
              }}
            >
              <div className="text-center w-100">
                <div 
                  className="fw-bold text-muted" 
                  style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                >
                  HOTLINE HỖ TRỢ :
                </div>
                <div 
                  className="fw-bold mb-0" 
                  style={{ color: '#28a745', fontSize: '1rem', lineHeight: '1.1' }}
                >
                  1800 6779
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;