import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {src,txt}=this.props
        return (            
           <li><img src={require('./' + src)} /><p>{txt}</p></li>
        )
    }
}
 
export default List;