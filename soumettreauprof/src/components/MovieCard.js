import React from 'react'
// individual movie card element
import {Routes , Route , Link , Outlet} from "react-router-dom";


const Singlemovie = ({userId}) => {
    return (
      <div>single movie {userId}</div>
    )
  }
const MovieCard = ({title , desc , posteUrl , rating , id}) => {
    <Routes>
        <Route path="/singlemovie" element={<Singlemovie filmId = {id}/>}></Route>
    </Routes>
    return (
    <>
        <Link to="singlemovie">
            <article className="movie">
                    <img src={posteUrl} alt={title} />
                    <h2>{title}</h2>
                    <h4>{desc}</h4> 
                    <span className="number">{rating}</span>
            </article>
        </Link>

        <Outlet/>
    
    </>
    )
}

export default MovieCard