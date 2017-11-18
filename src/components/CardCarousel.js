/**
 * Created by Henrik on 2017-11-17.
 */
import React, {Component} from 'react';
import Slider from 'react-slick';
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
import PropTypes from 'prop-types';

class CardCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 321,
                    settings: {
                        slidesToShow: 1,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="carousel-container">
                <Slider afterChange={(currentCard) => this.props.selectedCard(currentCard)} {...settings}>
                    <div><img className="carousel-image" src={zeroCard}/></div>
                    <div><img className="carousel-image" src={zeroFiveCard}/></div>
                    <div><img className="carousel-image" src={oneCard}/></div>
                    <div><img className="carousel-image" src={twoCard}/></div>
                    <div><img className="carousel-image" src={fiveCard}/></div>
                    <div><img className="carousel-image" src={eightCard}/></div>
                    <div><img className="carousel-image" src={thirteenCard}/></div>
                    <div><img className="carousel-image" src={twentyCard}/></div>
                    <div><img className="carousel-image" src={oneHundredCard}/></div>
                    <div><img className="carousel-image" src={questionMarkCard}/></div>
                    <div><img className="carousel-image" src={coffeeCard}/></div>
                    <div><img className="carousel-image" src={noCard}/></div>
                </Slider>
            </div>

        );
    }
};

CardCarousel.propTypes = {
    selectedCard: PropTypes.func
};

export default CardCarousel;