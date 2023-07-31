import React from 'react'

export default function Header({title}) {
    return (
        <div className="p-5 bg-blue-600 text-white text-3xl font-bold">
            {title}
        </div>
    )
}