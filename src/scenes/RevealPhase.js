/**
 * Created by Henrik on 2017-11-18.
 */
import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import zeroCard from '../assets/cards/0-card.jpg';
import zeroFiveCard from '../assets/cards/05-card.jpg';
import oneCard from '../assets/cards/1-card.jpg';
import twoCard from '../assets/cards/2-card.jpg';
import fiveCard from '../assets/cards/5-card.jpg';
import eightCard from '../assets/cards/8-card.jpg';
import thirteenCard from '../assets/cards/13-card.jpg';
import twentyCard from '../assets/cards/20-card.jpg';
import oneHundredCard from '../assets/cards/100-card.jpg';
import coffeeCard from '../assets/cards/coffee-card.jpg';
import noCard from '../assets/cards/no-card.jpg';
import questionMarkCard from '../assets/cards/question-mark-card.jpg';

class RevealPhase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            card: zeroCard,
            animation: "animated zoomInDown",
            infoText: "",
            infoAnimation: ""
        };
    }

    componentWillMount(){
        this.handle();
    }

    handle(){
        var chosenCard;
        switch(this.props.selectedCard) {
            case 0:
                chosenCard = zeroCard;
                break;
            case 1:
                chosenCard = zeroFiveCard;
                break;
            case 2:
                chosenCard = oneCard;
                break;
            case 3:
                chosenCard = twoCard;
                break;
            case 4:
                chosenCard = fiveCard;
                break;
            case 5:
                chosenCard = eightCard;
                break;
            case 6:
                chosenCard = thirteenCard;
                break;
            case 7:
                chosenCard = twentyCard;
                break;
            case 8:
                chosenCard = oneHundredCard;
                break;
            case 9:
                chosenCard = questionMarkCard;
                break;
            case 10:
                chosenCard = coffeeCard;
                break;
            case 11:
                chosenCard = noCard;
                break;
            default:
                chosenCard = zeroCard;
        }

        this.setState({
            card: chosenCard
        });

        setTimeout(() => {
            this.setState({
                animation: "animated infinite pulse"
            });
        }, 1000);

        setTimeout(() => {
            this.setState({
                infoText: "To pick another card, click 'Start over'",
                infoAnimation: "animated fadeInDown"
            });
        }, 1500);
    }

    render() {
        return (
            <div className="App">
                <br/>
                <div className={this.state.animation}><img style={{margin: "auto", width: "22%"}} src={this.state.card} alt="Chosen card"/></div>
                <br/>
                <b className={this.state.infoAnimation}>{this.state.infoText}</b>
            </div>
        );
    }
}

RevealPhase.propTypes = {
    selectedCard: PropTypes.number,
};


export default RevealPhase;
