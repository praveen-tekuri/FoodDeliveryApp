import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './itemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log('cart', cartItems);
  
  const dispatch = useDispatch();
  
  const handleClearCart = () => {
        dispatch(clearCart());
  }
  
  return (
    <div className='text-center m-3 p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className='w-6/12 mx-auto'>
            {cartItems.length === 0 ? 
                <h1 className='my-2 font-bold text-2xl'>Add Items to the cart</h1> : 
                (<div>
                    <button onClick={handleClearCart} className='py-2 px-4 bg-black text-white mt-5 font-bold'>Clear Cart</button>
                    <ItemList items={cartItems}/>
                </div>) 
            }
        </div>
    </div>
  )
}

export default Cart