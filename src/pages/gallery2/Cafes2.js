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

export default function Cafes2() {

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
      y: '100vw'
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        type:'spring',
        stiffness: 50,
      }
    }
  }

  const animatebottonimg = {
    hidden:{
      opacity:0,
      y: '100vw'
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        type:'spring',
        stiffness: 50,
      }
    }
  }

  const animatediv = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        duration: 0.5
      }
    }
  }

  return (
    <>
      <h1 className='text-center text-success py-4'>From Cafes page</h1>
      <motion.div className='container img_gallery'
        // layout
        // initial={{opacity: 0}}
        // animate={{opacity: 1}}
        // exit={{opacity: 0}}
        // transition={{duration: 0.5}}
      >

        <a href={Img1} data-lightbox="models" data-title="Caption1">
          <motion.img src={Img1} alt='Img1'  
            variants={animatefirstimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        
        <a href={Img3} data-lightbox="models" data-title="Caption3">
          <motion.img src={Img3} alt='Img3'
            variants={animatetopimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        
        <a href={Img6} data-lightbox="models" data-title="Caption6">
          <motion.img src={Img6} alt='Img6'
            variants={animatebottonimg}
            initial="hidden"
            animate="visible"
          />
        </a>
      
        <a href={Img10} data-lightbox="models" data-title="Caption10">
          <motion.img src={Img10} alt='Img10'
            variants={animaterightimg}
            initial="hidden"
            animate="visible"
          />
        </a>
      </motion.div>

    </>
  )
}