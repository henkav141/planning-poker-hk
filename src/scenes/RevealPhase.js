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
        })
    }

    render() {
        return (
            <div className="App">
                This is the Reveal Phase
                <br/>
                <div><img style={{margin: "auto", width: "22%"}} src={this.state.card}/></div>
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
