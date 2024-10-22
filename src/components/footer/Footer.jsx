import { Link } from 'react-router-dom'
import '/css/Footer.css'
function Footer(){
    return(
        <footer>
            <div className="container">
                <p>Copyright © 2024 by <Link target='_blank' to={'https://qobiljonovichkamronbek@gmail.com'}>Kamronbek Olimov</Link> | All rights reserved</p>
            </div>
        </footer>
    )
}
export default Footer