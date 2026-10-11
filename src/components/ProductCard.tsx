import React from 'react'
import type { Product } from '../types'



const ProductCard = ({product}: {product:Product}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="mt-3 text-lg font-semibold">
        {product.title}
      </h2>

      <p className="mt-2 text-gray-600">
        {product.category}
      </p>

      <p className="mt-2 text-xl font-bold">
        ${product.price}
      </p>

      <p className="mt-1 text-sm text-yellow-500">
      </p>

      <button
        className="mt-4 flex w-full items-center justify-center gap-2 rounded bg-black p-2 text-white"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard