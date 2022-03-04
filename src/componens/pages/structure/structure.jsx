import React from 'react';
import './style.css'
import logo from './logo.svg'
import LeftPanel from '../../left-panel';
import struct from './struct.PNG'
function Structure() {
    return (
    <div className="Introduction">
        <div className='block-info'>
            <div className="block-info-main">
                <h1>Structure</h1>
                <img className='img-1 str-img' src={struct}/>
            </div>
        </div>
        <div className='footer-panel'>
            <a className='btn-foot' href='/opportunities' disabled></a>
            <img src={logo}/>
            <a className='btn-foot' href='/difference' disabled></a>
        </div>
    </div>
    );
}

export default Structure;