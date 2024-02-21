import '../App.css'

function Header() {


    return (
    <header className='header'>
        <div id='app-title'>
            <h1>DeadBeat</h1>
            <h2>💀</h2>
        </div>

        <div id='app-nav'>

            <button className='app-nav-button'>Deck</button>
            <button className='app-nav-button'>New Mixtape</button>

        </div>
        
    </header>
    
    )
}

export default Header