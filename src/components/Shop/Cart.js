import { useState, useEffect } from 'react'
import {viewCartFetch} from '../../api/cart';

const Cart = () => {
  const [{cartData}, setCartData] = useState([]);
  
  useEffect(() => {
    async function assignData() {
      const cartFetchData = await viewCartFetch();
      setCartData(cartFetchData)
    }
    assignData();
  }, []);
  
  return (
    <div>
      This is where I would hold my red bubble mug. IF. I. HAD. ONE.
      <br />
      This is my cart. This is my (water) gun. This is for shopping. This is for fun.

    Shopping Cart

    small poster preview, name, quantity, item price
    (FREE with this purchase! Buyer's Remorse) 

    maybe steal from https://www.adsrsounds.com/cart/
    
    Look at this{console.log('fuck fuck fuck fuck fuck fuck fuck', cartData)}

    {
      cartData && cartData.length ? cartData.map((cart, idx) => {
        return <div className="cart-item" key={idx}>

          <span><img src={cart.products.imageUrl} alt={cart.products.imageAlt} height="150" /></span>
          <span>{cart.products.title}</span>
          {/* {console.log(cart)} */}
          <span>{cart.products.quantity}</span>
          <span>{cart.products.subtotal}</span>
          <span>{cart.totalPrice}</span>

        </div>
      }) : <p>No items in cart yet.</p>
    }

    </div>
  )
}

export default Cart;