import "./CartContainer.css"
import Item from './Item'
import Summary from './Summary'
import { useStore } from '../../store/store';
import { TbShoppingBag } from "react-icons/tb";

const CartContainer = ({ compact = false }) => {
  const { products, removeProduct , incQty, decQty} = useStore();
  const totalItems = products.reduce((total, product) => total + product.qty, 0)

  return (
    <div className={`cart-wrapper ${compact ? 'cart-wrapper--compact' : ''}`}>
      <div className="cart-header">
        <h2>Tu carrito ({totalItems})</h2>
      </div>
      <div className='cart-container'>
        {
          products.length > 0 ?
            <div className='cart-items'>
              { products.map((item)=> (
                  <Item 
                    key={item.id} 
                    item={item} 
                    handleRemove={removeProduct}
                    handleAdd={incQty}
                    handleRemoveQuantity={decQty}
                  />
              ))}
            </div>
          :
          <div className='no-item'>
            <span><TbShoppingBag /></span>
            <h3>Tu carrito está vacío</h3>
            <p>Añade productos para verlos aquí.</p>
          </div>
        }
        <Summary cartItems={products} />
      </div>
    </div>
  )
}

export default CartContainer
