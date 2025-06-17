const MovieCard = ({ img, title, vote_average }) => {
  return (
    <div className="bg-light-100/5 p-5 flex flex-col rounded-2xl shadow-inner shadow-light-100/10 ">
      <div>
        <img className="rounded-lg" width={200} height={100} src={img} alt="" />
      </div>
      <div>
        <h4 className="text-white my-3">{title}</h4>
      </div>
      <div className="flex text-white items-center mt-3">
        <img src="/star.svg" alt="" />
        <p className="ml-2">{vote_average ? vote_average.toFixed(1) : NA}</p>
        <p className="ml-2 text-gray-500">&bull; Action &bull; Movie</p>
      </div>
    </div>
  );
};

export default MovieCard;
