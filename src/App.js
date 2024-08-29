import ReactDOM from 'react-dom/client';
import React from 'react';

const heading = React.createElement(
    'h1', 
    {className: 'heading'}, 
    'React Food Delivery App'
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);