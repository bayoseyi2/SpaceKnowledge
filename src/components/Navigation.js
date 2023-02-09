import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <div className="navbar">

            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/countries">Countries Info</Link>
            <Link className="navlink" to="/admin">Admin Dashboard</Link>
            <Link className="navlink" to="/about">About</Link>
        </div>
    )
}

export default Navigation