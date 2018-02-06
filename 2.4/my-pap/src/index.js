import React from 'react';
import ReactDOM from 'react-dom';
import {Main as App} from './todolist/section/Main';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)



if(module.hot){
    module.hot.accept();
  }