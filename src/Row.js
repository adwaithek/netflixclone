import React from 'react';
import { useState, useEffect } from 'react';
import instance from './baseUrl';
import axios from 'axios';
import './Row.css';

function Row({title, fetchUrl, isLargeRow}) {
    const [movies,setMovies] = useState([])
   const base_url = "https://image.tmdb.org/t/p/original/"

     //function to call api
    async function getData () {
      const outData =  await instance.get(fetchUrl)
    //   console.log(result.data.results);
       setMovies(outData.data.results)
    }

      useEffect( ()=>{
        getData()
      },[]
      )

      // console.log(movies);

  return (
     
   

    <div className='row'>
        <h1>{title}</h1>
        <div className='movies'>
            {
                movies.map(movie => (
                    <img
                    className={`movie ${isLargeRow && 'largeMovie'}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.original_title}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Row