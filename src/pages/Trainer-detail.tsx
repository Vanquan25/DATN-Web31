import React from 'react'

type Props = {}

const TrainerDetail = (props: Props) => {
    return (
        <div>
            <main>
                {/*    breadcrumb-area start    */}
                <section className="breadcrumb-area pt-180 pb-180 pt-md-120 pb-md-120 pt-xs-100 pb-xs-100 bg-fix" data-overlay="black" data-opacity={7} style={{ backgroundImage: "url('./src/templace/img/bg/breadcrumb-bg-3.jpg')" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="breadcrumb-content">
                                    <h3 className="title">Thông tin HLV</h3>
                                    <ul>
                                        <li><a href="index.html">Trang chủ</a></li>
                                        <li className="active">Thông tin HLV</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*    breadcrumb-area end    */}
                {/* trainer-details-area start */}
                <section className="trainer-details-area pt-130 pb-130">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-6 col-lg-7 col-md-8">
                                <div className="trainer-details-thumb mb-md-50 mb-xs-50">
                                    <img src="/src/templace/img/thumb/thumb-28.jpg" alt="thumb" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="trainer-details-content">
                                    <h3>Ramon S. Goebel</h3>
                                    <h4>Boxing Trainer</h4>
                                    <p>
                                        Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                                        and I will give you a complete account of the system, and expound the actual teachings of
                                        the great explorer of the truth, the master-builder of human happiness. No one rejects
                                        dislikeor avoids pleasure itself, because it is pleasure but because
                                    </p>
                                    <div className="trainer-info mt-50 mb-40">
                                        <div className="info-icon">
                                            <i className="flaticon-email" />
                                        </div>
                                        <div className="info-content">
                                            <h5>Email us</h5>
                                            <span>suport@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="trainer-info mb-40">
                                        <div className="info-icon">
                                            <i className="flaticon-whatsapp" />
                                        </div>
                                        <div className="info-content">
                                            <h5>Contact me</h5>
                                            <span className="heading-color">+012 (345) 6789</span>
                                        </div>
                                    </div>
                                    <div className="trainer-info">
                                        <div className="info-icon">
                                            <i className="flaticon-pin" />
                                        </div>
                                        <div className="info-content">
                                            <h5>Location</h5>
                                            <span className="heading-color">205 Middle Street, USA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between align-items-center pt-130">
                            <div className="col-xl-5 col-lg-6 col-md-12">
                                <div className="about-content-2 mb-50">
                                    <div className="section-title-2 bar-theme-color mb-30">
                                        <h3>We Are More Skilled In Various Health &amp; Fitness</h3>
                                        <span>Skill</span>
                                    </div>
                                    <div className="about-text">
                                        <p>
                                            Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                            ipsam voluptatem quia voluptas sit aspe
                                            rnatur aut odit aut fugit, sed quia consequmagni dolores eos
                                            qui ratione voluptatem sequi nesciunt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                        <div className="progress-circular">
                                            <input type="text" className="knob" defaultValue={0} data-rel={75} data-linecap="round" data-width={130} data-height={130} data-bgcolor="#dddddd" data-fgcolor="#e63c35" data-thickness=".10" data-readonly="true" disabled />
                                            <h4>GYM</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="progress-circular">
                                            <input type="text" className="knob" defaultValue={0} data-rel={85} data-linecap="round" data-width={130} data-height={130} data-bgcolor="#dddddd" data-fgcolor="#e63c35" data-thickness=".10" data-readonly="true" disabled />
                                            <h4>Yoga</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="progress-circular">
                                            <input type="text" className="knob" defaultValue={0} data-rel={65} data-linecap="round" data-width={130} data-height={130} data-bgcolor="#dddddd" data-fgcolor="#e63c35" data-thickness=".10" data-readonly="true" disabled />
                                            <h4>SPA</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* trainer-details-area end */}
                {/* testimonial-area-2 start */}
                <div className="testimonial-area-2 pt-130 pb-130" data-background="/src/templace/img/bg/testimonial-bg-3.jpg">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title-2 text-center bar-theme-color mb-35">
                                    <h3>
                                        What Our Clients Say About Our Services
                                    </h3>
                                    <span>Says</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testimonial-slider-3 mb-80 mb-xs-0">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide single-slide">
                                                <div className="testimonial-wrap-3">
                                                    <div className="author-info">
                                                        <img src="/src/templace/img/icon/icon-4.png" alt="author" />
                                                        <div className="author-content">
                                                            <h4>Dustin R. Gardner</h4>
                                                            <span>CEO &amp; Founder (DL)</span>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>
                                                            Pleasure itself because ecs ways those who not know pleasure info
                                                            rationally take trivial example of which ever underti mista kensm idea
                                                            denouncing pleasure when uncover many web sites
                                                        </p>
                                                        <ul>
                                                            <li><i className="bi bi-star-fill"></i></li>
                                                            <li><i className="bi bi-star-fill"></i></li>
                                                            <li><i className="bi bi-star-fill"></i></li>
                                                            <li><i className="bi bi-star-fill"></i></li>
                                                            <li><i className="bi bi-star-half"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="testimonial-wrap-3">
                                                    <div className="author-info">
                                                        <img src="/src/templace/img/icon/icon-5.png" alt="author" />
                                                        <div className="author-content">
                                                            <h4>Dustin R. Gardner</h4>
                                                            <span>CEO &amp; Founder (DL)</span>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>
                                                            Beatae vitae dicta sunt explicab. Nemo enim ipsam voluptatem quvoluptas
                                                            sit aspernatur aut oditafugit, sed quia consequuntur mag dolores eos qui
                                                            ratione voluptate sequi nesciunt porro quisquam
                                                        </p>
                                                        <ul>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star-half-alt" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide single-slide">
                                                <div className="testimonial-wrap-3">
                                                    <div className="author-info">
                                                        <img src="/src/templace/img/icon/icon-6.png" alt="author" />
                                                        <div className="author-content">
                                                            <h4>Dustin R. Gardner</h4>
                                                            <span>CEO &amp; Founder (DL)</span>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>
                                                            Modi tempora incidunt ut labore et dolore magnam aliquam quaer
                                                            voluptatem. Ut enim ad minimave iam, quis nostrum execitationem there
                                                            was other hands days pull up the holds worlds think.
                                                        </p>
                                                        <ul>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star-half-alt" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* If we need pagination */}
                                    <div className="swiper-pagination" />
                                    {/* If we need navigation buttons */}
                                    <div className="swiper-button-prev"><i className="far fa-angle-double-left" /></div>
                                    <div className="swiper-button-next"><i className="far fa-angle-double-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default TrainerDetail