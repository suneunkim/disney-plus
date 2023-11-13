import React from "react";
import "./MovieModal.css";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setDetailMovie,
}) => {
  return (
    <div className="container">
      <div className="wrapper-modal">
        <div className="modal">
          <span className="modal-close" onClick={() => setDetailMovie(false)}>
            X
          </span>

          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={`${title} image`}
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user__perc">100% for you </span>
              {release_date || first_air_date}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">평점: {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
