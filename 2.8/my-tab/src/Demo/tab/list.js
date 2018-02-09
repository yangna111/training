import React, { Component } from 'react';

class List extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    
    click=()=>{
        let {changeCheck,position,id}=this.props
        changeCheck(position,id)
    }

    render() { 
        let {txt,check}=this.props
        let cName=check?'item-li active':'item-li';
        return ( 
            <li className={cName}
            onClick={this.click}
            >
                <a href="javascript:;">
                    <span className="point"></span><span className="text">{txt}</span>
                </a>
            </li>
         )
    }
}
 
export default List;




