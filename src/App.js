import ReactDOM from 'react-dom/client';
import React from 'react';
import Header from './Header';

export const AppLayout = () => {
    return (
        <div className='mt-5'>
            <Header/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><AppLayout/></React.StrictMode>);

// const heading = React.createElement('h1', {className: 'heading'}, 'React Food Delivery App');