import { createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Episodes from '../pages/Episodes'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
  { path: "/", 
    element: <Layout> <Outlet /></Layout>, 
    children: [     
    { path: "/", element: <Home /> },
    { path: "/episodes", element: <Episodes /> },
    { path: "/contact", element: <Contact /> }
  ]}
])

export default router