import './App.module.css';
import SearchBar from './SearchBar/SearchBar';
// import fetchMovies from '../services/movieService';
// import MovieGrid from './MovieGrid/MovieGrid';
// import toast, { Toaster } from 'react-hot-toast';
//Якщо в результаті запиту масив фільмів порожній, виводьте повідомлення:

// const notify = () => toast('Here is your toast.');
// toast.error('No movies found for your request.');

// async function getMovies() {
//   const res = await fetchMovies('/movie/popular');
//   return res.data.results;
// }

function App() {
  return (
    <>
      <SearchBar onSubmit={() => {}} />
      {/* <MovieGrid />
      <Loader />
      <ErrorMessage />
      <MovieModal /> */}
    </>
  );
}

export default App;
