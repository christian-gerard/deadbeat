
function SearchResult({name,images,external_urls, href}) {


    return (
        <div className='search-container'>
            {images[0] ? 
            <img src={images[0].url} ></img>
            : 
            <span> 💀 </span> }
            
            <span>{name}</span>
            
        </div>
    )
}

export default SearchResult