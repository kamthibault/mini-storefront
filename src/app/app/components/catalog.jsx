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
        </div>
    );
}