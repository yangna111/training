import React,{Component} from 'react';
// import ReactDOM from 'react-dom';

class Head extends Component {
    constructor(){
        super();
        this.state={
            val:''
        }
    }
    keyup=(ev)=>{
        let {val}=this.state;//按下keyup时把当前新创建的是数据传送给父级让父级通过changeValue来改变数据
        let {changValue}=this.props;
        if(ev.keyCode===13){
            if(!val.trim())return;
            let obj={
                id:+new Date,
                txt:val,
                checked:false
            }
         changValue(obj);
         this.setState({
             val:''
         })
                       
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