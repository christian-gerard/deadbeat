import {createBrowserRouter} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import ErrorPage from './components/ErrorPage'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
])

export default routes