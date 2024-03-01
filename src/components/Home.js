import { useState, useEffect, useMemo } from 'react'
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
        .catch(err => console.log(err))
    },[])


    const renderPlaylists = useMemo(() => {

        if(Object.keys(playlists).length === 0) {

            return 'Loading...'

        } else {
            console.log(playlists[1])
            return playlists.items.map((playlist) => <Playlist key={playlist.id} {...playlist} />)
        }

    }, [playlists])

    console.log(renderPlaylists)
    



    return (
        <div className='container'>
            <h1>Playlists 🕸</h1>
            {renderPlaylists}
        </div>
    )
}

export default Home