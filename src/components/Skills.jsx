import React from 'react'
import '../assets/css/style.css'

function Skills() {
  return (
    <div>
        <section id="skills" className="full-height px-lg-5">
            <div className="container">

                {/* <!-- Programming --> */}
                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-5">
                        <h6 className="text-brand">SKILLS</h6>
                        <h1>Programming Skills</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mt-2 mb-2" data-aos="fade-up">
                        <div className="skills p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="lab la-html5"></i>
                            </div>
                            <h5 className="mt-4 mb-2">HTML5</h5>
                            <p>Hypertext Markup Language (HTML), the standard programming language for describing the
                                contents and appearance of Web pages.</p>
                            <a href="#" className="link-custom">Read More</a>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2 mb-2" data-aos="fade-up" data-aos-delay="400">
                        <div className="skills p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="lab la-css3-alt"></i>
                            </div>
                            <h5 className="mt-4 mb-2">CSS3</h5>
                            <p>Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the
                                styling and formatting of Web pages.</p>
                            <a href="#" className="link-custom">Read More</a>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2 mb-2" data-aos="fade-up" data-aos-delay="800">
                        <div className="skills p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="lab la-react"></i>
                            </div>
                            <h5 className="mt-4 mb-2">React</h5>
                            <p>React is a declarative, efficient, and flexible JavaScript library for building user
                                interfaces.</p>
                            <a href="#" className="link-custom">Read More</a>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-4 mt-3 mb-2" data-aos="fade-up">
                        <div className="skills p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="lab la-bootstrap"></i>
                            </div>
                            <h5 className="mt-4 mb-2">Bootstrap</h5>
                            <p>Bootstrap is a free, open source front-end development framework for the creation of
                                websites and web apps.</p>
                            <a href="#" className="link-custom">Read More</a>
                        </div>
                    </div>

                    <div className="col-md-4 mt-3 mb-2" data-aos="fade-up" data-aos-delay="400">
                        <div className="skills p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="lab la-java"></i>
                            </div>
                            <h5 className="mt-4 mb-2">Java Programming</h5>
                            <p>Java is a widely used object-oriented programming language and software platform that
                                runs on billions of devices.</p>
                            <a href="#" className="link-custom">Read More</a>
                        </div>
                    </div>

                    <div className="col-md-4 mt-3 mb-2" data-aos="fade-up" data-aos-delay="800">
                        <div className="skills p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="lab la-envira"></i>
                            </div>
                            <h5 className="mt-4 mb-2">Spring boot</h5>
                            <p>Spring Boot is an open source Java-based framework used to create a micro Service,
                                developed by Pivotal Team</p>
                            <a href="#" className="link-custom">Read More</a>
                        </div>
                    </div>
                </div>
                {/* <!-- //Programming --> */}

                {/* <!-- Editing Platforms --> */}
                <div className="row pb-4 mt-5" data-aos="fade-up">
                    <div className="col-lg-5">
                        <h1>Editing/Designing Platforms</h1>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-4 mt-2 mb-2" data-aos="fade-up">
                        <div className="skills p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="lab la-adobe"></i>
                            </div>
                            <h5 className="mt-4 mb-2">Adobe Photoshop</h5>
                            <p>Photoshop is an image creation, graphic design and photo editing software has image
                                editing features developed by Adobe.</p>
                            <a href="#" className="link-custom">Read More</a>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2 mb-2" data-aos="fade-up" data-aos-delay="400">
                        <div className="skills p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="lab la-figma"></i>
                            </div>
                            <h5 className="mt-4 mb-2">Figma</h5>
                            <p>Figma is a cloud-based design tool that is similar to Sketch in functionality and
                                features, but with big differences that make Figma better for team collaboration.</p>
                            <a href="#" className="link-custom">Read More</a>
                        </div>
                    </div>

                </div>
                {/* <!-- //Editing Platforms --> */}


            </div>
        </section>
    </div>
  )
}

export default Skills