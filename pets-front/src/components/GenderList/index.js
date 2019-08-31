import React, { Component } from 'react';
import SearchNavbar from '../../components/SearchNavbar'
import TypeListItem from '../TypeListItem'
import male from '../../_assets/img/male.svg'
import female from '../../_assets/img/female.svg'


class GenderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maleActive: false,
            femaleActive: false
        }
    }

    onClickItem = (event) => {

        if (event.target.id === "male") {
            console.log(event.target);
            this.setState({
                maleActive: !this.state.maleActive,
                femaleActive: false
            })
        }
        else {
            this.setState({
                maleActive: false,
                femaleActive: !this.state.femaleActive
            })
        }

        this.props.onChange(event);
    }

    render() {
        return (
            <div className="d-flex flex-row">
                <TypeListItem
                    image={male}
                    text="Macho"
                    value="male"
                    isActive={this.state.maleActive}
                    onClick={this.onClickItem} />
                <TypeListItem
                    image={female}
                    text="Fêmea"
                    value="female"
                    isActive={this.state.femaleActive}
                    onClick={this.onClickItem} />
            </div>

        )
    }
}

export default GenderList; 