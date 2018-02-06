import React,{Component} from 'react';


class Header extends Component{
    constructor(){
        super()
        this.state={
            val:''
        }
    }
    change =(ev)=>{
        this.setState({
            val:ev.target.value
        })
    }
    keyup=(ev)=>{
        if(ev.keyCode ==13){
            
        }
    }
    render(){
        return(
            <header className="header" >
                <h1>todos</h1>
                <input 
                    type ="text"
                    onKeyUp = {this.keyup}
                    onChange ={this.change}
                    className="new-todo" 
                    placeholder="请输入内容"
                     value="" />
            </header>
        )
    }
}

export default Header;