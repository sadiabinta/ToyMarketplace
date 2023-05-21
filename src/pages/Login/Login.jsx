import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { TabTitle } from "../../utilities/TabTitle";

const Login = () => {
    TabTitle('DisneyLand Toys||Log in')
    const {logInWithEmail}=useContext(AuthContext)
    const location=useLocation();
    const navigate=useNavigate();

    const from=location.state?.from?.pathname || '/';
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        console.log(email,password)

        logInWithEmail(email,password)
        .then(result=>{
            const user=result.user;
            //user.displayName=name;
            //.photoURL=photo;
            console.log(user);
            navigate(from,{replace:true})

        })
        .catch(error=>{
            console.log(error)
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2 max-w-xl">
                    <img className="" src='https://i.ibb.co/jTHnDPB/imageedit-7-7420134136.jpg' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body rounded-xl">
                        <h1 className="text-3xl font-bold text-center">Please Login!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label justify-start">
                                    <input type="checkbox" name="show" id="" />
                                    <span className="label-text ms-2">Show Password</span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-400">Login</button>
                            </div>
                        </form>
                        <p><small>New to DisneyLand Toys? please <Link className="text-pink-600" to='/register'>Register</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;