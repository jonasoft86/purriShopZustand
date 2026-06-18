import { TbMinus, TbPlus, TbTrash } from 'react-icons/tb'
import { motion } from 'framer-motion'

const Item = ({item, handleRemove, handleAdd, handleRemoveQuantity }) => {
  return (
    <motion.div 
        className='item-detail'
        initial={{ opacity:0 , y:16 }}
        animate={{ opacity:1 , y:0 }}
        transition={{ duration:0.3 }}
    >
        <div className="item-image">
            <img src={item.image} alt={item.title} />
        </div>
        <div className="item-content">
            <div className="item-title">{item.title}</div>
            <div className="item-unit-price">${item.price.toFixed(2)}</div>
            <div className="item-actions">
                <div className="item-quantity">
                    <button onClick={()=> handleRemoveQuantity(item.id)} aria-label="Reducir cantidad"><TbMinus /></button>
                    <span>{item.qty}</span>
                    <button onClick={()=> handleAdd(item.id)} aria-label="Aumentar cantidad"><TbPlus /></button>
                </div>
                <button className="item-remove" onClick={()=> handleRemove(item.id)} aria-label={`Eliminar ${item.title}`}>
                    <TbTrash />
                </button>
            </div>
        </div>
    </motion.div> 
  )
}

export default Item
