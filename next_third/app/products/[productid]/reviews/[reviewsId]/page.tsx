import React from 'react'
import { notFound } from 'next/navigation'

interface params {
    params:{
        productid:string
        reviewsId:string
    }
}

const page = ({params}:params) => {
  if(parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div>product {params.productid} review {params.reviewsId}</div>
  )
}

export default page