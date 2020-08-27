import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart; 
    let total = 0;
    for (let i = 0; i < cart.length; i++){
        const course = cart[i]
        total = (total + course.price);
    }
   
        let cashBack = 0;
        if (total > 400) {
            cashBack = 40;
        } else if (total > 150) {
            cashBack = 10;
        } else {
            cashBack = 0;
        }

   
    const formatNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }

    const grandTotal = (total - cashBack).toFixed(2);

    return (
        <div className='cart'>
            <h4>Total Course: 15</h4>
            <h2>Purchased: {cart.length}</h2>
            <h5 className='price'>Course Price: ${formatNumber(total)}</h5>
            <h6 className='bonus'>Cash BacK: ${formatNumber(cashBack)}</h6>
            <h6 className='tPrice'>Total Price: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;