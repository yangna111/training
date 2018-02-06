import React,{Component} from 'react';
//import Header from './Header';
import './css/index.css';

class Main extends Component {
    constructor(){
        super()
        this.state={
            arr:[],
            checked:false,
            num:0,
            val:''
        }
    }
    change =(ev)=>{
        this.setState({
            val:ev.target.value
        })
    }
    keyup=(ev)=>{
        if(ev.keyCode === 13){             
            let {arr,val}=this.state;
            let arr2=arr.concat();
            arr2.push(val)
            this.setState({
                arr:arr2,      
                val:'',
            })
        }
        
    }
    checked=()=>{
        let {arr,num}=this.state
        this.setState({
            checked:true,
            num:num+1
        })
    }
    change1=(id)=>{
        let {arr}=this.state;
        let arr2=arr.concat();
        arr2.forEach((e,i)=>{
            if(e.i==id){
                e.checked=!e.checked
            }
            this.setState({
                arr:arr2 
            })
        })
       
    }
    click =()=>{
        let {arr}=this.state;
        let arr2=arr.concat();
        arr2.forEach((e,i)=>{
            arr2.splice(e,1)
            console.log(e);                      
            this.setState({
                arr:arr2 
            })
        })
    }
    render(){
        let {arr,val,num}=this.state;
        let list = arr.map((e,i)=>{    
            return <li className="completed" key={i}>
                        <div className="view">
                            <input 
                                className="toggle" 
                                type="checkbox" 
                                checked={e.checked}
                                onChange={this.change1.bind(this)}
                                 />
                            <label>{e}</label>
                            <button className="destroy" onClick={this.click}></button>                       
                        </div>
                    </li>
        })
        return (
            <section className="todoapp">
                <div> 
                    <header className="header" >
                        <h1>todos</h1>
                        <input 
                            type ="text"
                            onKeyUp = {this.keyup}
                            onChange ={this.change}
                            className="new-todo" 
                          placeholder="请输入内容"
                            value={val}/>
                    </header>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked="" 
                        />
                        <ul className="todo-list">
                            {/* <li className="completed">
                                <div className="view">
                                    <input 
                                        className="toggle" 
                                        type="checkbox" 
                                        checked="" />
                                    <label>多多对对对</label>
                                    <button className="destroy"></button>
                                </div>
                                <input className="edit" value="多多对对对"> 
                            </li> */}
                           {list}
                           
                        </ul>
                    </section>
                    <footer className="footer">
                        <span className="todo-count">
                            <strong>{num}</strong>
                            <span>条未选中</span>
                        </span>
                    </footer> 
                </div>               
            </section>
        )
    }
}

export {Main};

