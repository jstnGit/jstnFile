import PropTypes from "prop-types"
import Card from "./Card"

function CardImages({ item }) {

    return (
        <Card>
            <div className="card-custom-image rounded-4">
                {/*   {artDesignsContent.map(image => <image key={image.id} src={image.sourece} />)}
                                     <img className="card-img-top rounded-4" src={require(`../assets/images/digitArt/${artDesignsContent.source}`)}
                                        alt="..." /> */}
                <img className="card-img-top rounded-4" src={require(`../assets/images/${item.category}/${item.source}`)}
                    alt="..." />
            </div>
            <h5 className="mt-4 mb-2 card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <a href={item.link}
                className="link-custom">See More</a>
        </Card>
    )
}

CardImages.propTypes = {
    item: PropTypes.object.isRequired,
}

export default CardImages