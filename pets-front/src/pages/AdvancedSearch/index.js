import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './advanced-search.css';
import { Redirect } from 'react-router-dom';
import SearchNavbar from '../../components/SearchNavbar'
import SpeciesList from '../../components/SpeciesList'
import GenderList from '../../components/GenderList'
import SizeList from '../../components/SizeList';
import InputLocalization from '../../components/InputLocalization';
import InputDate from '../../components/InputDate';
import ButtonSearch from '../../components/ButtonSearch'
import { MdClose } from "react-icons/md";
import { changeType, changeSize, changeGender, changeCategory, changeLocalization, changeStartDate, changeEndDate } from './actions';
import * as thunks from './thunk';

class AdvancedSearch extends Component {

  state = {
    redirect: false
  }

  onChangeType = (event) => {
    this.props.dispatch(changeType(event.value));
  }

  onChangeSize = (event) => {
    this.props.dispatch(changeSize(event.target.id));
  }

  onChangeGender = (event) => {
    this.props.dispatch(changeGender(event.target.id));
  }

  onChangeCategory = (event) => {
    this.props.dispatch(changeCategory(event.target.id));
  }

  onChangeLocalization = (event) => {
    this.props.dispatch(changeLocalization(event.target.value));
  }

  onChangeStartDate = (event) => {
    this.props.dispatch(changeStartDate(event.target.value));
  }

  onChangeEndDate = (event) => {
    this.props.dispatch(changeEndDate(event.target.value));
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(thunks.searchPets(this.props));

  }



  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    return (
      <>
        <div className="row">
          <div className="col-8">
            <p className="title">Busca Avançada</p>
          </div>
          <div className="col-4">
            <div onClick={this.setRedirect} className="close-button">
              <MdClose />
            </div>
          </div>
        </div>


        <SearchNavbar onChange={this.onChangeCategory}></SearchNavbar>
        <br></br>

        <p className="subtitle">Espécie</p>
        <SpeciesList onChange={this.onChangeType}
        />

        <hr className="horizontal-line" />
        <p className="subtitle">Gênero</p>
        <GenderList onChange={this.onChangeGender} />

        <hr className="horizontal-line" />
        <p className="subtitle">Porte</p>
        <SizeList onChange={this.onChangeSize} />

        <hr className="horizontal-line" />
        <p className="subtitle">Localização</p>
        <InputLocalization placeholder="Digite sua cidade" onChange={this.onChangeLocalization} />

        <hr className="horizontal-line" />
        <p className="subtitle">Data da postagem</p>
        <div className="row">
          <div className="col col-6">
            <InputDate placeholder="De" onChange={this.onChangeStartDate} />
          </div>
          <div className="col col-6">
            <InputDate placeholder="Até" onChange={this.onChangeEndDate} />
          </div>
        </div>

        <Link to="/pet-search/">
          <div className="div-button-search">

            <ButtonSearch />

          </div>
        </Link>

      </>

    )
  }
}

function mapStateToProps(state) {
  console.log(state.advancedSearch);
  return {
    pets: state.advancedSearch.pets,
    category: state.advancedSearch.category,
    type: state.advancedSearch.type,
    gender: state.advancedSearch.gender,
    size: state.advancedSearch.size,
    localization: state.advancedSearch.localization,
    startDate: state.advancedSearch.startDate,
    endDate: state.advancedSearch.endDate,
    success: state.advancedSearch.sucess
  }
}

export default connect(mapStateToProps)(AdvancedSearch); 