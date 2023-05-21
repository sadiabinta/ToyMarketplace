import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Gallery = () => {
    useEffect(()=>{
        Aos.init({duration:'3000'});
    },[])
    return (
        
<div>
    <h2 className="text-3xl font-semibold text-pink-400 text-center my-5">Gallery</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div data-aos='fade-right'>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/nwv9gyD/Car.webp" alt=""/>
        </div>
        <div data-aos='fade-left'>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/M7r8YtN/Plush-toy.webp" alt=""/>
        </div>
        <div data-aos='fade-bottom'>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/Rhb99D9/doll5.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4" >
        <div data-aos="flip-left">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div data-aos="fade-zoom-in">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div data-aos="fade-up">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div data-aos="flip-left">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div data-aos="fade-up">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div data-aos="flip-right">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div data-aos="flip-left">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div data-aos="fade-zoom-out">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div data-aos="fade-zoom-in">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>
</div>

    );
};

export default Gallery;