import React from 'react';
import {Link } from 'react-router-dom';


const Instructions = () => {
return (
<div className="Instructions container">
    <div className="flow-text">
        <h1>Distance Healing Instructions</h1>
        <ul>
            <h4>1</h4>
            <li>Visualize divine light and love entering you and filling you.
                Believe this energy is within yourself and then you can radiate it outward.
            </li>
            <h4>2</h4>
            <li>Visualize the diverson you want to heal. Feel the divine light and love moving outward from you to that
                person. Do this from a state of mind of total relaxation and acceptance with no doubt of the
                effectiveness. Simply allowing the divine to do its work.
            </li>
            <h4>3</h4>
            <li>Visualize your loved one receiving love and light, filling every cell in their bodies. Visualize the
                energy bringing health, happiness, vitality and joy instantly and abundantly.
            </li>
            <h4>4</h4>
            <li>Hold the visualizations for a brief period. Take a break to help you focus intently, avoid being
                distracted and to help you avoid diluting your intention with unwanted feelings or thoughts.
            </li>
            <h4>5</h4>
            <li>Now that you've practiced and are familiar with how to heal from a distance. Choose a person from the Healing Circle to heal!</li>
            <p></p>
    <Link className="btn waves-effect waves-light" to="/" >Healing Circle</Link>
        </ul>
    </div>
    
    
    <p></p>
    <p></p>
</div>
);
};

export default Instructions;