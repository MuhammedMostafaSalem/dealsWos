const CardsProducts = ({item}) => {
    return (
        <div className="product-card">
            <span className="discount">-{item.discount}%</span>
            <img src={item.img} alt='' className="product-img" />
            <h3 className="product-name">{item.name}</h3>

            <div className="price-section">
                <span className="current-price">${item.price}</span>
                <span className="old-price">${item.priceBefore}</span>
            </div>

            <button className="buy-btn">add to cart</button>
        </div>
    )
}

export default CardsProducts
