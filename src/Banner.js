import React, { useEffect, useState } from 'react'

export default function Banner(props) {
    const [Movie,setMovie]=useState([])
    useEffect(()=>{
        async function fetchData(){
        const res = await fetch(props.fetchUrl);
        const request = await res.json();
      
           
            setMovie( request.results[Math.floor(Math.random() * request.results.length-1)]);
       
    }
    fetchData();
    },[props.fetchUrl]);
    // function truncate(ste,n){
    //     return ste.length>n?ste.substr(0,n-1)+"...":ste;

    // }
 
  return (
    <header className="banner" style={{backgroundSize:"cover",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
    backgroundPosition:"center center"}}>
        <div className='bcontent'>
            <h1 className="btitle">
               { Movie?.title || Movie?.name}
            </h1>
            <div className="bu">
                <button className="bus">Play Now</button>
                <button className="bus">My List</button>
            </div>
            
                <h1 className='desc'>
                    {Movie?.overview  } 
                </h1>
            
        </div>
     
    <div className='banner--fadeBottom' style={{height: "7.4rem" }}/>
    </header>
  )
}
// function truncate(ste,n){
//     return ste.length>n?ste.substr(0,n-1)+"...":ste;

// }