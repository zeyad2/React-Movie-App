import { useEffect, useRef } from 'react';

const MovieCard = ({ img, title, vote_average }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="group mb-10 bg-light-100/5 p-5 flex flex-col rounded-2xl shadow-inner shadow-light-100/10 
      transition-all duration-500 hover:bg-light-100/10 hover:scale-105 hover:shadow-lg hover:shadow-light-100/20
      opacity-0 translate-y-10 cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="rounded-lg transition-transform duration-700 group-hover:scale-110"
          width={200}
          height={100}
          src={img && img !== "null" ? img : "public/no-movie.png"}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div>
        <h4 className="text-white my-3 max-w-[200px] transition-all duration-300 group-hover:text-light-200">{title}</h4>
      </div>
      <div className="flex text-white items-center mt-3">
        <div className="flex items-center transition-all duration-500 group-hover:scale-110 group-hover:text-light-200">
          <img src="/star.svg" alt="Rating" className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
          <p className="ml-2 font-medium">{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
        </div>
        <p className="ml-2 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">&bull; Action &bull; Movie</p>
      </div>
    </div>
  );
};

export default MovieCard;
