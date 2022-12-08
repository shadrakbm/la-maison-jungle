import { plantList } from '../datas/plantList'
import  PlantItem  from './PlantItem'
import '../styles/ShoppingList.css'

export default function ShoppingList({ cart, updateCart }) {
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
            <ul>
                {categories.map(cat => 
                    <li key={ cat }>{ cat }</li>
                )}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ name, cover, id, light, water, price }) =>
                    <div key={ id }>
                        <PlantItem name={ name } cover={ cover } id={ id } light={ light } water={ water } price={ price }/>
                        <button onClick={ () => addToCart(name, price) }>Ajouter</button>
                    </div>
                )}
            </ul>    
        </div>
    )
}