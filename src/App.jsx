import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../css/App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import { useState } from 'react'
import Footer from './components/footer/Footer'
function App() {
  const [message, setMessage] = useState(JSON.parse(localStorage.getItem('message'))??[])
  return (
    <div className='body'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact message={message} setMessage={setMessage}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}
export default App