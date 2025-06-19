import React from 'react'
import Hero from './components/Hero';
import { useState,useEffect } from 'react';
import Search from './components/Search';
import { fetchPopularMovies, searchMovies } from "./api/TMDB";
import MovieCard from "./components/MovieCard";
import Navbar from './components/Navbar';


const LandingPage = () => {
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
    if (e.key === "Enter" && searchQuery.trim()) {
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
    <main className="px-4 w-full pt-20">
      <Navbar/>
       <Hero />
       
       <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onKeyUp={handleSearch}
        />

        <h2 className="text-white mb-15 text-3xl text-center">
          {searchQuery.trim() ? "Search Results" : "Popular"}
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
  )
}

export default LandingPage