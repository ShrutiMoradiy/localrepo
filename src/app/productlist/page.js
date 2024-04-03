'use client'; 
import { useEffect, useState } from 'react';

export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-between p-24">
            <h1 className='text-3xl'>Product List</h1>
            {
                products.map((item) => (
                    <h3 key={item}>Product : {item.title}</h3>
                ))
            }
        </div>
    );
}
