import ReactDOM from 'react-dom/client';
import React from 'react';

const AppLayout = () => {
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-green-700 text-center'>AppLayout</h1>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);

// const heading = React.createElement('h1', {className: 'heading'}, 'React Food Delivery App');