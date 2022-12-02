import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import {viewCartFetch} from '../../api/cart';

const Cart = () => {
  const {cartObj:[cartData, setCartData]} = useOutletContext();
  const { userObj: {userData} } = useOutletContext();

  console.log(cartData)
  return (
    <div className="cart-return">

    <div className="cart-item-container">
      <p id="cart-username">{userData?.user?.username}'s Shopping Cart</p>
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
                <select>
                  <option value={product.quantity}>
                    {product.quantity}
                  </option>
                </select>
              </span>

              <span>${product.subtotal}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="cart-remove">X</button></span>

            </div>

          </div>
        }) : <p>No items in cart yet.</p>
      }
      </div>
      <div className="cart-checkout-container">
        Deliver to: &nbsp;
        <select>
          <option>Select Address</option>
        </select>
        <br />
        <span>Cart Subtotal: ${cartData.totalPrice}</span>
        <br />
        <span>Est. Taxes </span>
        <br />
        <span>Est. Total after taxes</span>
        <br />

        <button id="cart-checkout-bttn">Checkout</button>
      </div>

    </div>
  )

}

export default Cart;