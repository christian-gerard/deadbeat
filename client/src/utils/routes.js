import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../pages/loginSignup/Login'
import Signup from '../pages/loginSignup/Signup'
import Feed from '../pages/feed/Feed'


import ErrorPage from './ErrorPage'



const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/feed',
                element: <Feed/>
            }
        ]
    }
])

export default routes