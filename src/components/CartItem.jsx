import { useContext } from 'react'
import {Button} from 'react-bootstrap'
import { CardContext } from '../contexts/CardContext'

const CartItem= ({cartItem}) => {
    const {id, name, quantity} = cartItem
    const price = quantity * (id * 10)
    const { deleteFromCart, addOneToCart, removeOneFromCart} = useContext(CardContext)
    

  return (
    <>
        <h3>{name}</h3>
        
        <div className='d-flex flex-wrap align-items-center my-2'>
            <span className='mr-3'>Quantity: {quantity}</span>
            <Button onClick={()=> addOneToCart(cartItem)} size='sm' className='mr-3' > + </Button>
            <Button onClick={()=> removeOneFromCart(cartItem)} size='sm' > - </Button>
        </div>
        <p>Price: ${price}</p>
        <Button size='sm' className='mb-4' onClick={() =>deleteFromCart(cartItem)}>Remove</Button>
    </>
  )
}

export default CartItem