import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToyDetails from "../ToyDetails/ToyDetails";
import { TabTitle } from "../../utilities/TabTitle";


const AllToys = () => {
    TabTitle('DisneyLand Toys||All Toys')
    const [toys, setToys] = useState([]);
    let num = 1;


    useEffect(() => {
        fetch('https://toy-marketplace-server-three-eta.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {toys.map(toy =>
                        <tr key={toy._id}>
                            <th>{num++}</th>
                            <td>{toy.sellerName}</td>
                            <td>{toy.toyName}</td>
                            <td>{toy.subCategory}</td>
                            <td>${toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>
                                {/* The button to open modal */}
                                
                                   <Link to={'/toyDetails'} toy={toy}>View Details</Link> 
                                
                            
                        </td>
                        </tr>
                    )}
            </tbody>
        </table>
        </div >
    );
};

export default AllToys;