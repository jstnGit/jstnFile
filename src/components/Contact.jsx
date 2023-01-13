import React from 'react'
import '../assets/css/style.css'

function Contact() {
    return (
        <div>
            <section id="contact" className="full-height px-lg-5">
                <div className="container">

                    <div className="row justify-content-center text-center">

                        <div className="col-lg-8 pb-4" data-aos="fade-up">
                            <h6 className="text-brand">CONTACT</h6>
                            <h1>Interested in woking together? Let's talk</h1>
                        </div>

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                            <form action="https://getform.io/f/da9ee425-e09a-4249-a3c0-61db1e8720a3" method="POST" className="row ">
                                <div className="form-group col-md-6 mt-2">
                                    <input type="text" name="name" className="form-control" placeholder="Enter Your Name"></input>
                                </div>
                                <div className="form-group col-md-6 mt-2">
                                    <input type="email" name="email" className="form-control" placeholder="Enter Your Email" required></input>
                                </div>
                                <div className="form-group col-md-12 mt-2">
                                    <input type="text" name="subject" className="form-control" placeholder="Enter Subject"></input>
                                </div>
                                <div className="form-group col-md-12 mt-2">
                                    <textarea name="message" rows="4" className="form-control" placeholder="Enter Your Message"></textarea>
                                </div>
                                <div className="form-group col-md-12 mt-2 d-grid">
                                    <button type="submit" className="btn btn-brand">Contact Me</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact