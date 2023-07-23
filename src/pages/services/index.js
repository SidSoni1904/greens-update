import React from 'react'
import './services.css'
import Men from '../../assets/images/servicePage/men.png'
import chair from '../../assets/images/servicePage/chair.png'
import Officesec from './Officesec'




export default function Services() {
  return (
    <>
      <section className='Secrvicesection'>
        <div className='services'>
          <h2 className='serviceHeading'>The Greenstraw Spaces</h2>
          <p className='servicePera'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt</p>
          </p>
        </div>
        {/* section2 start here */}
        <Officesec />
        {/* section3 start here */}

        <div className='sectionthree py-5'>
          <div className='container'>
            <div className='row sec3row_1'>
              <div className='col-lg-6'>
                <p className='p-xl-4 my-md-3 servicepara mx-1'>
                  We are a conscious low waste space where we try to our best to make sure we consume everything in the most sustainable way with the aim to make sure everything goes back to Mother Earth to give back more than we took...
                  <p>We recycle, up cycle, compost, reduce everything here and in our lives. Everything you see around you has been thoughtfully curated to create a first of its kind green space in the city!</p>
                </p>
              </div>
              <div className='col-lg-6'>
                <img src={Men} alt='Men' className='menimg img-thumbnail' />
              </div>
            </div>
            {/*  second pic start here */}
            <div className='row'>
              <div className='col-lg-6'>
                <img src={chair} alt='Men' className='menimg img-thumbnail' />
              </div>
              <div className='col-lg-6 mypara'>
                <p className='p-xl-3 my-md-1 servicepara'>
                  We wouldn't want to bind the place with a definition because the place may have a different meaning to each one of you
                  that has been coming here or will be coming here for reasons one different than the other.
                  You may see it as a co-working space, a café, an eco-friendly store, or, like us a space to expand and build
                  the community of conscious and conscientious humans that try their best to do more everyday, do something new,
                  to create a world that is better for all of us
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* section4 start here */}

        <div className='Bestservices'>
          <div className='bestserviceinfo container'>
            <div className='row'>
              <div className='col-lg-8 looking'>
                <p className='growbnPera'>We’re here to help to grow your business.</p>
                <h1 className='bestsvhead'>Looking for the Best Services?</h1>
              </div>
              <div className='col-lg-4 BS'>
                <button className='contactusbtn'>CONTACT US</button>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}
