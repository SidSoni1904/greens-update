import React, { useState, useRef , useEffect} from "react";
import "./Home.css";
import Overlay from "./Overlay";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import alone from "../../assets/images/meets.jpg";
import dessert from "../../assets/dessert.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BookOpenCheck, Globe2 , Recycle } from "lucide-react";
import Slider from "react-slick";
import profile from "../../assets/images/dp.png"

export default function Home() {
    // const vidRef = useRef()
    // useEffect(() => { vidRef.current.play(); },[]);
  const [arrow, setarrow] = useState(false);
  const [arrow1, setarrow1] = useState(false);
  const [arrow2, setarrow2] = useState(false);
  const [arrow3, setarrow3] = useState(false);
  const [pending, setPending] = useState(false);
  const [show, setShow] = useState(false);

  function handleClick() {
    // setShow(false)
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // console.log("onclick", show)
  }

  const updateArrow = () => {
    setarrow((arrow) => !arrow);
  };

  const updateArrow1 = () => {
    setarrow1((arrow1) => !arrow1);
  };

  const updateArrow2 = () => {
    setarrow2((arrow2) => !arrow2);
  };

  const updateArrow3 = () => {
    setarrow3((arrow3) => !arrow3);
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);

    emailjs
      .sendForm(
        "service_esvxnjn",
        "template_a7zz0k8",
        form.current,
        "OkVIJxe-D8Zvw-Fni"
      )
      .then(
        (result) => {
          setPending(false);
          toast.success("Email send successfull", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          form.current.reset();
          console.log("Email status:", result.text);
        },
        (error) => {
          setPending(false);
          toast.error("Error accured go console", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("Error accured: ", error.text);
          form.current.reset();
        }
      );
  };
  console.log(form.current);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <>
        {/* Section 1 start */}
        <section className="homediv">
          <div className="homedata">
            <div data-aos="fade-right">
              {/* <h2 className="Home_heading mb-4">
                Make each day <p> your masterpiece</p>
              </h2> */}
              <p className="Home_pera mr-1 mb-5 mt-5">
                The Greenstraw is an initiative to create a community of
                conscious and conscientious individuals by curating low waste
                and interactive solutions to everyday things to help bring about
                a sustainable behavioral change.
              </p>
              <center>
                <button className="explorebtn">Explore</button>
              </center>
            </div>
          </div>
        </section>

        {/* Section 1 end */}

        {/* Section2 start */}

        <section className="section2">
          <div className="container greenstarw p-4">
            <div className="video-player">
              <video  controls className="card__video"  autoPlay="">
                <source src={video1} type="video/mp4" />
              </video>
              <video controls className="card__video">
                <source src={video2} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Section2 end */}

        {/* Section3 start here */}

        <section className="section3" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-5 verticals-text">
                <h2 className="mb-5">Our verticals</h2>
                <h5>Events and Workshops</h5>
                <p>
                  We curate and conduct events and workshops to make people
                  aware about sustainable living by providing alternatives to
                  lead a least impact life.
                </p>
                <h5>Sustainability Models</h5>
                <p>
                  We design sustainability models and guidelines for people,
                  communities, spaces where they can implement the same to
                  achieve maximum sustainability.
                </p>
                <h5>Low waste product curation and consulting</h5>
                <p>
                  We help you switch to a low waste lifestyle through everyday
                  products that are low impact in all ways.
                </p>
                <h5>Awareness Campaigns</h5>
                <p>
                  We design and implement awareness campaigns by identifying
                  various environmental factors that needs to be addressed in
                  our communities
                </p>
              </div>
              <div className="col-lg-6 mt-5 p-4 slider-area">
                {/* swiper starts */}
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  pagination={{ el: ".swiper-pagination", clickable: true }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="swiper_container"
                >
                  <SwiperSlide>
                    <img src={dessert} alt="" class="news-card__image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={alone} alt="slide_image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={dessert} alt="slide_image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={alone} alt="slide_image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={dessert} alt="slide_image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={alone} alt="slide_image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={dessert} alt="slide_image" />
                  </SwiperSlide>

                  <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                      <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </Swiper>
                {/* end swiper */}
              </div>
            </div>
          </div>
        </section>

        {/* Section3 end here */}

        {/* Section4 start here */}

        <section className="section4 container p-5">
          <div class="row counters">
            <div class="col-lg-4 col-md-4 col-sm-4 ">
              <div class="my-cards-counter">
                <h3>50+</h3>
                <p>Conscious brands worked with</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 ">
              <div class="my-cards-counter">
                <h3>10k</h3>
                <p>saplings distributed</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 ">
              <div class="my-cards-counter">
                <h3>4</h3>
                <p>Greenstraw locations & growing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section4 end here */}

        {/* Section5 start here */}

        <Overlay />

        {/* Section5 end here */}

        {/* Section6 start here */}

        <section className="container">
          <section className="card__container">
            <div className="card__bx card__1">
              <div className="card__data c1">
                <div className="card__icon">
                  <div className="card__icon-bx">
                    <BookOpenCheck size={50} />
                  </div>
                </div>
                <div className="card__content">
                  <center>
                    <h1>4</h1>
                    <h5>Quality Education</h5>
                  </center>
                </div>
              </div>
              
            </div>
            <div className="card__bx card__2">
              <div className="card__data c2">
                <div className="card__icon">
                  <div className="card__icon-bx">
                    <Globe2 size={50} />
                  </div>
                </div>
                <div className="card__content">
                  <center>
                    <h1>13</h1>
                    <h5>Climate Action</h5>
                  </center>
                </div>
              </div>
            </div>
            <div className="card__bx card__3">
              <div className="card__data c3">
                <div className="card__icon">
                  <div className="card__icon-bx">
                  <Recycle size={50}/>
                  </div>
                </div>
                <div className="card__content">
                  <h1>12</h1>
                  <h5>Responsible Consumption and Production</h5>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Section6 end here */}

        {/* section7 start here */}

        <div className="section7 p-5">
          <div className="container">
            <center>
              <h4 className="text-white">Testimonials</h4>
            </center>
            <Slider {...settings} className="p-5">
              <center>
                <div class="card test-cc">
                  <div class="card-body">
                    <img src={profile} alt="profile" id="profile-dp"/>
                    <h3 class="card-title">Ravindar Kumar</h3>
                    <p class="card-text">
                      Great experience! Young entrepreneurs engaging in
                      marketing of eco friendly goods. Spreading the awareness
                      and sensitizing people about threats to the environment.
                      Very tastetul display o wares and conducive and refreshing
                      ambience in the cafe. Worth encouraging!
                    </p>
                  </div>
                </div>
              </center>
              <center>
                <div class="card test-cc">
                  <div class="card-body">
                  <img src={profile} alt="profile" id="profile-dp"/>
                    <h3 class="card-title">Rohit Bhatia</h3>

                    <p class="card-text">
                      We were so nervous taking Scooter out for his first outing
                      and came across a Pet-friendly café @thegreenstrawhouse in
                      Usmanpura. Ahmedabad as a result of a quick Google search
                      we ran while we were in the area. It was an amazing
                      experience and a pleasant one at that thanks to the very
                      pet- friendly serving staff at the café. We thank the
                      serving staff and @greenstrawfoundation, especially
                      Jaimini, for suggesting that we use the outdoor seating if
                      we wanted to. This made our experience a comfortable one.
                      We must add that it was an overcast Saturday afternoon
                      which made it better and it was why decided to step out in
                      the first place
                    </p>
                  </div>
                </div>
              </center>
              <center>
                <div class="card test-cc">
                  <div class="card-body">
                  <img src={profile} alt="profile" id="profile-dp"/>
                    <h3 class="card-title">Zalak Shah</h3>

                    <p class="card-text">
                      It's a nice and cute place to enjoy your evenings with
                      your friends. They thoroughly follow the concept ot
                      eco-friendliness in their cate. One can just sit there and
                      enjoy the view of rivertront from there whic is quite
                      beautiful. The food was also good. Overall I really liked
                      the place and the vibes it gave. Like
                    </p>
                  </div>
                </div>
              </center>
            </Slider>
          </div>
        </div>

        {/* section7 start here */}

        {/* section8 start here */}

        <section className="section8 py-5">
          <center><h2>Our Location</h2></center>
          <div className="map-main py-5">
              <div className="map">
                <h6>THE GREENSTRAW @USMANPURA</h6>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469937.094067142!2d72.572443!3d23.046396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85e99087a0a7%3A0x9e1bdbfcfca2e195!2sThe%20Greenstraw%20House!5e0!3m2!1sen!2sus!4v1689935523358!5m2!1sen!2sus"  height="250" style={{ borderRadius: "12px" , width: "120%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="map">
              <h6>THE GREENSTRAW @ARTHSHILA</h6>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469996.0787116665!2d72.539835!3d23.029486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e859f954ba11b%3A0xfdf447ea83bd1908!2sThe%20Greenstraw%20%40%20Arthshila!5e0!3m2!1sen!2sus!4v1689935614466!5m2!1sen!2sus" height="250" style={{ borderRadius: "12px", width: "120%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
             
              <div className="map"> <h6> THE GREENSTRAW, SHYAMAL ( TBA)</h6><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1987567.9438598577!2d73.05263827660379!3d22.26006085251337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85e57c2ec919%3A0x45e10b3a84b900c9!2sShyamal%203A!5e0!3m2!1sen!2sus!4v1689935685174!5m2!1sen!2sus"  height="250" style={{ borderRadius: "12px", width: "120%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          </div>
        </section>

        {/* section8 end here */}
      </>
    </>
  );
}
