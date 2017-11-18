/**
 * Created by Henrik on 2017-11-18.
 */
import React, {Component} from 'react';
import '../App.css';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import SelectPhase from '../scenes/SelectPhase';
import ChasLogo from '../assets/chas-logo-white-512.png';
import WaitingPhase from '../scenes/WaitingPhase';
import RevealPhase from '../scenes/RevealPhase';
import {withRouter, Switch, Route} from 'react-router-dom'


class MainSceneContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCard: 0,
            buttonTitle: "Play now!",
            path: "/waiting",
            animate: "animated infinite pulse",
        };
    }

    handleCardChange(e) {
        this.setState({
            currentCard: e
        })
    }

    nextPath(path) {

        if (path === "/waiting") {
            this.setState({
                buttonTitle: "Proceed to reveal",
                path: "/reveal",
                animate: "animated infinite pulse"
            });
            this.props.history.push(path);
        } else if (path === "/reveal") {
            this.setState({
                animate: "animated zoomOut",
                path: "/",
                buttonTitle: "Start over"
            });
            setTimeout(() => {
                this.props.history.push(path);
            }, 500);
        } else if (path === "/") {
            this.setState({
                buttonTitle: "Play now!",
                path: "/waiting",
                currentCard: 0,
            })
            this.props.history.push(path);
        }
    }


    render() {
        return (
            <div className="App">
                <Grid fluid={true}>
                    <header className="App-header">
                        <Row className="show-grid">
                            <Col xs={6} md={4}><img style={{width: "20%"}} src={ChasLogo}/></Col>
                            <Col xs={6} md={4}></Col>
                            <Col xsHidden md={4}>
                                <Button bsStyle="primary"
                                        onClick={() => this.nextPath(this.state.path)}>{this.state.buttonTitle}</Button>
                            </Col>
                        </Row>
                    </header>
                    <Row className="showGrid">
                        <br/>
                    </Row>
                    <Row className="showGrid">
                        <Switch>
                            <Route exact path='/'
                                   render={() => <SelectPhase selectedCard={(e) => this.handleCardChange(e)}/>}/>
                            <Route exact path='/waiting'
                                   render={() => <WaitingPhase selectedCard={this.state.currentCard}
                                                               animateStyle={this.state.animate}/>}
                                    />
                            <Route exact path='/reveal'
                                   render={() => <RevealPhase selectedCard={this.state.currentCard}/>}
                                   />}/>
                        </Switch>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default withRouter(MainSceneContainer);
