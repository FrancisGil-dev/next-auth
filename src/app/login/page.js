"use client"
import React, { useState } from 'react'

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const loginUser = (e) => {
        e.preventDefault();

    }
  return (
    <main className='flex justify-center items-center h-screen dark:bg-[#1e1e1c] flex-col'>
        <form onSubmit={loginUser} className='flex flex-col gap-5'>
            <input type='text' required placeholder='enter Email...' value={data.email}
            onChange={(e) => setData({...data, email: e.target.value})} className='bg-transparent outline-none'/>
            <input type='password' required placeholder='enter Password...' value={data.password}
            onChange={(e) => setData({...data, password: e.target.value})} className='bg-transparent outline-none'/> 
            
            <button type='submit'>Login</button>
        </form>
        <span>Already have an Account? <a href='/login'>login Here</a></span>
    </main>
  )
}
