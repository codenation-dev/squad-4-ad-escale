import React, { Component } from 'react';
import SearchNavbar from '../../components/SearchNavbar'
import TypeListItem from '../TypeListItem'
import paw from '../../_assets/img/paw.svg'
import pawmedium from '../../_assets/img/paw-medium.svg'
import pawsmall from '../../_assets/img/paw-small.svg'


class SizeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            smallActive: false,
            mediumActive: false,
            bigActive: false
        }
    }

    onClickItem = (event) => {
        if (event.target.id === "small") {
            console.log(event.target);
            this.setState({
                smallActive: !this.state.smallActive,
                mediumActive: false,
                bigActive: false

            })
        }
        else if (event.target.id === "medium") {
            this.setState({
                mediumActive: !this.state.mediumActive,
                smallActive: false,
                bigActive: false
            })
        }
        else {
            this.setState({
                bigActive: !this.state.bigActive,
                mediumActive: false,
                smallActive: false
            })
        }

        this.props.onChange(event);
    }

    render() {
        return (
            <div className="d-flex flex-row">
                <TypeListItem
                    image={pawsmall}
                    text="Pequeno"
                    value="small"
                    isActive={this.state.smallActive}
                    onClick={this.onClickItem} />
                <TypeListItem
                    image={pawmedium}
                    text="Médio"
                    value="medium"
                    isActive={this.state.mediumActive}
                    onClick={this.onClickItem} />
                <TypeListItem
                    image={paw}
                    text="Grande"
                    value="big"
                    isActive={this.state.bigActive}
                    onClick={this.onClickItem} />
            </div>

        )
    }
}

export default SizeList; 