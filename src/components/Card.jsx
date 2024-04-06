import './Card.css'

const Card = ({item}) => {
    const {img, name, price, tag} = item;
    return (
        <div className="grid grid-cols-3 gap-3 my-3 mx-5">
            <img src={img} alt={name} className="h-32 rounded-2xl"/>
            <div id='name' className="text-2xl flex items-center justify-start"><p><span className="font-bold">{name}</span><br /><span className='text-xl'>{tag}</span></p></div>
            <p id='price' className="flex items-center justify-end text-xl">........................   $<span className='text-4xl'>{price}</span></p>
        </div>
    )
}
export default Card