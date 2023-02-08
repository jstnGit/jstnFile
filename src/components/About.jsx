import React from 'react'
import { useContext } from 'react'
import '../assets/css/style.css'
import HomeContext from '../context/HomeContext'
import CardAbout from '../shared/CardAbout'

function About() {
    const { aboutContent } = useContext(HomeContext)

    return (
        <div>
            <section id="about" className="full-height px-lg-5">
                <div className="container">

                    <div className="row pb-4" data-aos="fade-up">
                        <div className="call-lg-8">
                            <h6 className="text-brand">About</h6>
                            <h1>My Education & Training</h1>
                        </div>
                    </div>
                    <div className="row gy-5">

                        {/* <!-- Education --> */}
                        <div className="col-lg-6">
                            <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">Education</h3>
                            <div className="row gy-4">
                                <div className="col-12">

                                    {aboutContent.filter(about => about.category === "Education").map((item) => (
                                        <CardAbout
                                            key={item.id}
                                            item={item}
                                        />
                                    ))}

                                    <div data-aos="fade-up" data-aos-delay="600">
                                        <div className="bg-base p-4 mt-4 rounded-4 shadow-effect">
                                            <h5>Bachelor of Science in Computer Science</h5>
                                            <p className="text-brand fw-bold">Taguig City University (2018-2022)</p>
                                            <p className="mt-2">Gen. Santos Avenue, Central Bicutan, Taguig city</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- //Education --> */}

                        {/* <!-- Experience --> */}
                        <div className="col-lg-6">
                            <h3 className="mb-4" data-aos="fade-up" data-aos-delay="600">Training</h3>
                            <div className="row gy-4">
                                <div className="col-12">
                                    {aboutContent.filter(about => about.category === "Experience").map((item) => (
                                        <CardAbout
                                            key={item.id}
                                            item={item}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <!-- //Experience --> */}

                    </div>

                </div>
            </section>
        </div>
    )
}

export default About