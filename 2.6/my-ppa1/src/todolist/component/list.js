import React,{Component} from 'react';
   
class List extends Component{
    constructor(){
        super();
        this.state={
            dbClick:false,
            ctxt:''
        }
    }
    change=()=>{
        let {changeChecked,id}=this.props
        changeChecked(id)
    }
    click=()=>{
        let {rm,id}=this.props;
        rm(id);       
    }
    changeFocus=()=>{
        let {changeFocus,id}=this.props
        changeFocus(id,this.refs.nn.value)
    }
    dbClick=()=>{
        this.setState({
            dbClick:true,
            ctxt:this.props.txt
        },()=>{
            this.refs.nn.selectionStart=this.refs.nn.value.length;
            this.refs.nn.focus() 
        }) 
    }
    blur=()=>{
        let {txt,changeFocus,id}=this.props;
        if(!txt){
            changeFocus(id,this.state.ctxt)
        }
        this.setState({
            dbClick:false
        })
    }
    render(){
        let {txt,checked}=this.props;
        let {dbClick}=this.state
        let  classN=checked?'completed':'';
            if(dbClick){
                classN+="editing"
            }
        return(
                <li className={classN}
                    onDoubleClick={this.dbClick}
                >
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
                     <input className="edit"
                        ref="nn"
                        value={txt}
                        onBlur={this.blur}
                        onChange={this.changeFocus}
                      />
                </li>
        )
    }
}
export default List;