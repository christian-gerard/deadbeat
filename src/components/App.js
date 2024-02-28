import Header from './Header.js'
import Main from './Main.js'
import '../App.css'
import React, {useState,useEffect} from 'react';


function App() {

    const [userData, setUserData] = useState([])

  return (
  <>
    <Header userData={userData}/>
    <Main  />
  </>
  
  )
}





export default App;
