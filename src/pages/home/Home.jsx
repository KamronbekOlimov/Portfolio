import { Link } from 'react-router-dom'
import '/css/Home.css'
function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="home-info">
                    <h1>Hi, I am Kamronbek Olimov</h1>
                    <div className="text-anime">
                        <h3>Frontend web developer</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet soluta, sit enim quibusdam exercitationem odit esse, cum dolore doloribus voluptatum quia rem dolor. Debitis, blanditiis voluptatem.</p>
                    <div className="box-btn">
                        <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer">Read more</Link>
                        <Link to={'/contact'}>Let's talk</Link>
                    </div>
                    <div className="home-scl">
                        <Link to={'https://Github.com/KamronbekOlimov'}><i className="fa-brands fa-github"></i></Link>
                        <Link to={'https://Instagram.com/kamronbek_olimov'}><i className="fa-brands fa-instagram"></i></Link>
                        <Link to={'https://t.me/Olimov_dev'}><i className="fa-brands fa-telegram"></i></Link>
                        <Link to={'https://Threads.net/@kamronbek_olimov'}><i className="fa-brands fa-threads"></i></Link>
                    </div>
                </div>
                <img src="/frontend.png" alt="" />
            </div>
        </div>
    )
}
export default Home