import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

ReactDOM.render(
  <div>
    你好  世界！！！！
  </div>,
  document.getElementById('root'),
  function(){
    console.log('成功');
    
  }
)
if(module.hot){
  module.hot.accept();
}
