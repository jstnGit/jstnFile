import PropTypes from "prop-types"

function Card({ children }) {

    //     return (
    //     <div className={`card ${reverse && 'reverse'}`}>
    //         {children}
    //     </div>
    //   )

    return (
        <div className="col-md-4 mt-2 mb-2" data-aos="fade-up">
            <div className="card-custom p-4 bg-base rounded-4 shadow-effect">
                {children}
            </div>
        </div>
    )
}


Card.propTypes = {
    children: PropTypes.node.isRequired
}

export default Card