import './SliderProducts.css'
import SubTitle from '../utils/SubTitle'
import img1 from '../../assets/product/6.png'
import img2 from '../../assets/product/9.png'
import img3 from '../../assets/product/11.png'
import img4 from '../../assets/product/15.png'
import img5 from '../../assets/product/16.png'
import img6 from '../../assets/product/24.png'
import CardsProducts from '../Cards/CardsProducts'
import { useEffect, useRef, useState } from 'react'

const SliderProducts = () => {
    const originalData  = [
        {
            img: img1,
            name: "Infinix Smart (Galaxy White, 4GB RAM, 64GB Storage)",
            price: "$220",
            priceBefore: "$300",
            discount: "26%",
        },
        {
            img: img2,
            name: "Handheld Barcode Scanner 1D/2D/QR Code",
            price: "$80",
            priceBefore: "$100",
            discount: "20%",
        },
        {
            img: img3,
            name: "Infinix Hot 40i (RAM: 4+4GB, 128GB)",
            price: "$260",
            priceBefore: "$300",
            discount: "13%",
        },
        {
            img: img4,
            name: "Infinix Smart 6 Plus (Miracle Black)",
            price: "$240",
            priceBefore: "$300",
            discount: "20%",
        },
        {
            img: img5,
            name: "Washing Machine 959 Series 8kg Senator Aqua SX, Silver",
            price: "$600",
            priceBefore: "$700",
            discount: "14%",
        },
        {
            img: img6,
            name: "Kenstar Ester ABS Plastic 750W Mixer Grinder",
            price: "$280",
            priceBefore: "$330",
            discount: "15%",
        },
    ]

    const data = [
        ...originalData.slice(0),
        ...originalData,
        ...originalData.slice(0, 6),
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const cardWidth = useRef(0);
    const intervalRef = useRef(null);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const scrollToIndex = (index) => {
        if (!sliderRef.current || !cardWidth.current) return;
        const scrollAmount = index * (cardWidth.current + 10);
        sliderRef.current.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    const startAutoScroll = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => {
                const newIndex = prev + 1;
                scrollToIndex(newIndex);
                return newIndex;
            });
        }, 3000);
    }

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const firstCard = slider.children[0];
        cardWidth.current = firstCard.offsetWidth;

        // التمركز على أول عنصر حقيقي (بعد الـ clones)
        const initialScroll = (cardWidth.current + 10) * 2;
        slider.scrollLeft = initialScroll;

        startAutoScroll();

        const handleScroll = () => {
            const totalCards = data.length;
            const visibleCards = originalData.length;
            const maxScroll = (cardWidth.current + 10) * (totalCards - 2);

            if (slider.scrollLeft <= 0) {
                // لو راح لأول كرت وهمي -> ارجعه لنهاية الحقيقي
                slider.scrollLeft = (cardWidth.current + 10) * (visibleCards);
                setCurrentIndex(visibleCards);
            } else if (slider.scrollLeft >= maxScroll - (cardWidth.current + 10) * 2) {
                // لو راح لآخر كرت وهمي -> ارجعه لبداية الحقيقي
                slider.scrollLeft = (cardWidth.current + 10) * 2;
                setCurrentIndex(2);
            }
        };

        slider.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(intervalRef.current);
            slider.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const nextSlide = () => {
        const newIndex = (currentIndex + 1);
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    };


    const handleMouseDown = (e) => {
        isDragging.current = true;
        sliderRef.current.classList.add('dragging');
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;
        clearInterval(intervalRef.current);
    }

    const handleMouseLeave = () => {
        if (isDragging.current) {
            isDragging.current = false;
            sliderRef.current.classList.remove('dragging');
            startAutoScroll();
        }
    }

    const handleMouseUp = () => {
        isDragging.current = false;
        sliderRef.current.classList.remove('dragging');
        startAutoScroll();
    }

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        sliderRef.current.scrollLeft = scrollLeft.current - walk;
    }

    return (
        <div className='container'>
            <SubTitle title="Hot Deals" prevClick={prevSlide} nextCilick={nextSlide} />

            <div className="slider-wrapper">
                <div
                    className='slideProducts'
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {
                        data.map((item, index) => (
                            <CardsProducts key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SliderProducts
