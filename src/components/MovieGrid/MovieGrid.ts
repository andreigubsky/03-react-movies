//Галерея повинна рендеритися лише тоді, 
// коли є які-небудь завантажені фільми.

import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";
interface MovieGridProps {
    onSelect: () => {};
    movies: Movie[];
}

export default function (onSelect: MovieGridProps, movies: MovieGridProps) {
    return (
        { movies> 0 && <ul className= { css.grid } onclick = { onSelect } >
        {/* Набір елементів списку з фільмами */

            movies.map((movie) => {

            })
        }

            </ul>
}
    );
}