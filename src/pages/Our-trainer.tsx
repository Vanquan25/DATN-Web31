import React from 'react'
import { Link } from 'react-router-dom'
import { CoachsType } from '../Type/Coachs'

type CoachListProps = {
   Coachs:CoachsType[];
}

const OurTrainer = (props: CoachListProps) => {
    return (
        <div>
            <main>
                {/*    breadcrumb-area start    */}
                <section className="breadcrumb-area pt-180 pb-180 pt-md-120 pb-md-120 pt-xs-100 pb-xs-100 bg-fix" data-overlay="black" data-opacity={7} style={{ backgroundImage: "url('./src/templace/img/bg/breadcrumb-bg-3.jpg')" }}>
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
                                    Chúng tôi có thành viên nhóm chuyên gia gặp gỡ huấn luyện viên của chúng tôi
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
                                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-twitter"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-instagram"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-google"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3><Link to='trainerdetail'>Howard C. Skinner</Link></h3>
                                                <span>Huấn luyện viên tạ</span>
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
                                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-twitter"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-instagram"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-google"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3><a href="trainer-details.html">Raymond L. Brown</a></h3>
                                                <span>Huấn luyện viên đấm bốc</span>
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
                                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-twitter"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-instagram"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-google"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3><a href="trainer-details.html">Charles T. McAllister</a></h3>
                                                <span>Huấn luyện viên ca-ra-đi-ô</span>
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
                                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-twitter"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-instagram"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-google"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3><a href="trainer-details.html">Solomon K. Sawyers</a></h3>
                                                <span>Huấn luyện viên sắc đẹp</span>
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
                            <a href="trainer.html" className="btn btn-gra">XEM TẤT CẢ <i className="bi bi-fast-forward-fill"></i></a>
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
                                    <h3>Chúng tôi có thành viên nhóm chuyên gia gặp gỡ huấn luyện viên của chúng tôi</h3>
                                    <span>Team</span>
                                </div>
                            </div>
                            <div className="col-xl-3 col-xl-3 text-xl-right text-lg-right text-center">
                                <a href="trainer.html" className="btn btn-gra">
                                   Tìm hiểu thêm <i className="bi bi-fast-forward-fill"></i>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                        {props.Coachs?.map((coaches, index) => {
                            return(
                            <div className="col-xl-3 col-md-6" key={index} >
                           
                                <div className="team-wrap-2 mb-30" >
                                    <div className="team-img">
                                        <img src="/src/templace/img/team/team.jpg" alt="Team" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="trainer-details.html">{coaches.name}</a></h3>
                                        <span>Huấn luyện viên tạ</span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="bi bi-google"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                           
                          
                          
                            </div>
                            )
                        })}
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
                                        <span>Huấn luyện viên tạ</span>
                                        <span></span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="bi bi-instagram"></i></a>
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
                                        <span>Huấn luyện viên Boxing</span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="bi bi-instagram"></i></a>
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
                                        <span>Huấn luyện viên ca-ra-đi-ô</span>
                                        <div className="team-social-link">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="join-our-team join-team-spacing mb-30">
                                    <h3>Gia nhập đội ngũ của chúng tôi</h3>
                                    <a href="contact.html" className="btn">
                                        Tham gia với chúng tôi <i className="bi bi-fast-forward-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default OurTrainer