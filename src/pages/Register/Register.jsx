import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;

        console.log(name,email,password,photo)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2 max-w-xl">
                    <img className="" src='https://i.ibb.co/jTHnDPB/imageedit-7-7420134136.jpg' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body rounded-xl">
                        <h1 className="text-3xl font-bold text-center">Please Register!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type='email' name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <label className="label justify-start">
                                    <input type="checkbox" name="show" id="" />
                                    <span className="label-text ms-2">Agree with Terms and Conditions</span>
                                </label>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-400">Register</button>
                                <button className="btn bg-pink-400 mt-4"><FaGoogle className="me-2 text-blue-600"/>Register with Google</button>
                            </div>
                        </form>
                        <p><small>Already Have an account? please <Link className="text-pink-600" to='/login'>Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;