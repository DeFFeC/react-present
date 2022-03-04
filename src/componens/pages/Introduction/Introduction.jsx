import React from 'react';
import logo from './logo.svg'
import './Introduction.css'
import imege from './develop-and-fix-reactjs-web-application.jpg'
import LeftPanel from '../../left-panel';
function Introduction() {
    return (
    <div className="Introduction">
        <div className='block-info'>
            <div className="block-info-main">
                <h1>Introduction</h1>
                <span>React (sometimes React.js or ReactJS) is an open source JavaScript library for developing user interfaces.

Instagram Facebook, React is developed and supported by a community of individual developers and corporations.

React can be used to develop single-page and mobile applications. Its goal is to provide high speed, simplicity and scalability. As a library for developing user interfaces, React is often used with other libraries such as MobX, Redux and GraphQL <br/> <br/>React was created by Jordan Valke, a software developer from Facebook. He was influenced by XHP, a component HTML framework for PHP. Instagram Facebook news feed first used React in 2011 and later in the Instagram feed in 2012. The React source code was opened in May 2013 at the JSConf US conference.
React Native was announced at the Facebook conference "React.js Conf" in February 2015, and the source code was opened in March 2015. It allows you to develop native Android, iOS and UWP apps using React.
On April 18, 2017, Facebook announced React Fiber, a rewritten and optimized version of React. React Fiber will be the basis for the development of all future features and improvements</span><br/><br/>
            </div>
        </div>
        <div className='footer-panel'>
            <a className='btn-foot disabl' disabled></a>
            <img src={logo}/>
            <a className='btn-foot' href='/application' disabled></a>
        </div>
    </div>
    );
}

export default Introduction;