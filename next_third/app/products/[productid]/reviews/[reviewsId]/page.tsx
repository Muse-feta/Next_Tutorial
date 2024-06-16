import React from 'react'
import { notFound } from 'next/navigation'

const getRandom = (count: number) => {
  return Math.floor(Math.random() * count)
} 

interface params {
    params:{
        productid:string
        reviewsId:string
    }
}

const page = ({params}:params) => {
  const random = getRandom(2)
  if(random === 1) {
    throw new Error('Error in loading review')
  }
  if(parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div>product {params.productid} review {params.reviewsId}</div>
  )
}

export default page