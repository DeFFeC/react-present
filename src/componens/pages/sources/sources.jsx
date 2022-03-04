import React from 'react';
import './style.css'
import logo from './logo.svg'
import LeftPanel from '../../left-panel';
function Sources() {
    return (
    <div className="Introduction">

        <div className='block-info'>
            <div className="block-info-main">
                <h1>Sources</h1>
                <span>Wikipedia: <a className='her' href='https://ru.wikipedia.org/wiki/React'>https://ru.wikipedia.org/wiki/React</a></span><br/><br/>
                <span>React: <a className='her' href='https://ru.react.js.org/'>react.js.org</a></span>
            </div>
        </div>
        <div className='footer-panel'>
            <a className='btn-foot' href='/Difference' disabled></a>
            <img src={logo}/>
            <a className='btn-foot' href='/konc' disabled></a>
        </div>
    </div>
    );
}

export default Sources;