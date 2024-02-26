import React from 'react'
import Header from './Header'
import Login from './Login'
// import { useState,useEffect } from 'react'

function Profile({accessToken}) {


    // const profileUrl = 'https://api.spotify.com/v1/users/christiangerard793'
    
    
    // const [userInfo, setUserInfo] = useState({})
    // //DOM ELEMENTS



    // useEffect(() => {
        
    //     console.log(accessToken)


    //           fetch(profileUrl, {
    //             headers: {'Authorization': `Bearer ${accessToken}`}
    //           })
    //           // .then(resp => resp.json())
    //           // .then(data => {

    //           //   setUserInfo({
    //           //       "name": data.display_name,
    //           //       "profileName": data.id,
    //           //       // "profilePic": data.images[1].url,
    //           //       "followers": data.followers
    //           //   })
    //           //   .catch(err => console.log(err))
    //           // })
            



    // }, [])


    return (
      <>
      <Header />
      <div className='main-container'>
      <Login />
      
      </div>
      
      </>
    )
}

export default Profile