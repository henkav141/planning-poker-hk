/**
 * Created by Henrik on 2017-11-17.
 */
import React, {Component} from 'react';
import Slider from 'react-slick';
import zeroCard from '../assets/cards/0-card.jpg';
import zeroFiveCard from '../assets/cards/05-card.jpg';
import oneCard from '../assets/cards/1-card.jpg';
import twoCard from '../assets/cards/2-card.jpg';

var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true
};

var backOfCard = "https://i.imgur.com/AOXbekl.jpg";

class CardCarousel extends Component {
    render() {
        return (
            <Slider {...settings}>
                <div><img style={{margin: "auto"}} src={zeroCard} /></div>
                <div><img style={{margin: "auto"}} src={zeroFiveCard} /></div>
                <div><img style={{margin: "auto"}} src={oneCard} /></div>
                <div><img style={{margin: "auto"}} src={twoCard} /></div>
                <div><img style={{margin: "auto"}} src={zeroCard} /></div>
                <div><img style={{margin: "auto"}} src={zeroFiveCard} /></div>
                <div><img style={{margin: "auto"}} src={oneCard} /></div>
                <div><img style={{margin: "auto"}} src={twoCard} /></div>
            </Slider>
        );
    }
};

export default CardCarousel;