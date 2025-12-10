// Функцію fetchMovies для виконання HTTP-запитів 
// винесіть в окремий файл src/services/movieService.ts. 
// Типізуйте її параметри, результат, який вона повертає, 
// та відповідь від Axios.

import axios from 'axios';
import { useState, useEffect } from "react";
const token = import.meta.env.VITE_TMDB_TOKEN;



export default function fetchMovies() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const axiosConfig = {
                    method: 'get',
                    url: 'https://api.themoviedb.org/3',
                    params: {
                        // твої параметри
                        userId: 123,
                        status: 'active'
                    },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
                const response = await axios(axiosConfig);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }

        }
        fetchData();
    }, []);
    if (loading) return ('loading');
    if (error) return ('error');
    return (
        <div>
        <h1>Fetched Data: </h1>
            < pre > { JSON.stringify(data, null, 2) } </pre>
            </div>
    );
}