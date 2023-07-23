import React from 'react'
import '../Home/overlay.css'



export default function Overlay2() {
    return (
        <>
            <div className='placeBG'>
                <div className='container palceinfo'>
                    <h1 className='pt-5 placehead'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    >Do the best you can until you know better. Then when you know better, do better.</h1>
                    <p className='pb-5 placeauthorname'
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    >~ Maya Angelou</p>
                </div>
            </div>
        </>
    )
}
