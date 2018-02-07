import React,{Component}from 'react';
class Head extends Component{
    constructor(){
        super()
        this.state={
            val:''
        }
    }
    change=(ev)=>{
        this.setState({
            val:ev.target.value
        })
    }
    keyup=(ev)=>{
        let {val}=this.state;
        let {valueChange,data}=this.props;
        if(ev.keyCode===13){
            if(!val.trim())return;
            let obj={
                txt:val,
                id:+new Date,
                checked:false
            }
            valueChange(obj)           
            this.setState({
                val:''
            })
        }
      
    }

    render(){
        let {val}=this.state
        return(
            <header className="header" >
                <h1>todos</h1>
                <input className="new-todo"
                    placeholder="请输入内容"
                    value={val}
                    onKeyUp={this.keyup}
                    onChange={this.change}
                   
                />
            </header>
        )
    }
}

export default Head;