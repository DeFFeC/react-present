import React from 'react';
import './style.css'
import logo from './logo.svg'
import LeftPanel from '../../left-panel';
function Application() {
    return (
    <div className="Introduction">
        <div className='block-info'>
            <div className="block-info-main">
                <h1>Application</h1>
                <span>React can be used in many cases: a large or small project (since it is easy to speed up), a phone application or for a PC, a light web game, a user interface, the same presentation that you are watching (it is completely made on React).</span><br/><br/>
            </div>
        </div>
        <div className='footer-panel'>
            <a className='btn-foot' href='/introduction' disabled></a>
            <img src={logo}/>
            <a className='btn-foot' href='/opportunities' disabled></a>
        </div>
    </div>
    );
}

export default Application;