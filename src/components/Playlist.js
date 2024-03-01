import Track from './Track'

function Playlist({name,tracks,images,external_urls,description}) {



    return (
        <div className='playlist-container'>
            
            <img src={images[0].url}></img>
            <h3>{name}</h3>
            <a href={external_urls.spotify} target='_blank'>
                Link here
            </a>
            <p>{description}</p>
            <p>Track Count: {tracks.total}</p>
            
        </div>
    )
}

export default Playlist