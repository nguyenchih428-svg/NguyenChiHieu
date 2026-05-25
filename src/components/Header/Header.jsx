import React from 'react';
import './Header.css';
import logo from '../img/logo.png'; 

const Header = () => {
  return (
    <header className="phuclong-header py-2 bg-white border-bottom">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Cột trái: Logo và Hotline (Thay thế Free Delivery) */}
          <div className="col-md-6">
            <div className="header-left d-flex align-items-center gap-4">
              <a href="/" className="d-inline-block">
                <img 
                  src={logo} 
                  alt="Galaxy Cafe Logo" 
                  style={{ height: '55px', objectFit: 'contain' }} 
                />
              </a>
              <span className="fw-bold text-danger fs-5">1800 6779</span>
            </div>
          </div>

          {/* Cột phải: Đăng nhập & Ngôn ngữ */}
          <div className="col-md-6 text-end">
            <div className="header-actions d-flex justify-content-end align-items-center gap-3">
              <a 
                href="/login" 
                className="text-decoration-none text-dark small fw-bold"
              >
                Đăng nhập
              </a>
              <div className="language-switch small text-muted border-start ps-3">
                <span className="cursor-pointer">VN</span>
                <span className="mx-1">|</span>
                <span className="cursor-pointer">EN</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;