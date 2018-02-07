import React, {Component} from 'react';

class list extends Component{
    render(){
        return(
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" checked=""/>
                    <label>多多对对对</label>
                    <button className="destroy"></button>
                </div>
                    <input className="edit" value="多多对对对"/> 
            </li>
        )
    }
}
export default list;