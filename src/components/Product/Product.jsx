import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {addToCart} = props;
    const {name, seller, price, ratings, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} Star</small></p>
             </div> 
             <div >
                <button onClick={() => addToCart(props.product)} className='btn-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            </div>        
        </div>
    );
};

export default Product;