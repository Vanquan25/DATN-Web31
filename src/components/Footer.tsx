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
                                        B???n s??? ???????c ph??n t??ch v?? hi???u v??? ch??nh c?? th??? c???a m??nh, t??? ???? v???ch ra m???c ti??u t???p luy???n
                                        v???i t???ng th??? tr???ng kh??c nhau v?? Gym T&amp;T s??? gi??p b???n ho??n th??nh m???c ti??u ????.
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
                                    <h3 className="widget-title-2 ml-20">TH??NG TIN H??? TR???</h3>
                                    <ul>
                                        <li>
                                            <span>Gi???i Thi???u</span>
                                        </li>
                                        <li>
                                            <span>H?????ng D???n Mua H??ng</span>
                                        </li>
                                        <li>
                                            <span>Ch??nh S??ch B???o M???t</span>
                                        </li>
                                        <li>
                                            <span>Thanh To??n V?? Giao H??ng</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="footer-widgets contact-widget">
                                    <h3 className="widget-title-2">Li??n H???</h3>
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
                                        T??a nh?? FPT Polytechnic, ph??? Tr???nh V??n B??, ph?????ng Ph????ng Canh, qu???n Nam T??? Li??m, TP H??
                                        N???i
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="footer-widgets newsletters-widget">
                                    <h3 className="widget-title-2">Nh???n Th??ng Tin</h3>
                                    <p>
                                        G???i Mail ????? ???????c Nh???n Th??ng Tin M???i Nh???t T??? Ch??ng T??i
                                    </p>
                                    <form action="#">
                                        <div className="input-wrap">
                                            <input type="text" placeholder="Vui L??ng Nh???p Email C???a B???n" />
                                        </div>
                                        <button className="btn btn-gra">
                                            G???i Th??ng Tin <i className="far fa-angle-double-right" />
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