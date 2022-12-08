import { useEffect, useReducer, useState } from "react";
import { deleteFromCart, viewCartFetch} from '../../api/cart';
import { useOutletContext } from 'react-router-dom';
import { guestProductsDelete } from "../../api/guest";

//do we need a useEffect? what is happn
const CartDelete = ({product}) =>{
    const { cartObj:[cartData, setCartData] } = useOutletContext();
    const {userObj: {userData, setUserData}} = useOutletContext();

    
    async function deleteCartItem(){
        if(userData.user){
        const deleteItem = await deleteFromCart({productId: product.productId});
        return deleteItem;
        }else{
            const cart = guestProductsDelete(product.id);
            return cart
        }
    }
    
   
    async function updateCart(){
        const newCart = await deleteCartItem()
        console.log("new cart" ,newCart)
        if(userData.user){
            const cart = await viewCartFetch();
            setCartData(cart)
        }else{
            setCartData(newCart);
        }
    }
    
    return(
        <button className="cart-remove" onClick={updateCart}>X</button>
    )
}

export default CartDelete;
