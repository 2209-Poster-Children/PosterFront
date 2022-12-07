import './shop.css';
import Searchbar from './Searchbar';
import { useState, useEffect } from 'react';
import { useOutletContext, Link, useParams } from 'react-router-dom';
import { fetchProductData } from '../../api/products';
//named export, deconstructed on import
// ^as opposed to "export default" on a component

const Products = () => {
  const [ productData, setProductData ] = useState([]);
  // const productsByRecent = [...productData].reverse();
  const { page } = useParams();
  const [ count, setCount ] = useState(20);

  useEffect (() => {
    async function getProducts() {
      const result = await fetchProductData(page, count);
      setProductData(result);
    }
    console.log('fetching products')
    getProducts();
  }, [page]);

  return (
    <div>

      <Searchbar />
      
      <div className="products-container">

      {
        productData && productData.length ? productData.map((product, idx) => {
        // console.log(product.title);
        return <div className="product" key = {idx}>

          <div className="product-img">
            <Link to={`/shop/item/${product.id}`}>
              <img src={product.imageUrl} alt={product.imageAlt} height="300"/>
            </Link>
          </div>

          <Link to={`/shop/item/${product.id}`}>
            <span className="name-detail">
              <b>{product.title}</b></span>
          </Link>

          <p className="rating-detail">
            Rating?????</p>

          <p className="price-detail">
            {product.price}</p>

          </div>

        }) : <p>No products to display at this time</p>
      } 
      

      </div> {/* end of products container */}
      <Link to="/shop/page/2">Page 2</Link>
    </div> 
  ) // end of return statement 
}

export default Products;