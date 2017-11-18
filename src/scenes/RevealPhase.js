/**
 * Created by Henrik on 2017-11-18.
 */
/**
 * Created by Henrik on 2017-11-18.
 */
import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';


class RevealPhase extends Component {
    render() {
        return (
            <div className="App">
                This is the Reveal Phase
                <br/>
                {this.props.selectedCard}
            </div>
        );
    }
}

RevealPhase.propTypes = {
    selectedCard: PropTypes.number
};


export default RevealPhase;
