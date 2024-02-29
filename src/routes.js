import {createBrowserRouter} from 'react-router-dom'
import App from './components/App'
import Profile from './components/Profile'
import Login from './components/Login'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
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