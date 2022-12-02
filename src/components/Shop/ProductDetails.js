import { useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  // Matt: Since this is the only component that needs access to the
  // individual product data, you dont need to store it in a context variable
  const {
    productObj: [productData, setProductData],
  } = useOutletContext();
  const [product, setProduct] = useState({});
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);
  const [photoClass, setPhotoClass] = useState("zoom hidden");
  const [mouseOverClass, setMouseOverClass] = useState("");
  const [mouseOverTipClass, setMouseOverTipClass] = useState("tooltip");
  const [mouseOverTipTextClass, setMouseOverTipTextClass] =
    useState("tooltiptext");

  const { id } = useParams();

  useEffect(() => {
    async function getIndivProduct() {
      try {
        // Matt: This should be moved into the api folder to keep organization
        // consistent
        const response = await fetch(
          `https://poster-backendapi.onrender.com/api/products/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const indivData = await response.json();
        setProduct(indivData);
      } catch (error) {
        console.log(error);
      }
    }
    getIndivProduct();
  }, []);

  const zoomInSome = () => {
    if (!isPhotoClicked) {
      setPhotoClass("zoom visible");
    } else {
      setPhotoClass("zoom hidden");
    }
    setIsPhotoClicked(!isPhotoClicked);
  };

  function handleMouseOver(event) {
    setMouseOverClass("mouseover");
    setMouseOverTipClass("tooltip mouseover-tip");
    setMouseOverTipTextClass("tooltiptext mouseover-tip");
  }

  function handleMouseExit(event) {
    setMouseOverClass("");
    setMouseOverTipClass("tooltip");
    setMouseOverTipTextClass("tooltiptext");
  }

  if (product.id) {
    return (
      <div className="details-return">
        {/* top */}
        <div className="details-main-container">
          {/* on hover, magnifying icon */}
          {/* on click, zoom */}

          <section className="image">
            <img
              className={mouseOverClass}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseExit}
              id="details-img-default"
              src={product.imageUrl}
              alt={product.imageAlt}
              width="400"
              onClick={zoomInSome}
            />
            <div className={mouseOverTipClass}>
              <span
                className={mouseOverTipTextClass}
                style={{
                  visibility:
                    mouseOverTipTextClass == "tooltiptext mouseover-tip"
                      ? "visible"
                      : "hidden",
                }}
              >
                Enlarge Image
              </span>
            </div>
          </section>

          {/* zoom in image */}
          <div>
            <img
              className={photoClass}
              src={product.imageUrl}
              alt={product.imageAlt}
              width="100%"
              onClick={zoomInSome}
            />
          </div>

          <section className="description-cart">
            <p id="details-name">{product.title}</p>
            <p>
              Price:
              <br />
              {product.price}
            </p>
            <p>{product.quantity} in stock</p>
            <p>Quote delivery Time</p>
            Select size:
            <form>
              <input type="radio" value="small" name="size" />
              <label>12 x 16 in</label>
              <br />
              <input type="radio" value="medium" name="size" />
              <label>15 x 20 in</label>
              <br />
              <input type="radio" value="large" name="size" />
              <label>18 x 24 in</label>
              <br />
              <input type="radio" value="huge" name="size" />
              <label>27 x 35 in</label>
              <br />
              <input type="radio" value="huger" name="size" />
              <label>30 x 39 in</label>
              <br />
            </form>
            <br />
            <select id="details-dropdown">
              <option value="all">White Border</option>
              <option value="Movies">Black Border</option>
              <option value="music">No Border</option>
            </select>
            <br />
            <br />
            <button id="add-to-cart">Add to Cart</button>
            <p>About this item:</p>
            <p id="actual-description">{product.description}</p>
          </section>
        </div>

        {/* Bottom */}
        <div className="details-more-container">
          <div>
            <b>More products *exactly* like this: </b>
          </div>
          <div className="more-like-this-container">
            <img alt={product.imgAlt} src={product.imageUrl} height="250" />
            <img alt={product.imgAlt} src={product.imageUrl} height="250" />
            <img alt={product.imgAlt} src={product.imageUrl} height="250" />
            <img alt={product.imgAlt} src={product.imageUrl} height="250" />
            <img alt={product.imgAlt} src={product.imageUrl} height="250" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Post inactive.</p>
      </div>
    );
  }
};
export default ProductDetails;
