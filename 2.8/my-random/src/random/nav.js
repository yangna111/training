import React, { Component } from 'react';

class Nav extends Component {
    constructor() {
        super();
        this.state = {  }
    }

    click=()=>{
        let {id,checkNav,num}=this.props;
            // if(id==0){
            //     num=num?0:1;
            // }
            checkNav(id,num)
    }

    render() { 
        let {txt,active,id}=this.props
        return ( 
            <span className={id===active?'active':''}
            onClick={this.click}
            >{txt}</span>
         )
    }
}
 
 
export default Nav ;
