// cart fetches
export async function addQuantityFetch(productId, quantity){
  console.log("adding quantity to cart")
  try{
    const response = await fetch(
      'https://poster-backendapi.onrender.com/api/cart/',
      {
        method: "PATCH",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          productId: productId,
          quantity: quantity
        })
      }
    )
    console.log('added quantity');
      const qAdd = await response.json();
      return qAdd;
  }catch(error){
    console.log(error);
  }
}

export async function addToCartFetch( productId,quantity){
  console.log("adding to cart ");
  try{
    const response = await fetch(
      'https://poster-backendapi.onrender.com/api/cart/',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          productId: productId,
          quantity: quantity
        })
      })
      console.log('finished get carts finished get carts')
      const cAdd = await response.json();
      return cAdd;
  }catch(error){
    console.log(error)
  }
}

export async function viewCartFetch() {
  console.log('starting get carts starting get carts')
  try {
    console.log(localStorage.getItem('token'));
    const response = await fetch(
      'https://poster-backendapi.onrender.com/api/cart/',
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })

      console.log('finished get carts finished get carts')
      const cData = await response.json();
      console.log(cData);
      return cData;

  } catch (error) {
    console.log(error)
  }
  
}

export async function deleteFromCart(productId){
  try{
    const response = await fetch('https://poster-backendapi.onrender.com/api/cart/',
      { method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })

      console.log('deleted carts')
      const cData = await response.json();
      console.log(cData);
      return cData;

  } catch (error) {
    console.log(error)
  }
}
