import '/css/Navbar.css'
import { Link, NavLink } from "react-router-dom"
function Navbar() {
    return(
        <nav>
            <div className="container">
                <Link to={'/'}><img src="/logo.png" alt="logo" /></Link>
                <ul className="links">
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/services'}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/projects'}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </li>
                    <button onClick={()=>window.location.href=`tel:+998911446004`}>Contact me</button>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar