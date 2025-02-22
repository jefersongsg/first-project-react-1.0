
import { createBrowserRouter } from "react-router-dom"


import Home from './container/home'
import Users from './container/listUsers'


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },

    {
        path: '/users',
        element: <Users />
    }
])


export default Router