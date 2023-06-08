import React from 'react'
import Link from "next/link";

function Header() {
  return (
    <div className='header'>
         <div>
        <h2>Todo.</h2>
      </div>
      <article>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
      </article>
        
        
        header</div>
  )
}

export default Header