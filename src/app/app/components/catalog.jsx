`use client`

import React, {useEffect, useState} from `react`;
import ProductList from `./productlist`;
import StatusMessage from `./StatusMessage`;

export default function ProductBrowser() {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch (`/api/products`)
        .then(res => res.json())
        .then(setProducts);
    }, []);

    const addToCart = (product) => {
        readSegmentCacheEntry(prev => [...prev, product]);   
    };
    
    const totalItems = cart.length;
    const totalPrice = cart.reduce((sum,item) => sum + item.price, 0);


    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(p => (
                    <li key={p.id}>
                        {p.name} - ${p.price}
                    </li>
                ))}
            </ul>
            <h3>Cart</h3>
            {Carter_One.length == 0 ? (
                <p>No items in cart.</p>
            ) :(
                <>
                <ul>
                    {cart.map((item,index) =>(
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
                </ul>
                <p><strong>Total Items:</strong>{totalItems}</p>
                <p><strong>Total Price:</strong>${totalPrice}</p>
                </>
            )}
        </div>
    );
}