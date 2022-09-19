import React, { useEffect,useState } from 'react'

const nbase_urel="https://image.tmdb.org/t/p/original/";

export default function Row(props) {
    const [Movies,setMovies]=useState([])
useEffect(()=>{
    async function fetchData(){
        
        // const request= await props.fetchUrl;
        // console.log(request)
        
        const res = await fetch(props.fetchUrl);
        const request = await res.json();
        setMovies(request.results)
    //    console.log(request)

    }
    fetchData();
},[props.fetchUrl]);
  return (
    <div className='row'>
      <h2 style={{marginLeft: "10px"}}>{props.title}</h2>
      <div className="rowimages">
        {Movies.map(movie=>(
            <img className={`rowimage ${props.isLarge && "large"}`} key={movie.id} src={`${nbase_urel}${props.isLarge ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  )
}
