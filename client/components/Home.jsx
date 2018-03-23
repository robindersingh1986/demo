/*
    ./client/components/Home.jsx
*/
import React, {Component} from 'react';
import Nav from './Nav.jsx';
import styles from '../less/index.less';

export default class Home extends Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
     	<Nav />
        <h1>Hello World</h1>      
      </div>);
  }
}