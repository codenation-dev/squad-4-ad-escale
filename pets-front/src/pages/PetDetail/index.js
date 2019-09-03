import React from "react";
import { connect } from "react-redux";
import "./pet-detail.css";
import { FaUser } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Redirect } from "react-router-dom";
import Moment from "react-moment";
import {
  handlePetGender,
  handlePetCategory,
  handlePetSpecie,
  handlePetSize
} from "../../_assets/helpers";

class PetDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    let animal = this.props.location.state.pet;
    return (
      <div>
        <div className="pet-detail">
          <div onClick={this.setRedirect} className="close-button">
            <MdClose />
          </div>
          <div className="text-center">
            <img className="pet-image-detail" src={animal.imageURL} />
          </div>
          <div className="pet-description">
            <span className="badge badge-success">
              {handlePetCategory(animal.category)}
            </span>
            <br />
            {handlePetSpecie(animal.species)} • {handlePetGender(animal.gender)}{" "}
            • {handlePetSize(animal.size)}
            <div className="pet-info-box">
              <span>{animal.name}</span>
              <span>{animal.city}</span>
            </div>
            <p className="pet-date">
              Postado em
              <Moment format="DD/MM/YYYY">{animal.insertDate}</Moment>
            </p>
          </div>
          <section style={{ margin: "10px" }}>
            <FaUser /> Maria:
            <div>
              <p className="pet-date">
                (11) 97856-9045 / maria_contato@gmail.com
              </p>
            </div>
            <div>{animal.detail}</div>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pet: state.pet.cardSelected
  };
}

export default connect(mapStateToProps)(PetDetail);
