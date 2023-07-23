import React from 'react'
import './All.css'
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
import { motion  } from 'framer-motion'

export default function  Cafes() {
  
  const animatefirstimg = {
    hidden:{
      opacity:0,
      x: '-100vw'
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:'spring',
        stiffness: 100,
        duration: 0.5
      }
    }
  }

  const animatemenimg = {
    hidden:{
      opacity:0,
      x: '-100vw'
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:'spring',
        stiffness: 100,
        duration: 0.5
      }
    }
  }

  const animaterightimg = {
    hidden:{
      opacity:0,
      x: '100vw'
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:'spring',
        stiffness: 100,
        duration: 0.5
      }
    }
  }
  
  const animatezoomimg = {
    hidden:{
      opacity:0,
      scale: 0.5
    },
    visible:{
      opacity:1,
      scale:1,
      transition:{
        delay: 1
      }
    }
  }

return (
  <>
    <h1 className='text-center text-success py-4'>From All page</h1>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='col'>
                <div className='row-lg-6 no-gutters'>
                  <a href={Img1} data-lightbox="models" data-title="Caption1" className="myimg">
                  <motion.img src={Img1} alt='Img1' className='img1'
                    variants={animatefirstimg}
                    initial="hidden"
                    animate="visible"
                  />
                  </a>
                </div>
                <div className='row-lg-6'>
                <a href={Img2} data-lightbox="models" data-title="Caption2" className="myimg">
                  <motion.img src={Img2} alt='Img2' className='second_divImges'
                    variants={animatemenimg}
                    initial="hidden"
                    animate="visible"
                  />
                 </a> 
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
            <a href={Img3} data-lightbox="models" data-title="Caption3" className="myimg">
              <motion.img src={Img3} alt='Img3' className='second_divImges'
                variants={animatezoomimg}
                initial="hidden"
                animate="visible"
              />
             </a> 
            </div>
          </div>
          <div>
          <a href={Img7} data-lightbox="models" data-title="Caption7" className="myimg">
            <motion.img src={Img7} alt='Img7' className='second_divImges'
            variants={animatemenimg}
            initial="hidden"
            animate="visible"
            />
          </a>  
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-lg-6 pl-0'>
              <div className='col-lg-6 pl-3'>
              <a href={Img4} data-lightbox="models" data-title="Caption4" className="myimg">
                <motion.img src={Img4} alt='Img4' className='second_divImges4'
                  variants={animatezoomimg}
                  initial="hidden"
                  animate="visible"      
                />
              </a>  
              </div>
            </div>
            <div className='col-lg-6'>
            <a href={Img5} data-lightbox="models" data-title="Caption5" className="myimg">
              <motion.img src={Img5} alt='Img5' className='second_divImges'
                variants={animaterightimg}
                initial="hidden"
                animate="visible"
              />
            </a>  
            </div>
          </div>
          <div>
          <a href={Img6} data-lightbox="models" data-title="Caption6" className="myimg">
            <motion.img src={Img6} alt='Img6' className='second_divImges'
            variants={animaterightimg}
            initial="hidden"
            animate="visible"
            />
          </a>  
          </div>
        </div>
      </div>
      {/* second div images */}
      <div className='second_div row py-5'>
        <div className='second_divImges col-lg-3'>
        <a href={Img8} data-lightbox="models" data-title="Caption8" className="myimg">
          <motion.img src={Img8} alt='Img8' className='second_divImges'
          variants={animatemenimg}
          initial="hidden"
          animate="visible"
          />
        </a>  
        </div>
        <div className='col-lg-6'>
        <a href={Img9} data-lightbox="models" data-title="Caption9" className="myimg">  
          <motion.img src={Img9} alt='Img9' className='second_divImges'
            variants={animatezoomimg}
            initial="hidden"
            animate="visible"
          />
          </a>  
        </div>
        <div className='col-lg-3'>
        <a href={Img10} data-lightbox="models" data-title="Caption10" className="myimg">  
          <motion.img src={Img10} alt='Img10' className='second_divImges'
            variants={animaterightimg}
            initial="hidden"
            animate="visible"
          />
        </a>  
        </div>
      </div>
    </div>

  </>
)
}


