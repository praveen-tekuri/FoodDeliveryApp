import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-200 p-5'>
            <nav className='flex justify-between'>
                <div>
                    <Link className='font-bold' to='/'><img src="/" alt="Food Delivery App" /></Link>
                </div>
                <ul className='flex justify-end'>
                    <li className='mx-2'><Link className='font-semibold' to="/">Home</Link></li>
                    <li className='mx-2'><Link className='font-semibold' to="/about">About Us</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header