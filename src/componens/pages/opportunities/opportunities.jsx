import React from 'react';
import './style.css'
import logo from './logo.svg'
import LeftPanel from '../../left-panel';
function Opportunities() {
    return (
    <div className="Introduction">
        <div className='block-info'>
            <div className="block-info-main">
                <h1>Opportunities</h1>
                <span>Properties are passed from parent components to child components. Components receive properties as a set of immutable values, so a component cannot directly change properties, but can cause changes through callback functions. Such a mechanism is called "properties down, events up".<br/><br/>React uses a virtual DOM. React creates a cache structure in memory, which allows you to calculate the difference between the previous and current interface states for optimal updating of the browser DOM. In this way, the programmer can work with the page, assuming that it is all updated, but the library independently decides which components of the page need to be updated.<br/><br/>JavaScript XML (JSX) is an extension of JavaScript syntax that allows you to use HTML-like syntax to describe the structure of the interface. As a rule, components are written using JSX, but it is also possible to use regular JavaScript. JSX reminds</span><br/><br/>
            </div>
        </div>
        <div className='footer-panel'>
            <a className='btn-foot' href='/application' disabled></a>
            <img src={logo}/>
            <a className='btn-foot' href='/structure' disabled></a>
        </div>
    </div>
    );
}

export default Opportunities;