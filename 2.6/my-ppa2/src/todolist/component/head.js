import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Head extends Component {
    constructor(){
        super();
        this.state={
            val:''
        }
    }
    keyup=(ev)=>{
        let {val}=this.state;
        let {changValue,data}=this.props;
        if(ev.keyCode===13){
            if(!val.trim())return;
            console.log(ev);
                       
        }
        
    }
    change=(ev)=>{
        this.setState({
            val:ev.target.value         
        })
    }

    render(){
        let {val}=this.state
        return(
            <header className="header" >
                <h1>todos</h1>
                <input className="new-todo" 
                placeholder="请输入内容"
                onChange={this.change}
                onKeyUp={this.keyup}
                 value={val}
                 />
            </header>
        )
    }
}
export default Head;