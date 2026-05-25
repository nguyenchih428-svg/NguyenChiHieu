import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart
  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');

        if (Array.isArray(savedCart)) {
          setCartItems(savedCart);
        } else {
          setCartItems([]);
        }
      } catch (error) {
        console.error(error);
        setCartItems([]);
      }
    };

    loadCart();

    window.addEventListener('cartUpdated', loadCart);

    return () => {
      window.removeEventListener('cartUpdated', loadCart);
    };
  }, []);

  // Save cart
  const saveCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // Parse price
  const parsePrice = (price) => {
    if (typeof price === 'number') return price;

    if (!price) return 0;

    const numericString = price.toString().replace(/[^\d]/g, '');

    return numericString ? Number(numericString) : 0;
  };

  // Format price
  const formatPrice = (price) => {
    if (isNaN(price)) return '0đ';

    return price.toLocaleString('vi-VN') + 'đ';
  };

  // Update quantity
  const updateQuantity = (uniqueId, delta) => {
    const newCart = cartItems.map((item) => {
      const currentId = item.cartId || item.id;

      if (currentId === uniqueId) {
        const newQty = (item.quantity || 1) + delta;

        return {
          ...item,
          quantity: newQty > 0 ? newQty : 1,
        };
      }

      return item;
    });

    saveCart(newCart);
  };

  // Remove item
  const removeItem = (uniqueId) => {
    if (window.confirm('Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?')) {
      const newCart = cartItems.filter(
        (item) => (item.cartId || item.id) !== uniqueId
      );

      saveCart(newCart);
    }
  };

  // Total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parsePrice(item.currentPrice || item.price);

      return total + price * (item.quantity || 1);
    }, 0);
  };

  // Checkout
  const handleCheckout = () => {
    const user = localStorage.getItem('currentUser');

    if (!user) {
      alert('Vui lòng đăng nhập để thanh toán!');
      navigate('/login');
      return;
    }

    if (cartItems.length === 0) {
      alert('Giỏ hàng đang trống!');
      return;
    }

    alert('Đặt hàng thành công!');
    saveCart([]);
    navigate('/');
  };

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>Giỏ hàng đang trống</h3>

        <Link to="/" className="btn btn-success mt-3">
          Quay lại mua hàng
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-success">
        Giỏ hàng của bạn
      </h2>

      <div className="row">
        {/* LEFT */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="table-responsive">
              <table className="table cart-table align-middle">                
                <thead className="cart-thead">
                <tr>
                  <th>Sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>

                <tbody>
                  {cartItems.map((item) => {
                    const uniqueKey = item.cartId || item.id;

                    const numericUnitPrice = parsePrice(
                      item.currentPrice || item.price
                    );

                    const numericLineTotal =
                      numericUnitPrice * (item.quantity || 1);

                    return (
                      <tr key={uniqueKey}>

                        {/* SẢN PHẨM */}
                        <td>
                          <div className="cart-product">

                            {/* NÚT XÓA */}
                            <button
                              className="cart-remove-btn"
                              onClick={() => removeItem(uniqueKey)}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>

                            {/* HÌNH */}
                            <img
                              src={item.image}
                              alt={item.name}
                              className="cart-product-image"
                            />

                            {/* THÔNG TIN */}
                            <div className="cart-product-info">
                              <h5 className="cart-product-name">
                                {item.name}
                              </h5>

                              <div className="cart-product-size">
                                Size: {item.selectedSize || 'M'}
                              </div>
                            </div>

                          </div>
                        </td>

                        {/* ĐƠN GIÁ */}
                        <td className="cart-price">
                          {formatPrice(numericUnitPrice)}
                        </td>

                        {/* SỐ LƯỢNG */}
                        <td>
                          <div className="cart-quantity">

                            <button
                              className="cart-quantity-btn"
                              onClick={() =>
                                updateQuantity(uniqueKey, -1)
                              }
                            >
                              -
                            </button>

                            <div className="cart-quantity-number">
                              {item.quantity || 1}
                            </div>

                            <button
                              className="cart-quantity-btn"
                              onClick={() =>
                                updateQuantity(uniqueKey, 1)
                              }
                            >
                              +
                            </button>

                          </div>
                        </td>

                        {/* THÀNH TIỀN */}
                        <td className="cart-total">
                          {formatPrice(numericLineTotal)}
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-4">
              Hóa đơn
            </h4>

            <div className="d-flex justify-content-between mb-3">
              <span>Tạm tính:</span>

              <span className="fw-bold">
                {formatPrice(calculateTotal())}
              </span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>Phí ship:</span>

              <span className="text-success fw-bold">
                Miễn phí
              </span>
            </div>

            <hr />

            <div className="d-flex justify-content-between mb-4">
              <span className="fw-bold">
                Tổng cộng:
              </span>

              <span className="fw-bold text-danger fs-5">
                {formatPrice(calculateTotal())}
              </span>
            </div>

            <button
              className="btn btn-success w-100 py-3"
              onClick={handleCheckout}
            >
              Thanh toán
            </button>

            <Link
              to="/"
              className="text-center d-block mt-3 text-decoration-none"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;