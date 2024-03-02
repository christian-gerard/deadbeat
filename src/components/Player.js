import SpotifyPlayer from 'react-spotify-web-playback'
import { useOutletContext } from 'react-router-dom'

function Player() {

    const { authParams } = useOutletContext()

    const trackUri = true;
    console.log(authParams.access_token)

    if(!authParams.access_token) return null

    return (
        <div>

            <h1>PLayer</h1>

            <SpotifyPlayer 
            token={authParams.access_token} 
            showSaveIcon 
            uris={ trackUri ? ['spotify:track:3zbUNw1lvmLMIi3FHPGj8D'] : []}/>
            
        </div>
    )
}

export default Player