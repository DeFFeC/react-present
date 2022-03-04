import React, { useState } from 'react';
import './style.css'
import logo from './logo.svg'
import LeftPanel from '../../left-panel';
function Konc() {
    return (
    <div className="Introduction">
        <LeftPanel/>
        <div className='block-info'>
            <div className="block-info-main">
                <h1 className='konc'>Thanks for your attention!</h1>
            </div>
        </div>
        <div className='footer-panel'>
        <a className='btn-foot' href='/sources' disabled></a>
            <img  src={logo}/>
            <a className='btn-foot disabl'  disabled></a>
        </div>
    </div>
    );
}

export default Konc;