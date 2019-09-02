import React from "react";
import { Link } from "react-router-dom";
import "./pet-card.css";
import Moment from 'react-moment';

function PetCard({ pet, onSelectedCard }) {
  return (
    <>
      <Link to={{ pathname: `/pet/${pet.id}`, state: { pet } }} key={pet.id}>
        <div className="card">
          <img className="pet-image" src={pet.imageURL} />
          <div className="top-right">{pet.category}</div>
          <div className="pet-info">
            <p className="pet-name">{pet.species}</p>
            <p className="pet-name">{pet.city}</p>
            <p className="pet-date">Postado em 
             <Moment format="DD/MM/YYYY">
                {pet.date}
            </Moment></p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PetCard;
