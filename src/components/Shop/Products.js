import './shop.css';
import { useState, useEffect } from 'react';
import { useOutletContext, Link, useParams } from 'react-router-dom';

import { MdOutlineAdminPanelSettings } from 'react-icons/md';

import { fetchProductData } from '../../api/products';
import Searchbar from './Searchbar';
import NewProduct from './NewProduct';


//named export, deconstructed on import
// ^as opposed to "export default" on a component

const Products = () => {

  const { userObj: { loggedIn, userData } } = useOutletContext();

  const [ productData, setProductData ] = useState([]);
  // const productsByRecent = [...productData].reverse();
  const { page } = useParams();
  const [ count, setCount ] = useState(20);

  const [toggleNewProductForm, setToggleNewProductForm] = useState(false);

  useEffect (() => {
    async function getProducts() {
      const result = await fetchProductData(page, count);
      setProductData(result);
    }
    console.log('fetching products')
    getProducts();
  }, [page]);

  function handleToggleNewProductForm() {
    setToggleNewProductForm(!toggleNewProductForm);
  }


  return (
    <div>
      <div className='horiz-flex-container'>
        <Searchbar productData={productData} />
        {
          loggedIn && userData.user.isAdmin ? <div onClick={handleToggleNewProductForm} className='add-product-button'><MdOutlineAdminPanelSettings /><div>Add new product</div></div> : null
        }
      </div>
      {
        toggleNewProductForm ? <NewProduct handleToggleNewProductForm={handleToggleNewProductForm} setProductData={setProductData} /> : null
      }
      
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