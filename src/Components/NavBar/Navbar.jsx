import React from 'react'
import { BrowserRouter as Router , Routes , Route ,  NavLink } from 'react-router-dom'
import Projects from '../../Pages/Projects/Projects'
import About from '../../Pages/About/About'
import Academic from '../../Pages/Academic/Academic'
import Certification from '../../Pages/Certification/Certification'
import Skills from '../../Pages/Skills/Skills.jsx'
import './Navbar.css'
const Navbar = () => {
    
  return (
        <Router>

                <div className='navbar-div '>
                    <div className='nav-main'>
                        <NavLink to='/' className='nav-links' activeClassName='active'> About </NavLink>
                    </div>
                    <div className='nav-main'>
                        <NavLink to='/Academic' className='nav-links' activeClassName='active'> Academic </NavLink>
                    </div>
                    <div className='nav-main'>
                        <NavLink to='/Projects' className='nav-links' activeClassName='active' > Projects </NavLink>
                    </div>
                    
                    <div className='nav-main'>
                        <NavLink to='/Skills' className='nav-links' activeClassName='active'> Skills </NavLink>
                    </div>
                    <div className='nav-main'>
                        <NavLink to='/Certification' className='nav-links' activeClassName='active'> Certifications </NavLink>
                    </div>
                </div>
                 <Routes>
                    <Route exact path='/' element={<About />}/>
                    <Route exact path='/Academic' element={<Academic />}/>
                    <Route exact path='/Certification' element={<Certification />}/>
                    <Route exact path='/Projects' element={<Projects />}/>
                    <Route exact path='/Skills' element={<Skills />}/>
                </Routes>
        </Router>
        

      
  )
}

export default Navbar
