import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import KnownFor from './pages/KnownFor'
import Mentorship from './pages/Mentorship'
import SelectedWork from './pages/SelectedWork'
import NavBar from './components/NavBar'
import './index.css'

import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
    {
        path: '/home',
        element: <HomePage />,
    },
    {
        path: '/aboutme',
        element: <AboutMe />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/knownfor',
        element: <KnownFor />,
    },
    {
        path: '/mentorship',
        element: <Mentorship />,
    },
    {
        path: '/selectedwork',
        element: <SelectedWork />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <NavBar />
        <RouterProvider router={router} />
    </React.StrictMode>
)

reportWebVitals()
