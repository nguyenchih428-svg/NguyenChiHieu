import React, { useState, useEffect } from 'react';
import './ProductList.css'; 
import { imageMap } from '../utils/Productimage';

const ProductList = () => {
  const [productsData, setProductsData] = useState([]);
  const [categories, setCategories] = useState([]);
  // Khởi tạo là null để hiển thị thông báo "Hãy chọn loại sản phẩm"
  const [selectedCatId, setSelectedCatId] = useState(null);

  // Lấy dữ liệu từ các file JSON trong thư mục public
  useEffect(() => {
    // Tải danh mục sản phẩm
    fetch('/category.json')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Lỗi khi tải danh mục:', err));

    // Tải toàn bộ danh sách sản phẩm
    fetch('/product.json')
      .then(res => res.json())
      .then(data => setProductsData(data))
      .catch(err => console.error('Lỗi khi tải sản phẩm:', err));
  }, []);

  // Tìm thông tin danh mục đang được chọn
  const currentCategory = categories.find(c => c.id === selectedCatId);

  // Logic lọc: So khớp idcategory của sản phẩm với id của danh mục đã chọn
  const filteredItems = productsData
    .filter(item => item.idcategory === selectedCatId)
    .slice(0, 10);

  // Hàm xử lý thêm vào giỏ hàng
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Kích hoạt sự kiện để Header hoặc các component khác cập nhật giao diện
    window.dispatchEvent(new Event('cartUpdated'));
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <div className="product-list-container container py-5">
      <h2 className="text-center mb-5 text-success fw-bold text-uppercase">Danh mục sản phẩm</h2>
      
      {/* PHẦN 1: GRID DANH MỤC */}
      <div className="row row-cols-2 row-cols-md-5 g-3 mb-5">
        {categories.map((cat) => (
          <div className="col" key={cat.id} onClick={() => setSelectedCatId(cat.id)}>
            <div 
              className={`card h-100 d-flex align-items-center justify-content-center text-center py-4 category-card-item ${selectedCatId === cat.id ? 'active-category shadow-sm' : ''}`} 
              style={{ 
                cursor: 'pointer', 
                transition: '0.3s', 
                minHeight: '100px', 
                border: selectedCatId === cat.id ? '2px solid #1a472a' : '1px solid #dee2e6' 
              }}
            >
              <div className="card-body d-flex align-items-center">
                <p className={`card-text fw-bold small mb-0 text-uppercase ${selectedCatId === cat.id ? 'text-success' : 'text-dark'}`}>
                  {cat.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thanh phân cách và tiêu đề phụ */}
      <div className="section-divider mb-5">
        <hr />
        {selectedCatId && (
          <div className="d-flex justify-content-between align-items-center px-2 mt-4">
            <h4 className="text-success fw-bold m-0 text-uppercase">Sản phẩm: {currentCategory?.name}</h4>
            <span className="badge bg-success">{filteredItems.length} sản phẩm hiện có</span>
          </div>
        )}
      </div>

      {/* PHẦN 2: HIỂN THỊ SẢN PHẨM HOẶC THÔNG BÁO */}
      <div className="products-grid-view">
        {!selectedCatId ? (
          // Trường hợp 1: Chưa chọn loại sản phẩm nào
          <div className="col-12 text-center py-5">
            <h3 className="text-muted fw-light italic">Hãy chọn loại sản phẩm mà bạn mong muốn</h3>
          </div>
        ) : filteredItems.length > 0 ? (
          // Trường hợp 2: Có sản phẩm để hiển thị
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
            {filteredItems.map((product) => (
              <div className="col" key={product.id}>
                <div className="card h-100 border-0 shadow-sm product-item-card hover-up">
                  <div className="product-img-wrapper p-3 text-center">
                    <img 
                      src={imageMap[product.imageKey] || product.imageKey} 
                      className="card-img-top img-fluid" 
                      alt={product.name}
                      style={{ height: '160px', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-body text-center d-flex flex-column">
                    <h6 className="card-title text-truncate-2 mb-2" style={{ height: '2.5rem', overflow: 'hidden', fontSize: '0.9rem', lineHeight: '1.25rem' }}>
                      {product.name}
                    </h6>
                    <p className="text-danger fw-bold fs-5 mb-3 mt-auto">
                      {product.price.toLocaleString('vi-VN')}đ
                    </p>
                    <button 
                      className="btn btn-success btn-sm w-100 rounded-pill fw-bold py-2"
                      onClick={() => addToCart(product)}
                    >
                      THÊM VÀO GIỎ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Trường hợp 3: Danh mục đã chọn nhưng không có dữ liệu sản phẩm
          <div className="col-12 text-center py-5">
            <div className="alert alert-light border italic">
              Danh mục "{currentCategory?.name}" hiện đang được cập nhật. Quý khách vui lòng quay lại sau!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;