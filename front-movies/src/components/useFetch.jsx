import { useState, useEffect } from "react";

function useFetch(url) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  }, []);

  return { movies };
}

export default useFetch;
