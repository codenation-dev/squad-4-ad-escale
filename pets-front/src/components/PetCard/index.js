import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./pet-card.css";

function PetCard({ pet, onSelectedCard }) {
  return (
    <>
      <Link to={`/pet-detail/${pet.id}`} key={pet.id}>
        <div className="card">
          <img className="pet-image" src={pet.image} />
          <div className="pet-info">
            <p className="pet-name">{pet.pet}</p>
            <p className="pet-name">{pet.city}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PetCard;
