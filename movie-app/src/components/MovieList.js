// importing in bootstrap and others stuff
import 'bootstrap/dist/css/bootstrap.css';
// importing in the movies json files
import {movies} from "../data"
// the single movie card
import MovieCard from "./MovieCard";
// importing in the filter by title components
import Filter from './Filter';
const MovieList = () => {
  return (
    <>
    {/* using the commponent */}
      <Filter/>
    <div className="movielist">
        {movies.map((movie) => {
          // passing in the props
          return <MovieCard id={movie.id} title={movie.title} desc={movie.desc} posteUrl={movie.posteUrl} rating={movie.rating}/>
        })}
    </div>
    </>
  )
}

export default MovieList