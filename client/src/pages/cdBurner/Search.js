import { useState, useEffect, useMemo } from 'react'

import { useOutletContext } from 'react-router-dom'
import SearchResult from './SearchResult'
import TrackSearchResult from './TrackSearchResult'
import Player from '../../components/Player'




function Search() {
    const { authParams, handleTrack } = useOutletContext()
    const [searchParam, setSearchParam] = useState('')
    const [artistSearchResults, setArtistSearchResults] = useState({})
    const [trackSearchResults, setTrackSearchResults] = useState({})
    const [trackUri, setTrackUri] = useState([])

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/search?q=artist:${searchParam}&type=artist`, {

            headers: {
                'Authorization': `Bearer ${authParams.access_token}`
            }
        })
        .then(resp => resp.json())
        .then(data => setArtistSearchResults(data))


        fetch(`https://api.spotify.com/v1/search?q=${searchParam}&type=track`, {

        headers: {
            'Authorization': `Bearer ${authParams.access_token}`
        }
    })
    .then(resp => resp.json())
    .then(data => setTrackSearchResults(data))


    }, [searchParam])

    const handleSearch = (e) => {

        setSearchParam(e.target.value)
    }



    const renderArtistSearch = useMemo(() => {
        if(Object.keys(artistSearchResults).length === 0) {

            return 'Loading...'
        } else {
            if(searchParam) {

                return artistSearchResults.artists.items.map((result) => <SearchResult key={result.id} {...result} />)
            } else {
                return null
            }
        }

    },[artistSearchResults])


    const renderTrackSearch = useMemo(() => {
        if(Object.keys(trackSearchResults).length === 0) {

            return 'Loading...'
        } else {
            if(searchParam) {

                return trackSearchResults.tracks.items.map((result) => <TrackSearchResult key={result.id} {...result} handleTrack={handleTrack}/>)

            } else {

                return null
            }
        }

    },[trackSearchResults])


    console.log(artistSearchResults, trackSearchResults)



    return (

        <div className='cont-menu'>

        
        <div className='container search'>
            
            <h1>Search</h1>
  
            <input className='search-bar' 
            placeholder='Search by Artist & Track'
            type='text' 
            name='search' 
            onChange={(e) => handleSearch(e)}></input>
            <div id='search-result-container'>

                {renderArtistSearch === 0 ? null :
                      <div id='artist-result-container'>

                      {renderArtistSearch}
                  </div>
                }
              

                <div id='track-result-container'>

                    {renderTrackSearch}
                </div>

            </div>
            
        </div>

        <div className='container cd-burner'>
            <h1>CD Burner</h1>
                <div>
                    123123
                </div>

        </div>

        </div>
    )
}

export default Search