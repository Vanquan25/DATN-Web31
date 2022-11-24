import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { readCoachs } from '../api/coachs';
import { readpack } from '../api/princing';
import { PackageBill } from '../Type/BillPackage';
import { CoachsType } from '../Type/Coachs';
import { PackagesType } from '../Type/Packages';
import { currencyPrice } from '../ulltis/formatMoney';

type CartProps = {
    onIncreaseItemInCart: (id: number) => void
    onDecreaseItemInCart: (id: number) => void
    onRemoveCart: (id: number) => void
    selectPT: CoachsType[];

    onAddPackagebill: (bill: PackageBill) => void
    // PackageBill chưa thêm trường gì
}
type FormInputs = {
    id:number,
    name:string,
    address:string,
    phone:number,
    email:string,
    total : string | number,
    date_start: Date,
    seletPT:string
}

const CartPage = (props: CartProps) => {
    let cart: any = [];
    cart = JSON.parse(localStorage.getItem('cart') as string);
    let total = 0
    const { id } = useParams();
    const [packages, setPackagess] = useState<PackagesType>();

    useEffect(() => {
        const getPackagess = async () => {
            const { data } = await readpack(id);
            setPackagess(data)
        }
        getPackagess();
    }, [])
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        props.onAddPackagebill(data)
        // navigate('https://sandbox.vnpayment.vn/paymentv2/Transaction/PaymentMethod.html?token=2fbb4de776684b33a9dabaab87172898')

    }

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
                        {cart && cart.map((item: any) => {
                            return (
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
                                                    <button onClick={() => props.onIncreaseItemInCart(item._id)} className="btn increase border border-black p-2">+</button>
                                                    <span className='px-2'>{item.quantity}</span>
                                                    <button onClick={() => props.onDecreaseItemInCart(item._id)} className="btn decrease border border-black p-2">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-muted">{currencyPrice(`${item.price * item.quantity}`)}</span>
                                    </li>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Mã giảm giá" />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-secondary">Áp dụng</button>
                                        </div>
                                    </div>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Tổng tiền</span>
                                        <strong>{total += item.price * item.quantity}</strong>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Package Bill</h4>
                        <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Họ và tên</label>
                                    <input type="text" {...register('name')}  className="form-control" id="lastName" />
                                    <div className="invalid-feedback"> Valid last name is required. </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username">Email</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" className="form-control" {...register('email')}  id="username" />
                                    <div className="invalid-feedback" style={{ width: '100%' }}> Your username is required. </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username">Địa chỉ</label>
                                <div className="input-group">
                                    <input type="text" {...register('address')}  className="form-control" id="username" />
                                    <div className="invalid-feedback" style={{ width: '100%' }}> Your username is required. </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number">Số điện thoại<span className="text-muted" /></label>
                                <input type="number" {...register('phone')} className="form-control" id="number" />
                                <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                            </div>
                            <div className="d-block my-3">
                                <label htmlFor="pt"> Huấn Luyện Viên <span className="text-muted" /></label>
                                <div className='input-group'>
                                    <input type="radio" id="truePT" name="PT" value="Có"required />
                                    <label htmlFor="true">Có</label>
                                </div>
                                <div className='input-group'>
                                    <input type="radio" id="falsePT" name="PT" value="Không" required/>
                                    <label htmlFor="false">Không</label>
                                </div>
                            </div>
                            <h4 className="mb-3">Huấn Luyện Viên</h4>
                            
                            <select name="" id="">
                            {props.selectPT?.map((Coachs) => {
                            
                                return (
                                    
                                <option value={Coachs.name}  {...register('seletPT')}>{Coachs.name}</option>
                                )
                            })}
                            </select>
                            <div className="selectDay">
                            <h4 className="mb-3">Chọn Ngày</h4>
                                <div id="datepicker" className="input-group date" data-date-format="dd-mm-yyyy">
                                    <input type="text" className='' {...register('date_start')}  id="datepicker"  />
                                     <span className="input-group-addon ">
                                        <i className="glyphicon glyphicon-calendar" ></i>
                                    </span> 
                                </div>
                            </div>
                            <div className="tong_tien">
                                <h4 className="mb-3" >Tổng Tiền : </h4>
                                <input type="text" {...register('total')} value={total}/>

                            </div>
                            <div className="d-block my-3">
                            <h4 className="mb-3">Payment</h4>
                                <div className='input-group'>
                                    <input type="radio" id="TTMM" name="PTTT" value="Có"required />
                                    <label htmlFor="true">Thanh toán momo</label>
                                </div>
                                <div className='input-group'>
                                    <input type="radio" id="TTTM" name="PTTT" value="Không" required/>
                                    <label htmlFor="false">Thanh toán tiền mặt</label>
                                </div>
                            </div>

                            
                          
                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" onClick={()=>{
                                
                            }} type="submit">Tiếp tục thanh toán</button>
                        </form>
                    </div>
                </div>
            </div>
            <br />
        </div>

    )
}

export default CartPage