import './Cards.css'

const CardsBanners = ({item}) => {
    return (
        <div className="box">
            <img src={item.img} alt="" />
            <div className="text">
                <h5>Break Disc</h5>
                <h5>deals on this</h5>

                <div className="sale">
                    <p>Up <br /> To</p>
                    <span>70%</span>
                </div>

                <h6>Shop Now</h6>

            </div>
        </div>
    )
}

export default CardsBanners
