import React from 'react'
import './Gall.css'
import Img1 from '../../assets/images/Gallery/img1.png'
import Img2 from '../../assets/images/Gallery/img2.png'
import Img3 from '../../assets/images/Gallery/img3.png'
import Img4 from '../../assets/images/Gallery/img4.png'
import Img5 from '../../assets/images/Gallery/img5.png'
import Img6 from '../../assets/images/Gallery/img6.png'
import Img7 from '../../assets/images/Gallery/img7.png'
import Img8 from '../../assets/images/Gallery/img8.png'
import Img9 from '../../assets/images/Gallery/img9.png'
import Img10 from '../../assets/images/Gallery/img10.png'

export default function Gridall() {
    return (
        <div>
            <h1 className='text-center text-success my-3'> Grid All</h1>
            <div className='container allgallery'>
                <div className='grid_gallery'>
                    <div className='box'>
                        <img src={Img1} alt='Img1' className='box1' />
                    </div>
                    
                    
                    <div className='box'>

                        <img src={Img3} alt='Img1' className='box3' />
                    </div>
                    <div className='box'>

                        <img src={Img4} alt='Img1' className='box4' />
                    </div>
                    <div className='box'>

                        <img src={Img5} alt='Img1' className='box5' />
                    </div>
                    <div className='box'>
                        <img src={Img2} alt='Img1' className='box2'/>
                    </div>
                    <div className='box'>

                        <img src={Img7} alt='Img1' className='box7' />
                    </div>
                    <div className='box'>

                        <img src={Img6} alt='Img1' className='box6' />
                    </div>
                    <div className='box'>

                        <img src={Img8} alt='Img1' className='box8' />
                    </div>
                    <div className='box'>

                        <img src={Img9} alt='Img1' className='box9' />
                    </div>
                    <div className='box'>

                        <img src={Img10} alt='Img1' className='box10' />
                    </div>

                </div>
            </div>
        </div>
    )
}
