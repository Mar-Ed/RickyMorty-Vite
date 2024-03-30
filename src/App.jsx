import ListaPersonaje from "./components/ListaPersonaje";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">API de Rick y Morty</h1>
      <ListaPersonaje />
    </div>
  );
}

export default App;
