import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Playlist from './Playlist'
import { render } from '@testing-library/react'


function Home() {
    const { authParams } = useOutletContext()
    const [playlists, setPlaylists] = useState({})



    useEffect(() => {
        fetch('https://api.spotify.com/v1/users/christiangerard793/playlists',{
            headers: {
                "Authorization": `Bearer ${authParams.access_token} `
            }
        })
        .then(resp => resp.json())
        .then(data => setPlaylists(data))

    },[])


    // const renderPlaylists = playlists.items.map((playlist) => <Playlist {...playlist} />)
    

    // console.log(playlists.items.map((x) => x))

    return (
        <div className='container'>
            {playlists.length === 0 ? <h1>Loading...</h1> :
            <div> 
                <h1>PLAYLISTS</h1>
                {/* {renderPlaylists} */}

            </div>
            
            }

        </div>
    )
}

export default Home