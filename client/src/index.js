import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import {  RouterProvider } from 'react-router-dom'
import routes from './utils/routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes}/>);

