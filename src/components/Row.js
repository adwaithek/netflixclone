import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../baseUrl'
import './Row.css'

function Row({isLargeRow,title,fetchUrl}) {
    // set movies state
    const[movies,setMovies]=useState([])
    

    async function fetchData(){
       const result = await instance.get(fetchUrl)
    //    console.log(result.data.results);
       setMovies(result.data.results)

    }

    useEffect(()=>{
        fetchData()
    },[])
    // console.log(movies);
    const base_url ="https://image.tmdb.org/t/p/original/";
  return (

    <div className='row'>
        <h1>{title}</h1>
        <div className='movies'>
            {
                movies.map(movie=>(
                    <img className='movie' src={`${base_url}${isLargeRow?movie.poster_path :movie.backdrop_path}`}></img>
                ))
            }
        </div>
    </div>
  )
}

export default Row