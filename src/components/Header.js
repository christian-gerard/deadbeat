
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

            {images ? <NavLink to='/profile' className='header-button'> <img className='profile-button' src={images[1].url}></img> </NavLink> : <NavLink to='/profile' className='header-button'> 💀 </NavLink> }
            
        </div>
        
    </header>
    
    )
}

export default Header