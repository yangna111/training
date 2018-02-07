import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import HeadM from './component/head';
import List from './component/list';
import FootM from './component/foot';

class Index extends Component{
    constructor(){
        super()
        this.state={
            arr:[
                {
                    id:0,
                    txt:'第一条数据',
                    checked:false               
                },
                {
                    id:1,
                    txt:'第二条数据',
                    checked:false               
                },
            ]
        }
    }

    //删除数据
    rm=(id)=>{
        let {arr}=this.state;
        let arr2=arr.concat();
       arr2= arr2.filter(e=>{
            return e.id != id
        })
        this.setState({
            arr:arr2
        })
    }
    //点击选中
    changeChecked=(id)=>{
        let {arr}=this.state;
        let arr2 = arr.concat();
        arr2.forEach(e=>{
            if(e.id==id){
                e.checked =!e.checked
            }
            this.setState({
                arr:arr2
            })
        })
    }
    //keyup时添加li
    addData =(data)=>{
        let {arr}=this.state;
        let arr2 = arr.concat();
        arr2.unshift(data);
        this.setState({
            arr:arr2
        })
    }
    //点击全选
    all=(ev)=>{
        let {checked}=ev.target;
        let {arr}=this.state;
        let arr2=arr.concat();
        arr2.forEach(e=>{
            e.checked=checked;
        })
        this.setState({
            arr:arr2
        })
    }

    render(){  
        let {arr}=this.state;
        let all = arr.length?arr.every(e=>e.checked):false  //是否全选
        let len = arr.length;
        let list =arr.map((e,i)=>{ // 循环生成 li
            if(e.checked)len--; //未选中的数据
            return <List {...{ // 给每个li添加自定义属性
                key:i,
                txt:e.txt,
                checked:e.checked,
                id:e.id,
                changeChecked:this.changeChecked,
                rm:this.rm
            }}/>
        })    
        return(
            <section className="todoapp">
            <div>
                <HeadM addData={this.addData}/>
                <section className="main">
                    <input className="toggle-all" 
                    type="checkbox"
                     checked={all}  // 是否全选
                     onChange ={this.all} //调用all函数
                     />
                    <ul className="todo-list">
                      {list}
                    </ul>
                </section>
                 <FootM num={len}/>
            </div>
        </section>
            
        )
    }
}
export {Index} ; 