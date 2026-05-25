import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import các components giao diện
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

// Import các trang chức năng sản phẩm
import ProductList from './components/Products/ProductList';
import DetailProduct from './components/Products/DetailProduct';
import About from './components/Products/About';
import Cart from './components/Pages/Cart';
import News from './components/Products/News';

// Import các trang thành viên
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Profile from './components/Pages/Profile';

// Import Admin
import Admin from './components/Pages/Admin'; // THÊM

// Import CSS toàn cục
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Component giả lập trang quản trị
const AdminDashboard = () => (
  <div className="container py-5 text-center">
    <h1 className="fw-bold">Admin Dashboard</h1>
    <p className="text-muted">Chào mừng nhân viên hệ thống!</p>
  </div>
);

function App() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      
      {/* Header chính */}
      <Header />

      {/* Navigation */}
      <Navigation />

      {/* Nội dung */}
      <main className="main-content flex-grow-1">
        <Routes>

          {/* =================== TRANG CHỦ =================== */}
          <Route
            path="/"
            element={
              <>
                <Banner />

                <div className="container mt-2">

                  {/* DANH MỤC */}
                  <section className="home-section mb-4">
                    <ProductList showCategoryGrid={true} />
                  </section>

                  {/* TIN TỨC */}
                  <section className="home-section mb-4">
                    <div className="text-center mb-3">
                      <h2
                        className="fw-bold text-uppercase"
                        style={{
                          color: '#1a472a',
                          fontSize: '1.5rem'
                        }}
                      >
                        Tin Tức Mới Nhất
                      </h2>
                    </div>

                    <div className="row g-3">

                      <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body p-3">
                            <h6 className="card-title fw-bold">
                              Bí quyết chọn trái cây sạch
                            </h6>

                            <p className="card-text text-muted small mb-2">
                              Cách Leaf Fruit lựa chọn những quả táo tươi ngon nhất mỗi ngày...
                            </p>

                            <button className="btn btn-link p-0 text-success fw-bold text-decoration-none small">
                              Xem thêm
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body p-3">
                            <h6 className="card-title fw-bold">
                              Khai trương chi nhánh mới
                            </h6>

                            <p className="card-text text-muted small mb-2">
                              Ghé thăm không gian mới với nhiều ưu đãi hấp dẫn tại trung tâm...
                            </p>

                            <button className="btn btn-link p-0 text-success fw-bold text-decoration-none small">
                              Xem thêm
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body p-3">
                            <h6 className="card-title fw-bold">
                              Công thức nước ép tại gia
                            </h6>

                            <p className="card-text text-muted small mb-2">
                              Tự tay pha chế ly nước ép thanh lọc cơ thể chỉ trong 5 phút...
                            </p>

                            <button className="btn btn-link p-0 text-success fw-bold text-decoration-none small">
                              Xem thêm
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </section>

                  {/* ƯU ĐÃI */}
                  <section className="home-section mb-4">
                    <div className="text-center mb-3">
                      <h2
                        className="fw-bold text-uppercase"
                        style={{
                          color: '#1a472a',
                          fontSize: '1.5rem'
                        }}
                      >
                        Ưu Đãi Đặc Biệt
                      </h2>
                    </div>

                    <div className="row g-2 justify-content-center">

                      {[
                        {
                          id: 1,
                          name: 'Trái Cây Nội Địa',
                          discount: 'Giảm 10%'
                        },
                        {
                          id: 2,
                          name: 'Nước Ép Tươi',
                          discount: 'Mua 2 Tặng 1'
                        },
                        {
                          id: 3,
                          name: 'Giỏ Quà Trái Cây',
                          discount: 'Giảm 15%'
                        },
                        {
                          id: 4,
                          name: 'Trái Cây Sấy',
                          discount: 'Đồng giá 49k'
                        },
                        {
                          id: 5,
                          name: 'Mứt & Siro',
                          discount: 'Giảm 20%'
                        }
                      ].map((item) => (
                        <div
                          key={item.id}
                          className="col-6 col-md-4 col-lg-2"
                        >
                          <div
                            className="p-2 border rounded-3 text-center bg-white shadow-sm h-100 d-flex flex-column align-items-center justify-content-center border-success"
                            style={{
                              borderStyle: 'dashed'
                            }}
                          >
                            <div className="text-success fw-bold small">
                              {item.discount}
                            </div>

                            <div
                              className="fw-bold"
                              style={{
                                fontSize: '0.85rem'
                              }}
                            >
                              {item.name}
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </section>

                  {/* SỰ KIỆN */}
                  <section className="home-section mb-5">
                    <div className="text-center mb-3">
                      <h2
                        className="fw-bold text-uppercase"
                        style={{
                          color: '#1a472a',
                          fontSize: '1.5rem'
                        }}
                      >
                        Lịch Trình Sự Kiện
                      </h2>
                    </div>

                    <div className="row g-3">

                      <div className="col-md-6">
                        <div className="p-3 border rounded-3 d-flex align-items-center bg-light shadow-sm">

                          <div
                            className="bg-success text-white p-2 rounded text-center me-3"
                            style={{
                              minWidth: '70px'
                            }}
                          >
                            <div className="fw-bold small">
                              15-20/05
                            </div>
                          </div>

                          <div>
                            <h6 className="fw-bold mb-1 small">
                              Tuần lễ "Xanh" - Giảm 20% nước ép
                            </h6>

                            <p
                              className="text-muted mb-0"
                              style={{
                                fontSize: '0.75rem'
                              }}
                            >
                              Nhập mã "TUOIXANH" khi mua trực tiếp.
                            </p>
                          </div>

                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="p-3 border rounded-3 d-flex align-items-center bg-light shadow-sm">

                          <div
                            className="bg-warning text-dark p-2 rounded text-center me-3"
                            style={{
                              minWidth: '70px'
                            }}
                          >
                            <div className="fw-bold small">
                              01/06
                            </div>
                          </div>

                          <div>
                            <h6 className="fw-bold mb-1 small">
                              Ngày hội bé thơ - Tặng kem trái cây
                            </h6>

                            <p
                              className="text-muted mb-0"
                              style={{
                                fontSize: '0.75rem'
                              }}
                            >
                              Dành cho hóa đơn từ 200k có trái cây cắt sẵn.
                            </p>
                          </div>

                        </div>
                      </div>

                    </div>
                  </section>

                </div>
              </>
            }
          />

          {/* =================== THÀNH VIÊN =================== */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />

          {/* =================== ADMIN =================== */}
          <Route path="/admin" element={<Admin />} />

          {/* =================== SẢN PHẨM =================== */}
          <Route
            path="/category"
            element={
              <div className="container mt-4">
                <ProductList showCategoryGrid={true} />
              </div>
            }
          />

          <Route path="/news" element={<News />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />

          {/* =================== 404 =================== */}
          <Route
            path="*"
            element={
              <div className="text-center py-5">

                <h4 className="fw-bold text-muted">
                  Trang web đang cập nhật hoặc không tồn tại...
                </h4>

                <button
                  className="btn btn-success mt-3"
                  onClick={() => (window.location.href = '/')}
                >
                  Quay về trang chủ
                </button>

              </div>
            }
          />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;