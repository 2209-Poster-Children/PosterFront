import React, { useState } from "react";

import { editProductFetch } from '../../api/products';

const EditProduct = ({product, handleToggleEditProductForm, setProduct}) => {
    console.log('product', product);
    
    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(product.quantity);
    const [imageUrl, setImageUrl] = useState(product.imageUrl);
    const [imageAlt, setImageAlt] = useState(product.imageAlt);
    const [categoryId, setCategoryId] = useState(product.categoryId);

    async function editProductFormSubmitHandler(event) {
        event.preventDefault();

        const editProductFetchData = await editProductFetch(title, description, price, quantity, imageUrl, imageAlt, categoryId);
        if (editProductFetchData) {
            handleToggleEditProductForm();
            setProduct(editProductFetchData);
        }
    }


    return (
        <div>
            <form onSubmit={editProductFormSubmitHandler} className='product-form'>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                <br />

                <label>Description</label>
                <textarea type="text" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                <br />

                <label>Image Url</label>
                <input type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}></input>
                <br />

                <label>Image Alt</label>
                <input type="text" value={imageAlt} onChange={(event) => setImageAlt(event.target.value)}></input>
                <br />

                <div className='horiz-flex-container'>
                    <div className='product-input-container'>
                        <label>Price:</label>
                        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} className='numeric-input'></input>
                    </div>
                    <div className='product-input-container'>
                        <label>Quantity:</label>
                        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} className='numeric-input'></input>
                    </div>
                    <div className='product-input-container'>
                        <label>Category Id:</label>
                        <input type="number" value={categoryId} onChange={(event) => setCategoryId(event.target.value)} className='numeric-input'></input>
                    </div>
                </div>

                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default EditProduct;