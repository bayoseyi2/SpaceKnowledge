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
                <span>UserName/Email<input type="text" ref={userRef}></input></span><br/>
                <span>Password<input type="text" ref={pwdRef}></input></span><br/>
                <button className="wbtn-floating btn-small waves-effect waves-light blue" onClick={onAttemptLogin}>Login</button>
            </form>
            
        </div>
    )
}


export default Login