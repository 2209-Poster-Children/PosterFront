import { useEffect, useState } from "react";
import { addQuantityFetch ,viewCartFetch} from '../../api/cart';
import { useOutletContext } from 'react-router-dom';
import {guestProductsQuantity} from '../../api/guest';
const CartQuantityDropdown = ({product}) =>{
    
    const [quantity, setQuantity] = useState(product.quantity);
    const { cartObj:[cartData, setCartData] } = useOutletContext();
    const { userObj:{userData}}= useOutletContext();

    async function changeQuantity(){
        if(userData.user){
        const addQuantityFetchedData = await addQuantityFetch(product.productId,quantity);
        console.log(addQuantityFetchedData);
        }else{
            const newCart = guestProductsQuantity(product,quantity)
            setCartData(newCart);
        }
    }

    useEffect(() =>{
        
        async function updateCart(){
            await changeQuantity()
            const cart = await viewCartFetch();
            setCartData(cart)
        }
        if(userData.user)updateCart();
        else{
            changeQuantity();
        }
    
    },[quantity])

    function handleQuantityChange(event){
        setQuantity(event.target.value)
        console.log(quantity);
    }

    return(
    <select onChange = {handleQuantityChange} >
        <option value={product.quantity}>
          {product.quantity}
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
    </select>
    )
}

export default CartQuantityDropdown