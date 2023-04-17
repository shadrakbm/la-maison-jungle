import '../style/Cart.css'

import { useState, useEffect } from 'react'

export default function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false)
  const total = cart.reduce((acc, plant) => acc + plant.amount*plant.price, 0)
  useEffect(() => { 
    document.title=`LMJ: ${total} euros à payer 😪` 
  }, [total])
  return isOpen ? (
    <div className='lmj-cart'>
      <button className='lmj-cart-toggle-button' onClick={ () => setIsOpen(false) }>Fermer</button>
      { cart.length > 0 ? (
        <div>
          <h2>Mon panier</h2>
          <ul>
            { cart.map(({ name, price, amount }, index) => 
            <li key={`${name}-${index}`}>{name} {price}€ x {amount}</li>
            ) }
          </ul>
          <h3>Total : {total}€</h3> 
          <button onClick={ () => updateCart([]) }>Vider le panier</button>
        </div> 
      ) : (
        <div>Votre panier est vide</div>
      ) }   
    </div>
    ) : (
      <div className='lmj-cart-closed'>
        <button className='lmj-cart-toggle-button' onClick={ () => setIsOpen(true) }>Ouvrir le panier</button>
      </div>) 
}      
      
  
