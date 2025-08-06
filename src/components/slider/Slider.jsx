import { useEffect, useRef, useState } from 'react'
import banner_home1 from '../../assets/banner_home1.png'
import banner_home2 from '../../assets/banner_home2.png'
import banner_home3 from '../../assets/banner_home3.png'
import './Slider.css'

const Slider = () => {
    const slides = [banner_home1, banner_home2];
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => resetTimeout();
    }, [currentIndex]);

    const goToSlide = (index) => setCurrentIndex(index);
    
    return (
        // <div className='slider'>
        //     <div className="container">

        //         <div className="mySwiper">
        //             <div className="swiper-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

        //                 {slides.map((img, index) => (
        //                     <div className="swiper-slide" key={index}>
        //                         <img src={img} alt={`slide-${index}`} />
        //                     </div>
        //                 ))}

        //             </div>
        //             <div className="swiper-pagination"></div>

        //         </div>


        //         <div className="banner_2">
        //             <a href="#"><img src={banner_home3} alt="" /></a>
        //         </div>

        //     </div>
        // </div>
                <div className="slider">
            <div className="slider-container">
                <div className="slideshow">
                    <div
                        className="slides-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((img, index) => (
                            <div className="slide" key={index}>
                                <img src={img} alt={`slide-${index}`} />
                            </div>
                        ))}
                    </div>

                    <div className="dots">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="side-banner">
                    <a href="#"><img src={banner_home3} alt="banner" /></a>
                </div>
            </div>
        </div>
        // <div className="slider">
        //     <div className="slider-container">
        //         <div
        //             className="slider-track"
        //             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        //         >
        //             {slides.map((img, index) => (
        //                 <div className="slide" key={index}>
        //                     <img src={img} alt={`slide-${index}`} />
        //                 </div>
        //             ))}
        //         </div>

        //         <div className="dots">
        //             {slides.map((_, index) => (
        //                 <div
        //                     key={index}
        //                     className={`dot ${index === currentIndex ? "active" : ""}`}
        //                     onClick={() => goToSlide(index)}
        //                 />
        //             ))}
        //         </div>
        //     </div>
        // </div>
    )
}

export default Slider
