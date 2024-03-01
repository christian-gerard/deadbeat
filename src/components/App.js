import React,{useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import Header from './Header'
import Login from './Login'



function Main() {
  const [authParams, setAuthParams] = useState({})
  const [userData, setUserData] = useState([])
      
    const userLoginHandler = (data) => {
      setUserData(data)
  
    }

    const userLogoutHandler = () => {
      setUserData([])
    }

    const authParamsHandler = (auth) => {

      setAuthParams(auth)
    }
  

    return (

        <>
        <Header {...userData} />
        <div className='main-container'>

          { userData.length === 0 ? <Login userLoginHandler={userLoginHandler} authParamsHandler={authParamsHandler}/> : 

          <Outlet context={{userData, userLoginHandler, userLogoutHandler, authParams}} />

          }
          

        </div>
 
        </>
        
  )
}

export default Main
