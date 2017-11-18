/**
 * Created by Henrik on 2017-11-18.
 */
import React, {Component} from 'react';
import '../App.css';
import '../popup.css';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import CardCarousel from '../components/CardCarousel';
import chasLogo from '../assets/chas-logo-white-512.png';
import Popup from 'react-popup';;


var helpText = "Pick a card from the slider and then click 'Play' when you are ready to proceed and plan with your friends." +
    " " + "Pick a card by dragging or clicking the dots below the deck";

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
                            <Button bsStyle="primary">Play now!</Button>
                        </Col>
                    </Row>
                        </header>
                    <Row className="showGrid">
                        <br/>
                    </Row>
                    <Row className="showGrid">
                        <CardCarousel/>
                    </Row>
                    <Row className="showGrid">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </Row>
                    <Row className="showGrid">
                        <Button bsStyle="primary" onClick={() => Popup.alert(helpText, "Planning Poker", true)}>
                            Help <span className="glyphicon glyphicon-question-sign" aria-hidden="true"> </span>
                        </Button>
                    </Row>
                </Grid>
                <Popup
                    className="mm-popup"
                    btnClass="mm-popup__btn"
                    closeBtn={true}
                    closeHtml={null}
                    defaultOk="Ok"
                    defaultCancel="Cancel"
                    wildClasses={false}
                    closeOnOutsideClick={true} />
            </div>
        );
    }
}

export default SelectPhase;
