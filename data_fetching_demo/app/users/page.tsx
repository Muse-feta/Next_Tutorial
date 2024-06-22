import React from 'react'


type User = {
    id: number
    name: string
}
const Users = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
  return (
    <div>Users
        {data.map((user: User) => (
            <div key={user.id}>{user.name}</div>

        ))}
    </div>
  )
}

export default Users