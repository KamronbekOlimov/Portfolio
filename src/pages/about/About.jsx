import { Link } from 'react-router-dom'
import '/css/About.css'
function About(){
    return (
        <div className="about">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-details">
                    <img src="/frontend.png" alt="" />
                    <div className="about-info">
                        <h3>Frontend web developer</h3>
                        <p>I want to my skills in a real project and develop with professionals.</p>
                        <p>May 16, 2004</p>
                        <Link target='_blank' to={'https://maps.app.goo.gl/oJbuCgukp4qCHKT69'}>Uzbekistan, Fergana</Link>
                        <p>Uzbek, English (basic)</p>
                        <Link target='_blank' to={'https://kamronbekqobiljonovich@gmail.com'}>Email address</Link>
                        <Link className='goto-resume' target="_blank" onClick={()=>window.location.href='/resume.pdf'}>Go to resume</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About