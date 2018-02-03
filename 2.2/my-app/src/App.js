import React,{Component} from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';


class App extends Component{
  constructor(){
    super()
    this.state={
        arr:[],
        val:''
    }
  }
  change = (ev)=>{
    this.setState({
      val:ev.target.value
    })
  }

  keyup = (ev)=>{
    if(ev.keyCode === 13){
     let {arr,val}=this.state;
      let arr2=arr.concat();
      arr2.unshift(val);
      this.setState({
        arr:arr2,
        val:''
      })
    }
  }
  
  render(){
    let {arr,val}=this.state;
    let list =arr.map((e,i)=><li key={i}>{e}</li>)
     return(
       <div>
          <input type = "text" 
          value = {val}
          onKeyUp={this.keyup}
          onChange = {this.change}
           />
          <ul>
            {list}
          </ul>
       </div>
     )
  }
    
}

export default  App;


