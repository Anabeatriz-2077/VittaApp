import { Link } from "react-router-dom";

import { useContext } from "react";

import { FavoritesContext } from "../../context/FavoritesContext";

import "./ProfessionalCard.css";

function ProfessionalCard({ professional }) {

  /*
  Context API
  */
  const { favorites, addFavorite } =
    useContext(FavoritesContext);

  return (
    <div className="card">

      <img
        src={professional.image}
        alt={professional.name}
      />

      <div className="card-body">

        <h3>{professional.name}</h3>

        <p>{professional.specialty}</p>

        <span>R$ {professional.price}/h</span>

        <p>⭐ {professional.rating}</p>

        <button
          onClick={() => addFavorite(professional)}
        >
          Favoritar
        </button>

        {/* Link para detalhes */}
        <Link to={`/professional/${professional.id}`}>
          Ver Perfil
        </Link>

      </div>
    </div>
  );
}

export default ProfessionalCard;