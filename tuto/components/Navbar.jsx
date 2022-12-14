import React from 'react'
import Link from 'next/link'
import  Cart  from './Cart'
import { useStateContext } from '../context/StateContext';

import { AiOutlineShopping } from 'react-icons/ai';




const Navbar = () => {

  /**use context to update cart and show it */

  const { showCart, setShowCart, totalQuantities } = useStateContext();


  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">TUTO</Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
         <AiOutlineShopping/>
         <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar