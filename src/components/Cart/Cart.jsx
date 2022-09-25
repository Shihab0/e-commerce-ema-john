import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>This is for sumarry</h2>
            <p>Item added: {cart.length}</p>
        </div>
    );
};

export default Cart;