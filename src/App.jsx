import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import LocaleLayout from './pages/LocaleLayout.jsx'
import Home from './pages/[locale]/Home.jsx'
import Login from './pages/[locale]/Login.jsx'
import Signup from './pages/[locale]/Signup.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/en" replace /> },
  {
    path: '/:locale',
    element: <LocaleLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
  { path: '*', element: <Navigate to="/en" replace /> },
])

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  )
}

export default App
