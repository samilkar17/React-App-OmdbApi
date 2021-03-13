import React, { Component } from "react";
import "./SearchForm.css";

const API_KEY = "4859781";
class Buscador extends Component {
  state = {
    buscarPelicula: "",
  };
  handleChange = (e) => {
    this.setState({ buscarPelicula: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { buscarPelicula } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${buscarPelicula}`)
      .then((res) => res.json())
      .then((results) => {
        const { Search = [], totalResults = "0" } = results;
        console.log({ Search, totalResults });
        this.props.onResults(Search);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="SearchForm__inputContainer">
          <input
            className="SearchForm__input has-text-link"
            onChange={this.handleChange}
            type="text"
            placeholder="Hey, intenta Buscar 'Dead Pool'"
          />
          <button className="SearchForm__submit has-text-link">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default Buscador;
