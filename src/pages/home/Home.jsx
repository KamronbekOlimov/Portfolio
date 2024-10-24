import { Link, NavLink } from 'react-router-dom'
import '/css/Home.css'
function Home() {
    return (
        <div id='home' className="home">
            <div className="container">
                <div className="home-info">
                    <h1>Hi, I am Kamronbek Olimov</h1>
                    <div className="text-anime">
                        <h3>Frontend web developer</h3>
                    </div>
                    <p>With experience in JavaScript, React, and CSS frameworks, I create dynamic and user-friendly interfaces. I am passionate about coding and constantly improving my skills. Let's work together to bring your ideas to life!</p>
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
                <img loading='lazy' src="/frontend.webp" alt="" />
            </div>
        </div>
    )
}
export default Home