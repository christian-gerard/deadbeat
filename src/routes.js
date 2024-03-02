import {createBrowserRouter} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Search from './components/Search'
import ErrorPage from './components/ErrorPage'
import Player from './components/Player'


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
                path: 'search',
                element: <Search />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'player',
                element: <Player />
            }
        ]
    }
])

export default routes