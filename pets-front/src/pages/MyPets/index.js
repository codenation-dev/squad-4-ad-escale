import React, { Component } from "react";
import PetCard from "../../components/PetCard";
import { connect } from "react-redux";
import { getMyPets as actionGetMyPets, selectCard } from "./actions";

const MyPets = ({ myPets, handleSelectedCard }) => {
  const onSelectedCard = myPets => {
    handleSelectedCard(myPets);
  };

  console.log(myPets);
  return (
    <div className="div-center">
      <h2>Meus Pets Cadastrados</h2>
      <div className="all-cards">
        {myPets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    myPets: state.myPets.meuPet
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSelectedCard: myPets => dispatch(selectCard(myPets))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPets);
