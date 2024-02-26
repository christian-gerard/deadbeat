import {createBrowserRouter} from 'react-router-dom'
import Main from './components/Main'
import Profile from './components/Profile'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/profile',
        element: <Profile />
    }
])

export default routes