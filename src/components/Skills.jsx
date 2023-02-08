import React from 'react'
import '../assets/css/style.css'
import { useContext } from 'react'
import HomeContext from '../context/HomeContext'
import CardSkills from '../shared/CardSkills'

function Skills() {

    const { skillsContent } = useContext(HomeContext)

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

                    
                        {skillsContent.filter(skill => skill.category === "Programming").map((item) => (
                            <CardSkills
                                key={item.id}
                                item={item}
                            />
                        ))}


                    </div>
                    {/* <!-- //Programming --> */}

                    {/* <!-- Editing Platforms --> */}
                    <div className="row pb-4 mt-5" data-aos="fade-up">
                        <div className="col-lg-5">
                            <h1>Editing/Designing Platforms</h1>
                        </div>
                    </div>

                    <div className="row">

                        {skillsContent.filter(skill => skill.category === "Photo Editing").map((item) => (
                            <CardSkills
                                key={item.id}
                                item={item}
                            />
                        ))}

                    </div>
                    {/* <!-- //Editing Platforms --> */}


                </div>
            </section>
        </div>
    )
}

export default Skills