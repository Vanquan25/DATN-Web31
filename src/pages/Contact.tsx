import React from 'react'

type Props = {}

const Contact = (props: Props) => {
    return (
        <div>
            <main>
                {/*    breadcrumb-area start    */}
                <section className="breadcrumb-area pt-180 pb-180 pt-md-120 pb-md-120 pt-xs-100 pb-xs-100 bg-fix" data-overlay="black" data-opacity={7} data-background="/src/templace
                /img/bg/breadcrumb-bg-4.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="breadcrumb-content">
                                    <h3 className="title">Liên Hệ</h3>
                                    <ul>
                                        <li><a href="index.html">Trang chủ</a></li>
                                        <li className="active">Liên hệ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*    breadcrumb-area end    */}
                {/* contact-area start */}
                <div className="contact-area-2 pt-130 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="contact-info contact-info-2 justify-content-end">
                                    <div className="icon-box">
                                        <i className="flaticon-whatsapp" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Contact me</h4>
                                        <span>+012 (345) 6789</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="contact-info contact-info-2 justify-content-end">
                                    <div className="icon-box">
                                        <i className="flaticon-email" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Email us</h4>
                                        <span>suport@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="contact-info contact-info-2 justify-content-end">
                                    <div className="icon-box">
                                        <i className="flaticon-pin" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Location</h4>
                                        <span>670 New Road, USA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-100">
                            <div className="col-md-6 col-lg-5">
                                <div className="contact-text text-left">
                                    <div className="section-title-2 bar-theme-color contact-title">
                                        <h3>Feel Feel Don't Hesitate To Contact With Us Or Email Us</h3>
                                    </div>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium dolorem datotamc
                                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                    </p>
                                    <a href="#" className="read-more">
                                        Get started <i className="fas fa-angle-double-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7">
                                <div className="contact-form contact-form-2">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="input-wrap input-icon icon-name">
                                                    <input type="text" placeholder="Full Name Here" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="input-wrap input-icon icon-email">
                                                    <input type="text" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="input-wrap input-icon icon-msg">
                                                    <textarea rows={5} placeholder="Write Message" spellCheck="false" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <button type="submit" className="btn btn-gra">
                                                    Send message <i className="fas fa-angle-double-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact-area end */}
                {/* map-area start */}
                <div className="map-area">
                    <div className="contact-map" id="contact-map" />
                </div>
                {/* map-area end */}
                {/* brand-area start */}
                <div className="brand-area pt-70 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="brand-slider">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide single-slide">
                                                <div className="brand-wrap">
                                                    <img src="/src/templace
                                                    /img/brand/brand-1.png" alt="brand" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="brand-wrap">
                                                    <img src="/src/templace
                                                    /img/brand/brand-2.png" alt="brand" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="brand-wrap">
                                                    <img src="/src/templace
                                                    /img/brand/brand-3.png" alt="brand" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="brand-wrap">
                                                    <img src="/src/templace
                                                    /img/brand/brand-4.png" alt="brand" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="brand-wrap">
                                                    <img src="/src/templace
                                                    /img/brand/brand-5.png" alt="brand" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="brand-wrap">
                                                    <img src="/src/templace
                                                    /img/brand/brand-6.png" alt="brand" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="brand-wrap">
                                                    <img src="/src/templace
                                                    /img/brand/brand-1.png" alt="brand" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* brand-area end */}
            </main>
        </div>

    )
}

export default Contact