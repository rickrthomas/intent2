import React from 'react';
import {Link } from 'react-router-dom';

const Disclaimer = () => {
return (
<div className="Disclaimer container">
    <div className="flow-text">
        <h1>Disclaimer</h1>
        <ul>
            <h4>Posting sensitive information</h4>
            <li>This site is public so any information you post will be available to anyone logged in to the Intent WebApp.
            </li>
            <h4>Disclaimer 2</h4>
            <li>Here is where disclaimer text will go.
            </li>
            <h4>Disclaimer 3</h4>
            <li>Here is where disclaimer text will go.
            </li>
            <h4>Disclaimer 4</h4>
            <li>Here is where disclaimer text will go.
            </li>
        </ul>
    </div>
    <Link className="btn waves-effect waves-light" to="/create" >Request Healing</Link>
    <p></p>
</div>
);
};

export default Disclaimer;