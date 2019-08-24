import React, { Component } from 'react';
import './profile.css';
import InputLine from '../../components/InputLine'
import InputLinePassword from '../../components/InputLinePassword'
import ButtonSubmit from '../../components/ButtonSubmit'
import { Container, Row, Col, Image } from 'react-bootstrap';
import ImageUploader from 'react-images-upload';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { picture: '', picturePreview: '' };
    }

    render() {
        
        return (
            <div className="div-center">
                <p className="p-title">Perfil</p>
                <form>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src="" roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                    <InputLine placeholder="Nome" /> <br />

                    <InputLine placeholder="Telefone" /><br />

                    <InputLine placeholder="E-mail" /><br />

                    <InputLinePassword placeholder="Senha" /><br />

                    <InputLinePassword placeholder="Confirme sua senha" /><br />

                    <ButtonSubmit />
                </form>
            </div >


        )
    }
}

export default Profile; 