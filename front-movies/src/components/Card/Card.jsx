import "./Card.css";
import useFetch from "../useFetch";

function Card() {
  const { movies } = useFetch("http://localhost:3000/movies/");

  return (
    <div className="cards">
      {movies?.map((movies) => (
        <article key={movies.id} className="card">
          {" "}
          <header>
            <h1>{movies.title}</h1>
          </header>
          <picture>
            <img src={movies.poster} className="poster" />
          </picture>
          <button className="detail-button">Ver Detalles</button>
        </article>
      ))}
    </div>
  );
}

export default Card;
