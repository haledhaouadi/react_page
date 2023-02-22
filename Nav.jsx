import React from 'react'
import './Nav.css'

export const Nav = () => {
  return (
    <nav classname='nav-element'>
       <h1 className='text'>Pixelmatters </h1>
       <div className='container'>
       <a href="#">Work</a>
       <a href="">Approach</a>
       <a href="">Culture</a>
       <a href="">Careers</a>
       <a href="#blog">Blog</a>
       <a href=""><button >Get In touch</button></a>
      </div>
      
    </nav>
  )
}

