import { PackagesType } from '../Type/Packages'

type PrincingListProps = {
    packagess: PackagesType[];
}

const PrincingPlan = (props: PrincingListProps) => {

    return (
        <div>
            <main>
                <section className="breadcrumb-area pt-180 pb-180 pt-md-120 pb-md-120 pt-xs-100 pb-xs-100 bg-fix" data-overlay="black" data-opacity={7} style={{ backgroundImage: "url('./src/templace/img/bg/breadcrumb-bg-4.jpg')" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="breadcrumb-content">
                                    <h3 className="title">Kế Hoạch Giá Cả</h3>
                                    <ul>
                                        <li><a href="index.html">Trang chủ</a></li>
                                        <li className="active">Kế Hoạch Giá Cả</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="pricing-area bg-off-white pt-130 pb-100">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-12">
                                <div className="section-title-2 bar-theme-color text-center mb-35">
                                    <h3>
                                    Chúng tôi cung cấp một gói giá thoải mái cho khách hàng hài lòng của chúng tôi
                                    </h3>
                                    <span>Gía</span>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {props.packagess?.map((packages, index) => {
                                return (
                                    <div className="col-lg-4 col-md-7" key={index}>
                                        <div className="pricing-wrap mt-30 mb-30">
                                            <h3>{packages.name}</h3>
                                            <p>
                                                {packages.status}
                                            </p>
                                            <span className="price">{packages.price}</span>
                                            <a href={`packagess/packdetail/${packages.id}`} className="order-btn">
                                                select plan <i className="bi bi-fast-forward-fill"></i>
                                            </a>
                                            <div className="shape">
                                                <img src="/src/templace/img/shape/shape-11.png" alt="shape" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="pricing-area-2 pt-130 pb-100">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-12">
                                <div className="section-title-2 bar-theme-color text-center mb-35">
                                    <h3>
                                    Chúng tôi cung cấp một gói giá thoải mái cho khách hàng hài lòng của chúng tôi
                                    </h3>
                                    <span>Gía</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="pricing-wrap-2 mb-80">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-lg-4">
                                            <div className="pricing-title">
                                                <h3>Kế hoạch cơ bản</h3>
                                                <span>45.99 <sup>$</sup></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="pricing-list">
                                                <ul>
                                                    <li><i className="bi bi-check-circle"></i> lớp tập tạ</li>
                                                    <li><i className="bi bi-check-circle"></i> đào tạo boxing</li>
                                                    <li><i className="bi bi-check-circle"></i> Yoga cổ điển</li>
                                                    <li><i className="bi bi-check-circle"></i> Thời trang Yoga&amp; GYM</li>
                                                    <li><i className="bi bi-check-circle"></i> Phòng tập &amp; thể dục</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="pricing-content">
                                                <p>
                                                    Sedut perspiciatis unde omnis iste is natus error sit voluptatem accusantm
                                                    doloremque laudantium totam
                                                </p>
                                                <a href="#" className="btn btn-gra mt-30">
                                                    chọn kế hoạch <i className="bi bi-fast-forward-fill"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-wrap-2 active mb-80">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-lg-4">
                                            <div className="pricing-title">
                                                <h3>Kế hoạch chuyên nghiệp</h3>
                                                <span>95.99 <sup>$</sup></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="pricing-list">
                                            <ul>
                                                    <li><i className="bi bi-check-circle"></i> lớp tập tạ</li>
                                                    <li><i className="bi bi-check-circle"></i> đào tạo boxing</li>
                                                    <li><i className="bi bi-check-circle"></i> Yoga cổ điển</li>
                                                    <li><i className="bi bi-check-circle"></i> Thời trang Yoga&amp; GYM</li>
                                                    <li><i className="bi bi-check-circle"></i> Phòng tập &amp; thể dục</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="pricing-content">
                                                <p>
                                                    Sedut perspiciatis unde omnis iste is natus error sit voluptatem accusantm
                                                    doloremque laudantium totam
                                                </p>
                                                <a href="#" className="btn btn-gra mt-30">
                                                   Chọn kế hoạch <i className="bi bi-fast-forward-fill"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-wrap-2">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-lg-4">
                                            <div className="pricing-title">
                                                <h3>Kế hoạch vàng</h3>
                                                <span>205.99 <sup>$</sup></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="pricing-list">
                                                <ul>
                                                    <li><i className="bi bi-check-circle"></i> lớp tập tạ</li>
                                                    <li><i className="bi bi-check-circle"></i> đào tạo boxing</li>
                                                    <li><i className="bi bi-check-circle"></i> Yoga cổ điển</li>
                                                    <li><i className="bi bi-check-circle"></i> Thời trang Yoga&amp; GYM</li>
                                                    <li><i className="bi bi-check-circle"></i> Phòng tập &amp; thể dục</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="pricing-content">
                                                <p>
                                                    Sedut perspiciatis unde omnis iste is natus error sit voluptatem accusantm
                                                    doloremque laudantium totam
                                                </p>
                                                <a href="#" className="btn btn-gra mt-30">
                                                    Chọn kế hoạch <i className="bi bi-fast-forward-fill"></i>
                                                </a>
                                            </div>
                                        </div>
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

export default PrincingPlan