import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import HomePage from './pages/HomePage.tsx'
import NewRfpPage from './pages/NewRfpPage.tsx'
import TemplatesPage from './pages/TemplatesPage.tsx'
import RfpDetailPage from './pages/RfpDetailPage.tsx'
import FeaturesPage from './pages/FeaturesPage.tsx'
import PricingPage from './pages/PricingPage.tsx'
import { AboutPage, ContactPage, TermsPage, PrivacyPage } from './pages/StaticPages.tsx'
import ImportRfpPage from './pages/ImportRfpPage.tsx'
import RfpWorkspacePage from './pages/RfpWorkspacePage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'new', element: <NewRfpPage /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'templates', element: <TemplatesPage /> },
      { path: 'rfp/:id', element: <RfpDetailPage /> },
      { path: 'import', element: <ImportRfpPage /> },
      { path: 'workspace/:id', element: <RfpWorkspacePage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
