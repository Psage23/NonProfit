import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Home = (props) => { 
    return (
    <div className="main_header">
        <Jumbotron fluid>
            <Container fluid>
            <img src="./images/main.jpg" alt="girl blowing bubbles"/>
            <h1 className="display-3">Poly Praise AZ</h1>
            <p className="lead">Spreading Kindness to all Arizona's Foster children, youth and families.</p>
            </Container>
        </Jumbotron>
    </div>
    );
};

export default Home;