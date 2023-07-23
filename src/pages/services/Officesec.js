import React from 'react'
import './officesec.css'
import office1 from '../../assets/images/servicePage/office1.png'
import office2 from '../../assets/images/servicePage/office2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



export default function Officesec() {
    return (
        <>

            <div className='divsec'>
                <h4 className='my-5 offering'>
                <p>What We’re Offering to Our Clients</p>
                </h4>
                <p className='serviceHeading' data-aos="zoom-in">The Greenstraw Spaces</p>
            </div>
            <div>
                <div className='officediv mt-5 row'>
                    <div className='col-lg-6  officediv2'>
                        <img src={office1} className='officeimg img-thumbnail' data-aos="zoom-in" />
                        <div className='officeinfo1 d-flex justify-content-center img-thumbnail'
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >
                            <div className='infotext '>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </div>
                            <button className='officepage'>

                                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#90be3c" }} className='righticon' />

                            </button>
                        </div>
                    </div>
                    <div className='col-lg-6  officediv2'>
                        <img src={office2} className='officeimg img-thumbnail' data-aos="zoom-in" />
                        <div className='officeinfo1 d-flex justify-content-center img-thumbnail'
                            data-aos="fade-left"
                            data-aos-duration="3000"
                        >
                            <div className='infotext '>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </div>
                            <button className='officepage'>

                                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#90be3c" }} className='righticon' />

                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}
