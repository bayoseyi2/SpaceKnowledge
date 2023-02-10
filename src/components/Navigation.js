import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <nav>
        <div className="nav-wrapper">
            <ul className="left hide-on-med-and-down">
           <li> <Link className="navlink" to="/">Home</Link></li>
           <li> <Link className="navlink" to="/countries">Countries Info</Link></li>
           <li> <Link className="navlink" to="/countries/countryDetails">Country Details</Link></li>
           <li><Link className="navlink" to="/admin">Admin Dashboard</Link></li>
           <li> <Link className="navlink" to="/about">About</Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default Navigation

