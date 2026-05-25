import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

// Lấy đường dẫn file json từ môi trường (thường là /products.json)
const productsUrl = `${import.meta.env.BASE_URL}products.json`;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Hàm điều hướng đến trang chi tiết sản phẩm
  const handleViewDetail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(productsUrl);
      if (!response.ok) throw new Error('Lỗi kết nối');
      
      const data = await response.json();
      const matchedProduct = data.find((item) => String(item.id) === String(product.id));
      
      if (matchedProduct) {
        navigate(`/product/${product.id}`, {
          state: { product: { ...matchedProduct, image: product.image } }
        });
      }
    } catch (err) {
      console.error("Không thể tải chi tiết:", err);
      // Fallback: Vẫn điều hướng dù lỗi fetch (trang Detail sẽ tự fetch lại)
      navigate(`/product/${product.id}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Hàm thêm nhanh vào giỏ hàng (size M mặc định)
  const handleQuickAdd = (e) => {
    e.stopPropagation(); // Ngăn sự kiện click lan ra thẻ cha
    const savedCart = localStorage.getItem('cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    const cartItemId = `${product.id}-M`;
    const existingItemIndex = cart.findIndex(item => item.cartId === cartItemId);

    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({
        ...product,
        cartId: cartItemId,
        selectedSize: 'M',
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    alert(`Đã thêm ${product.name} (Size M) vào giỏ hàng!`);
  };

  return (
    <div className="product-card" onClick={handleViewDetail}>
      {/* Badge giảm giá nếu có */}
      {product.discount && (
        <div className="product-badge-sale">-{product.discount}</div>
      )}

      <div className="product-image-container">
        <img
          src={product.image || 'https://via.placeholder.com/300x200'}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        <div className="product-overlay">
          <button className="overlay-btn">Xem chi tiết</button>
        </div>
      </div>
      
      <div className="product-content">
        <h3 className="product-name" title={product.name}>{product.name}</h3>
        
        <div className="product-sizes">
          <span className="size-label">Size:</span>
          <div className="size-tags">
            {product.sizeS && <span className="size-tag">S</span>}
            {product.sizeM && <span className="size-tag">M</span>}
            {product.sizeL && <span className="size-tag">L</span>}
          </div>
        </div>

        <div className="product-pricing">
          <span className="current-price">{product.currentPrice}</span>
          {product.originalPrice && (
            <span className="original-price">{product.originalPrice}</span>
          )}
        </div>

        <div className="product-footer">
          <div className="rating-sales">
            <span className="rating"><i className="fas fa-star"></i> {product.rating}</span>
            <span className="sales">Đã bán {product.sold}</span>
          </div>
        </div>

        <div className="product-actions">
          <button 
            className="btn-buy-now" 
            onClick={(e) => {
                e.stopPropagation();
                handleViewDetail();
            }}
            disabled={isLoading}
          >
            {isLoading ? '...' : 'MUA NGAY'}
          </button>
          <button 
            className="btn-quick-cart" 
            onClick={handleQuickAdd}
            title="Thêm nhanh vào giỏ"
          >
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;