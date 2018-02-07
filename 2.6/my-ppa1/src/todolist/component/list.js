import React,{Component} from 'react';

class List extends Component{
    change=()=>{
        let {changeChecked,id}=this.props
        changeChecked(id)
    }
    click=()=>{
        let {rm,id}=this.props;
        rm(id);
        
    }
    render(){
        let {txt,checked}=this.props;
        let  classN=checked?'completed':'';
        return(
                <li className={classN}>
                    <div className="view">
                        <input className="toggle"
                         type="checkbox" 
                         checked={checked}
                         onChange={this.change}
                         />
                        <label>{txt}</label>
                        <button className="destroy"
                            onClick={this.click}
                        ></button>
                    </div>
                    {/* <input className="edit" value="多多对对对"/>  */}
                </li>
        )
    }
}
export default List;