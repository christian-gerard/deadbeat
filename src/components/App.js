import Header from './Header.js'
import Main from './Main.js'
import '../App.css'
import React, {useState,useEffect} from 'react';


function App() {

  const spotifyClientId = 'c8de28af3e044d1285807313a3fe4ae7'
  const spotifyClientSecret = 'e102979c591647628c7d44e56ebf698d'
  const [accessToken, setAccessToken] = useState('');
  

  useEffect(() => {

    console.log(accessToken)


            fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                  "Content-type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                  'grant_type': 'client_credentials',
                  'client_id': spotifyClientId,
                  'client_secret': spotifyClientSecret,
                })
              }) 
              .then(resp => resp.json())
              .then(data => {

                setAccessToken(data.access_token)
              })


  },[])

  return (
  <>
    <Header accessToken={accessToken} />
    <Main accessToken={accessToken} />
  </>
  
  )
}





export default App;
