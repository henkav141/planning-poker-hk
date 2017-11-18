/**
 * Created by Henrik on 2017-11-18.
 */
import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';


class WaitingPhase extends Component {
    render() {
        return (
            <div className="App">
                This is the Waiting Phase
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
