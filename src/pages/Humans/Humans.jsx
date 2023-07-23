import React from 'react'
import human1 from "../../assets/h1.jpg"
import human2 from "../../assets/human2.jpg"
import human3 from "../../assets/human3.jpg"
import human4 from "../../assets/human5.jpg"
import human6 from "../../assets/human6.jpg"
import "./human.css"
function Humans() {
    const questions = {
        "q1" : "1. Where were you before Greenstraw ? ",
        "q2" : "2. What does sustainability mean to you ?",
        "q3" : "3. Which product/ food/ drink is your favourite at The Greenstraw ?0",
        "q4" : "4. How do you navigate life?"
    }
  return (
    <>
     <section className='aboutusSec'>
          <h1 className='aboutusHeading' data-aos="zoom-in">Humans of TGS</h1>
          <p className='text-white aboutusPera' data-aos="zoom-in">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt</p>
          </p>
      </section>    
      {/* people section */}
      <section className='container humans-section'>
        <center>
            <h4 className='mt-5'>Human of TGS</h4>
        </center>
      <div class="human-card">
      <img src={human1} alt='human1' />
      <div>
        <h3>{questions.q1}</h3>
        <p>
        Generally a clueless kid wandering through life, haha! But I used to work with an environmental organization called World Around You!  Everything I can do now with Greenstraw was learnt from there. I had the coolest bosses who would take fun, interesting, impactful initiatives that were ahead of its time to create environmental impact. I understood about working for the Environment in a completely new light and it lead me to hoping, wishing, dreaming everything that is Greenstraw today!
        </p>
        <h3>{questions.q2}</h3>
        <p>
        Being mindful and kinder to everyone and everything around me, learning from all of it and then passing it along…
        </p>
        <h3>{questions.q3}</h3>
        <p>
        Mushroom Burger and obviously chocolate milkshake
        </p>
        <h3>{questions.q4}</h3>
        <p>
        I have this favourite quote by Deepak Ramola. It says ‘No is a dead end, Yes is a roadtrip.’ I think that helps so much. I feel I am privileged enough to take risks so I do. Jump into uncertainties and learn to swim and all that…
        </p>
      </div>
    </div>
    <div class="human-card"> 
    <div>
        <h3>{questions.q1}</h3>
        <p>
        I was working with ASIAN PAINTS from 2021-2022. From past 1.5 years I have been freelancing interior projects with the help of some amazing clients. I balance my time between my freelance projects and brand curation at The Greenstraw.
        </p>
        <h3>{questions.q2}</h3>
        <p>
        Small mindful changes in daily life like thrifting, using steel water bottles and containers, not using plastic bags and if I do use I make sure it is sent to the recycler. I also ensure minimum wastage of water while cooking or cleaning.
On my sites, I try to recycle/ upcyle the waste wood or any other materials used. 
        </p>
        <h3>{questions.q3}</h3>
        <p>
        In food it has to be our fries and in product it is our reclaimed wood watches.
        </p>
        <h3>{questions.q4}</h3>
        <p>
        I have this favourite quote by Deepak Ramola. It says ‘No is a dead end, Yes is a roadtrip.’ I think that helps so much. I feel I am privileged enough to take risks so I do. Jump into uncertainties and learn to swim and all that…
        </p>
      </div>
      <img src={human2} alt='human1' />
    </div>
    <div class="human-card">
      <img src={human3} alt='human1' />
      <div>
        <h3>{questions.q1}</h3>
        <p>
        Generally a clueless kid wandering through life, haha! But I used to work with an environmental organization called World Around You!  Everything I can do now with Greenstraw was learnt from there. I had the coolest bosses who would take fun, interesting, impactful initiatives that were ahead of its time to create environmental impact. I understood about working for the Environment in a completely new light and it lead me to hoping, wishing, dreaming everything that is Greenstraw today!
        </p>
        <h3>{questions.q2}</h3>
        <p>
        Being mindful and kinder to everyone and everything around me, learning from all of it and then passing it along…
        </p>
        <h3>{questions.q3}</h3>
        <p>
        Mushroom Burger and obviously chocolate milkshake
        </p>
        <h3>{questions.q4}</h3>
        <p>
        I have this favourite quote by Deepak Ramola. It says ‘No is a dead end, Yes is a roadtrip.’ I think that helps so much. I feel I am privileged enough to take risks so I do. Jump into uncertainties and learn to swim and all that…
        </p>
      </div>
    </div>
    <div class="human-card">
     
     <div>
       <h3>1. Where were you before Greenstraw ? </h3>
       <p>
       Generally a clueless kid wandering through life, haha! But I used to work with an environmental organization called World Around You!  Everything I can do now with Greenstraw was learnt from there. I had the coolest bosses who would take fun, interesting, impactful initiatives that were ahead of its time to create environmental impact. I understood about working for the Environment in a completely new light and it lead me to hoping, wishing, dreaming everything that is Greenstraw today!
       </p>
       <h3>2. What does sustainability mean to you ?</h3>
       <p>
       Being mindful and kinder to everyone and everything around me, learning from all of it and then passing it along…
       </p>
       <h3>3.  Which product/ food/ drink is your favourite at The Greenstraw ?</h3>
       <p>
       Mushroom Burger and obviously chocolate milkshake
       </p>
       <h3>4.  How do you navigate life?</h3>
       <p>
       I have this favourite quote by Deepak Ramola. It says ‘No is a dead end, Yes is a roadtrip.’ I think that helps so much. I feel I am privileged enough to take risks so I do. Jump into uncertainties and learn to swim and all that…
       </p>
     </div>
     <img src={human4} alt='human1' />
   </div>
   <div class="human-card">
      <img src={human6} alt='human1' />
      <div>
        <h3>{questions.q1}</h3>
        <p>
        Generally a clueless kid wandering through life, haha! But I used to work with an environmental organization called World Around You!  Everything I can do now with Greenstraw was learnt from there. I had the coolest bosses who would take fun, interesting, impactful initiatives that were ahead of its time to create environmental impact. I understood about working for the Environment in a completely new light and it lead me to hoping, wishing, dreaming everything that is Greenstraw today!
        </p>
        <h3>{questions.q2}</h3>
        <p>
        Being mindful and kinder to everyone and everything around me, learning from all of it and then passing it along…
        </p>
        <h3>{questions.q3}</h3>
        <p>
        Mushroom Burger and obviously chocolate milkshake
        </p>
        <h3>{questions.q4}</h3>
        <p>
        By doing Yoga and being silly with Priyanshi and Jaimini. I also happen to be the snack queen at Greenstraw. Feeding others makes me happy.
        </p>
      </div>
    </div>
      </section>
    </>
  )
}

export default Humans