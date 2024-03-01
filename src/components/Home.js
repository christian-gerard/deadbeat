import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Playlist from './Playlist'


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

    // const renderPlaylist = playlists.items.map((pl) => <Playlist key={pl.id} {...pl} />)

    // console.log(playlists.items.map((x) => x))

    return (
        <div className='container'>
            {/* {renderPlaylist} */}

        </div>
    )
}

export default Home