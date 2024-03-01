 import { NavLink } from 'react-router-dom'
 
 function ErrorPage() {


    return (

        <div className='container'>
            <h1>WHOOOPS.....SOMETHING WENT WRONG</h1>
            <NavLink to='/'>GO HOME</NavLink>

        </div>
    )
 }

 export default ErrorPage