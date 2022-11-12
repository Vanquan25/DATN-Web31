import React from 'react'

type Props = {}

const BlogDetail = (props: Props) => {
    return (
        <div>
            <main>
                {/*    breadcrumb-area start    */}
                <section className="breadcrumb-area pt-180 pb-180 pt-md-120 pb-md-120 pt-xs-100 pb-xs-100 bg-fix" data-overlay="black" data-opacity={7} style={{ backgroundImage: "url('./src/templace/img/bg/breadcrumb-bg-2.jpg')" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="breadcrumb-content">
                                    <h3 className="title">Chi tiết bài viết</h3>
                                    <ul>
                                        <li><a href="index.html">Trang chủ</a></li>
                                        <li className="active">Chi tiết bài viết</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*    breadcrumb-area end    */}
                {/* team-area start */}
                <div className="blog-standard-details-area pt-130 pb-130">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-8">
                                <div className="blog-standard-details-posts">
                                    <div className="blog-details-wrap mb-40">
                                        <div className="blog-thumb mb-35">
                                            <a href="blog-details.html">
                                                <img src="/src/templace/img/blog/blog-9.jpg" alt="blog" />
                                            </a>
                                        </div>
                                        <div className="blog-meta">
                                            <span><i className="fas fa-calendar-alt" /> 20 Jan 2020</span>
                                            <span><i className="far fa-comments" /> Comments (1k)</span>
                                        </div>
                                        <div className="blog-title">
                                            <h3>
                                                Meet Respond Testing Tool Let’s Make Buildi Sponsive Websites Simpler Testing
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>
                                                But I must explain to you how all this mistaken idea of denouncing pleasure and
                                                praising pain was born and I will give you a complete account of the system and
                                                expound the actual teaching of the great explorer of the truth the
                                                master-builder of
                                                human happiness.
                                            </p>
                                            <div className="row mb-30">
                                                <div className="col-lg-6">
                                                    <div className="author-quote mt-20">
                                                        <h4>
                                                            At vero eos et accusamu iusto odio dignissimos
                                                            ducmus qui blanditiis praesenti luptatume deleniti atque corrupti
                                                            dolores et quas molestias excepturi sint occaecati cupiditate non
                                                            provident, similique sunt
                                                        </h4>
                                                        <div className="author-name">
                                                            <h4>Bradley H. Rigsby</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p className="mt-20">
                                                        Great explorer of the truth tter-builder of human
                                                        happiness. No one rejects disl avoids psure itself, because it is
                                                        plesure, but because thos who do not know how to pursue pleasure ratien
                                                        ount quences that are extremely painful. No again is there anyone who
                                                        loves or pursues or desires to obtain pain of itself, because it is pain
                                                        but because occasicu stances occur in which toil and pain can procure
                                                        him some great pleasure take
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row mb-30">
                                                <div className="col-md-6">
                                                    <div className="blog-tag">
                                                        <h4>Tags:</h4>
                                                        <ul>
                                                            <li><a href="#" /><a href="#">GYM</a></li>
                                                            <li><a href="#" /><a href="#">Yoga</a></li>
                                                            <li><a href="#" /><a href="#">Fitness</a></li>
                                                            <li><a href="#" /><a href="#">Body</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="blog-share">
                                                        <h4>Share :</h4>
                                                        <ul>
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-author">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="author-thumb">
                                                        <img src="/src/templace/img/author/author-lg-4.jpg" alt="Author" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div className="author-details">
                                                        <h4>Nikoas Zakiloa</h4>
                                                        <p>Pain avoided. But in certain circumstances and owing the claims of duty
                                                            or the obligations of bus frequently occur that pleasures have to be
                                                            repudiated</p>
                                                        <ul>
                                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                                            <li><a href="#"><i className="fab fa-google" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="related-news mt-60">
                                            <h3>Related News</h3>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="related-news-wrap">
                                                        <h4><a href="#">Mixing Tangible &amp; Intangible Interfaces Using Adobe</a></h4>
                                                        <div className="news-meta">
                                                            <span><i className="far fa-user" /> Soamlia</span>
                                                            <span><i className="fas fa-calendar-alt" /> 20 Jan 2020</span>
                                                            <span><i className="far fa-comments" /> (1k)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="related-news-wrap">
                                                        <h4><a href="#">Mixing Tangible &amp; Intangible Interfaces Using Adobe</a></h4>
                                                        <div className="news-meta">
                                                            <span><i className="far fa-user" /> Soamlia</span>
                                                            <span><i className="fas fa-calendar-alt" /> 20 Jan 2020</span>
                                                            <span><i className="far fa-comments" /> (1k)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-comments mt-60">
                                        <div className="blog-comments-title mb-30">
                                            <h4>Comments</h4>
                                        </div>
                                        <div className="latest-comments">
                                            <ul>
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src="/src/templace/img/author/author-5.jpg" alt="author-thumb" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="comments-author-name">
                                                                <h5>David Angel Makel</h5>
                                                                <span>Web Designer</span>
                                                            </div>
                                                            <p>
                                                                It is a long established fact that a reader will be distracted by
                                                                the readable content of a page when looking at its layout. The point
                                                                of using Lorem Ipsum that more-or-less normal distribution letters,
                                                                as opposed to using
                                                            </p>
                                                            <a href="#" className="replay">
                                                                Reply Comments <i className="fas fa-long-arrow-alt-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <ul className="comments-reply">
                                                        <li>
                                                            <div className="comments-box">
                                                                <div className="comments-avatar">
                                                                    <img src="/src/templace/img/author/author-6.jpg" alt="author-thumb" />
                                                                </div>
                                                                <div className="comments-text">
                                                                    <div className="comments-author-name">
                                                                        <h5>Michel Rason Roy</h5>
                                                                        <span>Product Engineer</span>
                                                                    </div>
                                                                    <p>
                                                                        It is a long established fact that a reader will be
                                                                        distracted the readable of a page when looking at its
                                                                        layout. The point ousing that it has a more-or-less normal
                                                                        distribution letters
                                                                    </p>
                                                                    <a href="#" className="replay">
                                                                        Reply Comments <i className="fas fa-long-arrow-alt-right" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src="/src/templace/img/author/author-7.jpg" alt="author-thumb" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="comments-author-name">
                                                                <h5>David Angel Makel</h5>
                                                                <span>Assistant Manager</span>
                                                            </div>
                                                            <p>
                                                                It is a long established fact that a reader will be distracted by
                                                                the readable content of a when looking at its layout. The point of
                                                                using Lorem Ipsum that more-or-less normal distribution of letters,
                                                                as opposed to using Content here, content ktop publishing packages
                                                                and web page editors
                                                            </p>
                                                            <a href="#" className="replay">
                                                                Reply Comments <i className="fas fa-long-arrow-alt-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-comment-form mt-60 mb-md-60 mb-xs-60">
                                        <div className="blog-comments-title mb-30">
                                            <h4>Leave A Reply</h4>
                                        </div>
                                        <div className="comment-form">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="input-wrap input-icon icon-name">
                                                            <input type="text" name="name" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-wrap input-icon icon-email">
                                                            <input type="email" name="mail" placeholder="Your Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-wrap input-icon icon-msg">
                                                            <textarea name="message" placeholder="Your Message" spellCheck="false" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button className="btn btn-gra" type="submit">
                                                            send reply
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-10">
                                <div className="sidebar-area">
                                    <div className="widget-wrap about-widget mb-30">
                                        <div className="thumb">
                                            <img src="/src/templace/img/widget/about-widget.jpg" alt="widget" />
                                        </div>
                                        <div className="about-widget-content">
                                            <p>
                                                Which toil and pain can procure hi some great pleasure.To take a trivial examp whiof
                                                us ever underta orious physical exercise except to obtain some advatage from
                                            </p>
                                        </div>
                                        <div className="about-widget-author">
                                            <h4>Tom C. Dickerson</h4>
                                            <span>CEO &amp; Founder</span>
                                        </div>
                                    </div>
                                    <div className="widget-wrap recent-post-widget mb-30">
                                        <h3 className="widget-title">Recent News</h3>
                                        <div className="recent-post-wrap">
                                            <img src="/src/templace/img/widget/widget-blog-1.jpg" alt="widget" />
                                            <h4>
                                                <a href="blog-details.html">
                                                    Air Side Changed My Design Process
                                                </a>
                                            </h4>
                                        </div>
                                        <div className="recent-post-wrap">
                                            <img src="/src/templace/img/widget/widget-blog-2.jpg" alt="widget" />
                                            <h4>
                                                <a href="blog-details.html">
                                                    Dwelling On Importance Of Self Reflection Part
                                                </a>
                                            </h4>
                                        </div>
                                        <div className="recent-post-wrap">
                                            <img src="/src/templace/img/widget/widget-blog-3.jpg" alt="widget" />
                                            <h4>
                                                <a href="blog-details.html">
                                                    Making Transition From Effects CSS Transitions
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="widget-wrap category-widget mb-30">
                                        <h3 className="widget-title">Category</h3>
                                        <ul>
                                            <li><a href="#">Fitness &amp; GYM</a></li>
                                            <li><a href="#">Beauty &amp; Spa</a></li>
                                            <li><a href="#">Food &amp; Medicine</a></li>
                                            <li><a href="#">Dumbbelling</a></li>
                                            <li><a href="#">Boxing &amp; Caradio</a></li>
                                            <li><a href="#">Cycling GYM</a></li>
                                        </ul>
                                    </div>
                                    <div className="widget-wrap add-widget mb-30">
                                        <div className="add-widget-wrap">
                                            <a href="#">
                                                <img src="/src/templace/img/widget/add-widget-2.jpg" alt="widget" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* team-area end */}
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

export default BlogDetail