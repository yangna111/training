 import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state={
            arr:[
                {
                    id:0,
                    checked:false
                },
                {
                    id:1,
                    checked:false
                },
                {
                    id:2,
                    checked:false
                },
                {
                    id:3,
                    checked:false
                }
            ]
        }
    }


  render() {
      let {arr}=this.state
      let inps = arr.map((e,i)=>{
          return <input 
                key={i}
                type="checkbox"
                checked={this.checked}
                onChange = {this.change}
                />
             })
    return (
      <div>
        <button>全选</button>
        <button>反选</button>
        <button>全不选</button>
            {inps}           
      </div>
    )
  }
};

export default App;