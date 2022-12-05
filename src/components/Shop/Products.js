import './shop.css';
import Searchbar from './Searchbar';
import { useOutletContext, Link } from 'react-router-dom';
// import { useQuery } from 'react-query'
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';

const Products = () => {

  const { productObj: [productData, setProductData]} = useOutletContext();
  const productsByRecent = [...productData].reverse();
  const {paginateObj: {page, setPage, count, setCount}} = useOutletContext();

  // clear to relocate fetch products into this component, or better yet
  // relocate product fetches to api folder and import into this comopnent

  return (
    <div>

      <Searchbar />
      
      <div className="products-container">

      {
        productsByRecent && productsByRecent.length ? productsByRecent.map((product, idx) => {
        // console.log(product.title);
        return <div className="product" key = {idx}>

          <div className="product-img">
            <Link to={`/shop/${product.id}`}>
              <img src={product.imageUrl} alt={product.imageAlt} height="300"/>
            </Link>
          </div>

          <Link to={`/shop/${product.id}`}>
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

    </div> 
  ) // end of return statement 
}

export default Products;