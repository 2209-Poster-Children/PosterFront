import './shop.css';
import Searchbar from './Searchbar';
import { useOutletContext } from 'react-router';

const Products = () => {

  const { productObj: [productData, setProductData]} = useOutletContext();
  const productsByRecent = [...productData].reverse();

  return (
    <div>

      <Searchbar />
      
      <div className="products-container">

      {/* product data as of 11/18 noon: title, description, price, quantity, imgUrl */}
      {/* talk about imgAlt and Rating */}

      {
        productsByRecent && productsByRecent.length ? productsByRecent.map((product, idx) => {
        // console.log(product.title);
        return <div className="product" key = {idx}>

          {/* Nest image in Link tag, same "to=" as product name */}
          <img src={product.imageUrl} alt={product.imageAlt}/>

          {/* <Link to={`/products/${products._id}`}> */}
            <span className="name-detail">
              <b>{product.title}</b></span>
          {/* </Link> */}

          <p className="rating-detail">
            Rating?????</p>

          <p className="price-detail">
            {product.price}</p>

          </div>

        }) : <p>No products to display at this time</p>
      } 
        
        <div className="product">
          <img src="http://cdn.akc.org/content/hero/puppy_pictures_header.jpg" height ="175"/>
          <div className="product-info">
            <p>Name</p>
            <p>Rating</p>
            <p>Price</p>
          </div>
        </div>
      

      </div> {/* end of products container */}

    </div> 
  ) // end of return statement 
}

export default Products;