import React from 'react'
import './services.css'
import Image2 from '../../assets/service-2.svg';
import Image1 from '../../assets/service-1.svg';
import Image3 from '../../assets/bug.svg';

const Services = () => {
  const data = [
    { id: 1, image: Image1, title: 'Web Development', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste possimus animi officiis fugit deserunt." },
    { id: 2, image: Image2, title: 'Web Design', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste possimus animi officiis fugit deserunt." },
    { id: 3, image: Image3, title: 'Web Bug Fixing', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste possimus animi officiis fugit deserunt." },
  ]
  return (
    <section className="services container section" id='services'>
      <h2 className="section_title">Services</h2>
      <div className="services_container grid">
        {data.map(({id,image,title,description}) => {
          return(
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" style={{width: '91px', height: '79px'}}/>
              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services