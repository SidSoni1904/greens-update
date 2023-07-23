import React from 'react'
import './gallery2.css'
import Layout from '../../components/Layout'
import { NavLink, Outlet } from 'react-router-dom'

export default function Gallery2() {
  return (
    <>
      <section className='Gallerysec'>
        <div className='gallerybBG'>
          <h2 className='galleryHeading' data-aos="fade-right">Gallery</h2>
          <p className='galleryPera' data-aos="fade-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt</p>
          </p>
        </div>

        {/* sectiontwo start here */}

        <div className='galleryimagesSec'>
          <div className='container my-5'>
            <div className='gallerypages d-flex justify-content-around flex-wrap'>
              <NavLink to='all2' className='imgpages mr-3' id='all'>ALL</NavLink>
              <NavLink to='cafes2' className='imgpages mr-3' id='cafes'>Cafe's</NavLink>
              <NavLink to='cowork2' className='imgpages mr-3' id='coworking'>Co-Working Space</NavLink>
              <NavLink to='store2' className='imgpages' id='store'>Store's</NavLink>
            </div>
            <Outlet />


          </div>
        </div>

      </section>
    </>
  )
}
