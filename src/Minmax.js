import React from 'react'
import './Minmax.css'
import Img1 from './assets/images/servicePage/office1.png'
import LoremIpsum from 'react-lorem-ipsum'



export default function Minmax() {
  return (
    <div className='hello'>
            <img src={Img1} alt='Img1'/>
            <LoremIpsum p={10}/>
            <h1>hello World</h1>
    </div>
  )
}
