import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Home from './components/home.js';
import ContactInfo from './components/contact_info.js';


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/about' component={About}/>

    <Route path='/contact' component={Contact}>
      <Route path='/contact-info' component={ContactInfo}/>
    </Route>

  </Route>
)
