import React from 'react';
import styles from './app.css';
import {Link, IndexLink} from 'react-router';
import NavLink from './nav_link.js';

const App = (props) => (
    <div className={styles.app + ' container'}>
        <h1>Welcome to React!</h1>
        <ul className='nav nav-tabs'>
          <li className='nav-item'><NavLink to='/' index='true' >Home </NavLink></li>
          <li className='nav-item'><NavLink to='/about'>About </NavLink></li>
          <li className='nav-item'><NavLink to='/contact'>Contact </NavLink></li>
        </ul>
        {props.children}
    </div>
);

export default App;
