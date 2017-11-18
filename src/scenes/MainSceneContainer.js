/**
 * Created by Henrik on 2017-11-18.
 */
import React, {Component} from 'react';
import '../App.css';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import SelectPhase from '../scenes/SelectPhase';
import chasLogo from '../assets/chas-logo-white-512.png';
import WaitingPhase from '../scenes/WaitingPhase';
import { Switch, Route } from 'react-router-dom'


class MainSceneContainer extends Component {
    render() {
        return (
            <div className="App">
                <Grid fluid={true}>
                    <header className="App-header">
                        <Row className="show-grid">
                            <Col xs={6} md={4}><img style={{width: "20%"}} src={chasLogo}/></Col>
                            <Col xs={6} md={4}></Col>
                            <Col xsHidden md={4}>
                                <Button bsStyle="primary" onClick={() => console.log(null)}>Play now!</Button>
                            </Col>
                        </Row>
                    </header>
                    <Row className="showGrid">
                        <br/>
                    </Row>
                    <Row className="showGrid">
                        <Switch>
                            <Route exact path='/' component={SelectPhase}/>
                            <Route exact path='/waitingphase' component={WaitingPhase}/>
                        </Switch>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default MainSceneContainer;
