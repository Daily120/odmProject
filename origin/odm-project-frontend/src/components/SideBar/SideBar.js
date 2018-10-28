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
                    <li>Hello, "Username"</li>
                    <li><a href="#">Log Out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;