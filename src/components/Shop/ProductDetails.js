import { useOutletContext, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetails = () => {
  const { productObj: [productData, setProductData] } = useOutletContext();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getIndivProduct() {
      try {
        const response = await fetch(
          `https://poster-backendapi.onrender.com/api/products/${id}`,
          {
            headers: {
              "Content-Type": "application/json"
            }
          })

          const indivData = await response.json();
          setProduct(indivData);

      } catch (error) {
        console.log(error);
      }
    }
    getIndivProduct();

  }, []);

  if (product.id) {
    return (
      <div className="details-return">
        {/* top */}
        <div className="details-main-container">
          <section className="image">
            <img src={product.imageUrl} alt={product.imageAlt} height="600"/>
          </section>

          <section className="description-cart">
            <p>{product.title}</p>

            <p>Price:
              <br/>
              {product.price}
            </p>
            
            <p>{product.quantity} in stock</p>
            <p>Quote delivery Time</p>
            
            Select size:
            <form>
              <input type="radio" value="small" name="size" /><label>12 x 16 in</label><br />
              <input type="radio" value="medium" name="size"/><label>15 x 20 in</label><br />
              <input type="radio" value="large" name="size"/><label>18 x 24 in</label><br />
              <input type="radio" value="huge" name="size"/><label>27 x 35 in</label><br />
              <input type="radio" value="huger" name="size"/><label>30 x 39 in</label><br />
            </form>

            <br />

            <select>
              <option value="all">White Border</option>
              <option value="Movies">Black Border</option>  
              <option value="music">No Border</option>
            </select> 
          
            <p>Add to Cart button</p>
            <p>About this item:</p>
            <p>{product.description}</p>
          </section>
        </div>

        {/* Bottom */}
        <div className="details-more-container">
          More products like this: 
          <p>about 3-5 random posters in similar category i.e. music</p>
        </div>


      </div>
    )

  } else {
    return (
      <div>
        <p>Post inactive.</p>
      </div>
    );
  }
};
export default ProductDetails;