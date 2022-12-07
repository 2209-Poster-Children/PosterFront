export async function fetchProductData(page, count) {
  try {
      const response = await fetch(
          `https://poster-backendapi.onrender.com/api/products?page=${page}&count=${count}`, 
          {
              headers: {
                  "Content-Type": "application/json"
              },
            //   body: JSON.stringify({
            //       page: page,
            //       count: count
            //   })
          })
          
      
          const pData = await response.json();
          // setProductData(pData);
          console.log(pData)
          return pData;

  } catch (error) {
      console.log(error)
  }
}
// fetchProductData();
// calling this function on components/Shop/Products

