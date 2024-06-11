import React from 'react'

interface user {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string
    }
}

const UsersPage = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: {
            revalidate: 60},
    });
    const users: user[] = await res.json();
  return (
    <>
      <div>UsersPage</div>
      <ul>
        {users.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersPage