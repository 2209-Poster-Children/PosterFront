//writing several token functions that clean up my ugly code.

export function addToCart(product, quantity){
    const guestCart = JSON.parse(localStorage.getItem("cart"));
    let newCart = {};
    if(guestCart){
        if(checkForProduct(product.id)){
            const newProducts = 
            guestCart.products.map((element)=>{
                if(element.id == product.id){
                    const tempQuantity = +element.quantity+(+quantity)
                    return {...element,quantity:tempQuantity,subtotal: tempQuantity*element.price };
                }
                return element
            })
            newCart = {
                totalPrice:guestCart.totalPrice+product.price*quantity,
                products:newProducts
            }
            localStorage.setItem("cart",JSON.stringify(newCart));
            return newCart;
        }
        newCart = {
            totalPrice:guestCart.totalPrice+product.price*quantity,
            products:[...guestCart.products,{...product, quantity, subtotal:quantity*product.price}]
        }
        localStorage.setItem("cart",JSON.stringify(newCart))
        return newCart;
    }else{
        newCart = {totalPrice: product.price*quantity,products:
        [{...product,quantity}]}
        localStorage.setItem("cart",JSON.stringify(newCart))
        return newCart;
    }
}

function checkForProduct(productId){
    let guestCart = JSON.parse(localStorage.getItem("cart"));
    const found =guestCart.products.find((product)=>product.id == productId);
    return found;
}

export function guestCheckout(){
    const newCart = {
        totalPrice: 0, products:[]
    }
    localStorage.setItem("cart",JSON.stringify(newCart));
    return newCart;
}

export function guestProductsDelete(productId){
    const guestCart = JSON.parse(localStorage.getItem("cart"))
    console.log("productid" , productId);
    const newProducts = guestCart.products.filter((element)=>{
        return element.id != productId
    })
    const newCart = {...guestCart, products: newProducts}
    localStorage.setItem("cart",JSON.stringify(newCart));
    return newCart;
}

export function guestProductsQuantity(product,quantity){
    console.log("call me beep me if you wanna reach me")
    const guestCart = JSON.parse(localStorage.getItem("cart"));
    const newProducts = guestCart.products.map((element)=>{
        if(element.id == product.id){
            return {...element,quantity:quantity,subtotal: quantity*element.price };
        }
        return element
    })
    const newTotalPrice = getCartTotalPrice(newProducts)
    const newCart = {
        totalPrice: newTotalPrice,
        products: newProducts
    }
    localStorage.setItem("cart",JSON.stringify(newCart));
    return newCart;
}

function getCartTotalPrice(products){
    let newTotalPrice = 0
    products.forEach((element)=>{
        newTotalPrice += element.subtotal;
    })
    return newTotalPrice;
}