import React from 'react'
import '../assets/css/style.css'
import { useContext } from 'react'
import HomeContext from '../context/HomeContext'

function Home() {

    const {homeContent} = useContext(HomeContext)

  return (
    <div>
         <section id="home" className="full-height px-lg-5">
            <div className="container">

                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="display-4 fw-bold" data-aos="fade-up">I'M A <span className="text-brand">{homeContent.position}</span> X <span className="text-brand2">DESIGNER</span></h1>
                        <p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="400">Hi {homeContent.name}, {homeContent.paragraph}</p>
                        <div data-aos="fade-up" data-aos-delay="800">
                            <a href="#artdesigns" className="btn btn-brand m-2">Explore My Work</a>
                            <a href="#contact" className="link-custom">Call: (+63){homeContent.number}</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Home