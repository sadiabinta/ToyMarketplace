import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider";


const AddToys = () => {
    const {user}=useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = (toyData,event) => {
        console.log(toyData);
        fetch('http://localhost:5000/allToys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(toyData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId>0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your information has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            event.target.reset();
        })
    };
    return (
        <div>
            <h2 className="text-5xl font-bold text-center text-pink-700">Welcome to the Marketplace</h2>
            <h4 className="text-3xl font semibold text center text-pink-700 text-center">Add a Toy</h4>

            <div className="card flex-shrink-0 w-1/2 shadow-xl bg-base-100 mx-auto">
                <div className="card-body rounded-xl bg-pink-700">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" py-5">
                            <div className="md:flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" placeholder="Photo URL" className="input input-bordered" {...register("photo", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" placeholder="Toy Name" className="input input-bordered" {...register("toyName", { required: true})} />
                                </div>
                            </div>
                            <div className="md:flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" placeholder="Seller Name" className="input input-bordered" {...register("sellerName", { required: true, maxLength: 20 })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                                </div>
                            </div>
                            <div className="md:flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub category</span>
                                    </label>
                                    <select className="input input-bordered" {...register("subCategory", { required: true})}>
                                        <option value="Action Figure">Action Figure</option>
                                        <option value="Car">Car</option>
                                        <option value="Doll">Doll</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" step='any' min='1' placeholder="$ Price" className="input input-bordered" {...register("price", { required: true })} />
                                </div>
                            </div>
                            <div className="md:flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" min='0'max='5' step='any' placeholder="Rating" className="input input-bordered" {...register("rating", { required: true})} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" min='1' placeholder="Quantity" className="input input-bordered" {...register("quantity", { required: true })} />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="input-bordered rounded-xl" cols="30" rows="5" {...register("description", { required: true })}></textarea>
                            </div>
                        </div>
                        <input className="btn bg-blue-800" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToys;