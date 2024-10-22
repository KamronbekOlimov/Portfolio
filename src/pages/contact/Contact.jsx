import { useState } from 'react'
import '/css/Contact.css'
function Contact({ message, setMessage }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')
    return (
        <div className='contact'>
            <div className="container">
                <h2>Contact Me</h2>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const obj = {
                        name,
                        email,
                        phone,
                        subject,
                        text
                    }
                    setMessage(localStorage.setItem('message', JSON.stringify(obj)))
                    setName('')
                    setEmail('')
                    setPhone('')
                    setSubject('')
                    setText('')
                }} action="">
                    <div className="input-field">
                        <input onInput={(e) => setName(e.target.value)} value={name} required type="text" placeholder='Full name' />
                        <input onInput={(e) => setEmail(e.target.value)} value={email} required type="email" placeholder='Email address' />
                    </div>
                    <div className="input-field">
                        <input onInput={(e) => setPhone(e.target.value)} value={phone} required type="number" placeholder='Phone number' />
                        <input onInput={(e) => setSubject(e.target.value)} value={subject} required type="text" placeholder='Subject' />
                    </div>
                    <textarea onInput={(e) => setText(e.target.value)} value={text} required placeholder='Your message' name="" id=""></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact