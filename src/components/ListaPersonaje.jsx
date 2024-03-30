import { useEffect, useState } from "react";
import Personaje from "./Personaje";

function NavPage({ page, setPage }){
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {page}</p>

      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
    </header>
  );
}
function ListaPersonaje() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]); //Hola
  return (
    <div className="container"> 
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="row">
          {characters.map((personaje) => {
            return (
              <div className="col-md-4" key={personaje.id}>
                <Personaje personaje={personaje} key={personaje.id}
                name={personaje.name}
                origin={personaje.origin}
                image={personaje.image}/>
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
export default ListaPersonaje;
