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
    
}
