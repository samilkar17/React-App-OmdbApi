import React, { Component } from "react";
import PropTypes from "prop-types";
import { BotonAtras } from "./BotonAtras";
import "./Detalle.css";

const API_KEY = "4859781";
class Detalle extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };
  state = { pelicula: {} };

  fetchPelicula({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((pelicula) => {
        console.log({ pelicula });
        this.setState({ pelicula });
      });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchPelicula({ id });
  }
  render() {
    const {
      Title,
      Actors,
      Country,
      Released,
      Type,
      imdbRating,
      Poster,
    } = this.state.pelicula;
    return (
      <div className="Detail">
        <div className="Detail__card">
          <div className="Detail__column Detail__column_img">
            <img
              src={Poster}
              alt={Title}
              className="Detail__poster Detail__poster_blured"
            />
            <img src={Poster} alt={Title} className="Detail__poster" />
          </div>
          <div className="Detail__column Detail__description">
            <h2 className="Detail__title title">{Title}</h2>
            <div className="tags">
              <p className="tag is-rounded">{Released}</p>
              <p className="tag is-rounded">{Country}</p>
              <p className="tag is-rounded">{Type}</p>
            </div>
            <p>
              <strong>IMDB Rating:</strong>{" "}
              <span className="tag is-warning">
                <i className="fas fa-star Detail__star"></i> {imdbRating}
              </span>
            </p>
            <p>
              <strong>Actors:</strong>
              <br />
              {Actors}
            </p>
            <div className="Detail__footer">
              <BotonAtras />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detalle;
