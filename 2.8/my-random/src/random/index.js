import React, { Component } from 'react';
import './css/index.css'
import Nav from './nav';
import List from './list';

class Index extends Component {
    constructor() {
        super();
        this.state = {
                    data:[
                        {
                            url:"img/Rdm-pic1.png",
                            text:"1-粉红"
                        },
                        {
                            url:"img/Rdm-pic2.png",
                            text:"2-粉黄"
                        },
                        {
                            url:"img/Rdm-pic3.png",
                            text:"3-黄绿"
                        },
                        {
                            url:"img/Rdm-pic4.png",
                            text:"4-嫩绿"
                        },
                        {
                            url:"img/Rdm-pic5.png",
                            text:"5-湖蓝"
                        },
                        {
                            url:"img/Rdm-pic6.png",
                            text:"6-蓝紫"
                        },
                        {
                            url:"img/Rdm-pic7.png",
                            text:"7-粉紫"
                        },
                        {
                            url:"img/Rdm-pic8.png",
                            text:"8-紫红"
                        }
                    ],
                    nav:['从小到大','打乱顺序','打乱内容'],
                    active:0,
                    num:0
                }
          
            }

        checkNav=(active,num)=>{
            this.setState({
                active,
                num
            })
        }    
    render() { 
        let {data,nav,active,num}=this.state;
        let arr=JSON.parse(JSON.stringify(data))
        let list =arr.map((e,i)=>{
            return <List {...{
                            key:i,
                            src:e.url,
                            txt:e.text,
                            id:i
                        }}/>
        })
        
        let listNav = nav.map((e,i)=>{
            return <Nav {...{
                            key:i,
                            txt:e,
                            id:i,
                            active,
                            num,
                            checkNav:this.checkNav

                        }}/>
                        console.log(e);
                        
        })
        

        return ( 
            <section id="wrap">
                <header id="head">
                <img src={require('./img/logo.png')}/>
                <div id="btn" className="clearfix">
                    {listNav}
                </div>
            </header>
                <article id="cons">
                    <ul className="list clearfix" id="ul">
                       {list}
                    </ul>
                </article>
		    </section>
         )
    }
}
 
export default Index;




