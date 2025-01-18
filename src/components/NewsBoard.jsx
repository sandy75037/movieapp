import React, { useState, useEffect } from "react";
import "./style.css";

const NewsBoard = () => {
  const [data, setData] = useState([]);
  const API_KEY = "a289625e3b6aa212064abd8f43241964";
  const getData = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      const json = await response.json();
      console.log(json.results)
      setData(json.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

   useEffect(() => {
    getData();
  }, []);
return (
  <div className="container my-5">
    <h1 className="text-center mb-4">Movie Board</h1>
    <div className="row">
      {data.map((movie) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.id}>
          <div className="card h-100">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text text-muted">Rating: {movie.vote_average}</p>
              <p className="mt-auto small">Release Date: {movie.release_date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};


export default NewsBoard;
