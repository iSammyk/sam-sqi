import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "font-awesome/css/font-awesome.min.css"
import './Body0.css'

export const Body0 = () => {
  return (
    <>
    <main className='bob pop1'>
        <div className=' mx-auto d-flex can'>
       <div className='spar'>
        <h1 className='stud'>
            Study to <br/> become a <br/> global talent
        </h1>
        <p className='text-dark'>
        Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.
        </p>
        <button className='btn btn-primary born d-flex align-items-center text-center justify-content-center btn-fluid p-2'>
            Start now   <span className='mx-2 nobo'> <i class="fa fa-angle-right"></i> </span>
        </button>
       </div>
       <div className='spar'>
        <img className='pictt img-fluid' src={require('../src/sqi-1-boygirl.png')}/>
        </div>
        </div>
    </main>
    </>
  )
}
