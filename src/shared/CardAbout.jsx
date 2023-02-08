import PropTypes from "prop-types"

function CardAbout({ item }) {

    return (
        <div data-aos="fade-up" data-aos-delay="300">
            <div className="bg-base p-4 rounded-4 shadow-effect">
                <h5>{item.area}</h5>
                <p className="text-brand fw-bold">{item.title} ({item.yearstartend})</p>
                <p className="mt-2">{item.info}</p>
            </div>
        </div>
    )
}

CardAbout.propTypes = {
    item: PropTypes.object.isRequired,
}

export default CardAbout