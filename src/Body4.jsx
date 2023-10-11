import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "font-awesome/css/font-awesome.min.css"

export const Body4 = () => {
  return (
    <>
    <main className='bob'>
     <div className='mx-auto d-flex can justify-content-between'>
    <div className='pok'>
    <h1>
        Our Top Courses
    </h1>
    <p>
    Take a look at some of our popular courses
    </p>
    <a href="" className='orag'>
        View all courses  <i class="fa fa-angle-right"></i>
    </a>

    <div className='cardd1 w-100 py-4 mt-5'>
    <img className='imo mx-auto img-fluid' src={require('../src/software.webp')}/>
    <div className='w-75 mx-auto mt-2'>
    <h2>
      Software Engineering
    </h2>
    <p>
    Software Engineering is one of the most in-demand jobs across the globe today. <br />

    Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.
  </p>
  <a href="" className='orag'>
        Learn More  <i class="fa fa-angle-right"></i>
    </a>
    </div>
    </div>

    
    <div className='cardd2 w-100 py-4 mt-5'>
    <img className='imo mx-auto img-fluid' src={require('../src/product.jpg')}/>
    <div className='w-75 mx-auto mt-2'>
    <h2>
    UI/UX – Product Design
    </h2>
    <p>
    More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users. <br />

    Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.
  </p>
  <a href="" className='orag'>
        Learn More  <i class="fa fa-angle-right"></i>
    </a>
    </div>
    </div>


    </div>

    <div className='pak'>
    <div className='cardd py-4 mt-5'>
    <img className='imo mx-auto img-fluid' src={require('../src/DATA.jpg')}/>
    <div className='w-75 mx-auto mt-2'>
    <h2>
    Data Science & Analysis
    </h2>
    <p>
    The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight. <br />

    Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.
  </p>
  <a href="" className='orag'>
        Learn More  <i class="fa fa-angle-right"></i>
    </a>
    </div>
    </div>

    
    <div className='cardd py-4 mt-5'>
    <img className='imo mx-auto img-fluid' src={require('../src/digital-literacy.jpg')}/>
    <div className='w-75 mx-auto mt-2'>
    <h2>
    Digital LIteracy
    </h2>
    <p>
    This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs). <br />

    Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.
  </p>
  <a href="" className='orag'>
        Learn More  <i class="fa fa-angle-right"></i>
    </a>
    </div>
    </div>
    </div>
    </div>
    </main>
    </>
  )
}
