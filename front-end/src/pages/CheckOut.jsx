import { useState } from "react"
import { useSelector } from "react-redux"

export default function CheckOut(){

    const isUserSignIn = useState(true)
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

    return(
        <div className="check-out-container">
            <div className="check-out">
                <div className="check-out-header">
                    <h3>Total Price : {totalPrice}</h3>
                    <h3>Items : {cartItems.length}</h3>
                </div>
                <div className="details-container">
                    <h1>1.Contact Details</h1>
                    <form>
                            <div className="user-details">
                                <label htmlFor="first-name">First Name</label>
                                    <input type="text" name="first-name" />
                            </div>
                            <div className="user-details">
                                <label htmlFor="last-name">Last Name</label>
                                    <input type="text" name="last-name" />
                            </div>

                            <div className="user-details">
                                <label htmlFor="mobile-number">Mobile Number</label>
                                    <input type="text" name="mobile-number"/>
                            </div>
                            <div className="user-details">
                                <label htmlFor="alt-number">Alternative Number</label>
                                    <input type="text" name="alt-number"/>
                            </div>
                            <div className="user-details">
                                <label htmlFor="email" className="email-label">Email</label>
                                    <input type="email" name="email" placeholder="Email Address"/>
                            </div>  

                    </form>
                </div>

                <div className="details-container">
                    <h1>Delivery Address</h1>
                    <form>
                        <div className="user-details-container">
                            <div className="user-details">
                                <label htmlFor="street">Street / Locality</label>
                                    <input type="text" name="street"/>
                                
                            </div>
                            <div className="user-details1">
                                <label htmlFor="flat">Flat / House No</label>
                                    <input type="text" name="flat"/>
                            </div>
                        </div>
                        <div className="user-details-container">
                            <div className="user-details">
                                <label htmlFor="country">Country / Region</label>
                                    <input type="number" name="country" placeholder="Country"/>
                            </div>
                            <div className="user-details1">
                                <label htmlFor="state">State / Province</label>
                                    <input type="text" name="state"placeholder="State"/>
                            </div>
                            <div className="user-details1">
                                <label htmlFor="zip-code">Zip Code</label>
                                    <input type="number" name="zip-code"/>
                            </div>
                        </div>
                    </form>
                </div>
                    <h1>Address Type</h1>
                <div>
                    <label>Home
                        <input type="radio" name="home"/>
                    </label>
                    <label>Work
                        <input type="radio" name="work"/>
                    </label>
                    <label>Neighbour
                        <input type="radio" name="neighbour"/>
                    </label>
                    <button>
                        Continue to delivery options
                    </button>
                </div>
                <div>
                    <h1>Delivery Options</h1>
                    <label>Cash on delivery
                        <input type="radio" name="cash"/>
                    </label>
                    <label>Credit or Debit cart
                        <input type="radio" name="card"/>
                    </label>
                </div>
                <div>
                    <h1>Payment</h1>
                    <button>Pay</button>
                </div>
            </div>
        </div>
    )
}