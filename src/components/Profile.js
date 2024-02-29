import React, { useState, useContext } from 'react'
import { useOutletContext } from 'react-router-dom'
import Header from './Header'
import Login from './Login'


// import { useState,useEffect } from 'react'

function Profile() {
  const { userData, userLogoutHandler } = useOutletContext()

    console.log(userData)

    return (
      <>
        <div className='container'>
          <h1>{userData.id}</h1>
          <h3>{userData.display_name}</h3>

          <img src={userData.images[1].url} id='profile-pic'></img>

          <button >Log Out</button>

        </div>
          


      </>
    )
}

export default Profile