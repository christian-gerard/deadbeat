import React,{useState} from 'react'
import Header from './Header'
import Login from './Login'
import UserData from './UserData'
// import { useState,useEffect } from 'react'

function Profile() {

  const [userData, setUserData] = useState([])

  const userLoginHandler = (data) => {
    setUserData(data)

  }

    return (
      <>
      <Header />
      <div className='main-container'>

        {!userData ? <UserData {...userData} /> : <Login userLoginHandler={userLoginHandler} />}


      
      </div>
      
      </>
    )
}

export default Profile