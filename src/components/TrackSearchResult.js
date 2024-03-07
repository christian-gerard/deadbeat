

function TrackSearchResult({artists,name,album,duration_ms,uri,handleTrack}) {

    const runtimeSec = Math.round((duration_ms / 1000)) % 60

    const runtimeMin = Math.round(Math.round((duration_ms / 1000))  / 60)



    return(
        <div className='track-result' onClick={() => handleTrack(uri)}>
            <div>
            <img src={album.images[2].url} ></img>
            </div>
            <div className='track-details'>
            <span>{name}</span>
            <span>{album.name}</span>
            <span>{artists.map((artist) => `${artist.name} + `  )}</span>
            <span> {runtimeMin}:{runtimeSec} min </span>


            </div>
        </div>
    )
}

export default TrackSearchResult