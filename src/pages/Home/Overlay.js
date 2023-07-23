import React,{useEffect} from 'react'
import './overlay.css'



export default function Overlay() {

    // useEffect(() => {
    //     Aos.init({ duration: 1500,easing:'ease-in-out',once:true,mirror:true })
    // }, [])

    return (
        <>
            <div className='placeBG'>
                <div className='palceinfo'>
                    <span className='placehead'
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >The Sustainable Development Goals by  United Nations are a call for action by all countries – poor, rich and middle-income – to promote prosperity while protecting the planet. 
                    At  Greenstraw, we pledge to take our commitment to these goals with all sincerity and actionable steps.</span>
                </div>
            </div>
        </>
    )
}
