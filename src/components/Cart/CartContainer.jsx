import React from 'react'
import "./CartContainer.css"
import Item from './Item'
import Summary from './Summary'
import { useStore } from '../../store/store';

const CartContainer = () => {
  const { products, removeProduct , incQty, decQty} = useStore();

  const handleRemove = (productId) =>{
    removeProduct(productId)
  }

  const handleAdd = (product) =>{
    console.log(product)
    //incQty(product)
  }

  const handleRemoveQuantity = (productId) =>{
    //decQty(productId)
  }

  return (
    <div className='cart-wrapper'>
      <h2 className='section-title'>Shopping Cart</h2>
      <div className='cart-container'>
        {
          products && products.length>0 ? 
          <>
            <div className='cart-items'>
              { products.map((item)=> (
                  <Item 
                    key={item.id} 
                    item={item} 
                    handleRemove={handleRemove} 
                    handleAdd={handleAdd} 
                    handleRemoveQuantity={handleRemoveQuantity}
                  />
              ))}
            </div>
          </>:
          <div className='no-item'>
            <p>No items in the cart</p>
          </div>
        }
          <Summary cartItems={products} />
      </div>
    </div>
  )
}

export default CartContainer