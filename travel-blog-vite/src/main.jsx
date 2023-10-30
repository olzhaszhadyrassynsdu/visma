import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './components/Router.jsx'
import './assets/main.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <Router />
    </QueryClientProvider>
  </React.StrictMode>,
)
