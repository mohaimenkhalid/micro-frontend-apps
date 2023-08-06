import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {getProductById, currency} from 'home/products'

export default function CartContent() {
    const params = useParams()
    const [product, setProduct] = useState(null);
    const id = params?.id

    useEffect(() => {
        if (id) {
            getProductById(id).then(res => setProduct(res))
        }
    }, [id])

    if(!product) return null
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <img src={product.image} alt="product-image" />
            </div>
            <div>
                <h1 className="text-3xl mb-2">{product.name}</h1>
                <h2 className="text-xl mb-2 font-bold">{currency.format(product.price)}</h2>
                <h1>{product.longDescription}</h1>
                <button className="bg-red-500 text-white px-2 py-1 mt-3">Add To Cart</button>
            </div>
        </div>
    )
}