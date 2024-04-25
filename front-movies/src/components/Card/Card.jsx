import "./Card.css";
import useFetch from "../useFetch";
import { useState } from "react";
import Modal from "../Modal/Modal";

function Card() {
  const { movies } = useFetch("http://localhost:3000/movies/");

  return (
    <div className="cards">
      {movies?.map((movie) => (
        <article key={movie.id} className="card">
          {" "}
          <header>
            <h1>{movie.title}</h1>
          </header>
          <picture>
            <img src={movie.poster} className="poster" />
          </picture>
          <section>
            <h2>{movie.title}</h2>
            <p>Año de lanzamiento: {movie.year}</p>
            <p>Director: {movie.director}</p>
            <p>Duración: {movie.duration} minutos</p>
            <p>Género: {movie.genre.join(", ")}</p>
            <p>Valoración: {movie.rate}/10⭐</p>{" "}
          </section>
          <button className="detail-button">Ver Detalles</button>
        </article>
      ))}
    </div>
  );
}

export default Card;
