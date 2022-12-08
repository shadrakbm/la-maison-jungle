import Water from '../assets/water.svg'
import Sun from '../assets/sun.svg'

const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

export default function CareScale({ scaleValue, careType }) {
    const scaleType = careType === 'water' ? 
        <img src={ Water } alt='water-icon'/> :
        <img src={ Sun } alt='sun-icon'/>
    const range = [1, 2, 3]
    return (
        <div onClick={() => alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'water' ?  `d'arrosage` : 'de lumière'}`)}>
            {range.map(rangeElem => 
                scaleValue >= rangeElem && <span key={ rangeElem.toString() }>{ scaleType }</span>
            )}      
        </div>
    )
}