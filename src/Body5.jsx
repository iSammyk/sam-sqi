import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "font-awesome/css/font-awesome.min.css"

export const Body5 = () => {
  return (
    <>
    <main className='yop'>
        <div className='midd d-flex justify-content-between pb-5'>
            <div className='yt'>
            <iframe className='ytt' width="100%" height="200" src="https://www.youtube.com/embed/HgC6bjMbqpw?si=a0FnhkeEVL0l-kYy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='okad text-light'>
                <h1 className='fsa'>
                    Take a tour
                </h1>
                <b className='fs-5'>
                Our campus is a living centre for innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an atmosphere that is open-minded, always exciting, and filled with academic excellence.
                </b>
            </div>
        </div>
    </main>
    </>
  )
}
