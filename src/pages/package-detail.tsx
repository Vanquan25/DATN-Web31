import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { readpack } from '../api/princing'
import { PackagesType } from '../Type/Packages'

type Props = {
    packagess: PackagesType[];
    onAddToCart: (cart: any) => void;
}

const PackageDetail = (props: Props) => {
    const { id } = useParams();
    const [packages, setPackagess] = useState<PackagesType>();

    useEffect(() => {
        const getPackagess = async () => {
            const { data } = await readpack(id);
            setPackagess(data)
        }
        getPackagess();
    }, [])
    return (
        <div>
            <main>
                <section className="breadcrumb-area pt-180 pb-180 pt-md-120 pb-md-120 pt-xs-100 pb-xs-100 bg-fix" data-overlay="black" data-opacity={7} style={{ backgroundImage: "url('./src/templace/img/bg/breadcrumb-bg-4.jpg')" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="breadcrumb-content">
                                    <h3 className="title">Chi Tiết Gói Tập</h3>
                                    <ul>
                                        <li><a href="index.html">Trang Chủ</a></li>
                                        <li className="active">Chi Tiết Gói Tập</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="product-area pt-130 pb-130">
                    <div className="container">
                        <div className="row mb-50">
                            <div className="col-md-12 col-lg-9 col-xl-6 order--1">
                                <div className="tab-content product-tab-content" id="product-tabs-content">
                                    <div className="tab-pane fade active show" id="p-tab-1" role="tabpanel" aria-labelledby="p-tabs-1">
                                        <img src="/src/templace/img/product/product-lg-5.jpg" alt="product" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-lg-8 col-xl-4">
                                <div className="product-details mt-lg-40 mt-md-40 mt-xs-40">
                                    <h3>{packages?.name}</h3>
                                    <div className="product-rating">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <span className="price">{packages?.price}</span>
                                    <p>
                                        {packages?.status}
                                    </p>
                                    <div className="product-action-box mb-30">
                                        <div className="add-to-cart">
                                            <a href={`/cart/${packages?.id}`} className="btn btn-gra" onClick={() => props.onAddToCart(packages?.id)}>Đăng Ký Ngay</a>
                                        </div>
                                    </div>
                                    <div className="product-share">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                        <a href="#"><i className="bi bi-google"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-11 col-lg-11">
                                <div className="review-tab-wrapper">
                                    <div className="nav review-tab" id="review-tabs" role="tablist">
                                        <a className="active show" id="r-tabs-1" data-toggle="tab" href="#r-tab-1" role="tab" aria-controls="r-tab-1" aria-selected="true">
                                            Mô tả
                                        </a>
                                        <a id="r-tabs-3" data-toggle="tab" href="#r-tab-3" role="tab" aria-controls="r-tab-3" aria-selected="false">
                                            Đánh Giá
                                        </a>
                                    </div>
                                    <div className="tab-content review-tab-content" id="review-tabs-content">
                                        <div className="tab-pane fade active show" id="r-tab-1" role="tabpanel" aria-labelledby="r-tabs-1">
                                            <p>
                                                Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur xcepteur sint occaecat cupidatat non proident, sunt.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure dolor in reprehenderit in voluptate velit esse cdolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla
                                                gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum
                                                elit, nec luctus magna felis sollicitudinInteger in mauris eu nibh euismod gravida.
                                                Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam
                                                tempor. Ut ullamcorper,
                                            </p>
                                        </div>
                                        <div className="tab-pane fade" id="r-tab-2" role="tabpanel" aria-labelledby="r-tabs-2">
                                            <p>
                                                Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur xcepteur sint occaecat cupidatat non proident, sunt.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Nullam varius, turpis et commodo
                                                pharetra, est eros bibendum elit, nec luctus magna felis sollicitudinInteger in
                                                mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec
                                                lobortis risus a elit. Etiam tempor. Ut ullamcorper,
                                            </p>
                                        </div>
                                        <div className="tab-pane fade" id="r-tab-3" role="tabpanel" aria-labelledby="r-tabs-3">
                                            <p>
                                                Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur xcepteur sint occaecat cupidatat non proident, sunt.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure dolor in reprehenderit in voluptate velit esse cdolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla
                                                gravida orci a odio.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shop-banner" style={{ backgroundImage: "url('./src/templace/img/product/product-banner.jpg')" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-7">
                                <div className="shop-banner-content">
                                    <div className="shop-banner-title">
                                        <h3>Các Gói Tập Mới Nhất</h3>
                                        <span>NEW</span>
                                    </div>
                                    <a href="shop-details.html" className="btn btn-gra">
                                        Xem Ngay <i className="bi bi-fast-forward-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-area pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title-2 bar-theme-color text-center mb-35">
                                    <h3>
                                        Các Gói Tập Có Thể Bạn Thích
                                    </h3>
                                    <span>GymT&amp;T</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="product-wrap mb-30">
                                    <div className="product-img">
                                        <img src="/src/templace/img/product/product-1.png" alt="product" />
                                        <div className="product-card">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="far fa-heart" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-expand" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-exchange-alt" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="cart-btn">
                                            <a href="shop-2.html" className="btn btn-gra">Xem Ngay <i className="bi bi-fast-forward-fill"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3>
                                            <a href="shop-2.html">Red Boxing Gloves</a>
                                        </h3>
                                        <span className="price">$205.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product-wrap mb-30">
                                    <div className="product-img">
                                        <img src="/src/templace/img/product/product-2.png" alt="product" />
                                        <div className="product-card">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="far fa-heart" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-expand" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-exchange-alt" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="cart-btn">
                                            <a href="shop-2.html" className="btn btn-gra">Xem Ngay <i className="bi bi-fast-forward-fill"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3>
                                            <a href="shop-2.html">New Sports Jercy</a>
                                        </h3>
                                        <span className="price">$30.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product-wrap mb-30">
                                    <div className="product-img">
                                        <img src="/src/templace/img/product/product-3.png" alt="product" />
                                        <div className="product-card">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="far fa-heart" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-expand" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-exchange-alt" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="cart-btn">
                                            <a href="shop-2.html" className="btn btn-gra">Xem Ngay <i className="bi bi-fast-forward-fill"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3>
                                            <a href="shop-2.html">Vitamin Pill Product</a>
                                        </h3>
                                        <span className="price">$405.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default PackageDetail