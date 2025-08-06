import './Banners4.css'
import banner3_1 from '../../assets/banner3_1.png'
import banner3_2 from '../../assets/banner3_2.png'
import banner3_3 from '../../assets/banner3_3.png'
import banner3_4 from '../../assets/banner3_4.png'
import CardsBanners from '../Cards/CardsBanners'

const Banners4 = () => {
    const data = [
        {
            img: banner3_1
        },
        {
            img: banner3_2
        },
        {
            img: banner3_3
        },
        {
            img: banner3_4,
        },
    ]
    return (
        <div className="container">
            <div
                className='boxs'
            >
                {
                    data.map((item, index) => (
                        <CardsBanners key={index} item={item} />
                    )) 
                }
            </div>
        </div>
    )
}

export default Banners4
