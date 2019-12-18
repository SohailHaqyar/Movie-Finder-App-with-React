import React from 'react'
import Movie from './Movie';

const MovieList = ({movies}) => {
  return (
   <div className="container">
     <div className="row">
       <div className="col s12">
         {
           movies.map((movie,i) => {
             return (
               <Movie key={i} image={movie.poster_path}/>
             )
           })
         }
       </div>
     </div>
   </div>
  )
}

export default MovieList
