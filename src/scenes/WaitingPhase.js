/**
 * Created by Henrik on 2017-11-18.
 */
import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import backCard from '../assets/cards/back-card.jpg';

class WaitingPhase extends Component {
    render() {
        return (
            <div className="App">
                This is the Waiting Phase
                <br/>
                <div><img style={{margin: "auto", width: "22%"}} src={backCard}/></div>
                <br/>
                {this.props.selectedCard}
            </div>
        );
    }
}

WaitingPhase.propTypes = {
    selectedCard: PropTypes.number
};


export default WaitingPhase;
