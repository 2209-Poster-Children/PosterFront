import { useOutletContext, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addQuantityFetch, addToCartFetch, viewCartFetch } from '../../api/cart';
import {addToCart} from '../../api/guest';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

import EditProduct from './EditProduct';

const ProductDetails = () => {
  const { cartObj: [cartData, setCartData]}= useOutletContext();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);
  const [photoClass, setPhotoClass] = useState("zoom hidden"); 
  const [mouseOverClass, setMouseOverClass] = useState("")
  const [mouseOverTipClass, setMouseOverTipClass] = useState("tooltip")
  const [mouseOverTipTextClass, setMouseOverTipTextClass] = useState("tooltiptext")
  const [toggleEditProductForm, setToggleEditProductForm] = useState(false);
  const {userObj: {loggedIn, userData}} = useOutletContext()
  const { id } = useParams();

  useEffect(() => {
    console.log(userData);
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
  
  async function addProductToCart(event){
    event.preventDefault();
    if(!userData.user){
      setCartData(addToCart(product, quantity));
      console.log("you're a pleb without a cart");
    }
    else{
      //write quantity functional stuff later (usestate)
      console.log(cartData);
      if(safeCheck(cartData, id)){
        const addQuantityFetchedData = await addQuantityFetch(id,quantity);
        console.log(addQuantityFetchedData);
      }else{
        const addCartFetchedData = await addToCartFetch(id,quantity);
        console.log(addCartFetchedData);
      }
        const fetchCart = await viewCartFetch();
        setCartData(fetchCart);
    }
  }

  //this function will check if a cart already has a product id and instead push a quantity instead of 
  // trying to add to cart.
  const safeCheck = (cart,productId) =>{
    let checker = false;
    cart?.products?.forEach((product)=>{
      if(product.productId == productId){
        checker = true
      }
    })
    console.log("safeCheck  ", checker);
    return checker;
  }
  

  const zoomInSome = () => {
    if(!isPhotoClicked) {
      setPhotoClass("zoom visible")
    } else {
      setPhotoClass("zoom hidden")
    }
    setIsPhotoClicked(!isPhotoClicked)
  }

  function handleMouseOver(event) {
    setMouseOverClass("mouseover")
    setMouseOverTipClass("tooltip mouseover-tip")
    setMouseOverTipTextClass("tooltiptext mouseover-tip")    
  }

  function handleMouseExit(event) {
    setMouseOverClass("")
    setMouseOverTipClass("tooltip")
    setMouseOverTipTextClass("tooltiptext")
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value)
  }
  
  function handleToggleEditProductForm() {
    setToggleEditProductForm(!toggleEditProductForm);
  }

  if (product.id) {
    return (
      <div className="details-return">
        <div className='admin-button-container'>
        {
          loggedIn && userData.user.isAdmin ? <div onClick={handleToggleEditProductForm} className='add-product-button'><MdOutlineAdminPanelSettings /><div>Edit product</div></div> : null
        }
        </div>
        <div className='vert-flex-container'>
        {
          toggleEditProductForm ? <EditProduct product={product} handleToggleEditProductForm={handleToggleEditProductForm} setProduct={setProduct} /> : null
        }
        </div>



        {/* top */}
        <div className="details-main-container">

          {/* on hover, magnifying icon */}
          {/* on click, zoom */}

          <section className="image">
            <img className={mouseOverClass} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseExit} id="details-img-default" src={product.imageUrl} alt={product.imageAlt} width="400" onClick={zoomInSome}/>
            <div className={mouseOverTipClass}>
              <span className={mouseOverTipTextClass} style={{visibility: mouseOverTipTextClass == "tooltiptext mouseover-tip" ? "visible" : "hidden"}}>Enlarge Image</span>
            </div>
          </section>

          {/* zoom in image */}
          <div>
            <img className={photoClass} src={product.imageUrl} alt={product.imageAlt} width="100%" onClick={zoomInSome}/>
          </div>

          <section className="description-cart">
            <p id="details-name">{product.title}</p>

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

            <select id="details-dropdown">
              <option value="all">White Border</option>
              <option value="Movies">Black Border</option>  
              <option value="music">No Border</option>
            </select> 

            <br/>
            <br />
            <form onSubmit={addProductToCart}>
              <input id="details-quantity-for-cart" type="number" value={quantity} min="1" max="10" placeholder="1" onChange={handleQuantityChange}></input>
              <button type="submit" id="add-to-cart">Add to Cart</button>
            </form>
            <p>About this item:</p>
            <p id="actual-description">{product.description}</p>
          </section>
        </div>

        {/* Bottom */}
        <div className="details-more-container">
          <div><b>More products *exactly* like this: </b></div>
          <div className="more-like-this-container">
            <img alt={product.imgAlt} src={product.imageUrl} height="250"/>
            <img alt={product.imgAlt} src={product.imageUrl} height="250"/>
            <img alt={product.imgAlt} src={product.imageUrl} height="250"/>
            <img alt={product.imgAlt} src={product.imageUrl} height="250"/>
            <img alt={product.imgAlt} src={product.imageUrl} height="250"/>
          </div>
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