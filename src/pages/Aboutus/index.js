import React, { useState } from 'react'
import './about.css'
import Layout from '../../components/Layout'
import Restaurant from '../../assets/images/Aboutus/Restaurant.png'
import Member1 from '../../assets/images/Aboutus/member1.png'
import Member2 from '../../assets/images/Aboutus/member2.png'
import Member3 from '../../assets/images/Aboutus/member3.png'
import Member4 from '../../assets/images/Aboutus/member4.png'
import facebook from '../../assets/images/Aboutus/fb.png'
import twitter from '../../assets/images/Aboutus/tw.png'
import linkdin from '../../assets/images/Aboutus/in.png'
import instagram from '../../assets/images/Aboutus/insta.png'
import Slider from 'react-slick'
import { Images } from './Restaurantimg'
import Overlay2 from './Overlay2'
import couple from "../../assets/couple.png"


export default function Aboutus() {

  const [arrow, setarrow] = useState(false)
  const [arrow1, setarrow1] = useState(false)
  const [arrow2, setarrow2] = useState(false)
  const [arrow3, setarrow3] = useState(false)

  const updateArrow = () => {
    setarrow(arrow => !arrow)
  }

  const updateArrow1 = () => {
    setarrow1(arrow1 => !arrow1)
  }

  const updateArrow2 = () => {
    setarrow2(arrow2 => !arrow2)
  }


  const updateArrow3 = () => {
    setarrow3(arrow3 => !arrow3)
  }

  // crousel start

  const [sliderdata, setSliderdata] = useState(Images[0])

  const handleClick = (index) => {
    console.log(index);
    const slider = Images[index];
    setSliderdata(slider);
  }

  return (
    <>
      <section className='aboutusSec'>
          <h1 className='aboutusHeading' data-aos="zoom-in">About Us</h1>
          <p className='text-white aboutusPera' data-aos="zoom-in">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt</p>
          </p>
      </section>

      {/* sectionTwo start here */}

      <section className='aboutusSecTwo container'>
        <h1 className='aboutusSecTwohead text-center m-5' data-aos="fade-right">How did it all start ?</h1>
        <div className='my-5 row'>
          <img src={couple} alt='RestaurantImage' className='col-lg-7' data-aos="flip-left"/>
          <p className='restauranrPera col-lg-5 py-md-4' data-aos="flip-right">
            The Greenstraw is an initiative to create a community of conscious and conscientious individuals
            by curating low waste and interactive solutions to everyday things to bring about a sustainable
            behavioral change.
          </p>
        </div>
      </section>

      {/* sectionThree start here */}

      <section className='aboutusSecThree'>
        <h1 className='aboutusSecThreehead' data-aos="fade-right">
          Why we started
        </h1>
        <p className='aboutusSecThreePera p-3'
          data-aos="fade-right"
        >
          It came from a realisation that we couldn’t have relevant conversations with people around us about sustainability. Not because they were ignorant but because no one told us or taught us that what we were doing was impacting the World negatively.
        </p>

        <p className='aboutusSecThreePera p-3'
          data-aos="fade-left"
        >
          We needed to do something that connected us with people every day and at least initiate conversations of impact with the hope that it'll start a chain reaction of actions that bring a behavioural change so all of us could collectively contribute to a more earth-friendly living!
        </p>

      </section>

      {/* sectionFour start here */}

      <section className='aboutusSecFour container'>
        <div className='row'>
          <div className='col-lg-5 Whatwedo py-5 pr-2' data-aos="fade-down-right">
            <h3 className='text-left WhatwedoHeading'>
              What we do!
            </h3>
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <i className={arrow ? "fa fa-chevron-circle-right pr-3 accordianArrow" : "fa fa-chevron-circle-down pr-3 accordianArrow"} onClick={updateArrow} aria-hidden="true" />
                      <span className={arrow ? " pr-3 accordianArrow myaccordion" : " pr-3 accordianArrow myaccordion"} onClick={updateArrow}>Events and Workshops</span>
                    </button>
                  </h5>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body cardData ml-4">
                    We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <i className={arrow1 ? "fa fa-chevron-circle-down pr-3 accordianArrow" : "fa fa-chevron-circle-right pr-3 accordianArrow"} onClick={updateArrow1} aria-hidden="true" />
                      {/* <i className= "fa fa-chevron-circle-right pr-3 accordianArrow" aria-hidden="true" /> */}
                      <span className={arrow1 ? " pr-3 accordianArrow myaccordion" : " pr-3 accordianArrow myaccordion"} onClick={updateArrow1}>Sustainability Models</span>
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body cardData ml-4">
                    We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <i className={arrow2 ? "fa fa-chevron-circle-down pr-3 accordianArrow" : "fa fa-chevron-circle-right pr-3 accordianArrow"} onClick={updateArrow2} aria-hidden="true" />
                      {/* <i className= "fa fa-chevron-circle-right pr-3 accordianArrow" aria-hidden="true" /> */}
                      <span className={arrow2 ? "pr-3 accordianArrow accordion3 myaccordion" : "pr-3 accordianArrow accordion3 myaccordion"} onClick={updateArrow2}>Low waste product curation and consulting</span>
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body cardData ml-4">
                    We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <i className={arrow3 ? "fa fa-chevron-circle-down pr-3 accordianArrow" : "fa fa-chevron-circle-right pr-3 accordianArrow"} onClick={updateArrow3} aria-hidden="true" />
                      <span className={arrow3 ? "pr-3 accordianArrow  myaccordion" : "pr-3 accordianArrow myaccordion"} onClick={updateArrow3}>Awareness Campaigns</span>
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body cardData ml-4">
                    We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-7 py-1  aboutresImages' data-aos="fade-down-left">
            <div>
              <img src={sliderdata} className='slideImges img-responsive img-thumbnail' />
            </div >
            <div className='smallresImg p-3'>
              {
                Images.map((data, i) =>
                  <div key={i}>
                    <img src={data} onClick={() => handleClick(i)} height='70px' width="120px" className='img-thumbnail allimages' />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>

      {/* section5 start here */}

      <Overlay2 />

      {/* section6 start here */}

      <section className='aboutusSecSix'>

        <h1 className='ourteam text-center my-5'>Our Team</h1>
        <div className='teamMember my-5 d-flex flex-wrap justify-content-around'>
          <div className='member1 d-flex justify-content-center align-items-center flex-column pb-3' data-aos="flip-left">
            <img src={Member1} alt='member1' className='member1' />
            <h1 className='membername'>Rebecca Martinez</h1>
            <h3 className='memberposition'>Founder and CEO</h3>
            <div className='d-flex pt-3 memberIcon'>
              <img src={facebook} className='Icons' />
              <img src={twitter} className='Icons' />
              <img src={linkdin} className='Icons' />
              <img src={instagram} className='Icons' />
            </div>
          </div>
          <div className='member1 d-flex justify-content-center align-items-center flex-column pb-3' data-aos="flip-up">
            <img src={Member2} alt='member1' className='member1' />
            <h1 className='membername'>Peter McMillan</h1>
            <h3 className='memberposition'>Head of Department</h3>
            <div className='d-flex pt-3 memberIcon'>
              <img src={facebook} className='Icons' />
              <img src={twitter} className='Icons' />
              <img src={linkdin} className='Icons' />
              <img src={instagram} className='Icons' />
            </div>
          </div>
          <div className='member1 d-flex justify-content-center align-items-center flex-column pb-3' data-aos="flip-down">
            <img src={Member3} alt='member1' className='member1' />
            <h1 className='membername'>Jane Smith</h1>
            <h3 className='memberposition'>leading Customer Care</h3>
            <div className='d-flex pt-3 memberIcon'>
              <img src={facebook} className='Icons' />
              <img src={twitter} className='Icons' />
              <img src={linkdin} className='Icons' />
              <img src={instagram} className='Icons' />
            </div>
          </div>
          <div className='member1 d-flex justify-content-center align-items-center flex-column pb-3' data-aos="flip-right">
            <img src={Member4} alt='member1' className='member1' />
            <h1 className='membername'>Sam Williams</h1>
            <h3 className='memberposition'>Sales Manager</h3>
            <div className='d-flex pt-3 memberIcon'>
              <img src={facebook} className='Icons' />
              <img src={twitter} className='Icons' />
              <img src={linkdin} className='Icons' />
              <img src={instagram} className='Icons' />
            </div>
          </div>
        </div>

      </section>


    </>
  )
}





{/* <div className='col-lg-7 py-5 pl-5'>
              <div style={{ margin: '30px' }}>
                <h2>Custom Paging</h2>
                <Slider 
                autoplay 
                autoplaySpeed={2000} 
                dots={true}
                initialSlide={0} 
                infinite
                customPaging={(i) => {
                    return(<div className='resIamges'>
                          <img src={Images[i]} className='restaurantimg' style={{objectFit: "cover", height: '100px' , width: '120px'}}/>
                          
                    </div>)
                }}
                dotsClass='slick-dots custom-indicator'
                >
                    {
                        Images.map((item,index) => 
                          <div key={index}>
                              <img src={item} style={{width: "100%" , height: '50vh'}}/>
                          </div>
                        )
                    }
                </Slider>
              </div>
            </div> */}