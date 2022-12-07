export async function fetchProductData(page, count) {
  try {
      const response = await fetch(
          'https://poster-backendapi.onrender.com/api/products/', //check URL
          {
              headers: {
                  "Content-Type": "application/json"
              },
              // body: JSON.stringify({
              //     page: page,
              //     count: count
              // })
          })
      
          const pData = await response.json();
          // setProductData(pData);
          return pData;

  } catch (error) {
      console.log(error)
  }
}
// fetchProductData();
// calling this function on components/Shop/Products

