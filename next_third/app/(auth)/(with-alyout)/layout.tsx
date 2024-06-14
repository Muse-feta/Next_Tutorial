"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

const navlinks = [
  {name: "register", path: "/register"},
  {name: "login", path: "/login"},
  {name: "forgot-password", path: "/forgot-password"},
]

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  const pathname = usePathname()
  const [input, setInput] = useState<string>("")
  
  return (
    <div>
      <div>
        <input type="text" onChange={e => setInput(e.target.value)} />
      </div>
        <div>
          {navlinks.map((link)=> {
            const isActive = link.path === pathname
            return (
              <Link href={link.path} key={link.name} className={isActive ? "text-2xl" : "text-sm"}>{link.name}</Link>
            )
          })}
        </div>
        {children}
        </div>
  )
}

export default AuthLayout