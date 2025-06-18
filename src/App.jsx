import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { fetchPopularMovies, searchMovies } from "./api/TMDB";

const App = () => {
  const [Movies, SetMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const loadPopularMovies = async () => {
    try {
      const Data = await fetchPopularMovies();
      SetMovies(Data);
    } catch (error) {
      console.error("Error loading movies:", error);
      SetMovies([]);
    }
  };

  useEffect(() => {
    loadPopularMovies();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      loadPopularMovies();
    }
  }, [searchQuery]);

  const handleSearch = async (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      try {
        const data = await searchMovies(searchQuery);
        SetMovies(data);
      } catch (error) {
        console.error("Error searching movies:", error);
        SetMovies([]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#030014]">
      <Navbar />
      <main className="px-4 w-full pt-20">
        <Header />

        <Search 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          onKeyUp={handleSearch} 
        />

        <h2 className="text-white mb-15 text-3xl text-center">
          {searchQuery.trim() ? 'Search Results' : 'Popular'}
        </h2>

        <div className="flex flex-wrap gap-6 justify-center mb-14">
          {Movies && Movies.length > 0 ? (
            Movies.map((movie) => (
              <MovieCard
                key={movie.id}
                img={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                title={movie.title}
                vote_average={movie.vote_average}
              />
            ))
          ) : (
            <p className="text-white">No movies found</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
