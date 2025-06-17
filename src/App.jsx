import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import Search from "./components/search";
import { fetchPopularMovies } from "./api/TMDB";

const App = () => {
  const [Movies, SetMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const Data = await fetchPopularMovies();
      SetMovies(Data);
    };
    loadMovies();
  }, []);

  return (
    <main className="px-4 w-full">
      <Header />
      <Search />
      <h2 className="text-white mb-15 text-3xl text-center">Popular</h2>

      <div className="flex flex-wrap gap-6 justify-center mb-14">
        {Movies.map((movie) => {
          return (
            <MovieCard 
              key={movie.id}
              img={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              title={movie.title}
              vote_average={movie.vote_average}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;
