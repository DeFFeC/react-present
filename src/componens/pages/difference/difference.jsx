import React from 'react';
import './style.css'
import logo from './logo.svg'
import LeftPanel from '../../left-panel';
import dif from './dif.PNG'
function Difference() {
    return (
    <div className="Introduction">
        <div className='block-info'>
            <div className="block-info-main">
                <h1>Difference</h1>
                <img className=' img-1 str-img' src={dif}/>
            </div>
        </div>
        <div className='footer-panel'>
            <a className='btn-foot' href='/structure' disabled></a>
            <img src={logo}/>
            <a className='btn-foot' href='/sources' disabled></a>
        </div>
    </div>
    );
}

export default Difference;