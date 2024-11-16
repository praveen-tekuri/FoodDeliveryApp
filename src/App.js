import ReactDOM from 'react-dom/client';
import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
// import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';
import Restaurant from './components/RestaurantCard';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';

const Grocery = lazy(() => import('./components/Grocery')); // dynamic import
const About = lazy(() => import('./components/About')); 

export const AppLayout = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                   <div className='px-5 min-h-[calc(100vh_-_128px)] '>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='./rest' element={<Restaurant/>}/>
                            <Route path='/about' element={<Suspense fallback={<h1 className='my-3 text-2xl'>Loading...</h1>}><About/></Suspense>}/>
                            <Route path='/grocery' element={<Suspense fallback={<h1 className='my-3 text-2xl'>Loading...</h1>}><Grocery/></Suspense>}/>
                            <Route path='/restaurants/:resId' element={<RestaurantMenu/>}/>
                            <Route path='*' element={<Error/>}/>
                        </Routes>
                   </div>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><AppLayout/></React.StrictMode>);

// const heading = React.createElement('h1', {className: 'heading'}, 'React Food Delivery App');

/**
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - Search
 *  - Restaurant
 * Footer
 * 
 */