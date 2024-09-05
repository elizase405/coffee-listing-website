import Image from 'next/image';
import filledStar from '@/img/Star_fill.svg';
import star from '@/img/Star.svg';

interface Product {
    "id": number;
    "name": string;
    "image": string;
    "price": string;
    "rating": number;
    "votes": number;
    "popular": boolean;
    "available": boolean;
};

const Product: React.FC<{product: Product}> = ({ product }) => {
    return (
        <div className='relative my-6'>
            <Image className='rounded-lg' src={product.image} alt={product.name} width='250' height='250'/>
            {product.popular && <p className='absolute top-2 left-2 bg-[#F6C768] leading-[2] text-xs text-center text-black font-bold rounded-2xl w-20 h-6'>Popular</p>}
            <div className='flex justify-between mt-3 mb-1'>
                <p className='tracking-wider'>{product.name}</p>
                <p className='w-14 h-7 bg-[#BEE3CC] leading-[2.5] text-xs text-center text-black font-bold rounded-md'>{product.price}</p>
            </div>
            <div className='flex justify-between mt-3'>
                <div className='text-sm'>
                {product.rating == null ? <Image src={star} alt='star' className='inline'/> : <Image src={filledStar} alt='star' className='inline'/>}
                    {product.rating == null ? <span className='mx-1 text-[#6F757C]'>No ratings</span> : <span className='mx-1'>{product.rating}</span>}
                    {product.votes == 0 ? <p></p> : <span className='text-[#6F757C]'>({product.votes} votes)</span>}
                </div>
                {product.available ? <p></p> : <p className='text-[#ED735D] text-sm font-semibold'>Sold out</p>}
            </div>
        </div>
    )
}

export default Product;