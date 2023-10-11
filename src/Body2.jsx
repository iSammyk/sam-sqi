import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "font-awesome/css/font-awesome.min.css"
import './Body0.css'
export const Body2 = () => {
  return (
    <>
    <main className='bob mt-5'>
    <div className='mx-auto can'>
        <h1 className='man'>
            Start here. Change the world.
        </h1>
      </div>
    <div className='mx-auto d-flex can justify-content-between'>
        <div className='pik'>
         <div>
        <img className='pictt img-fluid' src={require('../src/college1.jpg')}/>
        </div>
        <h3 className='texo'>
            National Innovative Diploma (ND)
        </h3>
        <p className='text-secondary'>
        The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE) 
        </p>
        <button className='borna d-flex align-items-center text-center justify-content-center btn-fluid'> Learn More<span className='mx-2 nobo'> <i class="fa fa-angle-right"></i> </span>
        </button>
        </div>

        <div className='pik'>
         <div>
        <img className='pictt img-fluid' src={require('../src/maya.jpg')}/>
        </div>
        <h3 className='texo'>
            National Innovative Diploma (ND)
        </h3>
        <p className='text-secondary'>
        The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE) 
        </p>
        <button className='borna d-flex align-items-center text-center justify-content-center btn-fluid'> Learn More<span className='mx-2 nobo'> <i class="fa fa-angle-right"></i> </span>
        </button>
        </div>

        <div className='pik'>
         <div>
        <img className='pictt img-fluid' src={require('../src/fine.jpg')}/>
        </div>
        <h3 className='texo'>
            National Innovative Diploma (ND)
        </h3>
        <p className='text-secondary'>
        The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE) 
        </p>
        <button className='borna d-flex align-items-center text-center justify-content-center btn-fluid'> Learn More<span className='mx-2 nobo'> <i class="fa fa-angle-right"></i> </span>
        </button>
        </div>
        </div>
    </main>
    </>
  )
}
