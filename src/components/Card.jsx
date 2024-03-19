import './Card.css'
import Button from '@mui/material/Button';

const Card = ({item, handleClick}) => {
    const {img, name, price, tag} = item;
    return (
        <div className="grid grid-cols-4 gap-3 my-3 mx-5">
            <img src={img} alt={name} className="h-32 rounded-3xl"/>
            <div id='name' className="text-xl flex items-center justify-start"><p><span className="font-bold">{name}</span><br />{tag}</p></div>
            <p id='price' className="flex items-center justify-end text-2xl">........................   ${price}</p>
            <div className='flex justify-center items-center'><Button onClick={handleClick} color="error" variant="contained" sx={{width: '180px', height: '36px'}}>Add to cart</Button></div>
        </div>
    )
}
export default Card