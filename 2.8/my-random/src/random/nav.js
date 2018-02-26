import React, { Component } from 'react';

class Nav extends Component {
    constructor() {
        super();
        this.state = { 
            cTxt:['从小到大','从大到小']
         }
    }

    click=()=>{
        let {id,checkNav,num}=this.props;
            if(id==0){
                num=num?0:1;
            }
            checkNav(id,num)
    }

    rende r() { 
        let {txt,active,id,num}=this.props
        let {cTxt}=this.state
        if(id==0){
            txt=cTxt[num];
        }
        return ( 
            <span className={id===active?'active':''}
            onClick={this.click}
            >{txt}</span>
         )
    }
}
 
 
export default Nav ;
