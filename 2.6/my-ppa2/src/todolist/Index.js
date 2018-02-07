import React,{Component} from 'react';

import ReactDOM from 'react-dom';
import Head from './component/head';
import List from './component/list';
import Foot from './component/foot';
import './css/index.css';

class Index extends Component{
    constructor(){
        super();
        this.state={
            arr:[
                {
                 id:0,
                 txt:'这是第一条数据',
                 checked:false
               },
               {
                id:1,
                txt:'这是第二条数据',
                checked:false
              },
            ]
        }
    }

    changValue=(data)=>{
        let {arr}=this.state;
        let arr2=arr.concat();
        arr2.unshift(data)
        this.setState({
            arr:arr2
        })
    }

    render(){
       
        return(
            <section className="todoapp">
                <Head/>
                <section className="main">
                    <input className="toggle-all" 
                    type="checkbox"
                     checked=""
                     />
                    <ul className="todo-list">
                       <List/>
                    </ul>
                </section>
                <Foot/>
            </section>
        )
    }      
}
export {Index}