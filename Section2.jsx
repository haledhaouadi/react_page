import React from 'react'
import './Section2.css'
import image from './image.png'
import image2 from './image2.png'
export const Section2 = () => {
  return (
    <section className='section2-container'>
      <div className='image1-container'>
          <img src={image} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, placeat.</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iusto nisi corrupti fugit voluptatibus nesciunt quasi ut. Ratione, et velit.</h3>
      </div>
      <div className='image2-container'>
           <img src={image2} alt="" />
           <p>Lorem ipsum dolor sit amet.</p>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, placeat.</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iusto nisi corrupti fugit voluptatibus nesciunt quasi ut. Ratione, et velit.</h3>
      </div>
      

    </section>
  )
}

