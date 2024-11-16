import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import useOnlineStaus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStaus();
    return (
        <div className='bg-slate-200 p-5'>
            <nav className='flex justify-between'>
                <div>
                    <Link className='font-bold' to='/'><img src="/" alt="Food Delivery App" /></Link>
                </div>
                <ul className='flex justify-end'>
                    <li className='mx-2'>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
                    <li className='mx-2'><Link className='font-semibold' to="/">Home</Link></li>
                    <li className='mx-2'><Link className='font-semibold' to="/about">About Us</Link></li>
                    <li className='mx-2'><Link className='font-semibold' to="/grocery">Grocery</Link></li>
                    <li className='mx-2'><button onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }} className='font-bold'>{btnName}</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header