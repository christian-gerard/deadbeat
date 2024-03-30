import {createBrowserRouter} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Search from './components/Search'
import ErrorPage from './components/ErrorPage'
import Player from './components/Player'
import CdBurner from './components/CdBurner'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/',
                        element: <Search />
                    },
                    {
                        path: '/cdburner',
                        element: <CdBurner />
                    }
                ]
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
])

export default routes