"use client"
import React, { useEffect } from 'react'

const error = ({error}: {error: Error}) => {
    useEffect(() => {
        console.log('error')
    }, [error])
  return (
    <div>error occured {error.message}</div>
  )
}

export default error