
import '../App.css'
import Profile from './Profile'
import {NavLink} from 'react-router-dom'

function Header({display_name,external_urls,followers,href,id,images,type,uri}) {


    return (
    <header id='headerNav'>
            <NavLink to='/' id='header-title'>
            <h1 id="header-title-name">DeadBeat</h1>
            <h2 id='header-title-emoji'>💀</h2>
            </NavLink>


        <div id='header-buttons'>

            <NavLink to='/cdBurner' className='header-button'>Cd Burner</NavLink>

            <NavLink to='/profile' className='header-button'> {display_name} </NavLink>
        </div>
        
    </header>
    
    )
}

export default Header