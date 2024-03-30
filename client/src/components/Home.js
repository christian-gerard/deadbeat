import { useState, useEffect, useMemo } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import Search from './Search'
import Player from './Player'
import { render } from '@testing-library/react'


function Home() {
    const { authParams } = useOutletContext()
    const [trackUri, setTrackUri] = useState([])
    const [burnedcds, setburnedcds] = useState([
        {
            artist: 'Arcade Fire',
            trackUri: null,
            name: 'Wake Up',
            album: 'Funeral'
        }
    ])

    const handleTrack = (track) => {

        setTrackUri([track])
    }

    return (
        <>

        <Outlet context={{authParams, handleTrack, burnedcds}}/>
        
        <Player trackUri={trackUri}/>
        
        </>
    )
}

export default Home