/**
 * Created by Henrik on 2017-11-18.
 */
import React, {Component} from 'react';
import '../App.css';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import CardCarousel from '../components/CardCarousel';
import chasLogo from '../assets/chas-logo-white-512.png';

class SelectPhase extends Component {
    render() {
        return (
            <div className="App">
                <Grid fluid={true}>
                        <header className="App-header">
                    <Row className="show-grid">
                        <Col xs={6} md={4}><img style={{width: "20%"}} src={chasLogo}/></Col>
                        <Col xs={6} md={4}><h1 className="App-title">Planning Poker</h1></Col>
                        <Col xsHidden md={4}>
                            <Button bsStyle="primary">Play!</Button>
                        </Col>
                    </Row>
                        </header>
                </Grid>

                <CardCarousel/>
            </div>
        );
    }
}

export default SelectPhase;
