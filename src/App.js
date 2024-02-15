
import './App.css';

function App() {

  
  return (
  <>
    <Header></Header>
    <Main></Main>
  </>
  
  )
}

function Header() {


  return (
    <header class='Header'>
      <h1>DeadBeat</h1>
    </header>
  )

}

function Main() {
  const spotifyUrl = 'https://api.spotify.com/v1/artists/1r93D0anfnfL4M7tYTce0J?si=sO_8_Bx7SMiUVxfATMWnvg'
  const spotifyClientId = 'c8de28af3e044d1285807313a3fe4ae7'
  const spotifyClientSecret = 'e102979c591647628c7d44e56ebf698d'
  const artistProfile = document.querySelector('#artist-profile')

  const getArtistData = () => {
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

          artistProfile.innerHTML = `
            <h1>${data.name} </h1>
            <h2>Genres${data.genres.map((genre) => `|${genre}|`)}</h2>
            <img src=${data.images[0].url} class='artist-profile-previewimg'>
          
          `
          
        })
      })
  }

  getArtistData()

  return (
    <main class='Main'>
      <div id='artist-profile'>
      </div>
    </main>

  )
}

export default App;
