import '../style/ShoppingList.css'

import { useState } from 'react'

import { plantList } from '../datas/plantList'

import PlantItem  from './PlantItem'
import Categories from './Categories'

export default function ShoppingList({ cart, updateCart }) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), 
        []
    )
    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }
    return (
        <div className='lmj-shopping-list'>
            <Categories categories={ categories } activeCategory={ activeCategory } setActiveCategory={ setActiveCategory }/>
            <ul className='lmj-plant-list'>
                { plantList.map(({ name, category, cover, id, light, water, price }) => 
                    (!activeCategory || activeCategory === category) &&
                        <div key={ id }>
                            <PlantItem name={ name } cover={ cover } id={ id } light={ light } water={ water }/>
                            <button onClick={ () => addToCart(name, price) }>Ajouter</button>
                        </div>
                ) }
            </ul>    
        </div>
    )
}
