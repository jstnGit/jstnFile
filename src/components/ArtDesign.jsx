import React from 'react'
import '../assets/css/style.css'
import { useContext } from 'react'
import HomeContext from '../context/HomeContext'
import CardImages from '../shared/CardImages'



function ArtDesign() {

    const { artDesignsContent } = useContext(HomeContext)

    // < Card >
    //                     <div className="card-custom-image rounded-4">
    //                         {/*   {artDesignsContent.map(image => <image key={image.id} src={image.sourece} />)}
    //                              <img className="card-img-top rounded-4" src={require(`../assets/images/digitArt/${artDesignsContent.source}`)}
    //                                 alt="..." /> */}
    //                         <img className="card-img-top rounded-4" src={images}
    //                             alt="..." />
    //                     </div>
    //                     <h5 className="mt-4 mb-2 card-title">{artDesignsContent.title}</h5>
    //                     <p className="card-text">{artDesignsContent.description}</p>
    //                     <p className="card-text">NOTE: Only the catfish was added, and I blended it in.</p>
    //                     <a href={artDesignsContent.link}
    //                         className="link-custom">See More</a>
    //                 </Card >


    // <Card>
    //                     <div className="card-custom-image rounded-4">
    //                         <img className="card-img-top rounded-4" src={GD}
    //                             alt="..."></img>
    //                     </div>
    //                     <h5 className="mt-4 mb-2 card-title">Graphite Dragon</h5>
    //                     <p className="card-text">My first dragon drawing</p>
    //                     <a href="https://drive.google.com/drive/folders/1ux0s72ZoEu3506xtDimPlzzlzJb6BSHU"
    //                         className="link-custom">See More</a>
    //                 </Card>

    //                 <Card>
    //                     <div className="card-custom-image rounded-4">
    //                         <img className=" card-img-top rounded-4" src={DvsO}
    //                             alt="..."></img>
    //                     </div>
    //                     <h5 className="mt-4 mb-2 card-title">Deku vs Overhaul</h5>
    //                     <p className="card-text">Fan art in the Anime series titled "My Hero Academia"</p>
    //                     <a href="https://drive.google.com/drive/folders/1ux0s72ZoEu3506xtDimPlzzlzJb6BSHU"
    //                         className="link-custom">See More</a>
    //                 </Card>

    //                 <Card>
    //                     <div className="card-custom-image rounded-4">
    //                         <img className="card-img-top rounded-4" src={OldChurch}
    //                             alt="..."></img>
    //                     </div>
    //                     <h5 className="mt-4 mb-2 card-title">Old Church</h5>
    //                     <p className="card-text">Just an old church"</p>
    //                     <a href="https://drive.google.com/drive/folders/1ux0s72ZoEu3506xtDimPlzzlzJb6BSHU"
    //                         className="link-custom">See More</a>
    //                 </Card>

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
                        
                        {artDesignsContent.filter(image => image.category === "digitArt").map((item) => (
                            <CardImages
                                key={item.id}
                                item={item}
                            />
                        ))}

                    </div>

                </div>
                {/* <!-- //Digital Art --> */}

                {/* <!-- Traditional Art --> */}
                <div className="row pb-4 pt-5" data-aos="fade-up">
                    <div className="col-lg-5">
                        <h6 className="text-brand">Arts & Designs</h6>
                        <h1>Traditional Arts</h1>
                    </div>
                </div>

                <div className="row">

                    {artDesignsContent.filter(image => image.category === "traditionalArt").map((item) => (
                        <CardImages
                            key={item.id}
                            item={item}
                        />
                    ))}

                </div>

                {/* <!-- //Traditional Art --> */}
            </section>
        </div>
    )
}

export default ArtDesign