import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './Pages/gallery/Gallery.jsx'
import './index.css'
import App from './App.jsx'
import Coursess from './Pages/Courses/Courses.jsx'
import About from './components/About/About.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './Pages/Login/Login.jsx'
import LoginCom from './Pages/Login/LoginCom.jsx'
import ApplicationForm from './Pages/Apply/Apply.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Courses" element={<Coursess />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Testimonials" element={<Testimonials />}/>
          <Route path="/Contact" element={<Contact />}/>

          <Route path="/Login"element={<Login/>}/>
          <Route path="/Employee"element={<LoginCom/>}/> 
          <Route path="/update"element={<LoginCom/>}/>
          <Route path="/Apply"element={<ApplicationForm/>}/>



        </Routes>

      </>
    </Router>

  </StrictMode>,
)
