import './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import MovieGrid from './MovieGrid/MovieGrid.tsч';
import MovieModal from './MovieModal/MovieModal';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';

import fetchMovies from '../services/movieService';
import toast, { Toaster } from 'react-hot-toast';

import { useState } from 'react';
import { useEffect } from 'react';
import type { Movie } from '../types/movie';
//Якщо в результаті запиту масив фільмів порожній, виводьте повідомлення:

// const notify = () => toast('Here is your toast.');
// toast.error('No movies found for your request.');

// async function getMovies() {
//   const res = await fetchMovies('/movie/popular');
//   return res.data.results;
// }

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <SearchBar
        onSubmit={e => {
          console.log(e);
        }}
      />
      <MovieGrid movies={movies} onSelect={movie => console.log(movie)} />
      {/* <MovieModal /> */}
      {/* {isLoading && <Loader />} */}
      {/* {isError && <ErrorMessage />} */}
    </>
  );
}

export default App;
