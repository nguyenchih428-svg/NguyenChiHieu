import React from 'react';
import './Footer.css';
// Đường dẫn dựa theo cấu trúc thư mục: lùi 2 cấp rồi vào Header/img
import logo from '../img/logo.png'; 

const Footer = () => {
  return (
    <footer className="highlands-footer">
      {/* Thanh trang trí phía trên */}
      <div className="footer-green-strip"></div>

      <div className="footer-content">
        {/* Phần bên trái: Logo và Bản quyền */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Galaxy Cafe" className="footer-logo-img" />
          </div>
          <p className="footer-copyright">
            ©2026 Galaxy Cafe. All rights reserved
          </p>
        </div>

        {/* Phần giữa: Các cột liên kết điều hướng */}
        <div className="footer-middle">
          {/* Cột 1: VỀ GALAXYCAFE */}
          <div className="footer-column">
            <h3 className="footer-column-title">Thông tin shop nek</h3>
            <ul className="footer-links">
              <li><a href="/origin">Nguồn gốc</a></li>
              <li><a href="/services">Dịch vụ</a></li>
              <li><a href="/careers">Nghề Nghiệp</a></li>
              <li><a href="/contact">Liên hệ</a></li>
            </ul>
          </div>

          {/* Cột 2: HỆ THỐNG CỬA HÀNG */}
          <div className="footer-column">
            <h3 className="footer-column-title">HỆ THỐNG CỬA HÀNG</h3>
            <ul className="footer-links">
              <li><a href="/find-store">Tìm cửa hàng gần nhất</a></li>
            </ul>
          </div>

          {/* Cột 3: TIN TỨC */}
          <div className="footer-column">
            <h3 className="footer-column-title">TIN TỨC</h3>
            <ul className="footer-links">
              <li><a href="/news">Sự kiện mới</a></li>
              <li><a href="/blog">Blog chia sẻ</a></li>
            </ul>
          </div>
        </div>

        {/* Phần bên phải: Mạng xã hội & Bản đồ */}
        <div className="footer-right">
          <h3 className="footer-column-title">THEO DÕI CHÚNG TÔI</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://tiktok.com" className="social-icon" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>

          <div className="footer-map">
            <iframe
              title="Bản đồ địa điểm Galaxy Cafe"
              className="footer-map_iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.66!2d106.634!3d10.7439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7c31d45151%3A0x66f6885368a1837c!2zSOG7kyBDaMOtIE1pbmgsIFRowG7mG5nIEjhu691!5e0!3m2!1svi!2s!4v1715000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="footer-map_link"
              href="https://maps.app.goo.gl/6RuUrqKaYAFspPe57"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mở trong Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Nút Chat nhanh (Floating) */}
      <div className="footer-chat-icon" title="Chat với chúng tôi">
        <i className="fas fa-comment-dots"></i>
      </div>
    </footer>
  );
};

export default Footer;