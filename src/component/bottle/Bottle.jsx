import React from 'react';
import './bottle.css'
const Bottle = ({ data, handleCart }) => {
    console.log(data)
    return (
        <div className='card'>
            <img src={data.img} alt="" />
            <h3>Name: {data.name}</h3>
            <h3>Price: ${data.price}</h3>
            <h2>{data.stock} remaining</h2>
            <button onClick={() => handleCart(data)}>Add to cart</button>
        </div>
    );
};

export default Bottle;