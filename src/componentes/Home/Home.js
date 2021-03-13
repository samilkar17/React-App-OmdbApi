import React, { Component } from "react";
import { Titulo } from "../titulo/Titulo";
import Buscador from "../buscador/Buscador";
import ListaPeliculas from "../pelicula/ListaPeliculas";
import "./Home.css";
class Home extends Component {
  state = { usedSearch: false, results: [] };

  handleResults = (results) => {
    this.setState({ results, usedSearch: true });
  };

  renderResults() {
    return this.state.results.length === 0 ? (
      <p> Lo sentimos! no se encontro ninguna pelicula relacionada</p>
    ) : (
      <ListaPeliculas peliculas={this.state.results} />
    );
  }
  render() {
    return (
      <section className="Home">
        <div className="Home__container">
          <Titulo>Puedes buscar Peliculas, Series o VideoJuegos</Titulo>
          <div className="Home__form">
            <Buscador onResults={this.handleResults} />
          </div>
          <div className="Home__description">
            {this.state.usedSearch ? (
              this.renderResults()
            ) : (
              <small>Realiza una Busqueda</small>
            )}
          </div>
          <div className="Home__credits">
            <p>
              Hola! soy Sebastian Murillo y uso los servicios de{" "}
              <a
                href="https://www.omdbapi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OMDB API
              </a>{" "}
              para realizar las consultas
            </p>

            <small>
              <a
                href="https://www.udemy.com/aprendiendo-react/?couponCode=5_ANNIVERSARIO"
                target="_blank"
                rel="noopener noreferrer"
              >
                Si deseas Aprender sobre React, inscribite. el curso es
                gratuito!
              </a>
            </small>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
