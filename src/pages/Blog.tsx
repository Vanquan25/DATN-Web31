import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Blog = (props: Props) => {
    return (
        <div>
            <main>
                {/*    breadcrumb-area start    */}
                <section className="breadcrumb-area pt-180 pb-180 pt-md-120 pb-md-120 pt-xs-100 pb-xs-100 bg-fix" data-overlay="black" data-opacity={7} style={{ backgroundImage: "url('./src/templace/img/bg/breadcrumb-bg-2.jpg')" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="breadcrumb-content">
                                    <h3 className="title">Bài Viết</h3>
                                    <ul>
                                        <li><a href="index.html">Trang chủ</a></li>
                                        <li className="active">Bài Viết</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*    breadcrumb-area end    */}
                {/* team-area start */}
                <div className="blog-content-area pt-130 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap-2 mb-30">
                                    <div className="blog-thumb mb-35">
                                        <Link to="blogdetail">
                                            <img src="/src/templace/img/blog/blog-2.jpg" alt="blog" />
                                        </Link>
                                    </div>
                                    <div className="blog-meta">
                                        <span><i className="bi bi-calendar-check"></i> 20 Jan 2020</span>
                                        <span><i className="bi bi-chat-dots"></i> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content">
                                        <h3>
                                            <Link to="blogdetail">
                                                Meet Respond Testing Tool Let’s Make Buildi sponsive Websites Simpler Testing
                                                Building
                                            </Link>
                                        </h3>
                                        <Link to="blogdetail" className="read-more">
                                            Read more <i className="bi bi-fast-forward-fill"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap-2 mb-30">
                                    <div className="blog-thumb mb-35">
                                        <a href="blog-details.html">
                                            <img src="/src/templace/img/blog/blog-3.jpg" alt="blog" />
                                        </a>
                                    </div>
                                    <div className="blog-meta">
                                        <span><i className="bi bi-calendar-check"></i> 20 Jan 2020</span>
                                        <span><i className="bi bi-chat-dots"></i> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content">
                                        <h3>
                                            <a href="blog-details.html">
                                                Launching Your Design Career: Which Type Of Education Is Best For You Native Areas
                                            </a>
                                        </h3>
                                        <a href="blog-details.html" className="read-more">
                                            Read more <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap-2 mb-30">
                                    <div className="blog-thumb mb-35">
                                        <a href="blog-details.html">
                                            <img src="/src/templace/img/blog/blog-4.jpg" alt="blog" />
                                        </a>
                                    </div>
                                    <div className="blog-meta">
                                        <span><i className="bi bi-calendar-check"></i> 20 Jan 2020</span>
                                        <span><i className="bi bi-chat-dots"></i> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content">
                                        <h3>
                                            <a href="blog-details.html">
                                                CSS Grid Challenge: Build A Tem plate, Win Some Smashi Wsites Simpler Testing
                                                Building
                                            </a>
                                        </h3>
                                        <a href="blog-details.html" className="read-more">
                                            Read more <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap-2 mb-30">
                                    <div className="blog-thumb mb-35">
                                        <a href="blog-details.html">
                                            <img src="/src/templace/img/blog/blog-5.jpg" alt="blog" />
                                        </a>
                                    </div>
                                    <div className="blog-meta">
                                        <span><i className="bi bi-calendar-check"></i> 20 Jan 2020</span>
                                        <span><i className="bi bi-chat-dots"></i> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content">
                                        <h3>
                                            <a href="blog-details.html">
                                                Launching Your Design Career: Which Type Of Education Is Best For You sponsive
                                                Websites
                                            </a>
                                        </h3>
                                        <a href="blog-details.html" className="read-more">
                                            Read more <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap-2 mb-30">
                                    <div className="blog-thumb video-thumb mb-35">
                                        <img src="/src/templace/img/blog/blog-6.jpg" alt="blog" />
                                        <a href="https://www.youtube.com/watch?v=ZIKt1-r3PL0" className="play-btn popup-video">
                                            <i className="fas fa-play" />
                                        </a>
                                    </div>
                                    <div className="blog-meta">
                                        <span><i className="bi bi-calendar-check"></i> 20 Jan 2020</span>
                                        <span><i className="bi bi-chat-dots"></i> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content">
                                        <h3>
                                            <a href="blog-details.html">
                                                Dwelling On The Past: The Im portance Of Project Retrospec Tives (Part 1)
                                            </a>
                                        </h3>
                                        <a href="blog-details.html" className="read-more">
                                            Read more <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap-2 blog-wrap-spacing bg-gra mb-30">
                                    <div className="blog-meta text-white">
                                        <span><i className="bi bi-calendar-check"></i> 20 Jan 2020</span>
                                        <span><i className="bi bi-chat-dots"></i> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content text-white-2">
                                        <h3>
                                            <a href="blog-details.html">
                                                Goodbye Summer, Hello Autumn! Inspiring Wallp Apers To Start September Off Right
                                                (2017 Edition)
                                            </a>
                                        </h3>
                                        <p>
                                            But I must explain to you how all this mistaken idea denounc pleasure
                                        </p>
                                        <a href="blog-details.html" className="read-more">
                                            Read more <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap-2 blog-wrap-spacing bg-dark mb-30">
                                    <div className="blog-meta text-white">
                                        <span><i className="bi bi-calendar-check"></i> 20 Jan 2020</span>
                                        <span><i className="bi bi-chat-dots"></i> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content text-white-2">
                                        <h3>
                                            <a href="blog-details.html">
                                                Removing Friction Last-Miute Travel Planning And Activity Booking (A Case Study)
                                            </a>
                                        </h3>
                                        <a href="blog-details.html" className="read-more">
                                            Read more <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap-2 mb-30">
                                    <div className="blog-thumb mb-35">
                                        <a href="blog-details.html">
                                            <img src="/src/templace/img/blog/blog-7.jpg" alt="blog" />
                                        </a>
                                    </div>
                                    <div className="blog-meta">
                                        <span><i className="bi bi-calendar-check"></i> 20 Jan 2020</span>
                                        <span><i className="bi bi-chat-dots"></i> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content">
                                        <h3>
                                            <a href="blog-details.html">
                                                Dwelling On The Past: The Im portance Of Project Retrospec Tives (Part 1)
                                            </a>
                                        </h3>
                                        <a href="blog-details.html" className="read-more">
                                            Read more <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-wrap-2 mb-30">
                                    <div className="blog-thumb mb-35">
                                        <a href="blog-details.html">
                                            <img src="/src/templace/img/blog/blog-8.jpg" alt="blog" />
                                        </a>
                                    </div>
                                    <div className="blog-meta">
                                        <span><i className="bi bi-calendar-check"></i> 20 Jan 2020</span>
                                        <span><i className="bi bi-chat-dots"></i> Comments (1k)</span>
                                    </div>
                                    <div className="blog-content">
                                        <h3>
                                            <a href="blog-details.html">
                                                Web Development Reading List: Announcing Changes, A Design Kit, DNA Malware, And Why
                                            </a>
                                        </h3>
                                        <a href="blog-details.html" className="read-more">
                                            Read more <i className="bi bi-fast-forward-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 text-center">
                                <div className="blog-pagination mt-50">
                                    <ul>
                                        <li>
                                            <a className="prev page-numbers" href="#">
                                                <i className="bi bi-rewind-fill"></i>
                                            </a>
                                        </li>
                                        <li><span className="page-numbers current">01</span></li>
                                        <li><a className="page-numbers" href="blog.html">02</a></li>
                                        <li><a className="page-numbers" href="blog.html">03</a></li>
                                        <li>
                                            <a className="next page-numbers" href="blog.html">
                                                <i className="bi bi-fast-forward-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Blog