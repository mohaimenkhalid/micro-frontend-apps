import React from 'react'
import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export default function Header({title}) {
    return (
        <div className="p-5 bg-blue-600 text-white text-3xl font-bold">
            <div className="flex">
                <div className="flex-grow flex">
                    <Link to="/">{title}</Link>
                    <div className="mx-5">|</div>
                    <Link id="cart" to="/cart">
                        Cart
                    </Link>
                </div>
                <div className="flex-end relative">
                    <MiniCart />
                    <Login />
                </div>
            </div>

        </div>
    )
}