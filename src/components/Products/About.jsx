import React from 'react';
import './About.css';

const About = () => {
    const reasons = [
        {
            id: 1,
            title: "Tươi ngon",
            description: "Trái cây được nhập mới mỗi ngày, đảm bảo độ chín cây tự nhiên.",
            icon: "🍎"
        },
        {
            id: 2,
            title: "An toàn",
            description: "Sản phẩm đạt chuẩn sạch, không hóa chất bảo quản, an toàn cho sức khỏe.",
            icon: "🛡️"
        },
        {
            id: 3,
            title: "Giá hợp lý",
            description: "Cam kết mức giá cạnh tranh nhất đi kèm với chất lượng nông sản cao cấp.",
            icon: "💰"
        },
        {
            id: 4,
            title: "Giao nhanh",
            description: "Dịch vụ vận chuyển chuyên nghiệp, đảm bảo giữ nguyên độ tươi mới.",
            icon: "⚡"
        }
    ];

    return (
        <div className="about-container container py-5">
            {/* 2. Giới thiệu về shop */}
            <section className="shop-intro mb-5 text-center">
                <h2 className="fw-bold text-success mb-4">GIỚI THIỆU VỀ SHOP</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <p className="fs-5 text-secondary lh-base">
                            <strong>Leaf Fruit</strong> là cửa hàng chuyên cung cấp trái cây tươi sạch,
                            nông sản chất lượng cao và các sản phẩm tốt cho sức khỏe.
                            Chúng tôi cam kết mang đến sản phẩm an toàn, tươi ngon
                            và giá hợp lý cho mọi gia đình.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Sứ mệnh / Giá trị */}
            <section className="mission-values mb-5 py-5 bg-success text-white rounded-4 shadow">
                <div className="row g-4 text-center">
                    <div className="col-md-6 border-end border-light">
                        <h3 className="fw-bold mb-3 text-warning">SỨ MỆNH</h3>
                        <p className="fs-4 italic mb-0">"Mang thực phẩm sạch đến mọi nhà"</p>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fw-bold mb-3 text-warning">GIÁ TRỊ</h3>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                        <p className="fs-4 italic mb-0">"Tươi rẻ an toàn và nhanh chóng"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Vì sao chọn chúng tôi */}
            <section className="why-choose-us">
                <h2 className="text-center fw-bold text-success mb-5">VÌ SAO CHỌN CHÚNG TÔI</h2>
                <div className="row g-4">
                    {reasons.map(reason => (
                        // Trong file About.jsx, tìm đoạn này:
                        <div className="col-md-3" key={reason.id}>
                            <div className="card h-100 text-center border-0 shadow-sm p-4 reasons-card"> {/* Đổi tên class ở đây */}
                                <div className="display-4 mb-3"></div>
                                <h5 className="fw-bold text-success">{reason.title}</h5>
                                <p className="text-muted small mb-0">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;