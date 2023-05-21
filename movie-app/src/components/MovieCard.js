import React from 'react'
// individual movie card element
const MovieCard = ({title , desc , posteUrl , rating , id}) => {
    return <article className="movie" key={id}>
        <img src={posteUrl} alt={title} />
        <h2>{title}</h2>
        <h4>{desc}</h4> 
        <span className="number">{rating}</span>
</article>
}

export default MovieCard