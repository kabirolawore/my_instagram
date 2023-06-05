import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// client side rendered app: react (cra)
// => database which is Firebase
// => react-loading-skeleton
// => tailwind

// architecture or folder structure
// src:
//  => components,
//  => constants,
//  => contexts,
//  => helpers,
//  => hooks,
//  => pages,
//  => lib (firebase is going to live in here),
//  => services (firebase functions in here),
//  => styles (tailwind's folder (app/tailwind)),
