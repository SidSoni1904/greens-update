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
import { motion , AnimatePresence} from 'framer-motion'

export default function All2() {

  const animatefirstimg = {
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
  
  const animatezoomimg = {
    hidden:{
      opacity:0,
      scale: 0
    },
    visible:{
      opacity:1,
      scale:1,
      transition:{
        delay: 0.5,
        stiffness: 50
      }
    }
  }

  const animatelastimg = {
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



  return (
    <>
      <h1 className='text-center text-success py-4'>From All page</h1>
      <AnimatePresence>
      <motion.div className='container img_gallery' 
        // layout
        // initial={{opacity: 0}}
        // animate={{opacity: 1}}
        // exit={{opacity: 0}}
        // transition={{duration: 0.5}}
        
      >
        <a href={Img1} data-lightbox="models" data-title="Caption1">
          <motion.img src={Img1} alt='Img1' 
            className='glImg'
            variants={animatefirstimg}
            initial="hidden"
            animate="visible"

          />
        </a>
        <a href={Img3} data-lightbox="models" data-title="Caption3">
          <motion.img src={Img3} alt='Img3'
            className='glImg'
            variants={animatemenimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        <a href={Img2} data-lightbox="models" data-title="Caption2">
          <motion.img src={Img2} alt='Img2'
            className='glImg'
             variants={animatezoomimg}
             initial="hidden"
             animate="visible"
          />
        </a>
        
        <a href={Img7} data-lightbox="models" data-title="Caption7">
          <motion.img src={Img7} alt='Img7'
            className='glImg'
             variants={animaterightimg}
             initial="hidden"
             animate="visible"
          />
        </a>
        <a href={Img4} data-lightbox="models" data-title="Caption4">
          <motion.img src={Img4} alt='Img4'
            className='glImg'
            variants={animatefirstimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        <a href={Img5} data-lightbox="models" data-title="Caption5">
          <motion.img src={Img5} alt='Img5'
            className='glImg'
            variants={animatezoomimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        <a href={Img6} data-lightbox="models" data-title="Caption6">
          <motion.img src={Img6} alt='Img6'
            className='glImg'
            variants={animatezoomimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        <a href={Img8} data-lightbox="models" data-title="Caption8">
          <motion.img src={Img8} alt='Img8'
            className='glImg'
            variants={animaterightimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        <a href={Img9} data-lightbox="models" data-title="Caption9">
          <motion.img src={Img9} alt='Img9'
            className='glImg'
            variants={animatelastimg}
            initial="hidden"
            animate="visible"
          />
        </a>
        <a href={Img10} data-lightbox="models" data-title="Caption10">
          <motion.img src={Img10} alt='Img10'
            className='glImg'
            variants={animatelastimg}
            initial="hidden"
            animate="visible"
          />
        </a>
      </motion.div>
      </AnimatePresence>
    </>
  )
}



