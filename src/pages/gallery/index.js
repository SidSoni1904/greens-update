import React from 'react'
import './gallery.css'
import Layout from '../../components/Layout'
import { NavLink, Outlet } from 'react-router-dom'

export default function Gallery() {
  return (
    <>
      <Layout>
        <section className='Gallerysec'>
          <div className='gallerybBG'>
            <h2 className='galleryHeading'>Gallery</h2>
            <p className='galleryPera'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt</p>
            </p>
          </div>

          {/* sectiontwo start here */}

          <div className='galleryimagesSec'>
              <div className='container my-5'>
                <div className='gallerypages d-flex justify-content-around  flex-wrap'>
                  <NavLink to='all' className='imgpages'>ALL</NavLink>
                  <NavLink to='cafes' className='imgpages'>Cafe's</NavLink>
                  <NavLink to='cowork' className='imgpages'>Co-Working Space</NavLink>
                  <NavLink to='store' className='imgpages'>Store's</NavLink>
                </div>
                  <Outlet />
                  

              </div>
          </div>

        </section>
      </Layout>
    </>
  )
}
