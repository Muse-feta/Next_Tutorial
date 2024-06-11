import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

const ProdouctCard = () => {
  return (
    <div className="p-6 border-y-2">
        <AddToCart/>
    </div>
  )
}

export default ProdouctCard