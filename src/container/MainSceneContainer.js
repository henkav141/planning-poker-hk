/**
 * Created by Henrik on 2017-11-18.
 */
//tabortkommentar
import React, {Component} from 'react';
import '../App.css';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import SelectPhase from '../scenes/SelectPhase';
import ChasLogo from '../assets/chas-logo-white-512.png';
import WaitingPhase from '../scenes/WaitingPhase';
import RevealPhase from '../scenes/RevealPhase';
import {withRouter, Switch, Route} from 'react-router-dom'

//Main container class for holding the different scenes
class MainSceneContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { //Sets default states
            currentCard: 0,
            buttonTitle: "Play now!",
            path: "/waiting",
            animate: "",
            selectPhaseAnimation: "animated fadeInUp"
        };
    }

    handleCardChange(e) {
        this.setState({ //Sets the current card as the value of "currentCard"-state
            currentCard: e
        })
    }

    nextPath(path) {
        if (path === "/waiting") {//Sets the animation of the select scene to fade out and down
            this.setState({
                selectPhaseAnimation: "animated fadeOutDown"
            });
            setTimeout(() => { //Using timeout to set new states, mainly because new animations are being set to "animate"-state
                this.setState({
                    animate: "animated fadeIn",
                    buttonTitle: "Proceed to reveal",
                    path: "/reveal"
                });
                this.props.history.push(path); //Routes to new path
            }, 680);

            setTimeout(() => { //Sets a new state to "animate" after the first timeout
                this.setState({
                animate: "animated infinite pulse"
            });
            }, 850);
        } else if (path === "/reveal") {
            this.setState({ //Sets the state when transitioning to the reveal scene
                animate: "animated zoomOut",
                path: "/",
                buttonTitle: "Start over",
                selectPhaseAnimation: "animated fadeInUp"
            });
            setTimeout(() => {
                this.props.history.push(path);
            }, 500);
        } else if (path === "/") { //Sets the state for the transition to the select phase
            this.setState({
                buttonTitle: "Play now!",
                path: "/waiting",
                currentCard: 0,
                selectPhaseAnimation: "animated fadeInUp"
            })
            this.props.history.push(path);
        }
    }

    render() {
        return (
            <div className="App">
                <Grid className="testa" fluid={true}>
                    <header className="App-header">
                        <Row className="show-grid">
                            <Col xs={6} md={4}><img onClick={() => this.nextPath("/")} className="logo" src={ChasLogo} alt="Chas"/></Col>
                            <Col xs={6} md={4}></Col>
                            <Col xs={6} md={4}>
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
                                   render={() => <SelectPhase selectedCard={(e) => this.handleCardChange(e)}
                                                              animation={this.state.selectPhaseAnimation}/>}/>
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
