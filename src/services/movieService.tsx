// Функцію fetchMovies для виконання HTTP-запитів
// винесіть в окремий файл src/services/movieService.ts.
// Типізуйте її параметри, результат, який вона повертає,
// та відповідь від Axios.

import axios from 'axios';

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const URL = 'https://api.themoviedb.org/3';

export default function fetchMovies() {
  const fetchData = async () => {
    try {
      const axiosConfig = {
        method: 'get',
        url: URL,
        params: {
          // твої параметри
          userId: 1,
          status: 'active',
          page: 1,
        },
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      };
      const response = await axios(axiosConfig);
      return response.data.results;
    } catch (err) {
      console.log(err);
    } finally {
      console.log('fin');
    }
  };

  return (
    <div>
      <h1>Fetched Data: </h1>
      <pre> {JSON.stringify(fetchData, null, 2)} </pre>
    </div>
  );
}
