import React, { Component } from 'react';
import './tab.css'
import List from './list'

class Tab extends Component {
    constructor() {
        super();
        this.state = { 
                left:[
                    {
                        txt:'小程序',
                        check:false
                    }
                    ,{
                        txt:'jQuery',
                        check:false
                    },{
                        txt:'Ajax',
                        check:false
                    },{
                        txt:'js基础-2',
                        check:false
                    },{
                        txt:'移动端实践',
                        check:false
                    }],
                right:[{
                    txt:'node',
                    check:false
                    },{
                        txt:'ES6',
                        check:false
                    },{
                        txt:'面向对象-中',
                        check:false
                    },{
                        txt:'React',
                        check:false
                    },{
                        txt:'js基础-1',
                        check:false
                    }
                ]
            }
         }

         changeCheck=(position,id)=>{
            let arr = this.state[position].concat();
            arr.forEach((ele,i) => {
              if(i==id){
                  ele.check=!ele.check;
              }
            })
            this.setState({
                [position]:arr
            })           
         }
       
        clickR = ()=>{
            let {right,left}=this.state;
            let l=left.concat();
            let r=right.concat();
            for(let i=0;i<r.length;i++){
                if(r[i].check){
                    let d=r.splice(i,1)[0];
                    d.check=false;
                    l.push(d);
                    i--
                }
            }
            this.setState({
               left:l,
               right:r
            })
        }  
        clickAll=()=>{
            this.clickR()
            setTimeout(() => {
                this.clickL()
            });
        }
        clickL = ()=>{
            let {right,left}=this.state;
            let l=left.concat();
            let r=right.concat();
            for(let i=0;i<l.length;i++){
                if(l[i].check){
                    let d=l.splice(i,1)[0];
                    d.check=false;
                    r.push(d);
                    i--
                }
            }
            this.setState({
               left:l,
               right:r
            })
        }      
    render() { 
        let {left,right}=this.state;
        let listR=left.map((e,i)=>{
            return <List {...{
                            key:i,
                            txt:e.txt,
                            check:e.check,
                            id:i,
                            position:'left',
                            changeCheck:this.changeCheck
                         } }/>            
        })
        let listL=right.map((e,i)=>{
            return <List {...{
                            key:i,
                            txt:e.txt,
                            check:e.check,
                            id:i,
                            position:'right',
                            changeCheck:this.changeCheck
                        }}/>
        })
        return (
            <div id="wrap">
			    <div className="box clearFix">
                    <ul className="left list">
                        {listR}
                    </ul>
                    <ul className="change">
                        <li className="move-to-l"
                            onClick={this.clickAll}
                        ><a href="#">两边一起</a></li>
                        <li className="move-to-l"
                           onClick={this.clickR}
                        ><a href="#">向左</a></li>
                        <li className="move-to-r"
                            onClick={this.clickL}
                        ><a href="#">向右</a></li>
                    </ul>
                    <ul className="right list">
                        {listL}
                    </ul>
			    </div>
		    </div>
          )
    }
}
 
export default Tab;
