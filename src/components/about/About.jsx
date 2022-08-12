import React from 'react'
import './about.css'
import AboutImage from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'
import CV from '../../assets/cv.pdf'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={AboutImage} alt="" className="about_img" />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">I am Naimul Islam, full-stack web developer from Dhaka, Bangladesh. I am good at building professional websites and I love coffee.</p>
            <a href={CV} className="btn" download>Download CV</a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Back-End Development</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage backend_development"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Front-End Development</h3>
                <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage front_development"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Dev-Ops</h3>
                <span className="skills_number">50%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage dev_ops"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About