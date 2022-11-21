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
                                    <li>
                                        <a href="#">Trang <i className="bi bi-caret-down-fill"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href="about.html">Thông Tin</a></li>
                                            <li><a href="bmi-calculator.html">Tính Chỉ Số IBM</a></li>
                                            <li><a href="service.html">Dịch Vụ</a></li>
                                        </ul>
                                    </li>
                                    <li className="has">
                                        <Link to="./packagess">Gói Tập</Link>
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
                                        <a href="#"><i className="bi bi-search"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="bi bi-cart4"></i></a>
                                    </li>
                                    <li>
                                        <a href="/signup"><i className="bi bi-person-circle"></i></a>
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

        </div>
    )
}

export default Header