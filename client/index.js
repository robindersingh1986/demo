/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
//import Nav from './components/Nav.jsx';
import PageOne from './components/PageOne.jsx';
import PageTwo from './components/PageTwo.jsx';

ReactDOM.render(
	<Router>
      <div>
      	<Route path="/" component={Home}/>
      	<Route exact path="/first-page" component={PageOne} />
        <Route path="/second-page" component={PageTwo} />
      </div>
  	</Router>,
  	document.getElementById('root')
  	);