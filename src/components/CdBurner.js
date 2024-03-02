import { useState, useEffect, useMemo } from 'react'

import { useOutletContext } from 'react-router-dom'
import SearchResult from './SearchResult'




function CdBurner() {
    const { authParams } = useOutletContext()
    const [searchParam, setSearchParam] = useState('')
    const [searchResults, setSearchResults] = useState({})

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/search?q=artist:${searchParam}&type=artist`, {

            headers: {
                'Authorization': `Bearer ${authParams.access_token}`
            }
        })
        .then(resp => resp.json())
        .then(data => setSearchResults(data))


    }, [searchParam])

    const handleSearch = (e) => {

        setSearchParam(e.target.value)
    }

    const renderSearch = useMemo(() => {
        if(Object.keys(searchResults).length === 0) {

            return 'Loading...'
        } else {
            if(searchParam) {

                return searchResults.artists.items.map((result) => <SearchResult key={result.id} {...result} />)
            } else {
                return null
            }
        }

    },[searchResults])



    return (
        <div className='container'>
            <h1>Search</h1>
            <div id='search-filter'>
                <span> X Artist: Kanye West, Caroline Polachek</span>
                <span> X Album: My Dark Twisted Fantasy</span>
                
            </div>
            <input className='search-bar' placeholder='Search by Artist, Album, or Track'type='text' name='search' onChange={(e) => handleSearch(e)}></input>
            {renderSearch}
        </div>
    )
}

export default CdBurner