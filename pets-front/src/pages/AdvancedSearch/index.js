import React, { Component } from 'react';
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

class AdvancedSearch extends Component {

  state = {
    redirect: false
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

        <SearchNavbar></SearchNavbar>
        <br></br>
        <p className="subtitle">Espécie</p>
        <SpeciesList />
        <hr className="horizontal-line" />
        <p className="subtitle">Gênero</p>
        <GenderList />
        <hr className="horizontal-line" />
        <p className="subtitle">Porte</p>
        <SizeList />
        <hr className="horizontal-line" />
        <p className="subtitle">Localização</p>
        <InputLocalization placeholder="Digite sua cidade" />
        <hr className="horizontal-line" />
        <p className="subtitle">Data da postagem</p>
        <div className="row">
          <div className="col col-6">
            <InputDate placeholder="De" />
          </div>
          <div className="col col-6">
            <InputDate placeholder="Até" />
          </div>
        </div>

        <div className="div-button-search">
          <ButtonSearch />
        </div>
      </>

    )
  }
}

export default AdvancedSearch; 