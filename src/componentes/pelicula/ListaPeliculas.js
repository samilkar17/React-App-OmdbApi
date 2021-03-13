import React, { Component } from "react";
import PropTypes from "prop-types";
import Pelicula from "./Pelicula";
import "../Home/Home.css";

class ListaPeliculas extends Component {
  static propTypes = {
    peliculas: PropTypes.array,
  };
  render() {
    const { peliculas } = this.props;
    return (
      <div className="Home__results">
        {peliculas.map((peli) => {
          return (
            <Pelicula
              key={peli.imdbID}
              id={peli.imdbID}
              title={peli.Title}
              year={peli.Year}
              poster={peli.Poster}
            />
          );
        })}
      </div>
    );
  }
}

export default ListaPeliculas;
