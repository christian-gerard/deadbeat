import { useState, useEffect, useMemo } from 'react'
import { useOutletContext } from 'react-router-dom'
import Search from './Search'
import Player from './Player'
import { render } from '@testing-library/react'


function Home() {
    const { authParams } = useOutletContext()
    const [trackUri, setTrackUri] = useState([])

    const handleTrack = (track) => {

        setTrackUri([track])
    }

    return (
        <>
        <Search handleTrack={handleTrack}/>
        
        <Player trackUri={trackUri}/>
        
        </>
    )
}

export default Home