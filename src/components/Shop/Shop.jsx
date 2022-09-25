import './Shop.css';

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(products => setProducts(products))

    },[]);

    const addToCart = (product) => {
        console.log(product);
        // cart.push(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                
                ></Product>)
               }
            </div>
            <div className="card-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;