import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
    <div className='max-w-screen- mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
   </AuthProvider>
    
  </React.StrictMode>,
)