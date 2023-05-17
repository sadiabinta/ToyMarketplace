import logo from '../../assets/logo.png'
import { FaYoutube, FaTwitter, FaFacebook, FaCopyright, FaLocationArrow, FaMailBulk, FaPhone, FaCcAmex, FaCcApplePay, FaCcDiscover, FaCcVisa } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Contact Us</span>
                    <a className="link link-hover flex gap-1"><FaLocationArrow className='text-pink-600'></FaLocationArrow>132, My Street, Kingston, New York 12401.</a>
                    <a className="link link-hover flex gap-1"><FaMailBulk className='text-pink-600'/>disney_store@gmail.com</a>
                    <a className="link link-hover flex gap-1"><FaPhone className='text-pink-600'/>718-000-000</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Quick Link</span>
                    <a className="link link-hover">Shipping</a>
                    <a className="link link-hover">Terms and Conditions</a>
                    <a className="link link-hover">Return and Exchange</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className='w-24' src={logo} alt="" />
                    <p>Disney Land <br />Exporter of all types of Disney Toys</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <FaTwitter size={35} color='blue'></FaTwitter>
                        <FaYoutube size={35} color='red'></FaYoutube>
                        <FaFacebook size={35} color='blue'></FaFacebook>   
                    </div>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 ">
                <div className="grid grid-flow-col">
                    <FaCopyright/>
                    <small>2023, powered by disney land kids store</small>
                </div>
                <div className="grid grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <FaCcAmex size={30} color='blue'/>
                    <FaCcApplePay size={30} color='black'/>
                    <FaCcDiscover size={30} color='orange'/>
                    <FaCcVisa size={30} color='blue'/>
                </div>
            </footer>
        </div>
    );
};

export default Footer;