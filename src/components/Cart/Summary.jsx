import React from 'react'

const Summary = ({cartItems}) => {

  const totalAmount = cartItems.reduce((acc,item) => {
    return acc + item.price * item.qty
  },0)

  const taxAmount = totalAmount * 0.02;

  const totalQuantity = cartItems.reduce((acc,item) => {
    return acc + item.qty
  },0)

  const totalAmountWithTax = totalAmount + taxAmount;

  return (
    <div className='cart-summary'>
      <h3 className='summary-title'>Summary</h3>
      <div className='summary-total'>
        <span>Subtotal*</span> $ {totalAmount.toFixed(2)}
      </div>
      <div className='summary-total-tax'>
        <span>Tax Charges (2%)</span> $20
      </div>
      <div className='summary-total-quantity'>
        <span>Total Quantity*</span> {totalQuantity}
      </div>
      <div className='summary-total-amount'>
        <span>Total Price</span> ${totalAmountWithTax.toFixed(2)}
      </div>
      <button className='check-out-btn'>Proceed to checkout</button>
    </div>
  )
}

export default Summary