import React, { Component } from 'react';
import SearchNavbar from '../../components/SearchNavbar'
import TypeListItem from '../TypeListItem'
import dog from '../../_assets/img/dog.png'
import cat from '../../_assets/img/cat.png'
import bird from '../../_assets/img/bird.png'
import rabbit from '../../_assets/img/rabbit.png'
import rodent from '../../_assets/img/rodent.png'

class SpeciesList extends Component {
    render() {
        return (
            <div className="d-flex flex-row">
                <TypeListItem image={dog} text="Cachorro"/>
                <TypeListItem image={cat} text="Gato"/>
                <TypeListItem image={bird} text="Pássaro"/>
                <TypeListItem image={rabbit} text="Coelho"/>
                <TypeListItem image={rodent} text="Hamster"/>
            </div>

        )
    }
}

export default SpeciesList; 