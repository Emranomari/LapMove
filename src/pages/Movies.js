import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = '26351d4fa37c5a559614b7352cde640d';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Popular Movies</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id} style={{ textDecoration: 'none', color: 'black' }}>
            <div style={{ width: '200px' }}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width="100%" />
              <h4>{movie.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
