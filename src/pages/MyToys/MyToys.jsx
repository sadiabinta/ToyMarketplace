import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
    const {user}=useContext(AuthContext);
    const [toys,setToys]=useState([]);

    const url=`http://localhost:5000/toys?email=${user.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
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
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy=>
                                <tr key={toy._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-32 p-4">
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
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
                                

                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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