import { useOutletContext } from 'react-router-dom'
function CdBurner() {
    const { burnedcds } = useOutletContext()
    const rendercds = burnedcds ? 
    burnedcds.map((cd) => <h1>Song: {cd.name} Artist: {cd.artist} </h1>): <h1>NO CDS</h1>

    // const [authParams, setAuthParams] = useState({})
    // const [userData, setUserData] = useState([])
    // const [nowPlaying, setNowPlaying] = useState()
        
    //   const userLoginHandler = (data) => {
    //     setUserData(data)
    
    //   }
  
    //   const userLogoutHandler = () => {
    //     setUserData([])
    //   }
  
    //   const authParamsHandler = (auth) => {
  
    //     setAuthParams(auth)
    //   }
  
      
    return (
        <div classname='container'>
            <h1>CD BURNER</h1>
            {rendercds}
        </div>
    )
}

export default CdBurner