import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Head from './component/head';
import Foot from './component/foot';
import List from './component/list';

class Index extends Component{
    constructor(){
        super();
        this.state={
            arr:[
                {
                    id:0,
                    checked:false,
                    txt:'这是第一条数据'
                },
                {
                    id:1,
                    checked:false,
                    txt:'这是第一条数据'
                }
            ]
        }
    }

    //点击全选
    all=(ev)=>{
        let {checked}=ev.target;
        let {arr}=this.state;
        let arr2=arr.concat();
        arr2.forEach(e=>{
            e.checked=checked
        })
        this.setState({
            arr:arr2
        })
    }
    rm=(id)=>{
        let {arr}=this.state;
        let arr2 = arr.concat();
        arr2=arr2.filter(e=>{
            return e.id !=id;
        })
        this.setState({
            arr:arr2
        })
    }
    changeChecked=(id)=>{
        let {arr}=this.state;
        let arr2=arr.concat();
       arr2.forEach((e,i)=>{
            if(e.id===id){
                e.checked =!e.checked
            }
        })
        this.setState({
            arr:arr2
        })
    }
    valueChange =(data)=>{
        let {arr}=this.state;
        let arr2 =arr.concat();
        arr2.unshift(data);     
        this.setState({
            arr:arr2
        })
        
    }
    render(){
        let {arr}=this.state;
        let len =arr.length;
        let all = len?arr.every(e=>e.checked):false;
        let list = arr.map((e,i)=>{
            if(e.checked)len--;
            return<List {...{
                key:i,
                txt:e.txt,
                id:e.id,
                checked:e.checked,
                changeChecked:this.changeChecked,
                rm:this.rm
            }}/>

        })

        return(
            <section className="todoapp">
                <Head valueChange={this.valueChange}/>
                <div>                    
                    <section className="main">
                        <input className="toggle-all"
                         type="checkbox"
                         checked={all}
                         onChange={this.all}
                         />
                        <ul className="todo-list">
                            {list}
                        </ul>
                    </section>
                     <Foot num={len}/>
                </div>
            </section>
        )
    }
}

export{Index};
