import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Demo/tab/tab'

ReactDOM.render(
              <Tab />, 
              document.getElementById('root'));

if(module.hot){
    module.hot.accept();
  }
