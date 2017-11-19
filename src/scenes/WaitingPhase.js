/**
 * Created by Henrik on 2017-11-18.
 */
import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import backCard from '../assets/cards/back-card-black.jpg';

class WaitingPhase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            infoTextFirst: "",
            infoTextSecond: "",
            infoAnimationFirst: "",
            infoAnimationSecond: ""
        };
    }

    componentWillMount(){
        setTimeout(() => {
            this.setState({
                infoTextFirst: "Wait for the other players " +
                "to pick their card before you proceed.",
                infoAnimationFirst: "animated fadeInDown"
            });
        }, 800);

        setTimeout(() => {
            this.setState({
                infoTextSecond: "When you are ready, click 'Proceed to reveal' to reveal your card.",
                infoAnimationSecond: "animated fadeInDown"
            });
        }, 1600);
    }
    render() {
        return (
            <div className="App">
                <br/>
                <div className={this.props.animateStyle}><img className="img-waiting" src={backCard} alt="Waiting..."/></div>
                <br/>
                <b className={this.state.infoAnimationFirst}>{this.state.infoTextFirst}</b>
                <br/>
                <b style={{wordWrap: "break-word"}} className={this.state.infoAnimationSecond}>{this.state.infoTextSecond}</b>
            </div>
        );
    }
}

WaitingPhase.propTypes = {
    selectedCard: PropTypes.number,
    animateStyle: PropTypes.string
};

export default WaitingPhase;
