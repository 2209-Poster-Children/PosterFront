import { useState } from 'react';
import { useOutletContext,useNavigate} from 'react-router-dom';
import { createCreditCard, purchaseCart } from '../../api/cart';
import {viewCartFetch} from '../../api/cart';


const Checkout = () =>{
    const {cartObj:[cartData, setCartData]} = useOutletContext();
    const {userObj:{userData}} = useOutletContext();
    const [creditName,setCreditName] = useState();
    const [creditNumber,setCreditNumber] = useState();
    const [CCV, setCCV ] = useState();
    const [expiration, setExpiration] = useState();
    const [zipcode,setZipcode] = useState();
    const [errorMessage,setError] = useState("");
    const navigate = useNavigate();

    console.log(cartData);
    async function formSubmitHandler(event){
      event.preventDefault();
      if(creditNumber == undefined || creditNumber.length != 16 ){
        setError("Invalid credit card number length")
        return 
      }else if(CCV == undefined|| CCV.length != 3){
        setError("Invalid CCV length")
        return 
      }else if(expiration == undefined || expiration.length > 5 ||expiration.length < 3 ){
        setError("Invalid expiration")
        return
      }else if(zipcode == undefined || zipcode.length != 5){
        setError( "Invalid zipcode");
        return
      }else{
        try{
          if(cartData.products.length){
            const purchase = await purchaseCart();
            const credit = await createCreditCard({creditName,creditNumber,CCV,expiration,zipcode})
            console.log(purchase);
            if(purchase){
              const cart = await viewCartFetch();
              setCartData(cart)
              navigate('/checkout-success')
            }
          }
        }catch(error){
          console.log(error);
        }
      }
      
    }


    return(
      <div className ="cart-return">
        
        
        <form onSubmit={formSubmitHandler}>
          <div className="creditCard">
          
            <label>Creditcard owners name:</label>
            <br/>
            <input type="text" value={creditName} onChange={(event) => {setCreditName(event.target.value)}}></input>
            <br/>
            <label>Credit Card Number:</label>
            <br/>
            <input type="number" value={creditNumber} onChange={(event) => {setCreditNumber(event.target.value)}}></input>
            <br />
            <label>Credit Card CCV:</label>
            <br/>
            <input type="number" value={CCV} onChange={(event) => {setCCV(event.target.value)}}></input>
            <br />
            <label>Expiration Date</label>
            <br/>
            <input type="number" value={expiration} onChange={(event) => {setExpiration(event.target.value)}}></input>
            <br />
            <label>Zipcode:</label>
            <br/>
            <input type="number" value={zipcode} onChange={(event) => {setZipcode(event.target.value)}}></input>
            <br/>
            
          </div>
          {/* we need to make an address holster for the credit card runner */}
          <div className="creditCard">
          <div className="address">
            <label>Address</label>
          </div>
          </div>
          

          <div className="cart-details">
            <div className="cart-item-container">
              {
                cartData.products && cartData.products.length ? cartData.products.map((product, idx) => {
                  return <div className="cart-item" key={idx}>

                    <div className="cart-image">
                      <span><img src={product.imageUrl} alt={product.imageAlt} height="150" /></span>
                    </div>


                    <div className="cart-details">
                      <span>{product.title}

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      quantity: {product.quantity} &nbsp;
                      </span>

                      <span>${product.subtotal}</span>

                    </div>

                  </div>
                }) : <p>No items in cart yet.</p>
              }
            </div>
          </div>
        </form>
        <div className = "cart-checkout-container">
        <p id="cart-username">{userData?.user?.username}'s Final Cart</p>
          <button id="purchaseItems" type="submit">Finalize Purchase</button>
          {errorMessage?<div>{errorMessage}</div>:null}
        </div>
      </div>
    )
    
}

export default Checkout;