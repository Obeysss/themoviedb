import React, { useEffect, useState } from "react";
import movie from "../../repositories/movie";
import { useParams } from "react-router-dom";
import ContentListComponent from "../../components/content/ContentListComponent";
import FilterComponent from "../../components/content/ContentFilterComponent";

export default function MoviePage() {
  const { title } = useParams();
  console.log(title);
  const [movieList, setMovieList] = useState([]);
  async function getMoviesByName(title) {
    const currentMovies = await movie.getMoviesByName(title);
    setMovieList(currentMovies);
  }

  useEffect(() => {
    getMoviesByName(title);
  }, []);

  console.log(movieList);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <FilterComponent />
        </div>
        <div className="col-8">
          <ContentListComponent movieList={movieList} />
        </div>
      </div>
    </div>
  );
}
