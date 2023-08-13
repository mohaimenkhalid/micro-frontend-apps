import React, {useState, useEffect} from 'react'

import {getProducts, currency} from '../api/products'
import {addToCart, useLoggedIn} from 'cart/cart'

export default function HomeContent() {
    const loggedIn = useLoggedIn()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(res => setProducts(res))
    }, [])


    return (
        <div className="grid grid-cols-4 gap-5">
            {
                products.map(product => (
                    <div key={product.id} className="product-card p-5 rounded-2xl">
                        <img src={product.image}  alt="product-img"/>
                        <div className="flex font-bold justify-between">
                            <span>{product.name}</span>
                            <span>{currency.format(product.price)}</span>
                        </div>
                        <div className="">{product.description}</div>
                        {
                            loggedIn && <div>
                                <button
                                    onClick={() => addToCart(product.id)}
                                    className="bg-blue-500 p-3">Add To Cart</button>
                            </div>
                        }

                    </div>
                ))
            }
        </div>
    )
}