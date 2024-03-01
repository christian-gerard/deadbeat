import { useState, useEffect } from 'react'

import { useOutletContext } from 'react-router-dom'




function CdBurner() {
    const { authParams } = useOutletContext()
    const [searchParam, setSearchParam] = useState('')

    useEffect(() => {
        fetch('https://api.spotify.com/v1/search?q=remaster%20track:Runaway%20artist:Kanye&type=track', {
            headers: {
                'Authorization': `Bearer ${authParams.access_token}`
            }
        })
        .then(resp => resp.json())
        .then(data => console.log(data))


    }, [])

    const handleSearch = (e) => {
        console.log()
        setSearchParam(e.target.value)
    }



    return (
        <div>
            <h1>Cd Burner</h1>
            <input type='text' name='search' onChange={(e) => handleSearch(e)}></input>
        </div>
    )
}

export default CdBurner