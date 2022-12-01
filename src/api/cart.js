// cart fetches

// async function addToCartFetch()

export async function viewCartFetch() {
  console.log('starting get carts starting get carts')
  try {
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
      return cData[0];

  } catch (error) {
    console.log(error)
  }
  viewCartFetch();
}