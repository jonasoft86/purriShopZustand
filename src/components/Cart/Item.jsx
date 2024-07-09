import React from 'react'
import { TbMinus, TbPlus, TbX } from 'react-icons/tb'
import { motion } from 'framer-motion'

const Item = ({item, handleRemove, handleAdd, handleRemoveQuantity }) => {
  return (
    <motion.div 
        className='item-detail'
        initial={{ opacity:0 , y:100 }}
        animate={{ opacity:1 , y:0 }}
        transition={{ delay: 0.2, duration:2 }}
    >
        <div className="item-info">
            <div className="item-image">
                <img src={item.image} alt="cart product image" />
            </div>
            <div className="item-title">{item.title}</div>
        </div>
        <div className="item-unit-price">${item.price}</div>
        <div className="item-quantity" >
            <TbMinus onClick={()=> handleRemoveQuantity(item)} /> {item.qty} <TbPlus  onClick={()=> handleAdd(item)} />
        </div>
        <div className="item-total-price">${ item.price * item.qty }</div>
        <div className="item-remove" onClick={()=> handleRemove(item.id) }>
            <TbX />
        </div>
    </motion.div> 
  )
}

export default Item