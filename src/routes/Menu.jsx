import list from '../data/data'
import Card from '../components/Card'
const Menu = ({handleClick}) => {
    return (
        list.map((item)=>(
            <Card item={item} key={item.id} handleClick={handleClick} />
        ))       
    )
}
export default Menu