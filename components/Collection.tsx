'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Product from './Product';
import vector from '@/img/vector.svg';


interface ProductInt {
    "id": number;
    "name": string;
    "image": string;
    "price": string;
    "rating": number;
    "votes": number;
    "popular": boolean;
    "available": boolean;
};

const Collection = () => {
    const [products, setProducts] = useState<ProductInt[]>([])

    const handleProducts = () => {
        axios.get<ProductInt[]>('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
        )
        .then(res => {
            setProducts(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    };

    useEffect(() => {
        handleProducts();
    }, []);

    return (
        <div className="w-3/5 md:w-4/5 bg-[#1B1D1F] mx-auto my-0 relative top-[-70px] md:top-[-150px] px-7 md:px-20 py-20 flex flex-col items-center">
            <Image src={vector} alt='vector' className='absolute top-7 right-0 md:right-40 xl:right-64' />
            <div className="text-center w-full mb-2 md:w-[500px] z-10">
                <h1 className="text-3xl font-bold">Our Collection</h1>
                <p className="text-[#6F757C] my-3 w-[98%]">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                <button className="bg-[#6F757C] p-2 rounded-lg mr-4 mt-2 text-sm">All Products</button>
                <button className="bg-[#1B1D1F] text-sm p-2 rounded-lg text-sm">Available Now</button>
            </div>
            <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 lg:grid-rows-2 gap-10">
                {products?.map((product: ProductInt) => 
                    <Product key={product.id} product={product} />
                )}
            </div>
        </div>
    )
}

export default Collection;