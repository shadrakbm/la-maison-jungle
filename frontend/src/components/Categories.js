import '../styles/Categories.css'

export default function Categories({ categories, activeCategory, setActiveCategory }) {
    return (
        <div className='lmj-categories'>
            <select 
                className='lmj-categories-select'
                value={ activeCategory }
                onChange={ (e) => e.setActiveCategory(e.target.value) }>
                    <option value=''>---</option> 
                    { categories.map(cat => <option key={ cat } value={ cat }>{ cat }</option>) }
            </select>
            <button onClick={ () => setActiveCategory('') }>Réinitialiser</button>
        </div>
    )
}