// cart fetches

// async function addToCartFetch()

export async function viewCartFetch() {
  console.log('fuck carts and fuck render.com')
  try {
    const response = await fetch(
      'https://poster-backendapi.onrender.com/api/cart/',
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })

      console.log('carts and carts and carts and carts')
      const cData = await response.json();
      return cData;

  } catch (error) {
    console.log(error)
  }
  viewCartFetch();
}