import ProductList from `./components/ProductList`
import CategoryFilter from `./components/CategoryFilter`
import PriceFilter from "./components/pricefilter"
import StatusMessage from "./components/statusmessage"

`use client`;
import React, {useEffect, useState} from "react";

export default function Page() {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState ([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetch(`/api/products`)
        .then (res => {
            if (!res.ok) throw new Error (`Failed to Fetch`);
            return res.json();
        })
        .then (data => {
            setProducts(data);
            setFiltered(data);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    const handleCategoryFilter = (categoryFiltered) => {
        setFiltered(categoryFiltered);
    };
    const handlePriceFilter = (priceFiltered) => {
        setFiltered (priceFiltered);
    };


    return (
        <main>
            <h1>Browse Products</h1>
        
        {loading && <StatusMessage type="loading"/>}
        {error && <StatusMessage type="error" message={error}/>}
        {loading && !error && products.length == 0 && <StatusMessage type="empty"/>}

        {!loading && !error && products.length>0 && (
            <>
            <CategoryFilter products={products} onFilter={handleCategoryFilter} />
            <PriceFilter products={products} onFilter={handlePriceFilter}/>
            <ProductList products={filtered} />
            </>
        )}
        </main>
    )
    
}
