import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const OurTrainer = (props: Props) => {
    return (
        <div>
            <main>
                {/*    breadcrumb-area start    */}
                <section className="breadcrumb-area pt-180 pb-180 pt-md-120 pb-md-120 pt-xs-100 pb-xs-100 bg-fix" data-overlay="black" data-opacity={7} data-background="/src/templace/img/bg/breadcrumb-bg-3.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="breadcrumb-content">
                                    <h3 className="title">Huấn luyện viên của chúng tôi</h3>
                                    <ul>
                                        <li><a href="index.html">Trang chủ</a></li>
                                        <li className="active">Huấn luyện viên</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*    breadcrumb-area end    */}
                {/* team-area start */}
                <div className="team-area pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="section-title-2 bar-theme-color mb-25">
                                    <h3>
                                        We Have Expert Team Member Meet Our Trainer
                                    </h3>
                                    <span>Team</span>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="team-wrap mb-30">
                                            <div className="team-img">
                                                <img src="/src/templace/img/team/team.jpg" alt="Team" />
                                                <div className="team-social-link">
                                                    <ul>
                                                        <li>
                                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-twitter" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-instagram" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-google" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3><Link to='trainerdetail'>Howard C. Skinner</Link></h3>
                                                <span>Dumbbell Trainer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="team-wrap mb-30">
                                            <div className="team-img">
                                                <img src="/src/templace/img/team/team-2.jpg" alt="img" />
                                                <div className="team-social-link">
                                                    <ul>
                                                        <li>
                                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-twitter" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-instagram" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-google" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3><a href="trainer-details.html">Raymond L. Brown</a></h3>
                                                <span>Boxing Trainer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="team-wrap mb-30">
                                            <div className="team-img">
                                                <img src="/src/templace/img/team/team-3.jpg" />
                                                <div className="team-social-link">
                                                    <ul>
                                                        <li>
                                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-twitter" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-instagram" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-google" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3><a href="trainer-details.html">Charles T. McAllister</a></h3>
                                                <span>Caradio Trainer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="team-wrap mb-30">
                                            <div className="team-img">
                                                <img src="/src/templace/img/team/team-4.jpg" />
                                                <div className="team-social-link">
                                                    <ul>
                                                        <li>
                                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-twitter" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-instagram" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-google" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3><a href="trainer-details.html">Solomon K. Sawyers</a></h3>
                                                <span>Beauty Trainer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-right mb-30">
                        <img src="/src/templace/img/team/team-5.jpg" alt="team" />
                        <div className="team-button">
                            <a href="trainer.html" className="btn btn-gra">VIEW ALL TRAINER <i className="fas fa-angle-double-right" /></a>
                        </div>
                    </div>
                    <div className="gray-bg" />
                </div>
                {/* team-area end */}
                {/* team-area-2 start */}
                <div className="team-area-2 bg-off-white pt-130 pb-130">
                    <div className="container">
                        <div className="row align-items-center mb-60">
                            <div className="col-xl-9">
                                <div className="section-title-2 bar-theme-color team-title-2">
                                    <h3>We Have Expert Team Member Meet Our Trainer</h3>
                                    <span>Team</span>
                                </div>
                            </div>
                            <div className="col-xl-3 col-xl-3 text-xl-right text-lg-right text-center">
                                <a href="trainer.html" className="btn btn-gra">
                                    LEARN MORE <i className="fas fa-angle-double-right" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="team-wrap-2 mb-30">
                                    <div className="team-img">
                                        <img src="/src/templace/img/team/team.jpg" alt="Team" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="trainer-details.html">Howard C. Skinner</a></h3>
                                        <span>Dumbbell Trainer</span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-google" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="team-wrap-2 mb-30">
                                    <div className="team-img">
                                        <img src="/src/templace/img/team/team-2.jpg" alt="img" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="trainer-details.html">Raymond L. Brown</a></h3>
                                        <span>Boxing Trainer</span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-google" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="team-wrap-2 mb-30">
                                    <div className="team-img">
                                        <img src="/src/templace/img/team/team-3.jpg" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="trainer-details.html">Charles T. McAllister</a></h3>
                                        <span>Caradio Trainer</span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-google" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="team-wrap-2 mb-30">
                                    <div className="team-img">
                                        <img src="/src/templace/img/team/team-4.jpg" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="trainer-details.html">Solomon K. Sawyers</a></h3>
                                        <span>Beauty Trainer</span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-google" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-shape-1">
                        <img src="/src/templace/img/shape/shape-17.png" alt="shape" />
                    </div>
                    <div className="team-shape-2">
                        <img src="/src/templace/img/shape/shape-18.png" alt="shape" />
                    </div>
                </div>
                {/* team-area-2 end */}
                {/* team-area-4 start */}
                <div className="team-area-4 pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="team-wrap-4 mb-30">
                                    <div className="team-img">
                                        <img src="/src/templace/img/team/team.jpg" alt="img" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="trainer-details.html">Howard C. Skinner</a></h3>
                                        <span>Dumbbell Trainer</span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-wrap-4 mb-30">
                                    <div className="team-img">
                                        <img src="/src/templace/img/team/team-2.jpg" alt="img" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="trainer-details.html">Raymond L. Brown</a></h3>
                                        <span>Boxing Trainer</span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-wrap-4 mb-30">
                                    <div className="team-img">
                                        <img src="/src/templace/img/team/team-3.jpg" alt="img" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="trainer-details.html">Charles T. McAllister</a></h3>
                                        <span>Caradio Trainer</span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="join-our-team join-team-spacing mb-30">
                                    <h3>Join Our Team</h3>
                                    <a href="contact.html" className="btn">
                                        join with us <i className="far fa-angle-double-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* team-area-4 end */}
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
                {/* brand-area end */}
            </main>
        </div>

    )
}

export default OurTrainer