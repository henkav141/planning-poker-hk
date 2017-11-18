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
                <br/>
                <div className={this.props.animateStyle}><img style={{margin: "auto", width: "18%"}} src={backCard}/></div>
                <br/>
                <b>Wait for the other players to pick their card before you proceed.</b>
                <br/>
                <b>When you are ready, click "Proceed to reveal" to reveal your card.</b>
            </div>
        );
    }
}

WaitingPhase.propTypes = {
    selectedCard: PropTypes.number,
    animateStyle: PropTypes.string
};


export default WaitingPhase;
