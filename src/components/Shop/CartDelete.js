import { useEffect, useState } from "react";
import { deleteFromCart, viewCartFetch} from '../../api/cart';
import { useOutletContext } from 'react-router-dom';

//do we need a useEffect? what is happn
const CartDelete = ({product}) =>{
    const { cartObj:[cartData, setCartData] } = useOutletContext();

    async function deleteCartItem(){
        const deleteItem = await deleteFromCart({productId:product.productId});
        return deleteItem;
    }
    
   
    async function updateCart(){
            await deleteCartItem()
            const cart = await viewCartFetch();
            setCartData(cart)
    }
    
    return(
        <button className="cart-remove" onClick={updateCart}>X</button>
    )
}

export default CartDelete;
