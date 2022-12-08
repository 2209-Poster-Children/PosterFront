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


export async function newProductFetch(title, description, price, quantity, imageUrl, imageAlt, categoryId) {
  try {
      const response = await fetch(
          'https://poster-backendapi.onrender.com/api/products',
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem("token")}`
              },
              body: JSON.stringify({
                  title: title,
                  description: description,
                  price: price,
                  quantity: quantity,
                  imageUrl: imageUrl,
                  imageAlt: imageAlt,
                  categoryId: categoryId
              })
          }
      )

      const data = await response.json();
      console.log("new product data: ", data);
      return data;
  } catch(error) {
      console.log(error);
  }
}

export async function editProductFetch(title, description, price, quantity, imageUrl, imageAlt, categoryId) {
    try {
        const response = await fetch(
            'https://poster-backendapi.onrender.com/api/products',
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    price: price,
                    quantity: quantity,
                    imageUrl: imageUrl,
                    imageAlt: imageAlt,
                    categoryId: categoryId
                })
            }
        )

        const data = await response.json();
        console.log("edit product data: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
}
