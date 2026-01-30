import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, clearCart } from "../redux/features/cart/cartSlice"

export default function Cart(){

    const cartItems = useSelector(state => state.cart.cartItems)

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)


    const dispatch = useDispatch()

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return(
        <div>
        {
            cartItems.length > 0 ? (
            <div className="cart">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <p>Price</p>
                    <button onClick={handleClearCart}>Clear cart</button>
                </div>
                {
                    cartItems.map((item) => (
                    <div className="cart-item">
                        <img src={item.img} alt={item.alt}/>
                        <div className="cart-info">
                            <h2>{item.phone}</h2>
                            <p>Color : blue</p>
                            <h4>Size : {item.storage}</h4>
                        </div>
                        <div className="price">
                            <h3>${item.price}</h3>
                            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                        </div>
                    </div>
                    ))
                }
                <div className="subtotal">
                    <p>Subtotal ({cartItems.length} items: ${totalPrice ? totalPrice : 0 })</p>
                </div>

                    <Link to="/check-out" className="checkOut-link">
                        <button>Proceed to Buy</button> 
                    </Link>
                
            </div>
            ) : (
                <div className="cart">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <p>Price</p>
                    <button>Clear cart</button>
                </div>
                <div className="empty-cart">
                <LuShoppingCart className="cart-logo"/>
                <h1>Your Cart is empty</h1>
                <p>Sign in to your account to view your saved items or continue shopping</p>
                <div className="button-container">
                    <Link to="/">
                        <button className="continue-shopping-btn">
                            Continue shopping
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="sign-in-btn">
                            Sign in
                        </button>
                    </Link>
                </div>
            </div>
            </div>
            )
        }
        </div>
        
    )
}