import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';
import { User } from '../Type/User';

type props = {
    onSignup: (User: User) => void
};

type TypeInputs = {
    name: string,
    email: string,
    phone: string,
    gender: string,
    address: string,
    confirm_password: string,
    password: string
    role: string,
}

const Signup = (props: props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        signup(data);
        navigate("/signin");
    }
    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: '#808080' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="/src/templace/img/thumb/thumb-30.jpg" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Register your account</h3>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-outline">
                                                            <input type="text" {...register('name')} id="form3Example1" className="form-control" />
                                                            <label className="form-label" htmlFor="form3Example1">Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-outline">
                                                            <input type="text" {...register('phone')} id="form3Example2" className="form-control" />
                                                            <label className="form-label" htmlFor="form3Example2">Phone</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-outline mb-3">
                                                    <input type="email" {...register('email')} id="form2Example17" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-outline">
                                                            <input type="password" {...register('password')} id="form2Example27" className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="form2Example27">Password</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-outline">
                                                            <input type="password" {...register('confirm_password')} id="form2Example27" className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="form2Example27">Confirm-Password</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-outline">
                                                            <input type="text" {...register('gender')} id="form3Example1" className="form-control" />
                                                            <label className="form-label" htmlFor="form3Example1">Gender</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-outline">
                                                            <input type="text" {...register('address')} id="form3Example2" className="form-control" />
                                                            <label className="form-label" htmlFor="form3Example2">Address</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                                </div>
                                                <a className="small text-muted" href="#!">Forgot password?</a>
                                                <p className="mb-4 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="/signin" style={{ color: '#393f81' }}>Login here</a></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup