import React from 'react';
import './WikiPage.css';

const WikiPage = ({ data }) => {

 
        return (
            <div className="wikiInfo">
                <div className="imageHolder">
                    <img src={data.image} alt="Plane"/>
                </div>
                <p>
                    {data.messageBody}
                </p>
            </div>
        );
}

export default WikiPage;