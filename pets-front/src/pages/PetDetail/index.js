import React from "react";
import { connect } from "react-redux";
import "./pet-detail.css";
import { FaUser } from 'react-icons/fa';

const PetDetail = (pet) => {
  let animal = pet.location.state.pet;
  return (
    <div>
      <div className="pet-detail">
        <div className="text-center">
          <img className="pet-image-detail" src={animal.image} />
        </div>
        <div className="pet-description">
          <span className="badge badge-success">{animal.category}</span>
          < br />
          {animal.species} • {animal.gender} • {animal.size}
          <div className="pet-info-box">
            <span>{animal.city}</span>
          </div>
          <p className="pet-date">Postado em {animal.date}</p>
        </div>
        <section style={{ margin: "10px" }}>

          <FaUser /> Maria:

          <div>{animal.details}</div>

        </section>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    pet: state.pet.cardSelected
  };
}

export default connect(mapStateToProps)(PetDetail);
