import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <header className="header-area header-style-5">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-xl-center">
                        <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                            <div className="logo-area">
                                <a href="index.html"><img src="/src/templace/img/logo/logo-white.png" alt="Logo" /></a>
                            </div>
                        </div>
                        <div className="col-xl-8 d-xl-flex justify-content-center align-items-center d-none">
                            <nav className="main-menu main-menu-white">
                                <ul>
                                    <li className="has">
                                        <Link to="/">Trang Chủ</Link>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="#">Trang</a>
                                        <ul className="sub-menu">
                                            <li><a href="about.html">Thông Tin</a></li>
                                            <li><a href="bmi-calculator.html">Tính Chỉ Số IBM</a></li>
                                            <li><a href="service.html">Dịch Vụ</a></li>
                                        </ul>
                                    </li>
                                    <li className="has">
                                        <a href="class.html">Gói Tập</a>
                                    </li>
                                    <li className="has">
                                        <Link to="./ourtrainer">Huấn Luyện Viên</Link>
                                    </li>
                                    <li className="has">
                                        <Link to="./blog">Bài Viết</Link>
                                    </li>
                                    <li className="has">
                                        <Link to="./contact">Liên Hệ</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="attr-menu attr-white">
                                <ul>
                                    <li>
                                        <a href="#" className="open-search"><i className="far fa-search" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="far fa-shopping-bag" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-9 col-md-9 col-6 d-flex justify-content-end align-items-center">
                            <div className="attr-menu attr-white d-none d-xl-none d-lg-inline-block d-md-inline-block pr-60">
                                <ul>
                                    <li>
                                        <a href="#" className="open-search"><i className="far fa-search" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="far fa-shopping-bag" /></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <aside className="slide-bar">
                    <div className="close-mobile-menu">
                        <a href="javascript:void(0);"><i className="fas fa-times" /></a>
                    </div>
                    <nav className="side-mobile-menu">
                        <ul id="mobile-menu-active">
                            <li className="has-children">
                                <a href="index.html">HOME</a>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Homepage One</a></li>
                                    <li><a href="index-2.html">Homepage Two</a></li>
                                    <li><a href="index-3.html">Homepage Three</a></li>
                                    <li><a href="index-4.html">Homepage Four</a></li>
                                    <li><a href="index-5.html">Homepage Five</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="#">PAGES</a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About Page</a></li>
                                    <li><a href="bmi-calculator.html">BMI Calculator</a></li>
                                    <li><a href="service.html">Service Page</a></li>
                                    <li><a href="trainer.html">Trainer Page</a></li>
                                    <li><a href="trainer-details.html">Trainer Details</a></li>
                                    <li><a href="pricing.html">Pricing Page</a></li>
                                    <li><a href="404.html">404 Page</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="class.html">CLASSES</a>
                                <ul className="sub-menu">
                                    <li><a href="class.html">Class Page</a></li>
                                    <li><a href="class-2.html">Class Two</a></li>
                                    <li><a href="class-schedule.html">Class Schedule</a></li>
                                    <li><a href="class-details.html">Class Details One</a></li>
                                    <li><a href="class-details-2.html">Class Details Two</a></li>
                                    <li><a href="class-details-3.html">Class Details Three</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="gallery.html">Gallery</a>
                                <ul className="sub-menu">
                                    <li><a href="gallery.html">Gallery Page</a></li>
                                    <li><a href="gallery-2.html">Gallery Page Two</a></li>
                                    <li><a href="gallery-carousel.html">Gallery Carousel</a></li>
                                    <li><a href="gallery-details.html">Gallery Details</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="blog.html">BLOG</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                    <li><a href="blog.html">Blog Standard</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="shop.html">SHOP</a>
                                <ul className="sub-menu">
                                    <li><a href="shop.html">Shop Page</a></li>
                                    <li><a href="shop-2.html">Shop Two</a></li>
                                    <li><a href="shop-details.html">Shop Details</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="contact.html">Contact</a>
                                <ul className="sub-menu">
                                    <li><a href="contact.html">Contact Page</a></li>
                                    <li><a href="contact-2.html">Contact Two</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="sidebar-widget-wrapper">
                        <div className="sidebar-widget logo-side">
                            <a href="index.html">
                                <img src="/src/templace/img/logo/logo.png" alt="logo" />
                            </a>
                        </div>
                        <div className="sidebar-widget">
                            <div className="info-wdget">
                                <h4 className="widget-title">Office Address</h4>
                                <p>
                                    23/A, Miranda City Likaoli Prikano, Dope
                                </p>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <div className="info-wdget">
                                <h4 className="widget-title">Phone Number</h4>
                                <p> +0989 7876 9865 9 </p>
                                <p> +(090) 8765 86543 85 </p>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <div className="info-wdget">
                                <h4 className="widget-title">Email Address</h4>
                                <p> info@example.com </p>
                                <p> example.mail@hum.com </p>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <div className="instagram">
                                <a href="#">
                                    <img src="/src/templace/img/widget/gallery-1.jpg" alt="instagram" />
                                </a>
                                <a href="#">
                                    <img src="/src/templace/img/widget/gallery-2.jpg" alt="instagram" />
                                </a>
                                <a href="#">
                                    <img src="/src/templace/img/widget/gallery-3.jpg" alt="instagram" />
                                </a>
                                <a href="#">
                                    <img src="/src/templace/img/widget/gallery-4.jpg" alt="instagram" />
                                </a>
                                <a href="#">
                                    <img src="/src/templace/img/widget/gallery-1.jpg" alt="instagram" />
                                </a>
                                <a href="#">
                                    <img src="/src/templace/img/widget/gallery-2.jpg" alt="instagram" />
                                </a>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <div className="social-widget">
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="body-overlay" />
            </div>

        </div>
    )
}

export default Header