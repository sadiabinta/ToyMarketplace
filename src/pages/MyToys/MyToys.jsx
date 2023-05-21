import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Modal from "./Modal";
import { TabTitle } from "../../utilities/TabTitle";

const MyToys = () => {
    TabTitle('DisneyLand Toys||My Toys')
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    console.log(user.email)
    const url = `https://toy-marketplace-server-three-eta.vercel.app/allToys`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const result=data.filter(toy=>toy.email==user.email);
                setToys(result);
            })
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`https://toy-marketplace-server-three-eta.vercel.app/allToys/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                const remaining = toys.filter(toy => toy._id !== id);
                                setToys(remaining);
                            }
                        })

                }
            })


    }
    const handleUpdate = (id) => {
        console.log(id);
    }
    const handleDesc=()=>{
        toys.filter(toy=>toy.price)
    }

    return (
        <div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Toy Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Seller Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Seller Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sub Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="dropdown dropdown-hover">
                                    <label tabIndex={0} className="btn ">Sort By Price</label>
                                    <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-52">
                                        <li onClick={handleDesc}><a>High to Low</a></li>
                                        <li><a>Low to High</a></li>
                                    </ul>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy =>
                                <tr key={toy._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-32 p-4">
                                        <button onClick={() => { handleDelete(toy._id) }} className="btn btn-circle btn-outline bg-pink-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                                    <td className="w-32 p-4">
                                        <img src={toy.photo} alt="" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {toy.toyName}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {toy.sellerName}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {toy.email}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {toy.subCategory}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {toy.quantity}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {toy.rating}
                                    </td>

                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        ${toy.price}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        ${toy.description}
                                    </td>
                                    <td className="px-6 py-4">


                                        <button onClick={() => handleUpdate(toy._id)} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;