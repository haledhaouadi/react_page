import React from 'react'
import './Section1.css'
import image1 from './image1.png'

export const Section1 = () => {
  return (
    <section className="section1-container">
          <img src={image1} alt=""  className='image-container'/>
        <div className='text-container'>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, vero.</p>
         <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet maiores blanditiis soluta quia, incidunt a. Qui corporis, repellat natus assumenda quia sit accusamus harum asperiores voluptas dolorum, facere ipsum.</h2>
         <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequatur mollitia voluptatum facilis animi, at alias, dicta placeat recusandae, neque culpa nobis qui praesentium voluptate enim! Accusantium facere earum assumenda. Exercitationem aspernatur optio necessitatibus consectetur eius, quaerat dolorum quasi aperiam incidunt quo delectus maxime consequatur voluptatum, illum, quia iusto suscipit?</h5>
        </div>
      
    </section>
  )
}

