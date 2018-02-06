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

    //点击选中，在点击取消
   change =(id)=>{
    let {arr}=this.state;
    let arr2 =arr.concat();
    arr2.forEach(e=>{
       if(e.id==id){
           e.checked=!e.checked;
       }  
       this.setState({
           arr:arr2
       })     
    })
    
   }

   all=()=>{
    let {arr}=this.state;
    let arr2 =arr.concat(); 
    arr2.forEach(e=>{
        e.checked = true;
    })
    this.setState ({
        arr:arr2
    })
   }

   allNo=()=>{
    let {arr}=this.state;
    let arr2 =arr.concat();
    arr2.forEach(e=>{
        e.checked = false;
    }) 
    this.setState({
        arr:arr2
    })
   }
   noChecked=()=>{
    let {arr}=this.state;
    let arr2 =arr.concat();
    arr2.forEach(e=>{
        e.checked = !e.checked
    })
    this.setState({
        arr:arr2
    })
   }
  render() {
      let {arr}=this.state
      let inps = arr.map((e,i)=>{
          return <input 
                key={i}
                type="checkbox"
                checked={e.checked}
                onChange = {this.change.bind(this,e.id)}
                />
             })
    return (
      <div>
        <button
            onClick = {this.all}
        >全选</button>
        <button
            onClick = {this.noChecked}
        >反选</button>
        <button
            onClick = {this.allNo}
        >全不选</button>
            {inps}           
      </div>
    )
  }
};

export default App;