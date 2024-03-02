import {useState,useEffect} from 'react'
import { useOutletContext } from 'react-router-dom'





const spotifyClientId = 'c8de28af3e044d1285807313a3fe4ae7'
const spotifyClientSecret = 'e102979c591647628c7d44e56ebf698d'


const authUrl = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:3000/"

const scopes = ['streaming', 'app-remote-control', 'user-read-email', 'user-read-private']
const scopesUrlVar = scopes.join('%20')



const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);

    const paramsInUrl = stringAfterHashtag.split('&');

    const paramsSplitUp = paramsInUrl.reduce((accumulater,currentValue) => {
        const [key,value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater
    }, {});

    return paramsSplitUp
}

function Login({userLoginHandler, authParamsHandler}) {

        
 

    const handleLogin = (e) => {
        e.preventDefault()
        window.location = `${authUrl}?client_id=${spotifyClientId}&redirect_uri=${redirectUri}&scope=${scopesUrlVar}&response_type=token&show_dialog=true`
    }


    useEffect(() => {

        if(window.location.hash) {
            const userAuthParams = getReturnedParamsFromSpotifyAuth(window.location.hash)
            console.log(userAuthParams)
            authParamsHandler(userAuthParams)
            fetch('https://api.spotify.com/v1/me', {
                method: 'GET',
                headers:{
                    'Authorization' : 'Bearer ' + userAuthParams.access_token
                }
            })
            .then(resp => resp.json())
            .then(data => userLoginHandler(data))
        }
        
        console.log('userdata reset')
        

    },[])
 

    return (
        <>


        
        <div className='container center'>
            <form onSubmit={handleLogin}>
                <h1>Access Spotify 🎧🕸 </h1>
                <button className='button' >Login 🩸</button>
            </form>
        </div>
        
        
        </>
    )
}

export default Login