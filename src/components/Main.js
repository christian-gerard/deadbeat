import {useState, useEffect} from 'react'
import '../App.css'
import MixtapeInbox from './MixtapeInbox'
import FriendsFeed from './FriendsFeed.js'

function Main() {
    //VARIABLES
    const spotifyUrl = 'https://api.spotify.com/v1/m'
    const spotifyClientId = 'c8de28af3e044d1285807313a3fe4ae7'
    const spotifyClientSecret = 'e102979c591647628c7d44e56ebf698d'
    //DOM ELEMENTS
    const artistProfile = document.querySelector('#artist-profile')

    //SELECTORS
  //
    //EVENT LISTENERS
  
    useEffect(() => {

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
          fetch(spotifyUrl, {
            headers: {
              'Authorization' : `Bearer ${data.access_token}`
            }
          })
          .then(resp => resp.json())
          .then(data => {
  
                console.log(data)
         
            
          })
          .catch(err => console.log(err))
        })



    }, [])
      
    
  

  
    return (
      <main id='app-main'>
        
        <MixtapeInbox />
        
        <FriendsFeed />
        
       
  
      </main>
  
    )
}

  export default Main