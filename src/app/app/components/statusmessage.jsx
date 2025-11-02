`use client`;

import React from `react`;

export default function StatusMessage({ type, message}) {
    if (type == `loading`) {
        return<p>Loading...</p>;
    }

    if (type == `error`) {
        return <p style={{ color: `red` }}>Error: {message}</p>;
    }

    if (type == `empty`) {
        return <p> no items found.</p>;
    }

    return null;
    }
