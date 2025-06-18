const MovieCard = ({ img, title, vote_average }) => {
  return (
    <div className="group bg-light-100/5 p-5 flex flex-col rounded-2xl shadow-inner shadow-light-100/10 transition-all duration-300 hover:bg-light-100/10 hover:scale-105 hover:shadow-lg hover:shadow-light-100/20">
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="rounded-lg transition-transform duration-500 group-hover:scale-110"
          width={200}
          height={100}
          src={img && img !== "null" ? img : "public/no-movie.png"}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div>
        <h4 className="text-white my-3 max-w-[200px]">{title}</h4>
      </div>
      <div className="flex text-white items-center mt-3">
        <div className="flex items-center transition-transform duration-300 group-hover:scale-110">
          <img src="/star.svg" alt="Rating" className="w-5 h-5" />
          <p className="ml-2 font-medium">{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
        </div>
        <p className="ml-2 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">&bull; Action &bull; Movie</p>
      </div>
    </div>
  );
};

export default MovieCard;
