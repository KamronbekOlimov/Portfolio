import '/css/Contact.css'
function Contact(){
    return(
        <div className='contact'>
            <div className="container">
                <h2>Contact Me</h2>
                <form action="">
                    <div className="input-field">
                        <input required type="text" placeholder='Full name'/>
                        <input required type="email" placeholder='Email address'/>
                    </div>
                    <div className="input-field">
                        <input required type="number" placeholder='Phone number'/>
                        <input required type="text" placeholder='Subject'/>
                    </div>
                    <textarea required placeholder='Your message' name="" id=""></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact