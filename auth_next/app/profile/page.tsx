"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'

const page = () => {
  const router = useRouter()
  const [data, setData] = useState("")
  

  const getData = async () => {
         const res = await axios.get("/api/users/me");
         console.log(res);
         setData(res.data.data);
  }

    useEffect(() => {
      getData();
    }, []);

  console.log(data);


  const handleSubmit = async() => {
    try {
      await axios.get('/api/users/logout')
      router.push('/login')
    } catch (error: any) {
      console.log("error occured", error.message)
    }
  }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Profile Page</h1>
      <h1>
        <Link href={`/profile/${data.id}`}>Me Profile</Link>
      </h1>
      <button
        onClick={handleSubmit}
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in outline-none focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 active:bg-red-700 active:text-white dark:focus-visible:ring-red-700 dark:focus-visible:ring-opacity-50 dark:active:bg-red-800 dark:active:text-white dark:hover:bg-red-600 dark:hover:text-white dark:bg-red-700 dark:text-white dark:border-red-700 m-5"
      >
        Logout
      </button>
    </div>
  );
}

export default page