



function Login() {




    return (
        <>

        <div className='container center'>
            <form >
                <h1>Login to Spotify</h1>
                <span>username</span>
                <input type='text' placeholder='username'></input>
                <span>password</span>
                <input type='text' placeholder='password'></input>
                <button className='button'>Login</button>
            </form>
        </div>
        
        
        </>
    )
}

export default Login