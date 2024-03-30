function Personaje({personaje}) {
  return (
    <div className="text-center p-5">
      <h3>{personaje.name}</h3>
      <img src={personaje.image} alt={personaje.name} className="img-fluid rounded-pill"/>
      <p>{`Origin: ${personaje.origin && personaje.origin.name}`}</p>
    </div>
  );
}

export default Personaje;
