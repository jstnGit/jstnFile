import React from 'react'
import '../assets/css/style.css'
import Catfish from '../assets/images/digitArt/1.jpg'
import SSC from '../assets/images/digitArt/2.jpg'
import Takodon from '../assets/images/digitArt/3.jpg'
import GD from '../assets/images/traditionalArt/1.jpg'
import DvsO from '../assets/images/traditionalArt/2.jpg'
import OldChurch from '../assets/images/traditionalArt/3.jpg'


function ArtDesign() {
    return (
        <div>
            <section id="artdesigns" className="full-height px-lg-5">
                <div className="container">

                    {/* <!-- Digital Art --> */}
                    <div className="row pb-4" data-aos="fade-up">
                        <div className="col-lg-5">
                            <h6 className="text-brand">Arts & Designs</h6>
                            <h1>Digital Arts</h1>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-4 mt-2 mb-2" data-aos="fade-up" data-aos-delay="300">
                            <div className="card-custom p-4 bg-base rounded-4 shadow-effect">
                                <div className="card-custom-image rounded-4">
                                    <img className="card-img-top rounded-4" src={Catfish}
                                        alt="..."></img>
                                </div>
                                <h5 className="mt-4 mb-2 card-title">CatFish</h5>
                                <p className="card-text">Catfish-themed uniform logo requested by the school</p>
                                <p className="card-text">NOTE: Only the catfish was added, and I blended it in.</p>
                                <a href="https://drive.google.com/drive/folders/1Qxv6uhjtg-eV5c7XmRPjmN-fx_cAEafK"
                                    className="link-custom">See More</a>
                            </div>
                        </div>

                        <div className="col-md-4 mt-2 mb-2" data-aos="fade-up" data-aos-delay="600">
                            <div className="card-custom p-4 bg-base rounded-4 shadow-effect">
                                <div className="card-custom-image rounded-4">
                                    <img className="card-img-top rounded-4" src={SSC}
                                        alt="..."></img>
                                </div>
                                <h5 className="mt-4 mb-2 card-title">Spider X Scorpion X Centipede</h5>
                                <p className="card-text">School project that aims to blend three different animals or insects
                                    into one</p>
                                <a href="https://drive.google.com/drive/folders/1Qxv6uhjtg-eV5c7XmRPjmN-fx_cAEafK"
                                    className="link-custom">See More</a>
                            </div>
                        </div>

                        <div className="col-md-4 mt-2 mb-2" data-aos="fade-up" data-aos-delay="900">
                            <div className="card-custom p-4 bg-base rounded-4 shadow-effect">
                                <div className="card-custom-image rounded-4">
                                    <img className="card-img-top rounded-4" src={Takodon}
                                        alt="..."></img>
                                </div>
                                <h5 className="mt-4 mb-2 card-title">Takodon</h5>
                                <p className="card-text">A client wanted a logo for their takoyaki shop.</p>
                                <a href="https://drive.google.com/drive/folders/1Qxv6uhjtg-eV5c7XmRPjmN-fx_cAEafK"
                                    className="link-custom">See More</a>
                            </div>
                        </div>

                    </div>

                </div>
                {/* <!-- //Digital Art --> */}

                {/* <!-- Traditional Art --> */}
                <div className="row pb-4 pt-5" data-aos="fade-up">
                    <div className="col-lg-5">
                        <h6 className="text-brand">Arts & Designs</h6>
                        <h1>Digital Arts</h1>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-4 mt-2 mb-2" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-custom p-4 bg-base rounded-4 shadow-effect">
                            <div className="card-custom-image rounded-4">
                                <img className="card-img-top rounded-4" src={GD}
                                    alt="..."></img>
                            </div>
                            <h5 className="mt-4 mb-2 card-title">Graphite Dragon</h5>
                            <p className="card-text">My first dragon drawing</p>
                            <a href="https://drive.google.com/drive/folders/1ux0s72ZoEu3506xtDimPlzzlzJb6BSHU"
                                className="link-custom">See More</a>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2 mb-2" data-aos="fade-up" data-aos-delay="600">
                        <div className="card-custom p-4 bg-base rounded-4 shadow-effect">
                            <div className="card-custom-image rounded-4">
                                <img className=" card-img-top rounded-4" src={DvsO}
                                    alt="..."></img>
                            </div>
                            <h5 className="mt-4 mb-2 card-title">Deku vs Overhaul</h5>
                            <p className="card-text">Fan art in the Anime series titled "My Hero Academia"</p>
                            <a href="https://drive.google.com/drive/folders/1ux0s72ZoEu3506xtDimPlzzlzJb6BSHU"
                                className="link-custom">See More</a>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2 mb-2" data-aos="fade-up" data-aos-delay="900">
                        <div className="card-custom p-4 bg-base rounded-4 shadow-effect">
                            <div className="card-custom-image rounded-4">
                                <img className="card-img-top rounded-4" src={OldChurch}
                                    alt="..."></img>
                            </div>
                            <h5 className="mt-4 mb-2 card-title">Old Church</h5>
                            <p className="card-text">Just an old church"</p>
                            <a href="https://drive.google.com/drive/folders/1ux0s72ZoEu3506xtDimPlzzlzJb6BSHU"
                                className="link-custom">See More</a>
                        </div>
                    </div>

                </div>

                {/* <!-- //Traditional Art --> */}
            </section>
        </div>
    )
}

export default ArtDesign