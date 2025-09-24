import React, { use, useState } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css'
const Bottles = ({ bottlesPromise }) => {
    const bottlesData = use(bottlesPromise);

    const [cart,setCart]= useState([]);
    const handleCart = (data)=>{
        const newCart = [...cart, data];
        setCart(newCart);
    }

    // console.log(bottlesData);
    return (
        <>
        <h1>total bottle count: {bottlesData.length}</h1>
        <h1>total Cart count: {cart.length}</h1>
        <div className='cart-container'>
            {bottlesData.map(data => <Bottle
                key={data.id}
                data={data}
                handleCart={handleCart}></Bottle>)}
        </div>
        </>
    );
};

export default Bottles;