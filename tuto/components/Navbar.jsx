import React from 'react'
import Link from 'next/link'

import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">TUTO</Link>
      </p>

      <button type='button' className='cart-icon'>
         <AiOutlineShopping/>
         <span className='cart-item-qty'>3</span>
      </button>
    </div>
  )
}

export default Navbar