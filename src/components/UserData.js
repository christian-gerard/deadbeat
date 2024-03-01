

function UserData({display_name,external_urls,href,id,images,type,uri,followers}) {



    return (
    <div className='container'>
         <h1>{display_name}</h1>
        <h3>{id}</h3>
    </div>

    )
}

export default UserData