import React from 'react';
import { Link } from 'react-router-dom';
import './left-panel.css'

function LeftPanel() {
    return (
        <div className='left-panel'>
            <div className="block-left-panel">
                <h1 className='menu-name'>Menu</h1>
                <div className="link-path">
                     <a href='/introduction' className='link-item'>Introduction</a>
                     <a href='/application' className='link-item'>Application</a>
                     <a href='/opportunities' className='link-item'>Opportunities</a>
                     <a href='/structure' className='link-item'>Structure</a>
                     <a href='/difference' className='link-item'>Difference</a>
                     <a href='/sources' className='link-item'>Sources</a>
                </div>
            </div>
        </div>
    );
}

export default LeftPanel;