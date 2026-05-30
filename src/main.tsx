import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchPointsOfInterestProvider } from './context/SearchPointsOfInterestContext.tsx'
import { PointOfInterestDetailsProvider } from './context/PointOfInterestDetailsContext.tsx'

import App from './App.tsx'
import '@/styles/global.css'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: false,             // Disable automatic fetching
      retry: 2,                   // 2x retry on failure
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SearchPointsOfInterestProvider>
          <PointOfInterestDetailsProvider>
            <App />
          </PointOfInterestDetailsProvider>
        </SearchPointsOfInterestProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
