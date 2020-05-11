// // Greeter.js
// var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   console.log('aaa')
//   return greet;
// };

//Greeter,js
import React, {Component} from 'react'
import config from './config';
import styles from '@@/Greeter';//导入

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter