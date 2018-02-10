import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './class/routers/路由版选项卡/2_route';

document.onmousedown = function(ev){
  return false;
}
ReactDOM.render(
  <Router>
    <App />
  </Router>
  , 
  document.getElementById('root')
);

if(module.hot){
    module.hot.accept();
  }
