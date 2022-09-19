import React from 'react';
import './App.css';
import Banner from './Banner';
import Row from './Row';
import requests from './request';
import Nav from './Nav';
const base_url="https://api.themoviedb.org/3";

function App() {
  return (
    <div style={{backgroundColor: "#111"}}>
      <Nav />
     {/* d5063cd0f216da98b67fd093693f9872 */}
   {/* https://api.themoviedb.org/3/movie/550?api_key=d5063cd0f216da98b67fd093693f9872 */ }
 <Banner fetchUrl={`${base_url}${requests.fetchNetflixOriginals}`}/>
    <Row title="Netflix Orginals" fetchUrl={`${base_url}${requests.fetchNetflixOriginals}`} isLarge={true}/>
    <Row title="Trending Now" fetchUrl={`${base_url}${requests.fetchTrending}`}/>
    <Row title="Top Rated" fetchUrl={`${base_url}${requests.fetchTopRated}`}/>
    <Row title="Action Movies" fetchUrl={`${base_url}${requests.fetchActionMovies}`}/>
    <Row title="Comedy Movies" fetchUrl={`${base_url}${requests.fetchComedyMovies}`}/>      
    <Row title="Horror Movies" fetchUrl={`${base_url}${requests.fetchHorrorMovies}`}/>
    <Row title="Romantic Movies" fetchUrl={`${base_url}${requests.fetchRomanceMovies}`}/>
    <Row title="Documentaries" fetchUrl={`${base_url}${requests.fetchDocumentaries}`}/>
    </div>
  );
}

export default App;

