import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { title } from 'process'
import React from 'react'

interface params {
    params: {
        productid: string
    }
}

export const generateMetadata = ({ params }: params): Metadata => {
  return {
    title: `product ${params.productid}`,
    description: `product ${params.productid} detail`,
  };
};

const ProductId = ({params}: params) => {
    if(parseInt(params.productid) > 1000) {
      notFound()
    }
  return (
    <>
      <div>My Product Detail {params.productid}</div>
      <Link href="/" >Home</Link>
    </>
  );
}

export default ProductId