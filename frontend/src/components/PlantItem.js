import CareScale from "./CareScale"
import '../styles/PlantItem.css'

export default function PlantItem({ name, cover, id, light, water }) {
    return (
        <li key= { id } className='lmj-plant-item'>
            <img src={ cover } alt={ `${name} cover` } className='lmj-plant-item-cover'/>
            { name }
            <div>
                <CareScale careType='water' scaleValue={ water }/>
                <CareScale careType='light' scaleValue={ light }/>
            </div>
        </li>
    )
}
