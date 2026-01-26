import './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import MovieGrid from './MovieGrid/MovieGrid';
import MovieModal from './MovieModal/MovieModal';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import fetchMovies from '../services/movieService';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import type { Movie } from '../types/movie';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) return;

    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies(query);
        console.log(data); // Посмотри в консоль: это массив [] или объект {}?
        setMovies(Array.isArray(data) ? data : data.results || []);
        setMovies(data);
      } catch (error) {
        toast.error('Please enter your search query.');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [query]);

  const handleSearch = (newQuery: string) => {
    setMovies([]);
    setQuery(newQuery);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} onSelect={movies => console.log(movies)} />
      {/* {isLoading && <Loader />} */}
      <Toaster />
      {/* <MovieModal /> */}
      {/* {isError && <ErrorMessage />} */}
    </>
  );
}

export default App;
