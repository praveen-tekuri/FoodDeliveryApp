import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import useOnlineStaus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    
    const onlineStatus = useOnlineStaus();

    const {loggedInUser} = useContext(UserContext);

    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className='bg-slate-200 p-6'>
            <nav className='flex justify-between'>
                <div>
                    <Link className='font-bold' to='/'><img src="/" alt="Food Delivery App" /></Link>
                </div>
                <ul className='flex justify-end'>
                    <li className='mx-2'>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
                    <li className='mx-2'><Link className='font-semibold' to="/">Home</Link></li>
                    <li className='mx-2'><Link className='font-semibold' to="/about">About Us</Link></li>
                    <li className='mx-2'><Link className='font-semibold' to="/grocery">Grocery</Link></li>
                    <li className='mx-2'><Link className='font-semibold' to="/cart">Cart - ({cartItems.length})</Link></li>
                    <li className='mx-2'><button onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }} className='font-bold'>{btnName}</button></li>
                    <li className='mx-2 font-bold'>{loggedInUser}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header