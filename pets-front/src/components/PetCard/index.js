import React from "react";
import { Link } from "react-router-dom";
import "./pet-card.css";

function PetCard({ pet, onSelectedCard }) {
  return (
    <>
      <Link
        to={`/pet/${pet.id}`}
        key={pet.id}
        onClick={() => onSelectedCard(pet)}
      >
        <div className="card">
          <img className="pet-image" src={pet.image} />
          <div className="pet-info">
            <p className="pet-name">{pet.name}</p>
            <p className="pet-name">{pet.city}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PetCard;
