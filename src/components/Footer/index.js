import React from 'react'
import './Footer.css'
import GSimage from '../../assets/images/GREENSTRAW-EMBLEM1.png'
import Mapicon from '../../assets/images/Icons/map-pin.png'
import Phone from '../../assets/images/Icons/Phone.png'
import Mail from '../../assets/images/Icons/Mail.png'
import Facebook from '../../assets/images/Icons/facebook.png'
import Twitter from '../../assets/images/Icons/twitter.png'
import Instagram from '../../assets/images/Icons/instagram.png'
import Linked from '../../assets/images/Icons/linkedin.png'
import G1 from '../../assets/images/gallery1.png'
import G2 from '../../assets/images/gallery2.png'
import  LightGallery  from 'lightgallery/react/Lightgallery.es5'

import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";


export default function Footer() {
    return (
        <>
            <div className='footerParent '>
                <div className=' px-5 py-2 row'>
                    <div className='child1 col-lg-4 my-3' data-aos="fade-right"
                        data-aos-duration="3000"
                    >
                        <div className='gsImages my-2'>
                            <img src={GSimage} className='Thegreenstarw ' />
                            <h1 className="navbar-brand gsHeading ml-2">THE GREENSTRAW</h1>
                        </div>
                        <p className='footerpara mx-2'>
                            The Greenstraw is an initiative to create a community of conscious and conscientious
                            individuals by curating low waste and interactive solutions to everyday things
                            to bring about a sustainable behavioral change.
                        </p>
                    </div>
                    <div className='child2 col-lg-3 my-3' data-aos="zoom-out">
                        <div className='footertwo'>
                            <p className='getintouch'>GET IN TOUCH</p>
                            <div className='Addressdiv'>
                                <img src={Mapicon} />
                                <p className='Address'>
                                    Plot No-216, T.P Scheme-1,
                                    Vastrapur, Ahmedabad 380054
                                </p>
                            </div>
                            <div className='Addressdiv'>
                                <img src={Phone} />
                                <p className='Address'>
                                    abcz@xyz.com
                                </p>
                            </div>
                            <div className='Addressdiv'>
                                <img src={Mail} alt='mail' className='mymail' />
                                <p className='Address phone'>
                                    +97-78686 79799
                                </p>
                            </div>
                            <div className='socialIcons d-flex justify-content-between flex-wrap'>
                                <img src={Facebook} alt='Facebook' className='fb' />
                                <img src={Twitter} alt='Twitter' />
                                <img src={Instagram} alt='Instagram' />
                                <img src={Linked} alt='Linked' />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 my-3 gtr_gallery' data-aos="fade-left"
                        data-aos-duration="3000"
                    >
                        <h1 className='text-white getintouch pb-2'>GALLERY</h1>
                        <div className='galleryFirst d-flex flex-wrap'>
                            <LightGallery
                                speed={500}
                                plugins={[lgThumbnail,lgShare,lgRotate,lgVideo,lgAutoplay,lgZoom]}
                            >
                            <a href={G1} data-title="Caption1">
                                <img src={G1} alt='Gallery1' className='Gallery1' />
                            </a>
                            <a href={G1} data-title="Caption1">
                                <img src={G1} alt='Gallery1' className='Gallery1' />
                            </a>
                            <a href={G2} data-title="Caption1">
                                <img src={G2} alt='Gallery1' className='Gallery1' />
                            </a>
                            <a href={G1} data-title="Caption1">
                                <img src={G1} alt='Gallery1' className='Gallery1' />
                            </a>
                            </LightGallery>
                        </div>
                        <div className='galleryFirst d-flex flex-wrap'>
                        <LightGallery
                                speed={500}
                                plugins={[lgThumbnail,lgShare,lgRotate,lgVideo,lgAutoplay,lgZoom]}
                        >
                            <a href={G2} data-title="Caption1">
                                <img src={G2} alt='Gallery1' className='Gallery1' />
                            </a>
                            <a href={G2} data-title="Caption1">
                                <img src={G2} alt='Gallery1' className='Gallery1' />
                            </a>
                            <a href={G1} data-title="Caption1">
                                <img src={G1} alt='Gallery1' className='Gallery1' />
                            </a>
                            <a href={G2} data-title="Caption1">
                                <img src={G2} alt='Gallery1' className='Gallery1' />
                            </a>
                            </LightGallery>       
                        </div>
                    </div>
                </div>
                <hr className='hrline mx-5'/>
                <div className='row'>
                    <h1 className='copyright col-12'
                    
                    >
                        © 2022 The Greenstraw.  All rights reserved.
                    </h1>
                </div>
            </div>
        </>
    )
}
