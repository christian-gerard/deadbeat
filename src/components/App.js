import React,{useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import Header from './Header'
import Login from './Login'



function Main() {
  const [userData, setUserData] = useState([])

    useEffect(() => {



    }, [])
      
    const userLoginHandler = (data) => {
      setUserData(data)
  
    }

    const userLogoutHandler = () => {
      setUserData([])
    }
  

    return (

        <>
        <Header {...userData} />
        <div className='main-container'>

          { userData.length === 0 ? <Login userLoginHandler={userLoginHandler}/> : 

          <Outlet context={{userData, userLoginHandler, userLogoutHandler}} />

          }
          

        </div>
 
        </>
        
  )
}

export default Main
