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
          <h3>Followers: {userData.followers.total}</h3>



          <button >Log Out</button>

        </div>
          


      </>
    )
}

export default Profile