import Track from './Track'

function Playlist({name,tracks,description}) {



    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Track Count: {tracks.total}</p>
        </div>
    )
}

export default Playlist