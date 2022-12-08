import { useState } from 'react'
import { useOutletContext, Link } from 'react-router-dom';
import CartQuantityDropdown from './CartQuantityDropdown';
import CartDelete from './CartDelete';

const Cart = () => {
  const {cartObj:[cartData, setCartData]} = useOutletContext();
  const { userObj: {userData} } = useOutletContext();
  

  return (
    <div className="cart-return">

    <div className="cart-item-container">
      <p id="cart-username">{userData?.user?.username||"Lovely Amazing Guest"}'s Shopping Cart</p>
      {
        cartData.products && cartData.products.length ? cartData.products.map((product, idx) => {
          return <div className="cart-item" key={idx}>

            <div className="cart-image">
              <span><img src={product.imageUrl} alt={product.imageAlt} height="150" /></span>
            </div>

            <div className="cart-details">
              <span>{product.title}

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              quantity: &nbsp;
                <CartQuantityDropdown product={product}/>
              </span>

              <span>${product.subtotal}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CartDelete product={product}/> </span>

            </div>

          </div>
        }) : <p>No items in cart yet.</p>
      }
      </div>
      <div className="cart-checkout-container">
        <div className="cart-est-price">
          <br />
            <span>Cart Subtotal: ${cartData.totalPrice}</span>
          <br />
            <span>Est. Taxes </span>
          <br />
            <span>Est. Total after taxes</span>
          <br />
          <br />
        </div>

        {cartData.totalPrice != 0?<Link to='/checkout'><button className="cart-checkout-bttn">Proceed to Checkout</button></Link>:<div>Your cart is empty</div>}
      </div>
    </div>
  )
}

export default Cart;