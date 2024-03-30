import SpotifyPlayer from 'react-spotify-web-playback'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'

function Player({trackUri}) {

    const { authParams } = useOutletContext()



    if(!authParams.access_token) return null
    console.log(trackUri)
    return (
        <div id='player'>

            <SpotifyPlayer id='player'
            token={authParams.access_token} 

            play={trackUri ? true : false}
            uris={trackUri }
            styles={{
                bgColor: 'purple',
                loaderColor: 'red',
                sliderColor: 'red',
                activeColor: 'purple',
                color: 'black',
                trackArtistColor: 'red',
                trackNameColor: 'red',
                sliderTrackColor: 'black'
            }}
            />
            
        </div>
    )
}

export default Player