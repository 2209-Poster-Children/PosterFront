import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";

import { fetchProductData, newProductFetch } from '../../api/products';


const NewProduct = ({handleToggleNewProductForm, setProductData}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const [categoryId, setCategoryId] = useState("");

    const [errorMessage, setErrorMessage] = useState(""); // todo: set up for missing inputs


    async function newProductFormSubmitHandler(event) {
        event.preventDefault();

        const newProductFetchData = await newProductFetch(title, description, price, quantity, imageUrl, imageAlt, categoryId);
        if (newProductFetchData.product) {
            handleToggleNewProductForm();
            const productsFetchData = await fetchProductData(1, 20);
            setProductData(productsFetchData);
        }
    }


    return (
        <div className='vert-flex-container'>

            <form onSubmit={newProductFormSubmitHandler} className='product-form'>
                <label>Title:</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>

                <br/>

                <label>Description:</label>
                <textarea type="text" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>

                <br/>

                <label>Image Url:</label>
                <input type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}></input>

                <br/>

                <label>Image Alt:</label>
                <input type="text" value={imageAlt} onChange={(event) => setImageAlt(event.target.value)}></input>

                <br/>

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

                <br/>

                <button type="submit">Add</button>
            </form>
            {
                errorMessage ? <p>{errorMessage}</p> : null
            }

        </div>
    )
};

export default NewProduct;