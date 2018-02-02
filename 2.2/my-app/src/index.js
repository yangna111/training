import React from 'react';
import ReactDOM from 'react-dom';
import App1 from'./App1.js'



ReactDOM.render(
    <App1 />,
    document.getElementById('root'),
    function (){
        console.log('你好');
        
    }
)
if(module.hot){
    module.hot.accept();
}


