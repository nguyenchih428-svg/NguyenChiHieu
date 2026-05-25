import React from 'react';
import './News.css';

const News = () => {
  // 1. Dữ liệu Tin tức mới nhất
  const mainNews = [
    {
      id: 1,
      title: "Bí quyết chọn trái cây sạch",
      description: "Khám phá cách Leaf Fruit lựa chọn những quả táo tươi ngon nhất mỗi ngày để đảm bảo sức khỏe cho gia đình bạn.",
      tag: "Cẩm nang"
    },
    {
      id: 2,
      title: "Khai trương chi nhánh mới",
      description: "Ghé thăm không gian mới của chúng tôi tại trung tâm thành phố với nhiều ưu đãi hấp dẫn và quà tặng bất ngờ.",
      tag: "Sự kiện"
    },
    {
      id: 3,
      title: "Công thức nước ép tại gia",
      description: "Tự tay pha chế ly nước ép thanh lọc cơ thể chỉ trong 5 phút với nguyên liệu sẵn có ngay trong căn bếp của bạn.",
      tag: "Sức khỏe"
    }
  ];

  // 2. Dữ liệu Loại sản phẩm đang ưu đãi
  const promoCategories = [
    { label: "Giảm 10%", name: "Trái Cây Nội Địa" },
    { label: "Mua 2 Tặng 1", name: "Nước Ép Tươi" },
    { label: "Giảm 15%", name: "Giỏ Quà Trái Cây" },
    { label: "Đồng giá 49k", name: "Trái Cây Sấy" },
    { label: "Giảm 20%", name: "Mứt & Siro" }
  ];

  // 3. Dữ liệu Sắp khuyến mãi
  const upcomingPromos = [
    {
      date: "15-20/5",
      subDate: "Tuần lễ xanh",
      title: "Tuần lễ \"Xanh\" - Giảm 20% nước ép",
      detail: "Áp dụng cho khách hàng có trái cây tươi trong đơn hàng và nhập mã \"TUOIXANH\".",
      colorClass: "green-badge"
    },
    {
      date: "01/06",
      subDate: "Quốc tế TN",
      title: "Ngày hội bé thơ - Tặng 1 kem trái cây",
      detail: "Tặng cho đơn hàng khi mua trái cây cắt sẵn khi nhập mã \"QUOCTETHIEUNHI\".",
      colorClass: "orange-badge"
    }
  ];

  return (
    <div className="news-page">
      <div className="container">
        
        {/* PHẦN 1: TIN TỨC MỚI NHẤT */}
        <section className="news-section">
          <h2 className="news-title">TIN TỨC MỚI NHẤT</h2>
          <div className="news-grid">
            {mainNews.map((news) => (
              <div key={news.id} className="news-card">
                <div className="news-content">
                  <span className="news-tag">{news.tag}</span>
                  <h3 className="news-card-title">{news.title}</h3>
                  <p className="news-card-desc">{news.description}</p>
                  <button className="btn-readmore">Xem thêm</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PHẦN 2: LOẠI SẢN PHẨM ĐANG ƯU ĐÃI */}
        <section className="promo-categories-section">
          <h2 className="news-title">LOẠI SẢN PHẨM ĐANG ƯU ĐÃI</h2>
          <div className="promo-grid">
            {promoCategories.map((item, index) => (
              <div key={index} className="promo-item">
                <span className="promo-percent">{item.label}</span>
                <span className="promo-name">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PHẦN 3: SẮP KHUYẾN MÃI */}
        <section className="upcoming-section">
          <h2 className="news-title">SẮP KHUYẾN MÃI</h2>
          <div className="upcoming-list">
            {upcomingPromos.map((item, index) => (
              <div key={index} className="upcoming-card">
                <div className={`date-badge ${item.colorClass}`}>
                  <span className="main-date">{item.date}</span>
                  <span className="sub-date">{item.subDate}</span>
                </div>
                <div className="upcoming-content">
                  <h4 className="upcoming-title">{item.title}</h4>
                  <p className="upcoming-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default News;