import * as Yup from 'yup'

// fname: "",
// lname: "",
// myemail: "",
// pnumber: "",
// mymessage: ""

// EnquiryformSchema
// Yup Schema

export const EnquiryformSchema = Yup.object({
    fname: Yup.string().min(3).max(25).required("Please enter your firstname"),
    lname: Yup.string().min(3).max(25).required("Please enter your firstname"),
    myemail: Yup.string().email().required("Please enter your email"),
    pnumber: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('A phone number is required'),
    mymessage: Yup.string().min(10).max(100).required("Please enter Message")
})




// import React, { useEffect, useRef, useState } from 'react'
// import './contactus.css'
// import Layout from '../../components/Layout'
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';
// import { useFormik } from 'formik';
// import { EnquiryformSchema } from '../../schema';

// const initialValues = {
//   fname: "",
//   lname: "",
//   myemail: "",
//   pnumber: "",
//   mymessage: ""

// }

// export default function Contactus() {

//   const [pending, setPending] = useState(false);

//   const [formdata, setFormdata] = useState(initialValues)

//   const [formdataerror, setFormdataerror] = useState(initialValues)

//   const [isSubmit, setIssubmit] = useState(false)

//   const { values, touched ,errors, handleBlur, handleChange, handleSubmit } = useFormik({
//     initialValues: initialValues,
//     validationSchema: EnquiryformSchema,
//     onSubmit: (values,action) => {
//       console.log(values);
//       action.resetForm();
//     }
//   });

//   // console.log(errors);



//   const form = useRef();;

//   const sendEmail = (e) => {
//     e.preventDefault()
//     setPending(true)

//     emailjs.sendForm('service_esvxnjn', 'template_a7zz0k8', form.current, 'OkVIJxe-D8Zvw-Fni')
//       .then((result) => {
//         setPending(false)
//         toast.success('Email send successfull', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         });
//         form.current.reset()
//         console.log("Email status:", result.text);
//       }, (error) => {
//         setPending(false)
//         toast.error('Error accured go console', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         });
//         console.log("Error accured: ", error.text);
//         form.current.reset()
//       });
//   };

//   // const handleChange = (e) => {
//   //   // console.log(e.target);
//   //   const { name, value } = e.target;
//   //   setFormdata({...formdata, [name]:value})
//   //   console.log(formdata);
//   // }

//   // function handleSubmit(e){
//   //   e.preventDefault()
//   //   // sendEmail()
//   //   // setFormdataerror(validate(formdata))
//   //   // setIssubmit(true)
//   //   console.log("Click from handlechange");
//   // }

//   // useEffect(() => {
//   //     console.log(formdata);
//   //     if (Object.keys(formdataerror).length === 0 && isSubmit) {
//   //         console.log(formdata);
//   //     }
//   // } , [formdataerror])

//   // const validate = (values) => {
//   //   const errors = {}
//   //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
//   //   if (!values.fname) {
//   //       formdataerror.fname = "FirstName is required"
//   //   }
//   //   if (!values.lname) {
//   //     formdataerror.lname = "LastName is required"
//   //   }
//   //   if (!values.myemail) {
//   //     formdataerror.myemail = "Email is required"
//   //   }
//   //   if (!values.pnumber) {
//   //     formdataerror.pnumber = "Phone number is required"
//   //   }
//   //   if (!values.mymessage) {
//   //     formdataerror.mymessage = "Message is required"
//   //   }
//   //   return errors;
//   // }

//   return (
//     <>
//         <section className='contactussec'>
//           <div className='contactBG'>
//             <h2 className='contactHeading'>Contact Us</h2>
//             <p className='contactPera'>
//               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
//               <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt</p>
//             </p>
//           </div>

//           {/* section two start here */}

//           <div className='sectiontwo container'>
//             <div className='row my-5'>
//               <h1 className='getTouch col-lg-4'>GET IN TOUCH</h1>
//               <div className="vl px-2" />
//               <p className='available col-lg-7'>We are available 24/7 by fax, e-mail or by phone. You can also use our
//                 quick contact form to ask a question about our products.</p>
//             </div>
//           </div>

//           <form ref={form} onSubmit={(e) => {sendEmail(e);handleSubmit();}}>
//             {/* <pre>{JSON.stringify(formdata, undefined, 2)}</pre> */}
//             <div className='sectionThree my-lg-5 '>
//               <div className='userinput container'>
//                 <div className='namesfield d-flex flex-wrap justify-content-md-around'>
//                   <input type='text'
//                     name='fname'
//                     placeholder='First Name'
//                     className='firstname my-2'
//                     autoComplete='off'
//                     value={values.fname}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                     />
//                     {/* {errors.fname && touched.fname ? (<p className='form-error'>{errors.fname}</p>) : null} */}
//                   <input type='text'
//                     name='lname'
//                     placeholder='Last Name'
//                     className='firstname my-2'
//                     autoComplete='off'
//                     value={values.lname}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                   />
//                   {/* {errors.lname && touched.lname ? (<p className='form-error'>{errors.lname}</p>) : null} */}
//                 </div>
//                 <div className='namesfield d-flex  flex-wrap justify-content-md-center'>
//                   <input type='email'
//                     name='myemail'
//                     placeholder='E-Mail'
//                     className='firstname my-2'
//                     autoComplete='off'
//                     value={values.myemail}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                   />
//                   {/* {errors.myemail && touched.myemail ? (<p className='form-error'>{errors.myemail}</p>) : null} */}
//                   <input type='number'
//                     name='pnumber'
//                     placeholder='Phone'
//                     className='firstname pnumber my-2'
//                     autoComplete='off'
//                     value={values.pnumber}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                   />
//                   {/* {errors.pnumber && touched.pnumber ? (<p className='form-error'>{errors.pnumber}</p>) : null} */}
//                 </div>
//                 <textarea id="w3review"
//                   name="mymessage"
//                   placeholder='Message'
//                   rows={2} cols={40}
//                   className='message'
//                   autoComplete='off'
//                   value={values.mymessage}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   required
//                 />
//                 {/* {errors.mymessage && touched.mymessage ? (<p className='form-error'>{errors.mymessage}</p>) : null} */}
//               </div>
//               <div className='container sendmesgdiv'>
//                 <button className='sendmessagebtn' disabled={pending ? true : false}  >{pending ? "Loading..." : "SEND MESSAGE"}</button>
//               </div>
//             </div>
//           </form>


//           <div className='infoBG row'>
//             <div className='container d-flex flex-wrap'>
//               <div className='col-lg-4  companyInfo phoneinfo'>
//                 <h1 className='ownerInfo'>Phones</h1>
//                 <hr className='hrline2' />
//                 <p>Office +1 (409) 987–5874</p>
//                 <p>Fax +1 (409) 987–5874</p>
//               </div>
//               <div className='col-lg-4 companyInfo phoneinfo'>
//                 <h1 className='ownerInfo'>ADDRESS</h1>
//                 <hr className='hrline2' />
//                 <p>523 Sylvan Ave, 5th Floor</p>
//                 <p>Mountain View, CA 94041 USA</p>
//               </div>
//               <div className='col-lg-4 companyInfo phoneinfo'>
//                 <h1 className='ownerInfo'>E-MAILS</h1>
//                 <hr className='hrline2' />
//                 <p>info@demolink.org</p>
//                 <p>mail@demolink.org</p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7947401145693!2d72.56638377501685!3d23.031307579167706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e854310b186e9%3A0xc2ff10907f8de50c!2sUptake%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682604268889!5m2!1sen!2sin" width="100%" height="500" style={{ border: "0" }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
//           </div>

//         </section>
//       </>
//   )
// }
