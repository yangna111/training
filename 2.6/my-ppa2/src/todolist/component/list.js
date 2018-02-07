import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
    render(){
        return(
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" checked=""/>
                    <label>多多对对对</label>
                    <button className="destroy"></button>
                </div>
            </li>
        )
    }
}
export default List;