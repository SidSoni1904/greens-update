import React,{useEffect} from 'react'
import './Header.css'
import Greenstrawlogo from '../../assets/images/GREENSTRAW-EMBLEM1.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Loader from '../../Loader'


export default function Header() {

    const [Loading , setLoading] = useState(false)
    

    const [show, setShow] = useState(false)


    function handleClick() {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        setShow(false)
        window.scrollTo({top: 0, left: 0, behavior:'auto'});
        console.log("onclick", show)
    }

    return (
        <>
            {
                Loading ? (<Loader />) :    
                (<div>
                <nav className="navbar navbar-expand-xl navbar-light p-4 bg-dark fixed-top">
                    <div className='container-fluid'>
                        <div className='logoText'>
                            <img src={Greenstrawlogo} alt='Greenstrawlogo' className='Greenstrawlogo' />
                            <Link className="navbar-brand gsHeading" to='/' onClick={handleClick}>THE GREENSTRAW</Link>
                        </div>
                        <button className="navbar-toggler collapsed"
                            type="button"
                            onClick={() => {
                                console.log(show)
                                setShow(show => !show)
                            }}
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            {
                                show ? (
                                    <i className="ri-close-line" />) : (<i className="ri-menu-line" />)
                            }

                        </button>

                        {
                            show ? <>
                            </> : null
                        }
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ml-auto navbarPages">
                                <li className="nav-item">
                                    <NavLink className="nav-link navbartitle" to='/' onClick={handleClick} >Home</NavLink>
                                </li>
                                
                                <li className="nav-item">
                                    <NavLink className="nav-link navbartitle" to='/aboutus' onClick={handleClick} >About us</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle navbartitle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services
                                    </a>
                                    <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                        <NavLink className="dropdown-item dropdown-text" to='/Greenstrawspace' onClick={handleClick}>The Greenstraw Spaces</NavLink>
                                        <NavLink className="dropdown-item dropdown-text" to='/GreenstrawStore' onClick={handleClick}>Stores</NavLink>
                                        <NavLink className="dropdown-item dropdown-text" to='/Greenstrawcafes' onClick={handleClick}>Cafes</NavLink>
                                        <NavLink className="dropdown-item dropdown-text" to='/Greenstraw_working' onClick={handleClick}>Co-working Space</NavLink>
                                        <NavLink className="dropdown-item dropdown-text" to='/Greenstraw_foundation' onClick={handleClick}>The Greenstraw Foundation</NavLink>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navbartitle" to='/gallery' onClick={handleClick}>Gallery</NavLink>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                                <Link to='/contactus'>
                                    <button className="contactbtn my-2 my-sm-0" type="submit" onClick={handleClick}>Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>)}
        </>
    )
}
