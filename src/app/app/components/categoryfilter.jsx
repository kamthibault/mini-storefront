`use client`;

import React, {useState, useEffect} from "react";

export default function CategoryFilter({ products, onFilter}) {
    const [selectedCategory, setSelectedCategory] = useState(``);

    const categories = [...new Set(products.map(p => p.category))];

    useEffect (() => {
        const filtered = selectedCategory
        ? products.filter (p => p.category == selectedCategory)
        : products;
        onFilter(filtered);
    }, [selectedCategory, products, onFilter]);

    return (
        <div style={{ marginBottom: `1rem` }}>
            <label>
                Category: {` `}
                <select
                value = {selectedCategory}
                onChange= {e => setSelectedCategory(e.target.value)}>
                    <option value="">All</option>
                    {categories.map(c => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </label>
        </div>
    );
}