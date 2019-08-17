import React, { Component } from 'react';
import SearchNavbar from '../../components/SearchNavbar'
import TypeListItem from '../TypeListItem'
import dog from '../../_assets/img/dog.svg'
import cat from '../../_assets/img/cat.svg'
import bird from '../../_assets/img/bird.svg'
import rabbit from '../../_assets/img/rabbit.svg'
import rodent from '../../_assets/img/rodent.svg'

class SpeciesList extends Component {
    render() {
        return (
            <div className="d-flex flex-row">
                <TypeListItem image={dog} text="Cachorro"/>
                <TypeListItem image={cat} text="Gato"/>
                <TypeListItem image={bird} text="Pássaro"/>
                <TypeListItem image={rabbit} text="Coelho"/>
                <TypeListItem image={rodent} text="Roedor"/>
            </div>

        )
    }
}

export default SpeciesList; 