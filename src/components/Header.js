import '../App.css'
import Profile from './Profile'
import {NavLink} from 'react-router-dom'

function Header() {


    return (
    <header id='headerNav'>
            <NavLink to='/' id='header-title'>
            <h1 id="header-title-name">DeadBeat</h1>
            <h2 id='header-title-emoji'>💀</h2>
            </NavLink>


        <div id='header-buttons'>

            <NavLink to='/profile' className='header-button'>Profile</NavLink>

        </div>
        
    </header>
    
    )
}

export default Header