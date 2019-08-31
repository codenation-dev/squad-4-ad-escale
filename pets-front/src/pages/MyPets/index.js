import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import PetCard from "../../components/PetCard";
import { connect } from "react-redux";
import { getMyPets as actionGetMyPets, selectCard } from "./actions";
import "./my-pets.css";

const MyPets = ({ myPets, handleSelectedCard }) => {
  const onSelectedCard = myPets => {
    handleSelectedCard(myPets);
  };

  return (
    <div className="div-center">
      <h2 className="page-title">Meus Pets Cadastrados</h2>
      <div className="all-cards">
        {myPets.map(pet => (
          <div className="my-pet-card">
            <PetCard key={pet.id} pet={pet} />
            <div className="buttons">
              <button className="delete">Excluir</button>
              <Link
                to={{
                  pathname: "/pet-create",
                  state: {
                    edit: true
                  }
                }}
              >
                <button className="edit">Editar</button>
              </Link>
            </div>
          </div>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyPets)
);
