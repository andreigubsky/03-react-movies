import './App.css';
import SearchBar from './SearchBar/SearchBar';
import fetchMovies from '../services/movieService';
import MovieGrid from './MovieGrid/MovieGrid';

//Якщо в результаті запиту масив фільмів порожній, виводьте повідомлення:
toast.error('No movies found for your request.');

async function getMovies() {
  const res = await fetchMovies('/movie/popular');
  return res.data.results;
}

function App() {
  return (
    <>
      <SearchBar omSubmit={handleSubmit} />
      <MovieGrid />
      <Loader />
      <ErrorMessage />
      <MovieModal />
    </>
  );
}

export default App;
