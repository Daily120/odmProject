import React from 'react';
import './SideBar.css';
import image from './img/asdf.jpg';
import './animate.css';

const bounce = () => {
    let element = document.getElementsByClassName('mennenger')[0];
    element.classList.toggle('animated');
    element.classList.toggle('infinite');
    element.classList.toggle('bounce');
}

const SideBar = () => {
    return (
        <div>
            <div>
                <a className="mennenger" onMouseEnter={bounce} onMouseLeave={bounce} href="">Mennenger</a>
                <ul className="navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Donation</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </div>
            <img src={image} id="App-logo-spin" alt="logo" />
        </div>
    )
}

export default SideBar;