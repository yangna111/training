import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
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
              }
            ],
            changeDate:'/all'
            
        }
    }

    changValue=(data)=>{ //head.js 里keyup时改变的数据
        let {arr}=this.state;
        let arr2=arr.concat();
        arr2.unshift(data)
        this.setState({
            arr:arr2
        })
    }
    //点击全选
    allChecked=(ev)=>{
        let {checked}=ev.target;       
        let {arr}=this.state;
        let arr2=arr.concat()
        arr2.forEach((e,i)=>{
          return e.checked=checked
        })
        this.setState({
            arr:arr2
        })
    }
    changeChecked=(id)=>{
        let {arr}=this.state;
        let arr2=arr.concat();
       arr2.forEach((e,i)=>{
            if(e.id==id){
             e.checked=!e.checked
            }          
        }) 
        this.setState({
            arr:arr2
        })          
    }

    rm=(id)=>{
        let {arr}=this.state;
        let arr2=arr.concat();
        arr2=arr2.filter((e,i)=>{
            return e.id!=id
        })
        this.setState({
            arr:arr2
        })
    }
    changeVal=(id,newVal)=>{
        let {arr}=this.state;
        let arr2=arr.concat();
        arr2.forEach((e,i)=>{
            if(e.id===id){
                e.txt=newVal
            }
        })
        this.setState({
            arr:arr2
        })
    }
    changeRoute=(route)=>{
        this.setState({
            changeDate:route
        })
    }
    arrRm=()=>{
        let {arr}=this.state;
        let arr2=arr.concat();
        arr2=arr2.filter((e,i)=>{
            return !e.checked
        })
        this.setState({
            arr:arr2
        })
    }
    render(){
        let {arr,changeDate}=this.state;     
        let all =len?arr.every(e=>e.checked):false;
        let len= arr.length
        let list=arr.filter((e,i)=>{
            if(e.checked)len--;
            switch(changeDate){
                case '/active':
                return !e.checked;
                break;
                case '/completed':
                return e.checked;
                break;
                case '/all':
                return e;
                break;
                default:e;
                break;
            }
        })
        list=list.map((e,i)=>{
          
            return <List {...{
                        key:i,
                        id:e.id,
                        txt:e.txt,
                        checked:e.checked,
                        changeChecked:this.changeChecked,
                        changeVal:this.changeVal,
                        rm:this.rm
                    }}
            
            />
       })    
        return(
            <section className="todoapp">
                <Head changValue={this.changValue}/>
                <section className="main">
                    <input className="toggle-all" 
                        type="checkbox"
                        checked={all}
                        onChange={this.allChecked}
                     />
                    <ul className="todo-list">
                       {list}
                    </ul>
                </section>
                <Foot arrRm={this.arrRm} num={len} changeRoute={this.changeRoute}/>
            </section>
        )
    }      
}
export {Index}