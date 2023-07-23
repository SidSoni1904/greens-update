// routes
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

// pages
import './App.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Services from './pages/services';
import Contactus from './pages/contactus';
// import Gallery from './pages/gallery';
// import All from './pages/gallery/All';
// import Cafes from './pages/gallery/Cafes';
// import Cowork from './pages/gallery/Cowork';
// import Store from './pages/gallery/Store';
// import Gridall from './pages/gallery/Gridall';
import Gallery2 from './pages/gallery2/index2';
import All2 from './pages/gallery2/All2';
import Cafes2 from './pages/gallery2/Cafes2';
import Cowork2 from './pages/gallery2/Cowork2';
import Store2 from './pages/gallery2/Store2';
import Overlay2 from './pages/Aboutus/Overlay2';
import Officesec from './pages/services/Officesec';
import Minmax from './Minmax';
import Greenstrawspace from './pages/services/Titlechange/Greenspace';
import GreenstrawStore from './pages/services/Titlechange/Stores';
import Greenstrawcafes from './pages/services/Titlechange/Cafes';
import Greenstraw_working from './pages/services/Titlechange/Cowoorking';
import Greenstraw_foundation from './pages/services/Titlechange/Foundation';


// external library add
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'lightbox2/dist/css/lightbox.css'
import 'lightbox2/dist/js/lightbox-plus-jquery'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "lightgallery/css/lightgallery.css";
import { Helmet } from "react-helmet";
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Aos from 'aos';
import { useEffect } from 'react'
import Loader from './Loader';
import Humans from './pages/Humans/Humans';

function App() {

  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1500, easing: 'ease-in-out', once: true })
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="App">

      <Helmet>
        <meta charSet="utf-8" />
        <title>The Greenstraw</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Test icon" />
      </Helmet>

      {
        Loading ? (<Loader />) :
          (
            <>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/aboutus' element={<Aboutus />} />
                <Route path='/services' element={<Services />} />
                <Route path='/overlay' element={<Overlay2 />} />
                <Route path='/officesec' element={<Officesec />} />
                <Route path='/Greenstrawspace' element={<Greenstrawspace />} />
                <Route path='/GreenstrawStore' element={<GreenstrawStore />} />
                <Route path='/Greenstrawcafes' element={<Greenstrawcafes />} />
                <Route path='/Greenstraw_working' element={<Greenstraw_working />} />
                <Route path='/Greenstraw_foundation' element={<Greenstraw_foundation />} />
                <Route path='/minmax' element={<Minmax />} />
                <Route path='/gallery' element={<Gallery2 />}>
                  <Route index element={<All2 />} />
                  <Route path='all2' element={<All2 />} />
                  <Route path='cafes2' element={<Cafes2 />} />
                  <Route path='cowork2' element={<Cowork2 />} />
                  <Route path='store2' element={<Store2 />} />
                </Route>
                <Route path='/contactus/' element={<Contactus />} />
                <Route path='humans' element={<Humans/>}/>
              </Routes>
              <Footer />
            </>
          )}


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </div>
  );
}

export default App;


{/* <Route index element={<All/>}/>
          <Route path='all' element={<All />} /> */}