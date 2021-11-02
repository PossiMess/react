import React from "react";
import PropTyeps from "prop-types";

function Movie({id, title, summray, poster, year}){
    return (
        <div>
            <h3>{title}</h3>
            <h4>{year}</h4>
            <p>{summray}</p>
        </div>
    )
}

Movie.propTypes = {
    id: PropTyeps.number.isRequired,
    title : PropTyeps.string.isRequired,
    summray : PropTyeps.string.isRequired,
    poster : PropTyeps.string.isRequired,
    year : PropTyeps.number.isRequired,
}
export default Movie;