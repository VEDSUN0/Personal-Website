import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.tsx'
import { ArticlesPage, BlogPage } from './IndexPages.tsx'
import './styles.css'

const path = window.location.pathname.replace(/\/+$/, '')
const Page = path === '/blog' ? BlogPage : path === '/articles' ? ArticlesPage : Home

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
