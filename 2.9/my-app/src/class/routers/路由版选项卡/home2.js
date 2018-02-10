import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    link
} from 'react-router-dom'


class Tab1 extends Component{
    render(){
        return(
            <div>
                <h2>第一个页面</h2>
            </div>
        )
    }
}
class Tab2 extends Component{
    render(){
        return(
            <div>
                <h2>第二个页面</h2>
            </div>
        )
    }
}
class Tab3 extends Component{
    render(){
        return(
            <div>
                <h2>第三个页面</h2>
            </div>
        )
    }
}
export default class Home extends Component{
    constructor(){
        super();
        this.state={
            num:0,
            arr:['Tab1','Tab2','Tab3']
        }
    }
    changeNum=(i)=>{
        this.setState({
            num:i
        })
    }
    render(){
        let {num,arr}=this.state;
        let btns=arr.map((e,i)=>{
            return <button  
                    key={i}
                    onClick={this.changeNum.bind(this,i)}
                    className={i==num?'active':''}
                    >
                    <link to={{
                       pathname:`/${e}`
                    }}
                        >{e}</link>
                    </button>
        })
        return(
            <div id="box">
                {btns}
                <Router path="/"     component={Tab1}/>
                <Router path="/Tab1" component={Tab1}/>
                <Router path="/Tab2" component={Tab2}/>
                <Router path="/Tab3" component={Tab3}/>
            </div>
        )
    }
}