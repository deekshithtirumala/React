import React from 'react'
import './About.css'
import Profile from '../../assets/pic.jpeg'
const About = () => {
  return (
    <div className='about-div'>
      <h1>Sheik Jameer Basha</h1>
      <h3>Web <span>Designer</span> </h3>
      <div className='info-div'>
          <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-File.png" alt="profile" className='about-img' />

        <div className='info'>
            <div className=' card '>
              <div className="info-p">
                  <p> I am Jameer Basha. Currently Pursuing 3rd Btech in Vishnu Institute of Technology Bhimavaram
                Self-motivated team player with two years of experience seeking a position as a lead web developer
                with Next Generation Web Development where I can apply my advanced knowledge of web design 
                with my leadership abilities to meet client needs and exceed their expectations.
                I was a versatile web designer due to his extensive history in graphic and web design.
                My dedication to continuously learning about new web design trends and concepts has made
                me a valuable member of the team. 
                </p>
              </div>
            </div>
        </div>
      </div>
      <div className="contact card">
        <div className="contact-head">
          <h2>Contact Details</h2>
        </div>
        <div className="contact-main">
          <div className="contact-links">
            <a href="#"><i className="fa fa-phone"></i> &nbsp; Phone</a>
          </div>
          <div className="contact-links">
            <a href="https://www.gmail.com"><i className="fa-solid fa-envelope"></i> &nbsp;Email</a>
          </div>
          <div className="contact-links">
            <a href="https://github.com/Jameer-Basha"><i className="fa-brands fa-github"></i>&nbsp; Github</a>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/jameer-basha-sheik-159122251"><i className="fa-brands fa-linkedin"></i> &nbsp; Linkedin</a>
          </div>

        </div>
      </div>
      <br />
    </div>

  )
}

export default About
