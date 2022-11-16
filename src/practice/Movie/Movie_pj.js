import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const Movie_pj = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const movieApi = async () => {
    try {
      const response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      );
      setMovie(response.data.data.movies);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    movieApi();
  }, []);
  console.log("영화", movie);

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <div>
          {movie.map((item) => (
            <Movie
              key={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movie_pj;
