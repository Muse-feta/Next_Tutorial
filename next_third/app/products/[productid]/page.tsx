import { notFound } from 'next/navigation'
import React from 'react'

interface params {
    params: {
        productid: string
    }
}

const ProductId = ({params}: params) => {
    if(parseInt(params.productid) > 1000) {
      notFound()
    }
  return (
    <div>My Product Detail {params.productid}</div>
  )
}

export default ProductId