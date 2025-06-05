import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TMDB_API_KEY = "8ffdce2990f7c3c7705a494c64eb554c";

export default function TrendingSection() {
  const [movies, setMovies] = useState([]);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}`
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchTrending();
  }, []);

  const checkScrollPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    setAtStart(container.scrollLeft === 0);
    setAtEnd(
      container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1
    );
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-black-500 text-white pt-24 pb-16  mx-auto lg:max-w-6xl md:max-w-6xl px-5">
      <div className="absolute top-0 left-20 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 60"
        >
          <path
            fill="#000"
            d="M0,60 C480,-20 960,100 1440,0 L1440,60 L0,60 Z"
          ></path>
        </svg>
      </div>

      <div className="px-6 relative">
        <h2 className="text-3xl font-bold mb-6"> Trending Now</h2>
        {!atStart && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-80 hover:bg-opacity-90 p-3 rounded-full"
          >
            <ChevronLeft className="text-white w-8 h-8" />
          </button>
        )}

        {!atEnd && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 hover:bg-opacity-90 p-3 rounded-full"
          >
            <ChevronRight className="text-white w-8 h-8" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={checkScrollPosition}
          className="flex space-x-6 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-52 transform transition-transform duration-300 hover:scale-110 cursor-pointer group"
            >
              <div className="relative">
                <span className="absolute top-2 left-2 z-10 text-white text-4xl font-extrabold drop-shadow-lg">
                  {index + 1}
                </span>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/200x300?text=No+Image"
                  }
                  alt={movie.title}
                  className="rounded-xl shadow-lg group-hover:shadow-2xl"
                />
              </div>
              <p className="text-base text-center font-medium mt-2">
                {movie.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
