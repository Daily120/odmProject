import React from 'react';
import './HomePageCards.css';
import Register from '../Register/Register';
import Signin from '../Signin/Signin';
import image from './img/aircraft.jpg';
import airplane from './img/secondair.jpg';

const HomePageCards = () => {
    return (
        <div className="homePageCardsBody">
            <h1 className="flyboy"> Hey flyboy! Glad to see you here </h1>
            <div className="wrapper">

                <div className="card" id="c0">
                    <Signin />
                </div>
                <div className="card" id="c1">
                    <Register />
                </div>
                <div className="card" id="c2">
                    <div className="aircraft" id="i2">
                    <img className="air" src={image} alt="aircraft"/>
                    </div>
                    <div className="story" id="s2">
                        <div className="info">
                            <h3>About Us</h3>
                            <p>Our Website provides you an information about polish aircrafts. If you are interested in this type of content, our doors are open. 
                               First time here? Just hover on the very right card and <strong>Sign up</strong> to get content. If you are an experienced customer of our content, just <strong>Sign in!</strong>
                            </p>

                        </div>
                    </div>
                </div>

                <div className="page">
                    <h4>Hover the card</h4>
                    <ul>
                        <li>
                            {"<<<"} </li> <li> >>>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default HomePageCards;