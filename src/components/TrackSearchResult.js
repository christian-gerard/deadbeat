

function TrackSearchResult({artists,name,album,duration_ms,uri,handleTrack}) {


    return(
        <div className='track-result' >
            <img src={album.images[2].url} ></img>
            <h2>{name}</h2>
            <h3>{album.name}</h3>
            <span>{artists.map((artist) => `${artist.name}, `  )}</span>
            <span> {(duration_ms/1000) / 60} min </span>
            <button onClick={() => handleTrack(uri)}>PLAY</button>
        </div>
    )
}

export default TrackSearchResult