import {useDispatch} from 'react-redux'
import {addToCart} from "../redux/features/cart/cartSlice"

export default function MobileCard({data}) {

    const dispatch = useDispatch()

    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
    }

    return(
        
                <div className="product-card">
                    <div className="product-image-container">
                        <img src="" alt="Samsung S23 FE" className="product-image" />
                    </div>
                    <h2>{data.phone}</h2>
                    <p>color:white</p>
                    <div className="color-options">
                        <label className="container">
                            <input type="radio" name="color" value={data.color} id="blue"   />
                        </label>
                        <label className="container">
                            <input type="radio" name="color" value={data.color} id="green"   /> 
                        </label>
                        <label className="container">
                            <input type="radio" name="color" value={data.color} id="lavender"  />
                        </label>
                    </div>
                    <h3>${data.price}</h3>
                    <button onClick={() => handleAddToCart(data)}>Add to Cart</button>
                    <button>Learn More</button>
                </div>
    )
}