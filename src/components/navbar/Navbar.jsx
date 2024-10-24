import '/css/Navbar.css'
import { Link, NavLink } from "react-router-dom"
function Navbar({menu, setMenu}) {
    return (
        <nav>
            <div className={menu?'menu active':'menu'}>
                <button className='menu-btn' onClick={()=>setMenu(!menu)}><i className="fa-solid fa-xmark"></i></button>
                <ul className="link">
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
                </ul>
            </div>
            <div className="container">
                <Link to={'/'}><img src="/logo.webp" loading='lazy' alt="logo" /></Link>
                <div className="nav-link">
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
                    </ul>
                    <button className='my-contact' onClick={() => window.location.href = `tel:+998911446004`}>Contact me</button>
                    <button onClick={()=>setMenu(!menu)} className='menu-bar'><i className="fa-solid fa-bars-staggered"></i></button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar