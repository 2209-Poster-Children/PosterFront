//writing several token functions that clean up my ugly code.

function addToCart(product, quantity){
    const guestCart = JSON.parse(localStorage.getItem("cart"));
    if(guestCart){
        const newCart = {
            totalPrice:guestCart.totalPrice+product.price*quantity,
            products:[...guestCart.products,{...product,quantity}]
        }
        localStorage.setItem("cart",JSON.stringify(newCart))
        return newCart;
    }else{
        const newCart = {totalPrice: product.price*quantity,products:
        [{...product,quantity}]}
        localStorage.setItem("cart",JSON.stringify(newCart))
        return newCart;
    }
    
}

export default addToCart;