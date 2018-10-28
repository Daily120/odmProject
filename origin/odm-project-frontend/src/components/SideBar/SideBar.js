import React from 'react';
import './SideBar.css';
import './animate.css';

const bounce = () => {
    let element = document.getElementsByClassName('mennenger')[0];
    element.classList.toggle('animated');
    element.classList.toggle('infinite');
    element.classList.toggle('bounce');
}

const SideBar = ({ userName, onLogOut }) => {
    return (
        <div>
            <div>
                <a className="mennenger" onMouseEnter={bounce} onMouseLeave={bounce}>Mennenger</a>
                <ul className="navigation">
                    <li>{`Hello, ${userName}`}</li>
                    <li><a onClick={onLogOut} style={{cursor: 'pointer'}}>Log Out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;