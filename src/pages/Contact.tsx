import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type Input = {
    name: string;
    email: string;
    comment: string
}

type AddContactProps = {
    onAddContact: (contacts: Input) => void
}


const Contact = (props: AddContactProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>();
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<Input> = (data) => {
        props.onAddContact(data)
        toast.success("Cảm ơn phản hồi của quý khách!");

        setTimeout(() => {
            navigate('/')
        }, 3000);

    }
    return (
        <div>
            <main>
                {/*    breadcrumb-area start    */}
                <section className="breadcrumb-area pt-180 pb-180 pt-md-120 pb-md-120 pt-xs-100 pb-xs-100 bg-fix" data-overlay="black" data-opacity={7} style={{ backgroundImage: "url('./src/templace/img/bg/breadcrumb-bg-4.jpg')" }}>
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
                                        <i className="bi bi-telephone"></i>
                                    </div>
                                    <div className="info-content">
                                        <h4>Liên hệ</h4>
                                        <span>+097 (718) 7559</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="contact-info contact-info-2 justify-content-end">
                                    <div className="icon-box">
                                        <i className="bi bi-envelope"></i>
                                    </div>
                                    <div className="info-content">
                                        <h4>Gửi email</h4>
                                        <span>suport@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="contact-info contact-info-2 justify-content-end">
                                    <div className="icon-box">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <div className="info-content">
                                        <h4>Địa điểm</h4>
                                        <span>Nam Từ Liêm, Hà Nội</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-100">
                            <div className="col-md-6 col-lg-5">
                                <div className="contact-text text-left">
                                    <div className="section-title-2 bar-theme-color contact-title">
                                        <h3>Đừng ngần ngại hãy liên hệ với chúng tôi hoặc gửi email cho chúng tôi</h3>
                                    </div>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium dolorem datotamc
                                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                    </p>
                                    <a href="#" className="read-more">
                                        Bắt Đầu <i className="bi bi-fast-forward-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7">
                                <div className="contact-form contact-form-2">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="input-wrap">
                                                    <input type="text" {...register('name')} placeholder="Tên đầy đủ ở đây" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="input-wrap">
                                                    <input type="text" {...register('email')} placeholder="Địa chỉ email" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="input-wrap">
                                                    <textarea rows={5} {...register('comment')} placeholder="Viết tin nhắn" spellCheck="false" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <button type="submit" className="btn btn-gra">
                                                    Gửi tin nhắn <i className="bi bi-fast-forward-fill"></i>
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
                <ToastContainer />
            </main>
        </div>

    )
}

export default Contact