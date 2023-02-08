import PropTypes from "prop-types"
import Card from "./Card"

function CardSkills({ item }) {

    return (
        <Card>
            <div className="iconbox rounded-4">
                <i className={`lab la-${item.icon}`}></i>
            </div>
            <h5 className="mt-4 mb-2">{item.title}</h5>
            <p>{item.description}</p>
            <a href={item.link} className="link-custom">Read More</a>
        </Card>
    )
}

CardSkills.propTypes = {
    item: PropTypes.object.isRequired,
}

export default CardSkills