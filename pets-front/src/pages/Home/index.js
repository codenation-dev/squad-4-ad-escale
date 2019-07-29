import React, { Component } from 'react'
import PetCard from '../../components/PetCard'
import Header from '../../components/Header'



class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <PetCard></PetCard>
            </div>

        )
    }
}

export default Home; 