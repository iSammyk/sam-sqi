import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "font-awesome/css/font-awesome.min.css"
import './Body0.css'
export const Body1 = () => {
  return (
    <>
    <main className='bob mt-3'>
        <div className=' mx-auto d-flex can h-75 '>
        <div className='spar'>
        <img className='pictt img-fluid' src={require('../src/bluegirl.jpg')}/>
        </div>
       <div className='spar pt-3'>
        <div className=' mx-auto workk mb-4'></div>
        <h3 className='fs-1 text-center'>
        SCICT AT A GLANCE
        </h3>
        <p className='text-secondary mx-3'>
        SQI College of ICT is an accredited institution. SQI College of ICT offers both National Diploma (2 years), Professional Diploma (1 year) and Certificate Courses (from 2 weeks). <br />

        The National Innovative Diploma conforms with the standard National Diploma Certificate obtained in Polytechnics while the Professional certificate is the certificate you earn after taking a professional course here at SQI. <br />

        You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of having undergone professional training in the field for which the certificate is issued.
        </p>
        <div className=' mx-auto workk mt-4'></div>
       </div>
        </div>
    </main>
    </>
  )
}
