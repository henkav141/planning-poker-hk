/**
 * Created by Henrik on 2017-11-18.
 */
import React, {Component} from 'react';
import '../App.css';
import '../popup.css';
import {Button, Grid, Row} from 'react-bootstrap';
import CardCarousel from '../components/CardCarousel';
import Popup from 'react-popup';
import PropTypes from 'prop-types';


var helpText = "Pick a card from the slider and then click 'Play' when you are ready to proceed and plan with your friends. " +
    "Pick a card by dragging the deck or clicking the dots below the deck";

class SelectPhase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentCard: 0,
        };
    }

    handleCardChange(e) {
        this.setState({
            currentCard: e
        })

        this.props.selectedCard(e);
    }

    render() {
        return (
            <div className="App">
                <Grid className={this.props.animation} fluid={true}>
                    <Row className="showGrid">
                        <CardCarousel selectedCard={(e) => this.handleCardChange(e)}/>
                    </Row>
                    <Row className="showGrid">
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
                    closeOnOutsideClick={true}/>
            </div>
        );
    }
}

SelectPhase.propTypes = {
    selectedCard: PropTypes.func,
    animation: PropTypes.string
};

export default SelectPhase;
