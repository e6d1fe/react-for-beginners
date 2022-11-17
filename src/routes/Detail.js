import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
    console.log(json.data.movie);
    // console.log(Object.entries(json.data.movie).get("title"));
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          <MovieDetails
            id={movie.index}
            title={movie.title}
            genre={movie.genres}
            rating={movie.rating}
            runtime={movie.runtime}
            year={movie.year}
            fullDescription={movie.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
