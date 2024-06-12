import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: {
    absolute: "Second Blog",
  }
}

const SecondBlog = () => {
  return (
    <div>SecondBlog</div>
  )
}

export default SecondBlog