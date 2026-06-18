import { TbLock } from 'react-icons/tb'

const Summary = ({cartItems}) => {

  const totalAmount = cartItems.reduce((acc,item) => {
    return acc + item.price * item.qty
  },0)

  const shipping = totalAmount > 0 ? 5.99 : 0;
  const totalAmountWithShipping = totalAmount + shipping;

  return (
    <div className='cart-summary'>
      <div className='summary-total'>
        <span>Subtotal</span><strong>${totalAmount.toFixed(2)}</strong>
      </div>
      <div className='summary-shipping'>
        <span>Envío</span><strong>${shipping.toFixed(2)}</strong>
      </div>
      <div className='summary-total-amount'>
        <span>Total</span><strong>${totalAmountWithShipping.toFixed(2)}</strong>
      </div>
      <button className='check-out-btn' disabled={!cartItems.length}>
        <TbLock /> Finalizar compra
      </button>
    </div>
  )
}

export default Summary
