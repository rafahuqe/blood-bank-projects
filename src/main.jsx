import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
    <div className='max-w-screen- mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
    </QueryClientProvider>
   </AuthProvider>
    
  </React.StrictMode>,
)
