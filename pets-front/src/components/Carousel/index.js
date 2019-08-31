import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from "../../_assets/img/carousel1.png";
import carousel2 from "../../_assets/img/carousel2.png";
import carousel3 from "../../_assets/img/carousel3.png";

class MyCarousel extends Component {

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>Onde os animais de estimação encontram pessoas</h4>
                        <p>Encontre o dono do animalzinho perdido.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Conectamos você ao seu bichinho</h3>
                        <p>Encontre seu animal perdido.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Animais estão procurando pessoas</h3>
                        <p>Vários tipos de animais de estimação para adoção.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default MyCarousel