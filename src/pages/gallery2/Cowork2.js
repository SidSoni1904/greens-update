import React from 'react'
import './All2.css'
import Img4 from '../../assets/images/Gallery/img4.png'
import Img5 from '../../assets/images/Gallery/img5.png'
import Img9 from '../../assets/images/Gallery/img9.png'
import { motion } from 'framer-motion'

export default function Cowork2() {
  
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
        stiffness: 50,
      }
    }
  }

  const animatetopimg = {
    hidden:{
      opacity:0,
      scale:0
    },
    visible:{
      opacity:1,
      scale:1,
      transition:{
        type:'spring',
        stiffness: 50,
      }
    }
  }

  return (
    <>
      <h1 className='text-center text-success py-4'>From Cowork page</h1>
      <motion.div className='container img_gallery'>
        
        <a href={Img4} data-lightbox="models" data-title="Caption4">
          <motion.img src={Img4} alt='Img4'
            variants={animatefirstimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        <a href={Img5} data-lightbox="models" data-title="Caption5">
          <motion.img src={Img5} alt='Img5'
            variants={animatetopimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        
        <a href={Img9} data-lightbox="models" data-title="Caption9">
          <motion.img src={Img9} alt='Img9'
            variants={animaterightimg}
            initial="hidden"
            animate="visible"
          />
        </a>
       
      </motion.div>

    </>
  )
}