import React from "react";
import { connect } from "react-redux";
import "./pet-detail.css";

const PetDetail = ({ pet }) => {
  return (
    <div>
      <div className="pet-detail">
        <div className="text-center">
          <img className="pet-image-detail" src={pet.image} />
        </div>
        <div className="pet-description">
          Raça {pet.gender} Filhote {pet.size}
          <div className="pet-info-box">
            <span>{pet.city}</span>
            <span className="badge badge-success">{pet.category}</span>
          </div>
        </div>
        <section>
          {pet.details}
          In eu sapien lectus. Donec euismod facilisis congue. Mauris facilisis
          fermentum vulputate. Pellentesque pellentesque dictum arcu, nec
          maximus augue cursus vitae. Praesent eget enim porttitor, malesuada
          est in, efficitur quam. Integer commodo convallis ullamcorper.
          Praesent commodo nisi quis sollicitudin blandit. Quisque convallis
          interdum hendrerit.
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
