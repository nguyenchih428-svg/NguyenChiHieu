import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { imageMap } from '../utils/Productimage';
import './DetailProduct.css';

const DetailProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [product, setProduct] = useState(location.state?.product || null);
  const [isLoading, setIsLoading] = useState(!location.state?.product);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M'); // Mặc định chọn size M

  useEffect(() => {
    // Nếu đã có dữ liệu từ state của Link điều hướng thì không cần fetch lại
    if (product) {
      setProduct(prev => ({
        ...prev,
        image: imageMap[prev.imageKey] || prev.image
      }));
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Không thể tải thông tin sản phẩm');
        }
        
        const data = await response.json();
        const found = data.find((item) => String(item.id) === String(id));
        
        if (!found) {
          throw new Error('Sản phẩm không tồn tại');
        }
        
        setProduct({
          ...found,
          image: imageMap[found.imageKey] || found.image
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id, product]);

  const handleAddToCart = () => {
    const savedCart = localStorage.getItem('cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    // Tạo key duy nhất cho sản phẩm kèm size để phân biệt trong giỏ hàng
    const cartItemId = `${product.id}-${selectedSize}`;
    const existingItemIndex = cart.findIndex(item => item.cartId === cartItemId);

    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({
        ...product,
        cartId: cartItemId, // ID định danh bao gồm cả size
        selectedSize: selectedSize,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Phát sự kiện để Header cập nhật số lượng badge ngay lập tức
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Chuyển hướng hoặc thông báo thành công
    if (window.confirm("Đã thêm vào giỏ hàng! Bạn có muốn thanh toán ngay không?")) {
      navigate('/cart');
    }
  };

  if (isLoading) return <div className="detail-loading">Đang tải chi tiết sản phẩm...</div>;
  if (error) return <div className="detail-error">Lỗi: {error}</div>;
  if (!product) return null;

  return (
    <div className="detail-container">
      <div className="detail-breadcrumb">
        <span onClick={() => navigate('/')}>Trang chủ</span> / <span>Chi tiết sản phẩm</span>
      </div>

      <button className="back-btn-circle" onClick={() => navigate(-1)} title="Quay lại">
        <i className="fas fa-arrow-left"></i>
      </button>

      <div className="detail-card">
        {/* Phần hình ảnh bên trái */}
        <div className="detail-image-section">
          <div className="main-image-wrapper">
            <img
              src={product.image || 'https://via.placeholder.com/500x500'}
              alt={product.name}
            />
            {product.discount && <span className="detail-badge-sale">{product.discount}</span>}
          </div>
        </div>

        {/* Phần thông tin bên phải */}
        <div className="detail-info-section">
          <h1 className="product-name">{product.name}</h1>
          
          <div className="product-meta">
            <span className="rating"><i className="fas fa-star"></i> {product.rating || '5.0'}</span>
            <span className="divider">|</span>
            <span className="sold">Đã bán {product.sold || 0}</span>
          </div>

          <div className="product-price-box">
            <span className="price-current">{product.currentPrice}</span>
            {product.originalPrice && (
              <span className="price-original">{product.originalPrice}</span>
            )}
          </div>

          <div className="product-description">
            <p>Thưởng thức hương vị tuyệt hảo từ nguyên liệu tự nhiên, được chọn lọc kỹ lưỡng để mang đến trải nghiệm tốt nhất cho bạn.</p>
          </div>

          <div className="detail-selection">
            <label>Chọn kích thước (Size):</label>
            <div className="size-options">
              {['S', 'M', 'L'].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="detail-actions">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <i className="fas fa-cart-plus"></i> THÊM VÀO GIỎ HÀNG
            </button>
            <button className="buy-now-btn" onClick={() => {
                handleAddToCart();
                navigate('/cart');
            }}>
              MUA NGAY
            </button>
          </div>

          <div className="delivery-policy">
            <div className="policy-item">
              <i className="fas fa-truck"></i>
              <span>Giao hàng nhanh trong 2h</span>
            </div>
            <div className="policy-item">
              <i className="fas fa-check-circle"></i>
              <span>Đảm bảo vệ sinh an toàn thực phẩm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;