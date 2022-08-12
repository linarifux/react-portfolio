import React from 'react'
import './testimonials.css'

import Image1 from '../../assets/avatar-1.svg'
import Image2 from '../../assets/avatar-3.svg'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {

  const data = [
    {
      id: 1,
      image: Image1,
      title: 'John Doe',
      subtitle: 'Product designer at Dribble',
      comment: 'I enjoyed working with Naimul and learned so much. He makes the process fun and interesting. Good luck! 👍'
    },
    {
      id: 12,
      image: Image2,
      title: 'Steve Smith',
      subtitle: 'Project Manager at NewsCrede',
      comment: 'I enjoyed working with Naimul and learned so much. He makes the process fun and interesting. Good luck! 👍'
    },
  ]
  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section_title">Clients & Reviews</h2>
      <Swiper className="testimonials_container grid"
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{clickable: true}}
      >
        {data.map(({id,image,title,subtitle,comment}) => {
          return(
            <SwiperSlide className="testimonials_item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials_title">{title}</h3>
              <div className="subtitle">{subtitle}</div>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials