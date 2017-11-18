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

            beforeChange: function (currentSlide, nextSlide) {
                console.log('before change', currentSlide, nextSlide);
            }
        };


        return (
            <div style={{width:"98%"}}>
                <Slider afterChange={(currentCard) => this.props.selectedCard(currentCard)} {...settings}>
                    <div><img style={{margin: "auto", width: "70%"}} src={zeroCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={zeroFiveCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={oneCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={twoCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={fiveCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={eightCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={thirteenCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={twentyCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={oneHundredCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={questionMarkCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={coffeeCard}/></div>
                    <div><img style={{margin: "auto", width: "70%"}} src={noCard}/></div>
                </Slider>
            </div>

        );
    }
};

CardCarousel.propTypes = {
    selectedCard: PropTypes.func
};

export default CardCarousel;