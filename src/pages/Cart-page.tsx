import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { readpack } from '../api/princing';
import { PackagesType } from '../Type/Packages';

type Props = {}

const CartPage = (props: Props) => {
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
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className=" d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Giỏ hàng</span>
                            <span className="badge badge-secondary badge-pill">1</span>
                        </h4>
                        <ul className="list-group mb-3 sticky-top">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">{packages?.name}</h6>
                                    <div>
                                        <img src="https://thethaodonga.com/wp-content/uploads/2022/01/Sergi-Constance-4.jpg" width="70px" />
                                    </div>
                                    <div>
                                        <small className="text-muted">{packages?.status}</small>
                                    </div>
                                    <div>
                                        <div className="text-black">
                                            <label htmlFor="firstName">Số lượng</label>
                                            <input type="number" className="form-control" id="firstName" />
                                            <div className="invalid-feedback"> Valid first name is required. </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-muted">{packages?.price}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tổng tiền</span>
                                <strong>$12</strong>
                            </li>
                        </ul>
                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Mã giảm giá" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary">Áp dụng</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Hóa đơn gói tập</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Họ và tên</label>
                                    <input type="text" className="form-control" id="lastName" />
                                    <div className="invalid-feedback"> Valid last name is required. </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username">Email</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" className="form-control" id="username" />
                                    <div className="invalid-feedback" style={{ width: '100%' }}> Your username is required. </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username">Địa chỉ</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="username" />
                                    <div className="invalid-feedback" style={{ width: '100%' }}> Your username is required. </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Số điện thoại<span className="text-muted" /></label>
                                <input type="email" className="form-control" id="email" />
                                <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="country">Tỉnh/Thành phố</label>
                                    <select className="custom-select d-block w-100" id="country" required>
                                        <option >Lựa chọn...</option>
                                        <option>Hà Nội</option>
                                    </select>
                                    <div className="invalid-feedback"> Please select a valid country. </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state">Quận/Huyện</label>
                                    <select className="custom-select d-block w-100" id="state" required>
                                        <option >Lựa chọn...</option>
                                        <option>Mỹ Đình</option>
                                        <option>Bắc Từ Liêm</option>
                                        <option>Nam Từ Liêm</option>
                                        <option>Thanh Xuân</option>
                                        <option>Quốc Oai</option>
                                    </select>
                                    <div className="invalid-feedback"> Please provide a valid state. </div>
                                </div>
                            </div>
                            <hr className="mb-4" />
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="same-address" />
                                <label className="custom-control-label" htmlFor="same-address">Địa chỉ giao hàng giống với địa chỉ thanh toán của tô</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="save-info" />
                                <label className="custom-control-label" htmlFor="save-info">Lưu thông tin này cho lần sau</label>
                            </div>
                            <hr className="mb-4" />
                            <h4 className="mb-3">Payment</h4>
                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                                    <label className="custom-control-label" htmlFor="credit">Thẻ tín dụng</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="debit">Thẻ ghi nợ</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="paypal">Thanh toán tiền mặt</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">Tên trên thẻ</label>
                                    <input type="text" className="form-control" id="cc-name" />
                                    <small className="text-muted">Tên đầy đủ như hiển thị trên thẻ</small>
                                    <div className="invalid-feedback"> Name on card is required </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number">Số thẻ tín dụng</label>
                                    <input type="text" className="form-control" id="cc-number" />
                                    <div className="invalid-feedback"> Credit card number is required </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">Hết hạn</label>
                                    <input type="text" className="form-control" id="cc-expiration" />
                                    <div className="invalid-feedback"> Expiration date required </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-cvv">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" />
                                    <div className="invalid-feedback"> Security code required </div>
                                </div>
                            </div>
                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">Tiếp tục thanh toán</button>
                        </form>
                    </div>
                </div>
            </div>
            <br />
        </div>

    )
}

export default CartPage