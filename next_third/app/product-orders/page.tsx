"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const ProductOrder = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/')
    }
  return (
    <>
      <div>ProductOrder</div>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

export default ProductOrder