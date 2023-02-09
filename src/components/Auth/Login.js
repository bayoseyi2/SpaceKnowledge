import {useAuth} from './AuthProvider'
import {useRef} from 'react'

function Login()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();

    function onAttemptLogin(e)
    {
        e.preventDefault();
        authContext.signin(userRef.current.value,pwdRef.current.value)
    }

    return(
        <div className="loginform">
            <h3>Login</h3>
            <form>
                <input type="text" ref={userRef}></input><br/>
                <input type="text" ref={pwdRef}></input><br/>
                <button onClick={onAttemptLogin}>Login</button>
            </form>
        </div>
    )
}


export default Login