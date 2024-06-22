"use client"
import React, { useState } from 'react'

const page = () => {
    const [name, setName] = useState("")
  return (
    <>
    <div>page</div>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <h1>Hello {name}!</h1>
    </>
  )
}

export default page