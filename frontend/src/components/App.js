import '../style/Layout.css'

import logo from '../assets/logo.png'

import { useState, useEffect } from 'react'

import Banner from './Banner'
import Footer from './Footer'
import Cart from './Cart'
import ShoppingList from './ShoppingList'

export default function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  })
  return (
    <div>
      <Banner>
        <img className='lmj-logo' src={logo} alt='La maison jungle'/>
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner> 
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer/>
    </div>
  )
}
