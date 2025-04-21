import { Movie } from '../../types/movie';
import css from './MovieGrid.module.css';

interface MovieProps {
    movies: Movie[];
    onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieProps) {
    return (
        <ul className={css.grid}>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <div className={css.card}>
                        <img
                            className={css.image}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            loading="lazy"
                            onClick={() => onSelect(movie)}
                        />
                        <h2 className={css.title}>{movie.title}</h2>
                    </div>
                </li>
            ))}
        </ul>
    );
}
