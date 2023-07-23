import React from 'react'
import './All2.css'
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
import { motion } from 'framer-motion'

export default function Store2() {

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
        stiffness: 50,
      }
    }
  }


  const animatelastimg = {
    hidden:{
      opacity:0,
      x: '100vw'
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:'spring',
        stiffness: 50,
      }
    }
  }

  const animatezoomimg = {
    hidden:{
      opacity:0,
      scale: 0
    },
    visible:{
      opacity:1,
      scale: 1,
      transition:{
        type:'spring',
        stiffness: 50,
      }
    }
  }

  return (
    <>
      <h1 className='text-center text-success py-4'>From Store page</h1>
      <motion.div className='container img_gallery'>
        
        <a href={Img2} data-lightbox="models" data-title="Caption2">
          <motion.img src={Img2} alt='Img2'
            variants={animatefirstimg}
            initial="hidden"
            animate="visible"
          />
        </a>
       
        <a href={Img7} data-lightbox="models" data-title="Caption7">
          <motion.img src={Img7} alt='Img7'
            variants={animatezoomimg}
            initial="hidden"
            animate="visible"
          />
        </a>
       
        
        <a href={Img8} data-lightbox="models" data-title="Caption8">
          <motion.img src={Img8} alt='Img8'
            variants={animatelastimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        
      </motion.div>

    </>
  )
}