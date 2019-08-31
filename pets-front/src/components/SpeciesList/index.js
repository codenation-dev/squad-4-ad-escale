import React, { Component } from 'react';
import SearchNavbar from '../../components/SearchNavbar'
import TypeListItem from '../TypeListItem'
import dog from '../../_assets/img/dog.svg'
import cat from '../../_assets/img/cat.svg'
import bird from '../../_assets/img/bird.svg'
import rabbit from '../../_assets/img/rabbit.svg'
import rodent from '../../_assets/img/rodent.svg'

class SpeciesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dogActive: false,
            catActive: false,
            birdActive: false,
            bunnyActive: false,
            rodentActive: false
        }
    }

    onClickItem = (event) => {
        console.log('evento', event);

        if (event.target.id === "dog") {
            console.log(event.target);
            this.setState({
                dogActive: !this.state.dogActive,
                catActive: false,
                birdActive: false,
                bunnyActive: false,
                rodentActive: false
            })
        }
        else if (event.target.id === "cat") {
            this.setState({
                dogActive: false,
                catActive: !this.state.catActive,
                birdActive: false,
                bunnyActive: false,
                rodentActive: false
            })
        }
        else if (event.target.id === "bird") {
            this.setState({
                dogActive: false,
                catActive: false,
                birdActive: !this.state.birdActive,
                bunnyActive: false,
                rodentActive: false
            })
        }
        else if (event.target.id === "bunny") {
            this.setState({
                dogActive: false,
                catActive: false,
                birdActive: false,
                bunnyActive: !this.state.bunnyActive,
                rodentActive: false
            })
        }
        else {
            this.setState({
                    dogActive: false,
                    catActive: false,
                    birdActive: false,
                    bunnyActive: false,
                    rodentActive: !this.state.rodentActive
            })
        }

        this.props.onChange(event);
    }

    render() {
        return (
            <div className="d-flex flex-row">
                <TypeListItem
                    image={dog}
                    text="Cachorro"
                    value="dog"
                    isActive={this.state.dogActive}
                    onClick={this.onClickItem} />
                <TypeListItem
                    image={cat}
                    text="Gato"
                    value="cat"
                    isActive={this.state.catActive}
                    onClick={this.onClickItem} />
                <TypeListItem
                    image={bird}
                    text="Pássaro"
                    value="bird"
                    isActive={this.state.birdActive}
                    onClick={this.onClickItem} />
                <TypeListItem
                    image={rabbit}
                    text="Coelho"
                    value="bunny"
                    isActive={this.state.bunnyActive}
                    onClick={this.onClickItem} />
                <TypeListItem
                    image={rodent}
                    text="Roedor"
                    value="rodent"
                    isActive={this.state.rodentActive}
                    onClick={this.onClickItem} />
            </div>

        )
    }
}

export default SpeciesList; 