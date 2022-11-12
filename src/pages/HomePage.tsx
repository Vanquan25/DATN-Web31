import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div>
            <main>
                {/* slider-area start */}
                <div className="slider-area">
                    <div className="swiper-container home-slider-2">
                        {/* Additional required wrapper */}
                        <div className="swiper-wrapper">
                            <div className="swiper-slide single-slide" style={{ backgroundImage: "url('./src/templace/img/slider/slider-2.jpg')" }} >
                                <div className="container">
                                    <div className="row mr-50">
                                        <div className="col-xl-10 col-lg-8">
                                            <div className="slider-content-2">
                                                <span data-animation="fadeInUp" data-delay="0.3s">Chào Mừng Đến Với GYM T&amp;T</span>
                                                <h2 data-animation="fadeInUp" data-delay="0.6s">
                                                    Chăm Tập Gym Tút Thể Hình Nâng Dáng Đẹp
                                                </h2>
                                                <a href="#" className="btn btn-gra" data-animation="fadeInUp" data-delay="0.9s">
                                                    Đến KHóa Học Ngay !
                                                    <i className="bi bi-caret-right-fill"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-thumb" data-animation="fadeInRight" data-delay="0.3s">
                                    <img src="/src/templace/img/thumb/thumb-3.png" alt="thumb" />
                                </div>
                            </div>
                            <div className="swiper-slide single-slide" data-background="/src/templace/img/slider/slider-2.jpg">
                                <div className="container">
                                    <div className="row mr-50">
                                        <div className="col-xl-10 col-lg-8">
                                            <div className="slider-content-2">
                                                <span data-animation="fadeInUp" data-delay="0.3s">Chào Mừng Đến Với GYM T&amp;T</span>
                                                <h2 data-animation="fadeInUp" data-delay="0.6s">
                                                    Chăm Tập Gym Tút Thể Hình Nâng Dáng Đẹp
                                                </h2>
                                                <a href="#" className="btn btn-gra" data-animation="fadeInUp" data-delay="0.9s">
                                                    Đến KHóa Học Ngay !
                                                    <i className="fas fa-angle-double-right" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-thumb" data-animation="fadeInRight" data-delay="0.3s">
                                    <img src="/src/templace/img/thumb/thumb-3.png" alt="thumb" />
                                </div>
                            </div>
                        </div>
                        {/* If we need pagination */}
                        <div className="swiper-pagination" />
                        {/* If we need navigation buttons */}
                        <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                        <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                    </div>
                </div>
                {/* slider-area end */}
                {/* feature-area-2 start */}
                <section className="feature-area-2 bg-dark pt-130 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-title-3 text-white text-center mb-70">
                                    <h3>Chúng tôi cung cấp nhiều khóa học Gym và Boxing</h3>
                                    <p>
                                        Luyện tập tại GYM T&amp;T sẽ giúp bạn đạt được mục tiêu sức khỏe và hình thể.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 w-xl-20">
                                <div className="feature-wrap-2 bg-blue">
                                    <div className="feature-details">
                                        <h4>Máy Tập Hiện Đại</h4>
                                        <a href="about.html" className="read-more">Xem Ngay <i className="bi bi-fast-forward-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 w-xl-20">
                                <div className="feature-wrap-2 bg-yellow">

                                    <div className="feature-details">
                                        <h4>PT Tận Tâm</h4>
                                        <a href="about.html" className="read-more">Xem Ngay <i className="bi bi-fast-forward-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 w-xl-20">
                                <div className="feature-wrap-2 bg-pink">

                                    <div className="feature-details">
                                        <h4>Sức Khỏe</h4>
                                        <a href="about.html" className="read-more">Xem Ngay <i className="bi bi-fast-forward-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 w-xl-20">
                                <div className="feature-wrap-2 bg-egg-blue">

                                    <div className="feature-details">
                                        <h4>Boxing</h4>
                                        <a href="about.html" className="read-more">Xem Ngay <i className="bi bi-fast-forward-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 w-xl-20">
                                <div className="feature-wrap-2 bg-purple">
                                    <div className="feature-details">
                                        <h4>Dáng Đẹp</h4>
                                        <a href="about.html" className="read-more">Xem Ngay <i className="bi bi-fast-forward-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature-area-2 end */}
                {/* about-area-2 start */}
                <section className="about-area-2 bg-black pt-130 pb-130">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-10">
                                <div className="about-thumb-wrap text-center mb-30">
                                    <div className="about-img-2 mb-70">
                                        <img src="/src/templace/img/thumb/thumb-4.jpg" alt="about" />
                                    </div>
                                    <a href="about.html" className="btn btn-gra">
                                        Xem Ngay <i className="bi bi-fast-forward-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content-2 pt-35">
                                    <div className="section-title-3 text-white">
                                        <h3 className="bars">Chúng Tôi Luôn Cố Gắng Để Mang Lại Trải Nghiệm Tốt Nhất</h3>
                                    </div>
                                    <div className="about-text mb-45">
                                    </div>
                                    <div className="about-video-play">
                                        <img src="/src/templace/img/thumb/thumb-5.jpg" alt="thumb" />
                                        <a href="https://www.youtube.com/watch?v=ZIKt1-r3PL0" className="popup-video read-more">
                                            <img src="/src/templace/img/icon/play.png" alt="icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-shape">
                        <img className="rotateme" src="/src/templace/img/shape/shape-5.png" alt="shape" />
                    </div>
                </section>
                <div className="schedule-area-2 bg-black pt-130 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title-2 bar-theme-color text-white text-center mb-35">
                                    <h3>
                                        Sắp Xếp Lịch Trình Luyện Tập
                                    </h3>
                                    <span>GymT&amp;T</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="schedule-table">
                                    <table className="table bg-white">
                                        <thead>
                                            <tr>
                                                <th>Thời Gian</th>
                                                <th>6 Giờ Sáng</th>
                                                <th>7 Giờ Sáng</th>
                                                <th>15 Giờ Chiều</th>
                                                <th>17 Giờ Chiều</th>
                                                <th>19 Giờ Chiều</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="day">Chủ Nhật</td>
                                                <td className="active">
                                                    <h4>Cycling</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                                <td className="active">
                                                    <h4>Cycling</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td className="active">
                                                    <h4>Cycling</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td className="day">Thứ Hai</td>
                                                <td />
                                                <td className="active">
                                                    <h4>Boxing</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td className="active">
                                                    <h4>Cycling</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                                <td className="active">
                                                    <h4>Cycling</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="day">Thứ Ba</td>
                                                <td className="active">
                                                    <h4>Yoga</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                                <td />
                                                <td className="active">
                                                    <h4>Cycling</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td className="active">
                                                    <h4>Boxing</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="day">Thứ Tư</td>
                                                <td className="active">
                                                    <h4>Gym</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                                <td className="active">
                                                    <h4>Yoga</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                                <td className="active">
                                                    <h4>Yoga</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="day">Thứ Năm</td>
                                                <td />
                                                <td className="active">
                                                    <h4>Racing</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                                <td className="active">
                                                    <h4>Cycling</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td className="day">Thứ Sáu</td>
                                                <td className="active">
                                                    <h4>Dumbbelling</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                                <td className="active">
                                                    <h4>Grid Training</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                                <td className="active">
                                                    <h4>Jumping</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="day">Thứ Bảy</td>
                                                <td />
                                                <td />
                                                <td className="active">
                                                    <h4>Grid Training</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td className="active">
                                                    <h4>Cycling</h4>
                                                    <p>10 am - 11 am</p>
                                                    <div className="hover">
                                                        <h4>Cycling</h4>
                                                        <p>10 am - 11 am</p>
                                                        <span>Zakila Russow</span>
                                                    </div>
                                                </td>
                                                <td />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="schedule-shape-1">
                        <img src="/src/templace/img/shape/shape-8.png" alt="shape" />
                    </div>
                    <div className="schedule-shape-2">
                        <img src="/src/templace/img/shape/shape-9.png" alt="shape" />
                    </div>
                    <div className="schedule-shape-icon">
                        <i className="flaticon-dumbbells" />
                    </div>
                    <div className="schedule-shape-3">
                        <img className="rotateme" src="/src/templace/img/shape/shape-10.png" alt="shape" />
                    </div>
                </div>
                {/* schedule-area-2 end */}
                {/* calculator-area start */}
                <div className="calculator-area-2 pt-130 pb-100">
                    <div className="container-fluid">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-4 col-lg-5">
                                <div className="calculator-chart-2 mb-md-100 mb-xs-100">
                                    <h3>Bảnh Tính BMI</h3>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">BMI</th>
                                                <th scope="col">Tình Trạng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Thấp Hơn 18.5</td>
                                                <td>Thiếu Cân</td>
                                            </tr>
                                            <tr>
                                                <td>18.5 - 24.9</td>
                                                <td>Sức Khỏe Tốt</td>
                                            </tr>
                                            <tr>
                                                <td>25.0 - 29.9</td>
                                                <td>Thừa Cân</td>
                                            </tr>
                                            <tr>
                                                <td>30.0 - Lớn Hơn</td>
                                                <td>Béo Phì</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 offset-lg-1">
                                <div className="calculator-form-2">
                                    <h3>Bảng Tính BMI</h3>
                                    <p>
                                        Tính Chỉ Số Để Xem Tình Trạng Sức Khỏe Hiện Tại Của Bạn
                                    </p>
                                    <form action="#">
                                        <div className="input-wrap">
                                            <input type="text" placeholder="Chiều/cm" />
                                        </div>
                                        <div className="input-wrap">
                                            <input type="text" placeholder="Cân Nặng/kg" />
                                        </div>
                                        <div className="input-wrap">
                                            <select id="gender">
                                                <option value="gender">Giới Tính</option>
                                                <option value="male">Nam</option>
                                                <option value="fmale">Nữ</option>
                                            </select>
                                        </div>
                                        <div className="input-wrap">
                                            <a href="#" className="btn btn-gra">
                                                Tính <i className="bi bi-fast-forward-fill"></i>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="calculator-bg-1 bg-fix" data-background="/src/templace/img/bg/calculator-bg-1.jpg" />
                    <div className="calculator-bg-2 bg-fix" data-background="/src/templace/img/bg/calculator-bg-2.jpg" />
                </div>
                {/* calculator-area end */}
                {/* pricing-area start */}
                <div className="pricing-area bg-dark pt-130 pb-100">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-12">
                                <div className="section-title-2 text-white bar-theme-color text-center mb-35">
                                    <h3>
                                        Chúng Tôi Sẽ Mang Lại Những Dịch Vụ Tốt Nhất Để Làm Hài Lòng Khách Hàng
                                    </h3>
                                    <span>GymT&amp;T</span>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-7">
                                <div className="pricing-wrap mt-30 mb-30">
                                    <h3>Basic</h3>
                                    <p>
                                        Bobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                                        possimus, omnis volup tas assumenda est omnis dess
                                    </p>
                                    <span className="price">$45.99</span>
                                    <a href="pricing.html" className="order-btn">
                                        select plan <i className="fas fa-angle-double-right" />
                                    </a>
                                    <div className="shape">
                                        <img src="/src/templace/img/shape/shape-11.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-7">
                                <div className="pricing-wrap popular mt-50 mb-30">
                                    <div className="popular-badge">
                                        <span>Bán Chạy</span>
                                    </div>
                                    <h3>Standard</h3>
                                    <p>
                                        Procure him some great pleasure. To take a trivial example, which of us ever undertakes
                                        laborious physical exercise, except to obtain some ad
                                    </p>
                                    <span className="price">$99.99</span>
                                    <a href="pricing.html" className="order-btn">
                                        select plan <i className="fas fa-angle-double-right" />
                                    </a>
                                    <div className="shape">
                                        <img src="/src/templace/img/shape/shape-11.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-7">
                                <div className="pricing-wrap mt-30 mb-30">
                                    <h3>Premium</h3>
                                    <p>
                                        Bobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                                        possimus, omnis volup tas assumenda est omnis dess
                                    </p>
                                    <span className="price">$99.99</span>
                                    <a href="pricing.html" className="order-btn">
                                        select plan <i className="fas fa-angle-double-right" />
                                    </a>
                                    <div className="shape">
                                        <img src="/src/templace/img/shape/shape-11.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* pricing-area end */}
                {/* testimonial-area start */}
                <div className="testimonial-area-2 pt-130 pb-130" data-background="/src/templace/img/bg/testimonial-bg-2.jpg" data-overlay="black" data-opacity={8}>
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title-2 text-center text-white bar-theme-color mb-35">
                                    <h3>
                                        Đánh Giá Của Khách Hàng Về Dịch Vụ
                                    </h3>
                                    <span>GymT&amp;T</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-10">
                                <div className="swiper-container testimonial-thumbs-2 mb-50">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img src="/src/templace/img/author/author-lg-1.jpg" alt="author" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/src/templace/img/author/author-lg-2.jpg" alt="author" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/src/templace/img/author/author-lg-3.jpg" alt="author" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/src/templace/img/author/author-lg-4.jpg" alt="author" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="testimonial-slider-2">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide single-slide">
                                                <div className="testimonial-wrap-2">
                                                    <div className="testimonial-content">
                                                        <p>
                                                            Một thương hiệu quen thuộc với những dòng sản phẩm cao cấp, chuyên nghiệp. Những sản phẩm của thương hiện này được giới chuyên môn đánh giá cao. Bên cạnh dòng công suất lớn dành phòng phòng gym dịch vụ thì thương hiệu SPIRIT cũng có thêm dòng dành cho phân khúc home gym cao cấp. Những sản phẩm dòng này thường sẽ được Gymaster tư vấn đối với những dự án setup phòng gym tại nhà có ngân sách lớn.
                                                        </p>
                                                    </div>
                                                    <div className="author-info">
                                                        <h4>Dustin R. Gardner, <span>CEO &amp; Founder (DL)</span></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="testimonial-wrap-2">
                                                    <div className="testimonial-content">
                                                        <p>
                                                            Một thương hiệu quen thuộc với những dòng sản phẩm cao cấp, chuyên nghiệp. Những sản phẩm của thương hiện này được giới chuyên môn đánh giá cao. Bên cạnh dòng công suất lớn dành phòng phòng gym dịch vụ thì thương hiệu SPIRIT cũng có thêm dòng dành cho phân khúc home gym cao cấp. Những sản phẩm dòng này thường sẽ được Gymaster tư vấn đối với những dự án setup phòng gym tại nhà có ngân sách lớn.
                                                        </p>
                                                    </div>
                                                    <div className="author-info">
                                                        <h4>Dustin R. Gardner, <span>CEO &amp; Founder (DL)</span></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="testimonial-wrap-2">
                                                    <div className="testimonial-content">
                                                        <p>
                                                            Một thương hiệu quen thuộc với những dòng sản phẩm cao cấp, chuyên nghiệp. Những sản phẩm của thương hiện này được giới chuyên môn đánh giá cao. Bên cạnh dòng công suất lớn dành phòng phòng gym dịch vụ thì thương hiệu SPIRIT cũng có thêm dòng dành cho phân khúc home gym cao cấp. Những sản phẩm dòng này thường sẽ được Gymaster tư vấn đối với những dự án setup phòng gym tại nhà có ngân sách lớn.
                                                        </p>
                                                    </div>
                                                    <div className="author-info">
                                                        <h4>Dustin R. Gardner, <span>CEO &amp; Founder (DL)</span></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="testimonial-wrap-2">
                                                    <div className="testimonial-content">
                                                        <p>
                                                            Một thương hiệu quen thuộc với những dòng sản phẩm cao cấp, chuyên nghiệp. Những sản phẩm của thương hiện này được giới chuyên môn đánh giá cao. Bên cạnh dòng công suất lớn dành phòng phòng gym dịch vụ thì thương hiệu SPIRIT cũng có thêm dòng dành cho phân khúc home gym cao cấp. Những sản phẩm dòng này thường sẽ được Gymaster tư vấn đối với những dự án setup phòng gym tại nhà có ngân sách lớn.
                                                        </p>
                                                    </div>
                                                    <div className="author-info">
                                                        <h4>Dustin R. Gardner, <span>CEO &amp; Founder (DL)</span></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* If we need navigation buttons */}
                                    <div className="swiper-button-prev"><i className="bi bi-rewind-fill"></i></div>
                                    <div className="swiper-button-next"><i className="bi bi-fast-forward-fill"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-icon">
                            <img src="/src/templace/img/icon/quote.png" alt="quote" />
                        </div>
                    </div>
                </div>
                {/* testimonial-area end */}
                {/* blog-area start */}
                <div className="blog-area bg-black pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title-2 text-white bar-theme-color text-center mb-35">
                                    <h3>
                                        Những Bài Viết Chia Sẻ về Sức Khỏe Và Bài Tập
                                    </h3>
                                    <span>GymT&amp;T</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap mb-30" data-background="/src/templace/img/blog/blog-1.jpg">
                                    <div className="blog-author mb-40">
                                        <div className="author-thumb">
                                            <img src="/src/templace/img/author/author-2.jpg" alt="Author" />
                                        </div>
                                        <div className="author-content">
                                            <h4>Gary D. Robinson</h4>
                                            <span>Post By Admin</span>
                                        </div>
                                    </div>
                                    <div className="blog-meta">
                                        <span><i className="fas fa-calendar-alt" /> 20 Jan 2020</span>
                                        <span><i className="far fa-comments" /> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content">
                                        <h3>
                                            <a href="blog-details.html">
                                                BÀI TẬP GIẢM MỠ BỤNG SIÊU NHANH HIỆU QUẢ TẬP Ở ĐÂU ...
                                            </a>
                                        </h3>
                                        <a href="blog-details.html" className="read-more">
                                            Dọc Ngay <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap mb-30" data-background="/src/templace/img/blog/blog-1.jpg">
                                    <div className="blog-author mb-40">
                                        <div className="author-thumb">
                                            <img src="/src/templace/img/author/author-3.jpg" alt="Author" />
                                        </div>
                                        <div className="author-content">
                                            <h4>Thomas Garman</h4>
                                            <span>Post By Admin</span>
                                        </div>
                                    </div>
                                    <div className="blog-meta">
                                        <span><i className="fas fa-calendar-alt" /> 20 Jan 2020</span>
                                        <span><i className="far fa-comments" /> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content">
                                        <h3>
                                            <a href="blog-details.html">
                                                TĂNG CƠ GIẢM MỠ THÀNH CÔNG VỚI LỊCH TẬP GYM CHO ...
                                            </a>
                                        </h3>
                                        <a href="blog-details.html" className="read-more">
                                            Dọc Ngay <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap mb-30" data-background="/src/templace/img/blog/blog-1.jpg">
                                    <div className="blog-author mb-40">
                                        <div className="author-thumb">
                                            <img src="/src/templace/img/author/author-3.jpg" alt="Author" />
                                        </div>
                                        <div className="author-content">
                                            <h4>Donald Jackson</h4>
                                            <span>Post By Admin</span>
                                        </div>
                                    </div>
                                    <div className="blog-meta">
                                        <span><i className="fas fa-calendar-alt" /> 20 Jan 2020</span>
                                        <span><i className="far fa-comments" /> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content">
                                        <h3>
                                            <a href="blog-details.html">
                                                MANG THẺ NGÂN HÀNG UOB ĐẾN CITIGYM, NHẬN NGAY ƯU ...
                                            </a>
                                        </h3>
                                        <a href="blog-details.html" className="read-more">
                                            Đọc Ngay <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-shape-1">
                        <img src="/src/templace/img/shape/shape-13.png" alt="shape" />
                    </div>
                    <div className="blog-icon-1">
                        <img src="/src/templace/img/icon/icon-3.png" alt="icon" />
                    </div>
                </div>
                {/* blog-area end */}
            </main >
        </div >



    )
}

export default HomePage