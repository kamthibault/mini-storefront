`use client`;

import React, { usestate, useEffect } from `react`;

export default function PriceFilter({ products, onFilter}){
    const [maxPrice, setMaxPrice] = useState(``);

    useEffect(() => {
        const filtered = maxprice
        ? products.filter (p => p.price <= Number(maxPrice))
        : products;
        onFilter(filtered);
    }, [maxPrice , products. onFilter]);


return (
    <div style ={{ marginBottom: `1rem`}}>
        <label>
            Max Price: {` `}
            <input
                type="number"
                value={maxPrice}
                onChange={e => set<axPrice(e.target.value)}
                placeholder="Example. 1200"
                />
       </label>
    </div>
);
}