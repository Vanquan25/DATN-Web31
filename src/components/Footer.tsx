import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <div className="brand-area pt-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="brand-slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide single-slide">
                                            <div className="brand-wrap">
                                                <img src="/src/templace/img/brand/brand-1.png" alt="brand" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide single-slide">
                                            <div className="brand-wrap">
                                                <img src="/src/templace/img/brand/brand-2.png" alt="brand" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide single-slide">
                                            <div className="brand-wrap">
                                                <img src="/src/templace/img/brand/brand-3.png" alt="brand" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide single-slide">
                                            <div className="brand-wrap">
                                                <img src="/src/templace/img/brand/brand-4.png" alt="brand" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide single-slide">
                                            <div className="brand-wrap">
                                                <img src="/src/templace/img/brand/brand-5.png" alt="brand" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide single-slide">
                                            <div className="brand-wrap">
                                                <img src="/src/templace/img/brand/brand-6.png" alt="brand" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide single-slide">
                                            <div className="brand-wrap">
                                                <img src="/src/templace/img/brand/brand-1.png" alt="brand" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* //Footer */}
            <footer className="footer-area footer-area-5">
                <div className="footer-top bg-dark">
                    <div className="container">
                        <div className="row pt-80 pb-40">
                            <div className="col-xl-3 col-md-6">
                                <div className="footer-widgets footer-about-widget">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src="/src/templace/img/logo/logo-white.png" alt="Logo" />
                                        </a>
                                    </div>
                                    <p>
                                        Bạn sẽ được phân tích và hiểu về chính cơ thể của mình, từ đó vạch ra mục tiêu tập luyện
                                        với từng thể trạng khác nhau và Gym T&amp;T sẽ giúp bạn hoàn thành mục tiêu đó.
                                    </p>
                                    <div className="social">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-instagram" /></a>
                                        <a href="#"><i className="fab fa-google" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="footer-widgets contact-widget">
                                    <h3 className="widget-title-2 ml-20">THÔNG TIN HỖ TRỢ</h3>
                                    <ul>
                                        <li>
                                            <span>Giới Thiệu</span>
                                        </li>
                                        <li>
                                            <span>Hướng Dẫn Mua Hàng</span>
                                        </li>
                                        <li>
                                            <span>Chính Sách Bảo Mật</span>
                                        </li>
                                        <li>
                                            <span>Thanh Toán Và Giao Hàng</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="footer-widgets contact-widget">
                                    <h3 className="widget-title-2">Liên Hệ</h3>
                                    <ul>
                                        <li>
                                            <a href="#&quot;&quot;">
                                                <i className="fas fa-envelope" />
                                                <span>support@gmail.com</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-phone" />
                                                <span>+012 (4567) 789</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <p>
                                        Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô, phường Phương Canh, quận Nam Từ Liêm, TP Hà
                                        Nội
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="footer-widgets newsletters-widget">
                                    <h3 className="widget-title-2">Nhận Thông Tin</h3>
                                    <p>
                                        Gửi Mail Để Được Nhận Thông Tin Mới Nhất Từ Chúng Tôi
                                    </p>
                                    <form action="#">
                                        <div className="input-wrap">
                                            <input type="text" placeholder="Vui Lòng Nhập Email Của Bạn" />
                                        </div>
                                        <button className="btn btn-gra">
                                            Gửi Thông Tin <i className="far fa-angle-double-right" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer